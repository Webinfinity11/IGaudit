// სასარგებლო ინფორმაცია: ოფიციალური საიტების ბმულები, ჯგუფებად.
// ჯგუფის სათაური: locales/*.json → resources.groups.<key>
import type { Locale } from './company'

export interface ResourceLink {
  url: string
  title: Record<Locale, string>
  text: Record<Locale, string>
}

export interface ResourceGroup {
  key: 'law' | 'tax' | 'finance' | 'registry'
  icon: string // Lucide ხატულის სახელი (იხ. components/ui/AppIcon.vue)
  links: ResourceLink[]
}

export const resourceGroups: ResourceGroup[] = [
  {
    key: 'law',
    icon: 'Scale',
    links: [
      {
        url: 'https://matsne.gov.ge/',
        title: { ka: 'საკანონმდებლო მაცნე', en: 'Legislative Herald of Georgia' },
        text: {
          ka: 'საქართველოს კანონებისა და ნორმატიული აქტების ოფიციალური ბაზა.',
          en: 'Official database of Georgian laws and normative acts.',
        },
      },
      {
        url: 'https://parliament.ge/',
        title: { ka: 'საქართველოს პარლამენტი', en: 'Parliament of Georgia' },
        text: {
          ka: 'კანონპროექტები და საკანონმდებლო ცვლილებები.',
          en: 'Draft laws and legislative changes.',
        },
      },
    ],
  },
  {
    key: 'tax',
    icon: 'ShieldAlert',
    links: [
      {
        url: 'https://rs.ge/',
        title: { ka: 'შემოსავლების სამსახური', en: 'Revenue Service' },
        text: {
          ka: 'დეკლარაციები, ანგარიშ-ფაქტურები და გადასახადები.',
          en: 'Tax returns, invoices and taxes.',
        },
      },
      {
        url: 'https://rs.ge/SituationalManuals?cat=1&tab=1',
        title: { ka: 'სიტუაციური სახელმძღვანელოები', en: 'Situational manuals' },
        text: {
          ka: 'შემოსავლების სამსახურის განმარტებები კონკრეტულ შემთხვევებზე.',
          en: 'Revenue Service guidance on specific situations.',
        },
      },
      {
        url: 'https://wiki.rs.ge/',
        title: { ka: 'RS Wiki', en: 'RS Wiki' },
        text: {
          ka: 'საგადასახადო საკითხების ცნობარი.',
          en: 'Reference guide to tax matters.',
        },
      },
      {
        url: 'https://infohub.rs.ge/',
        title: { ka: 'InfoHub', en: 'InfoHub' },
        text: {
          ka: 'საგადასახადო კანონმდებლობა, ბრძანებები და განმარტებები ერთ სივრცეში.',
          en: 'Tax legislation, orders and rulings in one place.',
        },
      },
    ],
  },
  {
    key: 'finance',
    icon: 'Calculator',
    links: [
      {
        url: 'https://mof.ge/',
        title: { ka: 'ფინანსთა სამინისტრო', en: 'Ministry of Finance' },
        text: {
          ka: 'ფინანსური პოლიტიკა, დავების განხილვის საბჭო.',
          en: 'Fiscal policy and the tax dispute council.',
        },
      },
      {
        url: 'https://saras.gov.ge/',
        title: { ka: 'SARAS', en: 'SARAS' },
        text: {
          ka: 'ბუღალტრული აღრიცხვის, ანგარიშგებისა და აუდიტის ზედამხედველობის სამსახური.',
          en: 'Service for Accounting, Reporting and Auditing Supervision.',
        },
      },
      {
        url: 'https://reportal.ge/',
        title: { ka: 'Reportal', en: 'Reportal' },
        text: {
          ka: 'კომპანიების ფინანსური ანგარიშგების წარდგენა და საჯარო ბაზა.',
          en: 'Filing and public database of company financial statements.',
        },
      },
      {
        url: 'https://nbg.gov.ge/index.php?m=2',
        title: { ka: 'ეროვნული ბანკი', en: 'National Bank of Georgia' },
        text: {
          ka: 'ლარის ოფიციალური გაცვლითი კურსები.',
          en: 'Official lari exchange rates.',
        },
      },
    ],
  },
  {
    key: 'registry',
    icon: 'Building2',
    links: [
      {
        url: 'https://court.ge/',
        title: { ka: 'საერთო სასამართლოები', en: 'Common Courts' },
        text: {
          ka: 'სასამართლო გადაწყვეტილებები და საქმეების ინფორმაცია.',
          en: 'Court decisions and case information.',
        },
      },
      {
        url: 'http://www.reestri.gov.ge/',
        title: { ka: 'საჯარო რეესტრი', en: 'Public Registry' },
        text: {
          ka: 'მეწარმეთა და ქონების რეესტრიდან ამონაწერები.',
          en: 'Extracts from the business and property registers.',
        },
      },
    ],
  },
]
