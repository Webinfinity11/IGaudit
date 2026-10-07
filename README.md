# IG GROUP - კორპორაციული ვებგვერდი

Vue 3 + Vite + TypeScript, სტატიკური გენერაცია (vite-ssg). ბექენდი და CMS არ არის: კონტენტი ინახება
`src/content/` და `src/locales/` ფაილებში, ფორმა იგზავნება გარე სერვისით (Web3Forms).

ტექნიკური დავალება: [`docs/IG_GROUP_Vue_ტექნიკური_დავალება.md`](docs/IG_GROUP_Vue_ტექნიკური_დავალება.md)

## ლოკალური გაშვება

საჭიროა Node.js 20+.

```bash
npm install
cp .env.example .env     # შეავსეთ საჭირო მნიშვნელობები
npm run dev              # http://localhost:5173
```

| ბრძანება | რას აკეთებს |
|---|---|
| `npm run dev` | დეველოპმენტ-სერვერი |
| `npm run build` | ტიპების შემოწმება + სტატიკური ბილდი `dist/`-ში (ყველა გვერდი HTML-ად, `sitemap.xml`, `robots.txt`, `404.html`) |
| `npm run preview` | აწყობილი `dist/`-ის ლოკალური ნახვა |
| `npm run lint` / `npm run typecheck` / `npm run format` | ხარისხის შემოწმება |
| `node scripts/generate-assets.mjs` | ლოგოდან (`brand/logo-source.png`) ფავიკონის და `og-image.png`-ის თავიდან გენერაცია |
| `node scripts/generate-photos.mjs` | ფოტოები `brand/photos/*.png` → `src/assets/photos/*-{800,1600}.webp` |

## გარემოს ცვლადები (`.env`)

| ცვლადი | აღწერა |
|---|---|
| `VITE_SITE_URL` | საიტის საბოლოო მისამართი - canonical, hreflang, sitemap, Open Graph |
| `VITE_ENABLE_EN` | `false` - ინგლისური ვერსია და ენის გადამრთველი გამოირთვება |
| `VITE_FORM_ENDPOINT` | ფორმის სერვისის მისამართი (ნაგულისხმევი: `https://api.web3forms.com/submit`) |
| `VITE_FORM_KEY` | Web3Forms-ის access key (web3forms.com-ზე, კომპანიის ელფოსტით) |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile - ცარიელისას captcha არ ჩანს |
| `VITE_GA_ID` | Google Analytics 4 (`G-XXXXXXX`) - იტვირთება მხოლოდ cookie-თანხმობის შემდეგ |

> `VITE_*` მნიშვნელობები ბილდისას ჩაიწერება საჯარო JS-ში - ეს ნორმალურია Web3Forms-ის key-სა და
> Turnstile-ის site key-სთვის. საიდუმლო (secret) გასაღებები აქ არ უნდა მოხვდეს. `.env` Git-ში არ იტვირთება.
>
> **Captcha:** Turnstile-ის token-ის შემოწმება უნდა მოხდეს სერვერზე. ფორმის სერვისის არჩევისას
> დარწმუნდით, რომ ის Turnstile-ს (ან hCaptcha-ს) ამოწმებს; წინააღმდეგ შემთხვევაში captcha მხოლოდ
> ფრონტენდის ბარიერია (honeypot ველი ყოველთვის მუშაობს).

## Deploy

ნებისმიერი სტატიკური ჰოსტინგი (Netlify / Vercel / Cloudflare Pages):

- Build command: `npm run build`
- Output directory: `dist`
- გარემოს ცვლადები - ჰოსტინგის პანელში (იგივე, რაც `.env`-ში)

Git push → ავტომატური ბილდი და გამოქვეყნება.

## კონტენტის რედაქტირება

ცვლილების შემდეგ: commit + push → საიტი ავტომატურად განახლდება.

### ტექსტები

ყველა ტექსტი - `src/locales/ka.json` (ქართული) და `src/locales/en.json` (ინგლისური). გასაღებები ორივე
ფაილში ერთნაირია; შეცვალეთ მხოლოდ მნიშვნელობა (ბრჭყალებში მოთავსებული ტექსტი).

- მთავარი გვერდი → `home.*`, ჩვენ შესახებ → `about.*`, კონტაქტი → `contact.*`
- მომსახურებები → `services.<slug>.*` (`title`, `short`, `heading`, `intro`, `items`, `note`)
- გვერდების `<title>` და აღწერა (SEO) → `meta.*`
- ტექსტში არ გამოიყენოთ სიმბოლოები `{ } @ |` - ისინი vue-i18n-ის სპეციალური ნიშნებია.
  `{year}`, `{phone}`, `{insurer}` - ავტომატურად ჩანაცვლებადი ადგილებია, არ წაშალოთ.

### რეკვიზიტები (ტელეფონი, ელფოსტა, მისამართი, სამუშაო საათები)

`src/content/company.ts`. ცარიელი ველი (მაგ. `email: ''`) საიტზე უბრალოდ არ ჩანს - შევსებისთანავე
გამოჩნდება ჰედერში/ფუტერში/კონტაქტში.

### გუნდის წევრი

`src/content/team.ts` - დაამატეთ/წაშალეთ ჩანაწერი. რიგი საიტზე = მასივის რიგი.

```ts
{
  id: 'name-surname',
  name: { ka: 'სახელი გვარი', en: 'Name Surname' },
  role: { ka: 'მთავარი ბუღალტერი', en: 'Chief Accountant' },
  saras: 'SARAS-A-000000',             // მხოლოდ აუდიტორებთან
  photo: '/images/team/name-surname.webp', // სურვილისამებრ; არარსებობისას - ინიციალები
},
```

ფოტო: `public/images/team/`-ში, პროპორცია 4:5 (მაგ. 800×1000), WebP ფორმატი.

### კლიენტის ლოგო

1. ფაილი ჩააგდეთ `public/images/clients/`-ში (SVG ან გამჭვირვალე PNG/WebP).
2. დაამატეთ ჩანაწერი `src/content/clients.ts`-ში:

```ts
{ name: 'კომპანია', logo: '/images/clients/company.svg', url: 'https://company.ge', consent: true },
```

ქვეყნდება მხოლოდ კლიენტის თანხმობით. სია ცარიელია → ლოგოების ზოლი არ ჩანს; 5 და მეტი ლოგო → მოძრავი ზოლი.

### მომსახურების დამატება

1. `src/content/services.ts` - `serviceSlugs`-სა და `services`-ში ახალი slug და Lucide ხატულა
   (ხატულა უნდა იყოს რეგისტრირებული `src/components/ui/AppIcon.vue`-ში).
2. `src/locales/*.json` - `services.<slug>` ბლოკი.

გვერდი, მენიუ, ფუტერი, ფორმის სია და sitemap ავტომატურად განახლდება.

## სტრუქტურა

```
src/
├── main.ts, App.vue, i18n.ts
├── router/routes.ts        # ka - პრეფიქსის გარეშე, en - /en/...
├── layouts/DefaultLayout.vue
├── pages/                  # Home, About, Services, Service (/services/:slug), Contact, Privacy, 404
├── components/{layout,home,about,contact,ui}/
├── content/                # company, services, team, clients
├── locales/                # ka.json, en.json
├── composables/            # useSeo, useLocale, useCookieConsent, useContactForm
├── assets/                 # ლოგო (გენერირებული)
└── styles/                 # tokens.css (ფერები, შრიფტი), base.css
```

## დიზაინი

`design/` - React-ზე აწყობილი დიზაინ-მაკეტები (წყარო, საიტის კოდი არ არის): გვერდები, `tokens.json`,
brandbook და moodboard. საიტი მათ Vue-ზე იმეორებს:

- ტოკენები → `src/styles/tokens.css` (brand/Plum `#540061`, accent/Forest `#014501`, ink/Paper)
- შრიფტები: Jost (ლათინური, ციფრები) + Noto Sans Georgian, ლოკალურად `@fontsource-variable`-ით
- ანიმაციები (`motion` ბიბლიოთეკა) → `src/components/motion/` და `src/composables/useMotion.ts`;
  `prefers-reduced-motion`-ისას ითიშება, JS-ის გარეშე კონტენტი სრულად ჩანს.
