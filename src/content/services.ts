// სერვისების სია. ტექსტები: locales/*.json → services.<slug> (ქვე-სერვისები: services.<slug>.subs.<sub>)
// ქვე-სერვისის დეტალური ტექსტი: content/serviceDetails.ts
// ეს ფაილი იმპორტდება vite.config.ts-შიც (პრერენდერი, sitemap) - Vue-ს იმპორტი აქ არ შეიძლება.
export const serviceSlugs = [
  'audit',
  'tax',
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
    subs: [
      'tax-consulting',
      'transaction-advisory',
      'tax-compliance',
      'tax-disputes',
      'tax-returns',
    ],
  },
  {
    slug: 'outsourcing',
    icon: 'Calculator',
    order: 3,
    photo: 'desk',
    subs: ['bookkeeping', 'payroll', 'finance-manager', 'chief-accountant'],
  },
  {
    slug: 'consulting',
    icon: 'MessagesSquare',
    order: 4,
    photo: 'binders',
    subs: ['business-consulting', 'litigation-support', 'risk-consulting'],
  },
  { slug: 'property-valuation', icon: 'Building2', order: 5, photo: 'hero', subs: [] },
  { slug: 'business-valuation', icon: 'TrendingUp', order: 6, photo: 'desk', subs: [] },
]

/** ყველა ქვე-სერვისის გზა: `audit/reporting-compilation` */
export const subServicePaths = services.flatMap((s) => s.subs.map((sub) => `${s.slug}/${sub}`))

export function isServiceSlug(value: unknown): value is ServiceSlug {
  return typeof value === 'string' && (serviceSlugs as readonly string[]).includes(value)
}
