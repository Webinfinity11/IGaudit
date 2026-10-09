// კლიენტების ლოგოები → public/images/clients/*.webp, ერთნაირი ტილო (480×240, გამჭვირვალე)
// გაშვება: node scripts/generate-client-logos.mjs <წყაროს საქაღალდე>
import { mkdirSync, readFileSync } from 'node:fs'
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

/** თეთრი/ღია ფონის გამჭვირვალედ ქცევა (ლოგო მუქია) */
async function whiteToAlpha(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const min = Math.min(data[i], data[i + 1], data[i + 2])
    if (min > 235) data[i + 3] = 0
    else if (min > 200) data[i + 3] = Math.round((data[i + 3] * (235 - min)) / 35)
  }
  return sharp(data, { raw: info }).png().toBuffer()
}

/** ღია ტექსტი ფერად ფონზე → ფერადი ტექსტი გამჭვირვალეზე */
async function lightTextToColor(input, [r, g, b]) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    // ფონი ≈ 160, ტექსტი ≈ 235
    const a = Math.max(0, Math.min(1, (lum - 185) / 35))
    data[i] = r
    data[i + 1] = g
    data[i + 2] = b
    data[i + 3] = Math.round(a * 255)
  }
  return sharp(data, { raw: info }).png().toBuffer()
}

const f = (name) => join(src, name)

await place(await whiteToAlpha(f('logo-new.png')), 'georgian-airways')
// Shumi: ვერტიკალური ლოგო განიერ ჩარჩოში პატარად ჩანს → ჰორიზონტალური: გრიფონი წარწერის მარცხნივ
{
  const shumi = await whiteToAlpha(f('Shumi_Logo_Dark_h-10mm.png'))
  const part = async (top, height) => {
    const cut = await sharp(shumi).extract({ left: 0, top, width: 800, height }).png().toBuffer()
    return sharp(cut).trim({ threshold: 30 }).png().toBuffer({ resolveWithObject: true })
  }
  const griffin = await part(100, 160)
  const text = await part(290, 200)
  const gH = Math.round(text.info.height * 1.05)
  const g = await sharp(griffin.data).resize({ height: gH }).png().toBuffer({ resolveWithObject: true })
  const gap = Math.round(text.info.height * 0.25)
  const width = g.info.width + gap + text.info.width
  const height = Math.max(gH, text.info.height)
  const row = await sharp({ create: { width, height, channels: 4, background: '#0000' } })
    .composite([
      { input: g.data, left: 0, top: Math.round((height - gH) / 2) },
      { input: text.data, left: g.info.width + gap, top: Math.round((height - text.info.height) / 2) },
    ])
    .png()
    .toBuffer()
  await place(row, 'shumi')
}
await place(await whiteToAlpha(f('COTT Electronics Georgia Logo.png')), 'cott-georgia')
await place(await whiteToAlpha(f('PHOTO-2026-10-08-17-28-03.jpg')), 'gogutsa')
// Yamato: წითელი რგოლის შიგნით მხოლოდ ნიშანი + წარწერა
await place(
  await whiteToAlpha(
    await sharp(f('1000122019.jpg'))
      .extract({ left: 100, top: 640, width: 1420, height: 300 })
      .toBuffer(),
  ),
  'yamato',
)
// Nutera: კრემისფერი წარწერა ნარინჯისფერ ფონზე → ნარინჯისფერი წარწერა
await place(await lightTextToColor(f('514201881_122111243204920131_7019824531569913697_n.jpg'), [214, 140, 40]), 'nutera')
// SVG: თეთრი ნიშანი → ბრენდის მუქი ფერი
const svg = readFileSync(f('logo_logo.svg'), 'utf8').replaceAll('#fff', '#2a2a2a')
await place(await sharp(Buffer.from(svg), { density: 600 }).png().toBuffer(), 'logo-mark')
