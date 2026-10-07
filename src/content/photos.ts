// დოკუმენტური ფოტოები (წყარო: brand/photos/*.png → node scripts/generate-photos.mjs)
import binders800 from '@/assets/photos/doc-binders-800.webp'
import binders1600 from '@/assets/photos/doc-binders-1600.webp'
import desk800 from '@/assets/photos/doc-desk-800.webp'
import desk1600 from '@/assets/photos/doc-desk-1600.webp'
import hero800 from '@/assets/photos/doc-hero-800.webp'
import hero1600 from '@/assets/photos/doc-hero-1600.webp'
import stamp800 from '@/assets/photos/doc-stamp-800.webp'
import stamp1600 from '@/assets/photos/doc-stamp-1600.webp'

const set = (s: string, l: string) => ({ src: s, srcset: `${s} 800w, ${l} 1600w` })

export const photos = {
  binders: set(binders800, binders1600),
  desk: set(desk800, desk1600),
  hero: set(hero800, hero1600),
  stamp: set(stamp800, stamp1600),
}

export type PhotoName = keyof typeof photos
