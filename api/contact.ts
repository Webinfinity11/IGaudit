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
  s.replace(/[&<>"']/g, (c) => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": '#39' }[c]};`)

// სათაურებში ახალი ხაზი არ უნდა მოხვდეს (header injection)
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim()

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
  if (!f.name || !f.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || body.consent !== 'yes') {
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
      html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${filled
        .map(
          ([k, v]) =>
            `<tr><td style="color:#666;vertical-align:top">${k}</td><td>${escape(v).replace(/\n/g, '<br>')}</td></tr>`,
        )
        .join('')}</table>`,
    })
  } catch (e) {
    console.error('contact: send failed', e)
    return json({ success: false, error: 'send' }, 502)
  }

  return json({ success: true })
}
