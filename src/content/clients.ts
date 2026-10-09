// კლიენტების ლოგოები. ქვეყნდება მხოლოდ კლიენტის თანხმობით (consent: true).
// დამატება: ფაილი → public/images/clients/, ჩანაწერი → ქვემოთ მასივში.
// ლოგოს გარეშე ჩანაწერი გვერდზე სახელით ჩანს (ლოგოების ზოლში - არა).
// სია ცარიელია → ლოგოების ზოლი საიტზე არ ჩანს.
export interface ClientLogo {
  name: string // ცარიელი → alt-ად ზოგადი „კლიენტის ლოგო“
  nameEn?: string // ლათინური ვარიანტი ინგლისური ვერსიისთვის
  logo?: string // /images/clients/*.svg|png|webp
  url?: string
  consent: true
}

// ლოგოები მზადდება scripts/generate-client-logos.mjs-ით (480×240 webp, გამჭვირვალე ფონი)
export const clients: ClientLogo[] = [
  { name: 'Georgian Airways', logo: '/images/clients/georgian-airways.webp', consent: true },
  { name: 'Shumi Winery', logo: '/images/clients/shumi.webp', consent: true },
  { name: 'COTT Georgia', logo: '/images/clients/cott-georgia.webp', consent: true },
  { name: 'Yamato', logo: '/images/clients/yamato.webp', consent: true },
  { name: 'Gogutsa', logo: '/images/clients/gogutsa.webp', consent: true },
  { name: 'Nutera', logo: '/images/clients/nutera.webp', consent: true },
  { name: '', logo: '/images/clients/logo-mark.webp', consent: true },
  { name: 'რადიო სივრცე 98.5', logo: '/images/clients/radio-sivrtse.webp', consent: true },
  { name: 'Green Energy', logo: '/images/clients/green-energy.webp', consent: true },
  { name: 'Platinum Group', logo: '/images/clients/platinum-group.webp', consent: true },
  { name: 'AZ Logistika', logo: '/images/clients/az-logistika.webp', consent: true },
  { name: 'SPNEWS', logo: '/images/clients/spnews.webp', consent: true },
  { name: 'თრიალეთი', logo: '/images/clients/trialeti.webp', consent: true },
  { name: 'პირველი ნაბიჯი', nameEn: 'Pirveli Nabiji', consent: true },
  { name: 'ანანო 2014', nameEn: 'Anano 2014', consent: true },
  { name: 'გრეიპლენდი', nameEn: 'Grapeland', consent: true },
  { name: 'ქუჩის მკერავი', nameEn: 'Kuchis Mkeravi', consent: true },
  { name: 'A&S International Group', consent: true },
  { name: 'ბლუ ენერჯი', nameEn: 'Blue Energy', consent: true },
]
