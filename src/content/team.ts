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

const chiefAccountant = { ka: 'მთავარი ბუღალტერი', en: 'Chief Accountant' }
const accountantIcon = 'Calculator'

export const team: TeamMember[] = [
  {
    id: 'irma-gogaladze',
    name: { ka: 'ირმა გოგალაძე', en: 'Irma Gogaladze' },
    role: { ka: 'მმართველი პარტნიორი, აუდიტორი', en: 'Managing Partner, Auditor' },
    saras: 'SARAS-A-429918',
    icon: 'ShieldCheck',
  },
  {
    id: 'mariam-natroshvili',
    name: { ka: 'მარიამ ნატროშვილი', en: 'Mariam Natroshvili' },
    role: { ka: 'აუდიტის პარტნიორი, აუდიტორი', en: 'Audit Partner, Auditor' },
    saras: 'SARAS-A-607721',
    icon: 'FileSearch',
  },
  {
    id: 'salome-mchedlishvili',
    name: { ka: 'სალომე მჭედლიშვილი', en: 'Salome Mchedlishvili' },
    role: { ka: 'პროექტის ხელმძღვანელი', en: 'Project Manager' },
    icon: 'Briefcase',
  },
  {
    id: 'mariam-sebiskveradze',
    name: { ka: 'მარიამ სებისკვერაძე', en: 'Mariam Sebiskveradze' },
    role: chiefAccountant,
    icon: accountantIcon,
  },
  {
    id: 'maka-chaobashvili',
    name: { ka: 'მაკა ჭაობაშვილი', en: 'Maka Chaobashvili' },
    role: chiefAccountant,
    icon: accountantIcon,
  },
  {
    id: 'salome-pirtskhelava',
    name: { ka: 'სალომე ფირცხელავა', en: 'Salome Pirtskhelava' },
    role: chiefAccountant,
    icon: accountantIcon,
  },
  {
    id: 'temur-shakulashvili',
    name: { ka: 'თემურ შაყულაშვილი', en: 'Temur Shakulashvili' },
    role: chiefAccountant,
    icon: accountantIcon,
  },
  {
    id: 'salome-badzgaradze',
    name: { ka: 'სალომე ბაძგარაძე', en: 'Salome Badzgaradze' },
    role: chiefAccountant,
    icon: accountantIcon,
  },
  {
    id: 'maka-talashvili',
    name: { ka: 'მაკა ტალაშვილი', en: 'Maka Talashvili' },
    role: { ka: 'მთავარი იურისტი', en: 'Chief Legal Counsel' },
    icon: 'Scale',
  },
]
