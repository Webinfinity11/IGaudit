// მომსახურებების სია. ტექსტები: locales/*.json → services.<slug>
// ეს ფაილი იმპორტდება vite.config.ts-შიც (პრერენდერი, sitemap) - Vue-ს იმპორტი აქ არ შეიძლება.
export const serviceSlugs = [
  'audit',
  'accounting',
  'tax-risk',
  'consulting',
  'property-valuation',
  'business-valuation',
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

export interface Service {
  slug: ServiceSlug
  icon: string // Lucide ხატულის სახელი (იხ. components/ui/AppIcon.vue)
  order: number
  photo: 'stamp' | 'desk' | 'hero' | 'binders' // content/photos.ts
}

export const services: Service[] = [
  { slug: 'audit', icon: 'FileSearch', order: 1, photo: 'stamp' },
  { slug: 'accounting', icon: 'Calculator', order: 2, photo: 'desk' },
  { slug: 'tax-risk', icon: 'ShieldAlert', order: 3, photo: 'hero' },
  { slug: 'consulting', icon: 'MessagesSquare', order: 4, photo: 'binders' },
  { slug: 'property-valuation', icon: 'Building2', order: 5, photo: 'hero' },
  { slug: 'business-valuation', icon: 'TrendingUp', order: 6, photo: 'desk' },
]

export function isServiceSlug(value: unknown): value is ServiceSlug {
  return typeof value === 'string' && (serviceSlugs as readonly string[]).includes(value)
}
