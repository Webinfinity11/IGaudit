// კომპანიის რეკვიზიტები - ენისგან დამოუკიდებელი მონაცემები.
// ცარიელი ველი (email, workingHours) საიტზე უბრალოდ არ გამოჩნდება.
export const company = {
  name: 'IG GROUP',
  idCode: '404901095',
  saras: 'SARAS-F-412837',
  phone: '+995 593 56 15 90',
  phoneHref: 'tel:+995593561590',
  phone2: '+995 591 65 12 12',
  phone2Href: 'tel:+995591651212',
  email: 'info@igaudit.ge',
  linkedin: 'https://www.linkedin.com/company/145277764/',
  address: {
    ka: 'ნოდარ ბოხუას ქ. 4, მიონის ბიზნეს ცენტრი',
    en: '4 Nodar Bokhua St., Mion Business Center',
  },
  city: { ka: 'თბილისი', en: 'Tbilisi' },
  workingHours: { ka: '', en: '' }, // [დასაზუსტებელი, მაგ. ორშ–პარ, 10:00–19:00]
  insurer: { ka: 'ჯიპიაი ჰოლდინგი', en: 'GPI Holding' },
  foundedYear: 2011,
  mapQuery: 'Mioni Center, 106 Akaki Beliashvili St, Tbilisi 0159',
}

export type Locale = 'ka' | 'en'
