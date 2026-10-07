import React from "react";
import { PageShell, SiteHeader, SiteFooter, CtaBand, Eyebrow, Icon, company, latin, Photo, Reveal, RevealGroup, ScrollScaleIn, ParallaxPhoto, ScrollWords, Counter } from "./design-system";

const values = [
  { icon: "Target", t: "მიზნებზე ფოკუსირება", d: "ვმუშაობთ თქვენი ბიზნესის მიზნების მისაღწევად და არა მხოლოდ ფორმალური მოთხოვნების შესასრულებლად." },
  { icon: "Lock", t: "სანდოობა", d: "კლიენტის ინფორმაცია მკაცრად კონფიდენციალურია, ხოლო ჩვენი დასკვნები დამოუკიდებელი და ობიექტურია." },
  { icon: "Award", t: "პროფესიონალიზმი", d: "ვმოქმედებთ პროფესიული სტანდარტებისა და მოქმედი კანონმდებლობის სრული დაცვით." },
  { icon: "ShieldCheck", t: "პასუხისმგებლობის მაღალი გრძნობა", d: "ვპასუხობთ ჩვენი სამუშაოს ხარისხსა და შესრულების ვადებზე." },
  { icon: "RefreshCw", t: "სიახლეებთან ადაპტაციის უნარი", d: "მუდმივად ვადევნებთ თვალს საკანონმდებლო და ტექნოლოგიურ ცვლილებებს და დროულად ვაწვდით მათ კლიენტს." },
  { icon: "Briefcase", t: "გამოცდილება", d: "2011 წლიდან ვეხმარებით ვაჭრობის, მშენებლობის, წარმოების, მომსახურების, სოფლის მეურნეობის, ლოჯისტიკისა და ტელეკომუნიკაციების სფეროს კომპანიებს." },
];

const team = [
  { n: "ირმა გოგალაძე", r: "მმართველი პარტნიორი, აუდიტორი", s: "SARAS-A-429918", icon: "ShieldCheck" },
  { n: "მარიამ ნატროშვილი", r: "აუდიტის პარტნიორი, აუდიტორი", s: "SARAS-A-607721", icon: "FileSearch" },
  { n: "სალომე მჭედლიშვილი", r: "პროექტის ხელმძღვანელი", icon: "Briefcase" },
  { n: "მარიამ სებისკვერაძე", r: "მთავარი ბუღალტერი", icon: "Calculator" },
  { n: "მაკა ჭაობაშვილი", r: "მთავარი ბუღალტერი", icon: "Calculator" },
  { n: "სალომე ფირცხელავა", r: "მთავარი ბუღალტერი", icon: "Calculator" },
  { n: "თემურ შაყულაშვილი", r: "მთავარი ბუღალტერი", icon: "Calculator" },
  { n: "სალომე ბაძგარაძე", r: "მთავარი ბუღალტერი", icon: "Calculator" },
  { n: "მაკა ტალაშვილი", r: "მთავარი იურისტი", icon: "Scale" },
];

const roles = [
  { icon: "ShieldCheck", n: 2, t: "სერტიფიცირებული აუდიტორი" },
  { icon: "Calculator", n: 5, t: "მთავარი ბუღალტერი" },
  { icon: "Briefcase", n: 1, t: "პროექტის ხელმძღვანელი" },
  { icon: "Scale", n: 1, t: "იურისტი" },
];

export default function About() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="about" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-8 md:pt-14 pb-12">
          <div className="text-[13px] text-ink-500 flex items-center gap-1.5">
            მთავარი <Icon name="ChevronRight" className="w-3.5 h-3.5" /> <span className="text-ink-800">ჩვენ შესახებ</span>
          </div>
          <Reveal id="page-head" className="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-end">
            <div>
              <h1 className="text-[32px] md:text-[54px] leading-[1.1] font-extrabold tracking-tight text-ink-900">
                თქვენი წარმატების გასაღები <span className="text-brand-800">სანდო ხელშია</span>
              </h1>
            </div>
            <p className="text-[16px] leading-relaxed text-ink-600">
              IG GROUP არის რეგისტრირებული აუდიტორული ფირმა ({company.saras}), რომელიც კომპანიებს სთავაზობს აუდიტორულ, საბუღალტრო,
              საგადასახადო, საკონსულტაციო და შეფასების მომსახურებას. კომპანია 2011 წლიდან საქმიანობს.
            </p>
          </Reveal>
        </section>
      </div>

      {/* Photo band + stats */}
      <section className="mx-auto max-w-[1200px] px-3 md:px-6">
        <Reveal id="about-photos" className="grid grid-cols-2 md:grid-cols-12 gap-3 md:h-[380px]">
          <ParallaxPhoto id="about-photo-1" src="/assets/doc-binders.png" pos="center 40%" distance={40} className="col-span-2 md:col-span-6 rounded-[28px] h-[260px] md:h-auto" />
          <ParallaxPhoto id="about-photo-2" src="/assets/doc-stamp.png" pos="65% 50%" distance={70} className="col-span-1 md:col-span-3 rounded-[28px] h-[200px] md:h-auto" />
          <div className="col-span-1 md:col-span-3 grid grid-rows-2 gap-3">
            <div className="rounded-[28px] bg-brand-800 text-ink-50 p-6 flex flex-col justify-end">
              <Counter id="about-years" value={15} suffix="+" className="text-[40px] leading-none font-medium" />
              <span className="mt-2 text-[13px] text-brand-200">წელი ბაზარზე</span>
            </div>
            <div className="rounded-[28px] bg-accent-50 p-6 flex flex-col justify-end">
              <Counter id="about-team" value={9} className="text-[40px] leading-none font-medium text-accent-900" />
              <span className="mt-2 text-[13px] text-ink-600">პროფესიონალი გუნდში</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <RevealGroup id="mission" className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16">
        <div>
          <h2 className="text-[28px] md:text-[40px] leading-[1.12] font-extrabold tracking-tight text-ink-900">ჩვენი მისია</h2>
        </div>
        <div className="space-y-5 text-[17px] leading-relaxed text-ink-600">
          <p>
            დღეს, როცა ტექნოლოგიები და საბიზნესო გარემო უსწრაფესი ტემპით იცვლება, კომპანიის წარმატება დიდწილად დამოკიდებულია დროის სწორ
            მართვასა და მთავარ საკითხებზე ფოკუსირებაზე.
          </p>
          <ScrollWords
            id="mission-quote"
            className="text-[22px] md:text-[28px] leading-snug font-semibold text-ink-900 border-l-2 border-brand-800 pl-5"
            text="სწორედ ამიტომ გჭირდებათ ფინანსური პარტნიორი, რომელიც დაგიზოგავთ დროსა და ენერგიას და გაგიმარტივებთ რთულ ფინანსურ ამოცანებს."
          />
          <p>
            IG GROUP-ში ყოველი თანამშრომლობა იწყება კლიენტის საჭიროებების სიღრმისეული შესწავლით, რათა ჩვენი გადაწყვეტა ზუსტად თქვენს ბიზნესს
            მოერგოს.
          </p>
        </div>
      </RevealGroup>

      {/* Values */}
      <section className="bg-ink-100/70 border-y border-ink-200">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24">
          <h2 className="text-[28px] md:text-[40px] leading-[1.12] font-extrabold tracking-tight text-ink-900">ჩვენი ფასეულობები</h2>
          <RevealGroup id="values-grid" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-card bg-ink-50 border border-ink-200 p-6 md:p-7">
                <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center">
                  <Icon name={v.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-6 text-[18px] font-bold leading-snug text-ink-900">{v.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{v.d}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team: role summary + partner cards + team rows */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24">
        <Reveal id="team-head" className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-end">
          <h2 className="text-[30px] md:text-[44px] leading-[1.1] font-extrabold tracking-tight text-ink-900">ჩვენი გუნდი</h2>
          <p className="text-[16px] leading-relaxed text-ink-600">
            ჩვენი გუნდი აერთიანებს სერტიფიცირებულ აუდიტორებს, გამოცდილ ბუღალტრებსა და იურისტს. ასე თქვენი ბიზნესის ფინანსური, საგადასახადო
            და სამართლებრივი საკითხები ერთ სივრცეში წყდება.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-10">
          {/* Role summary */}
          <aside>
            <div className="lg:sticky lg:top-24 rounded-[28px] bg-ink-100 p-7">
              <Counter id="team-total" value={9} className="block text-[72px] leading-none font-medium text-brand-800" />
              <div className="mt-2 text-[15px] text-ink-600">პროფესიონალი ერთ გუნდში</div>
              <ul className="mt-8 space-y-4">
                {roles.map((r) => (
                  <li key={r.t} className="flex items-center gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-ink-50 text-brand-800 flex items-center justify-center">
                      <Icon name={r.icon} className="w-[18px] h-[18px]" />
                    </span>
                    <span className="flex-1 text-[14px] leading-snug text-ink-700">{r.t}</span>
                    <span style={latin} className="text-[20px] font-medium text-ink-900">{r.n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            {/* Partners */}
            <RevealGroup id="team-partners" className="grid sm:grid-cols-2 gap-4">
              {team.slice(0, 2).map((m, i) => (
                <article
                  key={m.n}
                  className={`group h-full rounded-[28px] p-7 flex flex-col min-h-[260px] transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none ${
                    i === 0 ? "bg-brand-800 text-ink-50" : "bg-ink-50 border border-ink-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        i === 0 ? "bg-brand-700 text-ink-50" : "bg-brand-50 text-brand-800"
                      }`}
                    >
                      <Icon name={m.icon} className="w-7 h-7" />
                    </span>
                    <span style={latin} className={`text-[12px] ${i === 0 ? "text-brand-200" : "text-ink-400"}`}>
                      {m.s}
                    </span>
                  </div>
                  <h3 className={`mt-auto pt-10 text-[22px] font-bold leading-snug ${i === 0 ? "" : "text-ink-900"}`}>{m.n}</h3>
                  <p className={`mt-1 text-[14px] ${i === 0 ? "text-brand-100" : "text-ink-500"}`}>{m.r}</p>
                </article>
              ))}
            </RevealGroup>

            {/* Everyone else */}
            <RevealGroup id="team-rows" className="mt-6 border-t border-ink-200">
              {team.slice(2).map((m) => (
                <div
                  key={m.n}
                  className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 px-2 md:px-4 border-b border-ink-200 rounded-2xl transition-colors duration-200 hover:bg-brand-50"
                >
                  <span className="w-11 h-11 shrink-0 rounded-full bg-ink-100 text-ink-700 flex items-center justify-center transition-colors duration-200 group-hover:bg-brand-800 group-hover:text-ink-50">
                    <Icon name={m.icon} className="w-5 h-5" />
                  </span>
                  <div className="flex-1 min-w-0 md:grid md:grid-cols-2 md:items-center md:gap-6">
                    <div className="text-[16px] md:text-[17px] font-semibold text-ink-900">{m.n}</div>
                    <div className="text-[14px] text-ink-500">{m.r}</div>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Insurance + independence */}
      <RevealGroup id="assurance" className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-4">
        <div className="rounded-[28px] bg-accent-50 border border-accent-100 p-7 md:p-10">
          <span className="w-12 h-12 rounded-2xl bg-ink-50 text-accent-900 flex items-center justify-center">
            <Icon name="ShieldCheck" className="w-6 h-6" />
          </span>
          <h3 className="mt-6 text-[22px] font-bold text-ink-900">პროფესიული დაზღვევა</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
            IG GROUP-ის პროფესიული პასუხისმგებლობა დაზღვეულია. ეს კლიენტისთვის დამატებითი გარანტიაა, რომ ჩვენი მომსახურება სრული
            პასუხისმგებლობით სრულდება.
          </p>
          <span className="mt-5 block text-[14px] font-medium text-accent-900">
            მზღვეველი: „{company.insurer}“
          </span>
        </div>
        <div className="rounded-[28px] bg-brand-50 border border-brand-100 p-7 md:p-10">
          <span className="w-12 h-12 rounded-2xl bg-ink-50 text-brand-800 flex items-center justify-center">
            <Icon name="Scale" className="w-6 h-6" />
          </span>
          <h3 className="mt-6 text-[22px] font-bold text-ink-900">დამოუკიდებლობის პრინციპი</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
            აუდიტორულ მომსახურებას ვახორციელებთ დამოუკიდებლობის მოთხოვნების მკაცრი დაცვით.
          </p>
        </div>
      </RevealGroup>

      <ScrollScaleIn id="cta">
        <CtaBand />
      </ScrollScaleIn>
      <SiteFooter />
    </PageShell>
  );
}
