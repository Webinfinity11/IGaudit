// გუნდი. თანმიმდევრობა საიტზე = მასივის რიგი.
// ფოტო: ჩააგდეთ public/images/team/-ში (პროპორცია 4:5) და მიუთითეთ photo: '/images/team/<ფაილი>.webp'
export interface TeamMember {
  id: string
  name: { ka: string; en: string }
  role: { ka: string; en: string }
  saras?: string // მხოლოდ აუდიტორებთან
  photo?: string // არარსებობისას - ხატულა
  icon: string // Lucide ხატულა როლის მიხედვით (components/ui/AppIcon.vue)
}

// საიტზე ქვეყნდება მხოლოდ მმართველი პარტნიორი
export const team: TeamMember[] = [
  {
    id: 'irma-gogaladze',
    name: { ka: 'ირმა გოგალაძე', en: 'Irma Gogaladze' },
    role: { ka: 'მმართველი პარტნიორი, აუდიტორი', en: 'Managing Partner, Auditor' },
    saras: 'SARAS-A-429918',
    icon: 'ShieldCheck',
  },
]

export const managingPartner = team[0]
