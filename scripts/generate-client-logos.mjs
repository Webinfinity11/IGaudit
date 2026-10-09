// კლიენტების ლოგოები → public/images/clients/*.webp, ერთნაირი ტილო (480×240, გამჭვირვალე)
// გაშვება: node scripts/generate-client-logos.mjs <წყაროს საქაღალდე>
// საქაღალდეში არარსებული წყარო გამოტოვდება - უკვე დამუშავებული ფაილი ხელუხლებელი რჩება.
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

const src = resolve(process.argv[2] ?? 'C:/Users/levka/Downloads/igaudit')
const out = resolve('public/images/clients')
mkdirSync(out, { recursive: true })

const W = 480
const H = 240
const BOX = { width: 440, height: 200 } // ლოგოს მაქს. ზომა ტილოზე
const AREA = 400 * 135 // ვიზუალური წონის გათანაბრება: ფართობით, არა სიგანით

/** ფონის მოჭრა და ერთნაირ ტილოზე ცენტრში დასმა */
async function place(input, slug, { threshold = 30 } = {}) {
  const trimmed = await sharp(input).trim({ threshold }).png().toBuffer()
  const { width: w = 1, height: h = 1 } = await sharp(trimmed).metadata()
  const k = Math.min(Math.sqrt(AREA / (w * h)), BOX.width / w, BOX.height / h)
  const logo = await sharp(trimmed)
    .resize(Math.round(w * k), Math.round(h * k))
    .png()
    .toBuffer()
  await sharp({ create: { width: W, height: H, channels: 4, background: '#0000' } })
    .composite([{ input: logo, gravity: 'centre' }])
    .webp({ quality: 90 })
    .toFile(join(out, `${slug}.webp`))
  console.log('✓', slug)
}

/** პიქსელების გადაკეთება: fn(r, g, b, a, x, y) → [r, g, b, a] */
async function mapPixels(input, fn) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const p = i / 4
    const px = fn(
      data[i],
      data[i + 1],
      data[i + 2],
      data[i + 3],
      p % info.width,
      Math.floor(p / info.width),
    )
    data.set(px, i)
  }
  return sharp(data, { raw: info }).png().toBuffer()
}

/** თეთრი/ღია ფონის გამჭვირვალედ ქცევა (ლოგო მუქია) */
const whiteToAlpha = (input) =>
  mapPixels(input, (r, g, b, a) => {
    const min = Math.min(r, g, b)
    if (min > 235) return [r, g, b, 0]
    if (min > 200) return [r, g, b, Math.round((a * (235 - min)) / 35)]
    return [r, g, b, a]
  })

/** ღია ტექსტი ფერად ფონზე → ფერადი ტექსტი გამჭვირვალეზე */
const lightTextToColor = (input, [cr, cg, cb]) =>
  mapPixels(input, (r, g, b) => {
    const lum = 0.299 * r + 0.587 * g + 0.114 * b
    // ფონი ≈ 160, ტექსტი ≈ 235
    const a = Math.max(0, Math.min(1, (lum - 185) / 35))
    return [cr, cg, cb, Math.round(a * 255)]
  })

/** ვერტიკალური ლოგო (ნიშანი ზემოთ, წარწერა ქვემოთ) → ჰორიზონტალური: ნიშანი წარწერის მარცხნივ */
async function stackToRow(input, [iconTop, iconH], [textTop, textH], iconScale = 1.05) {
  const { width: w = 1 } = await sharp(input).metadata()
  const part = async (top, height) => {
    const cut = await sharp(input).extract({ left: 0, top, width: w, height }).png().toBuffer()
    return sharp(cut).trim({ threshold: 30 }).png().toBuffer({ resolveWithObject: true })
  }
  const icon = await part(iconTop, iconH)
  const text = await part(textTop, textH)
  const iH = Math.round(text.info.height * iconScale)
  const i = await sharp(icon.data)
    .resize({ height: iH })
    .png()
    .toBuffer({ resolveWithObject: true })
  const gap = Math.round(text.info.height * 0.25)
  const width = i.info.width + gap + text.info.width
  const height = Math.max(iH, text.info.height)
  return sharp({ create: { width, height, channels: 4, background: '#0000' } })
    .composite([
      { input: i.data, left: 0, top: Math.round((height - iH) / 2) },
      {
        input: text.data,
        left: i.info.width + gap,
        top: Math.round((height - text.info.height) / 2),
      },
    ])
    .png()
    .toBuffer()
}

const jobs = [
  { slug: 'georgian-airways', file: 'logo-new.png', make: whiteToAlpha },
  // Shumi: ვერტიკალური ლოგო განიერ ჩარჩოში პატარად ჩანს
  {
    slug: 'shumi',
    file: 'Shumi_Logo_Dark_h-10mm.png',
    make: async (p) => stackToRow(await whiteToAlpha(p), [100, 160], [290, 200]),
  },
  { slug: 'cott-georgia', file: 'COTT Electronics Georgia Logo.png', make: whiteToAlpha },
  { slug: 'gogutsa', file: 'PHOTO-2026-10-08-17-28-03.jpg', make: whiteToAlpha },
  // Yamato: წითელი რგოლის შიგნით მხოლოდ ნიშანი + წარწერა
  {
    slug: 'yamato',
    file: '1000122019.jpg',
    make: async (p) =>
      whiteToAlpha(
        await sharp(p).extract({ left: 100, top: 640, width: 1420, height: 300 }).toBuffer(),
      ),
  },
  // Nutera: კრემისფერი წარწერა ნარინჯისფერ ფონზე → ნარინჯისფერი წარწერა
  {
    slug: 'nutera',
    file: '514201881_122111243204920131_7019824531569913697_n.jpg',
    make: (p) => lightTextToColor(p, [214, 140, 40]),
  },
  // SVG: თეთრი ნიშანი → მუქი
  {
    slug: 'logo-mark',
    file: 'logo_logo.svg',
    make: (p) =>
      sharp(Buffer.from(readFileSync(p, 'utf8').replaceAll('#fff', '#2a2a2a')), { density: 600 })
        .png()
        .toBuffer(),
  },
  // რადიო სივრცე 98.5: ნაცრისფერი ფონი და დეკორი → გამჭვირვალე, თეთრი წარწერები → მუქი ლურჯი
  {
    slug: 'radio-sivrtse',
    file: '01.png',
    make: async (p) => {
      const core = await sharp(p)
        .extract({ left: 20, top: 165, width: 580, height: 280 })
        .toBuffer()
      return mapPixels(core, (r, g, b, a, x, y) => {
        const neutral = Math.max(r, g, b) - Math.min(r, g, b) < 14
        if (!neutral) return [r, g, b, a]
        // ნეიტრალური: ფონი ≈ 151, თეთრი ≈ 255. „რადიო“/„სივრცე“ ზედა/ქვედა ზოლშია,
        // შუაში თეთრი წრეებია ციფრების უკან - ისინი ქრება
        const k = Math.max(0, Math.min(1, (r - 160) / 80))
        const textRow = y < 65 || y > 215
        return textRow ? [27, 74, 107, Math.round(k * 255)] : [r, g, b, 0]
      })
    },
  },
  // Green Energy: ვერტიკალური → ჰორიზონტალური
  {
    slug: 'green-energy',
    file: 'log PNG.png',
    make: async (p) => stackToRow(await whiteToAlpha(p), [0, 330], [340, 279], 1.1),
  },
  // AZ Logistika: რუკა და წარწერა ღია ნაცრისფრითაა შევსებული - ვაქრობთ მხოლოდ სუფთა თეთრს
  {
    slug: 'az-logistika',
    file: 'logo low Quality.jpg',
    make: (p) =>
      mapPixels(p, (r, g, b, a) => (Math.min(r, g, b) > 248 ? [r, g, b, 0] : [r, g, b, a])),
  },
  { slug: 'spnews', file: 'spnnewlogo.png', make: whiteToAlpha },
  { slug: 'trialeti', file: 'თრიალეთის ლოგო (სუფთა) .jpg', make: whiteToAlpha },
  // Platinum Group: გვერდითი ხაზები ტილოს მთელ სიგანეზე გადიოდა - ვშლით
  {
    slug: 'platinum-group',
    file: 'ჩვენი ლოგო.png',
    make: async (p) => {
      const white = (left, width) => ({
        input: { create: { width, height: 50, channels: 4, background: '#fff' } },
        left,
        top: 900,
      })
      const clean = await sharp(p)
        .composite([white(0, 360), white(920, 315)])
        .png()
        .toBuffer()
      return whiteToAlpha(clean)
    },
  },
  // Nabuna: თეთრი წარწერა მწვანე ფონზე → მწვანე წარწერა გამჭვირვალეზე (ფონი ≈ 83, ტექსტი ≈ 243)
  {
    slug: 'nabuna',
    file: '1.png',
    make: (p) =>
      mapPixels(p, (r, g, b) => {
        const lum = 0.299 * r + 0.587 * g + 0.114 * b
        const a = Math.max(0, Math.min(1, (lum - 110) / 100))
        return [54, 96, 90, Math.round(a * 255)]
      }),
  },
  // ჯიენჯი ფარმა: სარეკლამო ბანერია - ვიღებთ მხოლოდ წითელ სათაურს, თეთრი წარწერა → წითელი
  {
    slug: 'gng-pharma',
    file: 'image293.jpg',
    make: async (p) => {
      const band = await sharp(p).extract({ left: 0, top: 0, width: 768, height: 50 }).toBuffer()
      return mapPixels(band, (r, g, b) => {
        const a = Math.max(0, Math.min(1, (Math.min(g, b) - 70) / 120))
        return [228, 30, 38, Math.round(a * 255)]
      })
    },
  },
]

for (const { slug, file, make } of jobs) {
  const path = join(src, file)
  if (!existsSync(path)) continue
  await place(await make(path), slug)
}
