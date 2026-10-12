// საკონტაქტო ფორმა → ელფოსტა ჰოსტინგის SMTP-ით (Vercel Function).
// env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO (ცარიელი → SMTP_USER)
import nodemailer from 'nodemailer'

const LIMITS = { name: 100, company: 150, phone: 30, email: 150, service: 150, message: 5000 }
type Field = keyof typeof LIMITS

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": '#39' }[c]};`,
  )

// სათაურებში ახალი ხაზი არ უნდა მოხვდეს (header injection)
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim()

// ბრენდის ფერები (src/styles/tokens.css): brand-800, accent-900, tint, ink
const C = { plum: '#540061', forest: '#014501', tint: '#eee6ef', ink: '#1f1a20', muted: '#6b6470' }
const SITE = 'https://igaudit.ge'
// ლოგო წერილს თან ერთვის (cid) - გარე სურათს Webmail ყოველ ჯერზე „Allow“-ს სთხოვს
const LOGO_CID = 'logo@igaudit.ge'

/** ელფოსტის HTML: ცხრილებით და inline სტილებით - ფოსტის კლიენტები სხვას ცუდად აჩვენებენ */
function emailHtml(f: Record<Field, string>, rows: [string, string][]) {
  const font = "font-family:'Segoe UI',Arial,'Noto Sans Georgian',sans-serif"
  const cells = rows
    .map(
      ([k, v], i) => `
      <tr>
        <td style="padding:14px 0;${i ? `border-top:1px solid ${C.tint};` : ''}">
          <div style="${font};font-size:12px;color:${C.muted};text-transform:uppercase;letter-spacing:.04em">${k}</div>
          <div style="${font};font-size:16px;line-height:1.5;color:${C.ink};margin-top:4px">${escape(v).replace(/\n/g, '<br>')}</div>
        </td>
      </tr>`,
    )
    .join('')
  const reply = `mailto:${encodeURIComponent(f.email)}?subject=${encodeURIComponent('Re: IG GROUP')}`
  return `<!doctype html><html><body style="margin:0;padding:0;background:${C.tint}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.tint}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden">
      <tr><td style="background:${C.plum};padding:28px 32px">
        <a href="${SITE}"><img src="cid:${LOGO_CID}" width="140" alt="IG GROUP" style="display:block;border:0"></a>
      </td></tr>
      <tr><td style="padding:32px 32px 8px">
        <div style="${font};font-size:13px;color:${C.forest};font-weight:600">ახალი მოთხოვნა საიტიდან</div>
        <div style="${font};font-size:22px;line-height:1.3;color:${C.ink};font-weight:700;margin-top:6px">${escape(f.name)}${f.service ? ` · ${escape(f.service)}` : ''}</div>
      </td></tr>
      <tr><td style="padding:8px 32px 8px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${cells}</table>
      </td></tr>
      <tr><td style="padding:16px 32px 32px">
        <a href="${reply}" style="${font};display:inline-block;background:${C.plum};color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:12px 24px;border-radius:999px">პასუხის გაცემა</a>
        <a href="tel:${escape(f.phone.replace(/[^\d+]/g, ''))}" style="${font};display:inline-block;color:${C.plum};text-decoration:none;font-size:15px;font-weight:600;padding:12px 16px">დარეკვა</a>
      </td></tr>
      <tr><td style="background:${C.tint};padding:16px 32px;${font};font-size:12px;color:${C.muted}">
        გაიგზავნა igaudit.ge-ს საკონტაქტო ფორმიდან
      </td></tr>
    </table>
  </td></tr>
</table></body></html>`
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ success: false, error: 'bad_request' }, 400)
  }

  // honeypot - ბოტი; წარმატებას ვაჩვენებთ, არაფერს ვაგზავნით
  if (typeof body.website === 'string' && body.website) return json({ success: true })

  const f = {} as Record<Field, string>
  for (const key of Object.keys(LIMITS) as Field[]) {
    const v = typeof body[key] === 'string' ? (body[key] as string).trim() : ''
    f[key] = v.slice(0, LIMITS[key])
  }
  if (
    !f.name ||
    !f.phone ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ||
    body.consent !== 'yes'
  ) {
    return json({ success: false, error: 'invalid' }, 400)
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return json({ success: false, error: 'config' }, 500)

  const rows: [string, string][] = [
    ['სახელი, გვარი', f.name],
    ['კომპანია', f.company],
    ['ტელეფონი', f.phone],
    ['ელფოსტა', f.email],
    ['სერვისი', f.service],
    ['შეტყობინება', f.message],
  ]
  const filled = rows.filter(([, v]) => v)

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transport.sendMail({
      from: { name: 'igaudit.ge', address: SMTP_USER },
      to: MAIL_TO || SMTP_USER,
      replyTo: { name: oneLine(f.name), address: f.email },
      subject: oneLine(`ახალი მოთხოვნა საიტიდან: ${f.name}${f.service ? ` - ${f.service}` : ''}`),
      text: filled.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: emailHtml(f, filled),
      attachments: [
        { filename: 'logo.png', path: `${SITE}/images/email/logo-white.png`, cid: LOGO_CID },
      ],
    })
  } catch (e) {
    console.error('contact: send failed', e)
    return json({ success: false, error: 'send' }, 502)
  }

  return json({ success: true })
}
