// სერვისების სია. ტექსტები: locales/*.json → services.<slug> (ქვე-სერვისები: services.<slug>.subs.<sub>)
// ქვე-სერვისის დეტალური ტექსტი: content/serviceDetails.ts
// ეს ფაილი იმპორტდება vite.config.ts-შიც (პრერენდერი, sitemap) - Vue-ს იმპორტი აქ არ შეიძლება.
export const serviceSlugs = [
  'audit',
  'tax',
  'disputes',
  'outsourcing',
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
  subs: readonly string[] // ქვე-სერვისები; ცარიელი → გვერდზე „მომსახურება მოიცავს“ სია
}

export const services: Service[] = [
  {
    slug: 'audit',
    icon: 'FileSearch',
    order: 1,
    photo: 'stamp',
    subs: ['audit', 'reporting-compilation'],
  },
  {
    slug: 'tax',
    icon: 'ShieldAlert',
    order: 2,
    photo: 'hero',
    subs: ['tax-consulting', 'transaction-advisory', 'tax-compliance', 'tax-returns'],
  },
  {
    slug: 'disputes',
    icon: 'Scale',
    order: 3,
    photo: 'stamp',
    subs: ['tax-disputes', 'litigation-support'],
  },
  {
    slug: 'outsourcing',
    icon: 'Calculator',
    order: 4,
    photo: 'desk',
    subs: ['bookkeeping', 'payroll', 'finance-manager', 'chief-accountant'],
  },
  {
    slug: 'consulting',
    icon: 'MessagesSquare',
    order: 5,
    photo: 'binders',
    subs: ['business-consulting', 'risk-consulting'],
  },
  { slug: 'property-valuation', icon: 'Building2', order: 6, photo: 'hero', subs: [] },
  {
    slug: 'business-valuation',
    icon: 'TrendingUp',
    order: 7,
    photo: 'desk',
    subs: [],
  },
]

/** ყველა ქვე-სერვისის გზა: `audit/reporting-compilation` */
export const subServicePaths = services.flatMap((s) => s.subs.map((sub) => `${s.slug}/${sub}`))

export function isServiceSlug(value: unknown): value is ServiceSlug {
  return typeof value === 'string' && (serviceSlugs as readonly string[]).includes(value)
}
