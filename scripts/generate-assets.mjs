// ლოგოდან ვებ-ასეტების გენერაცია: node scripts/generate-assets.mjs
// წყარო: brand/logo-source.png
import sharp from 'sharp'

sharp.cache(false)
const src = 'brand/logo-source.png'
const opts = { limitInputPixels: false }

// 1. ზედმეტი თეთრი ველის მოჭრა
const trimmed = await sharp(src, opts).trim({ threshold: 10 }).toBuffer({ resolveWithObject: true })
const { width, height } = trimmed.info
console.log('trimmed', width, height)

// 2. საიტზე ლოგო SVG-ია (components/ui/AppLogo.vue) - PNG ვერსია აღარ გვჭირდება

// 3. Open Graph სურათი 1200×630
const ogLogo = await sharp(trimmed.data, opts).resize({ width: 760 }).png().toBuffer()
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#ffffff' } })
  .composite([
    { input: ogLogo, gravity: 'center' },
    {
      input: Buffer.from(
        '<svg width="1200" height="630"><rect x="0" y="618" width="1200" height="12" fill="#540061"/></svg>',
      ),
      top: 0,
      left: 0,
    },
  ])
  .png()
  .toFile('public/og-image.png')

// 4. ფავიკონები - favicon.svg-დან
const svg = 'public/favicon.svg'
await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png')
await sharp(svg).resize(32, 32).png().toFile('brand/favicon-32.png')
await sharp(svg).resize(512, 512).png().toFile('public/icon-512.png')
console.log('done')
