// კომპანიის რეკვიზიტები - ენისგან დამოუკიდებელი მონაცემები.
// ცარიელი ველი (email, workingHours) საიტზე უბრალოდ არ გამოჩნდება.
export const company = {
  name: 'IG GROUP',
  idCode: '404901095',
  saras: 'SARAS-F-412837',
  phone: '+995 593 56 15 90',
  phoneHref: 'tel:+995593561590',
  email: '', // [დასაზუსტებელი]
  address: { ka: 'ნოდარ ბოხუას ქ. 4', en: '4 Nodar Bokhua St.' },
  city: { ka: 'თბილისი', en: 'Tbilisi' },
  workingHours: { ka: '', en: '' }, // [დასაზუსტებელი, მაგ. ორშ–პარ, 10:00–19:00]
  insurer: { ka: 'ჯიპიაი ჰოლდინგი', en: 'GPI Holding' },
  foundedYear: 2011,
  mapQuery: 'Nodar Bokhua St 4, Tbilisi',
}

export type Locale = 'ka' | 'en'
