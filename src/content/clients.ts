// კლიენტების ლოგოები. ქვეყნდება მხოლოდ კლიენტის თანხმობით (consent: true).
// დამატება: ფაილი → public/images/clients/, ჩანაწერი → ქვემოთ მასივში.
// სია ცარიელია → ლოგოების ზოლი საიტზე არ ჩანს.
export interface ClientLogo {
  name: string
  logo: string // /images/clients/*.svg|png|webp
  url?: string
  consent: true
}

export const clients: ClientLogo[] = [
  // { name: 'კომპანია', logo: '/images/clients/company.svg', url: 'https://example.ge', consent: true },
]
