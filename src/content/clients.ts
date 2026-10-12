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
  { name: 'Nabuna', logo: '/images/clients/nabuna.webp', consent: true },
  { name: 'ჯიენჯი ფარმა', logo: '/images/clients/gng-pharma.webp', consent: true },
  { name: 'DaTene', logo: '/images/clients/datene.webp', consent: true },
  { name: 'Bazari Orbeliani', logo: '/images/clients/bazari.webp', consent: true },
  {
    name: 'რადიო ფორტუნა 106.9',
    nameEn: 'Radio Fortuna 106.9',
    logo: '/images/clients/fortuna.webp',
    consent: true,
  },
  { name: 'Profbeauty', logo: '/images/clients/profbeauty.webp', consent: true },
  { name: 'GFM Studio', logo: '/images/clients/gfm.webp', consent: true },
  { name: 'პირველი ნაბიჯი', nameEn: 'Pirveli Nabiji', consent: true },
  { name: 'ანანო 2014', nameEn: 'Anano 2014', consent: true },
  { name: 'გრეიპლენდი', nameEn: 'Grapeland', consent: true },
  { name: 'ქუჩის მკერავი', nameEn: 'Kuchis Mkeravi', consent: true },
  { name: 'A&S International Group', consent: true },
  { name: 'ბლუ ენერჯი', nameEn: 'Blue Energy', consent: true },
  { name: 'ფურნივერსი', nameEn: 'Furniverse', consent: true },
  { name: 'პიჩფორკ ტრეიდინგი', nameEn: 'Pitchfork Trading', consent: true },
  { name: 'გრინ ენერჯი სერვისი', nameEn: 'Green Energy Service', consent: true },
  { name: 'ეი სი ჯი გრუპი', nameEn: 'ACG Group', consent: true },
  { name: 'სნს', nameEn: 'SNS', consent: true },
  { name: 'ფლაი ტვ', nameEn: 'Fly TV', consent: true },
  { name: 'დიფერენთ სოლუშენ', nameEn: 'Different Solution', consent: true },
  { name: 'ეს დი აი', nameEn: 'SDI', consent: true },
  { name: 'ბიოროპეან ჯორჯია', nameEn: 'Bioropean Georgia', consent: true },
  { name: 'სანვოლტი', nameEn: 'Sunvolt', consent: true },
]
