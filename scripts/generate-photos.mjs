// ფოტოები: brand/photos/*.png → src/assets/photos/*-{800,1600}.webp
// გაშვება: node scripts/generate-photos.mjs
import { mkdirSync, readdirSync } from 'node:fs'
import sharp from 'sharp'

mkdirSync('src/assets/photos', { recursive: true })
for (const file of readdirSync('brand/photos').filter((f) => f.endsWith('.png'))) {
  const name = file.replace(/\.png$/, '')
  for (const w of [800, 1600]) {
    const out = `src/assets/photos/${name}-${w}.webp`
    await sharp(`brand/photos/${file}`).resize({ width: w, withoutEnlargement: true }).webp({ quality: 76 }).toFile(out)
  }
  console.log(name)
}
