import React from "react";
import { PageShell, SiteHeader, SiteFooter, CtaBand, Button, Icon, serviceList, company, latin, Reveal, RevealGroup, HeroLines, ScrollFadeOut, ParallaxPhoto, ClipRevealPhoto, ScrollWords, Counter, StickyStack, ScrollScaleIn } from "./design-system";

const why = [
  { icon: "Lock", t: "სანდოობა", d: "კლიენტის ინფორმაცია მკაცრად კონფიდენციალურია." },
  { icon: "Award", t: "პროფესიონალიზმი", d: "მუშაობა პროფესიული სტანდარტებისა და კანონმდებლობის შესაბამისად." },
  {
    icon: "Briefcase",
    t: "გამოცდილება",
    d: "15 წლიანი გამოცდილება ვაჭრობის, მშენებლობის, წარმოების, მომსახურების, სოფლის მეურნეობის, ლოჯისტიკისა და ტელეკომუნიკაციების სფეროს კომპანიებთან.",
  },
  { icon: "Target", t: "ფოკუსი თქვენს მიზნებზე", d: "გადაწყვეტა, რომელიც თქვენს ბიზნესს ერგება." },
];

const stats = [
  { n: 15, s: "+", l: "წელი ბაზარზე" },
  { n: 2, s: "", l: "სერტიფიცირებული აუდიტორი" },
  { n: 5, s: "", l: "მთავარი ბუღალტერი" },
  { n: 2011, s: "", l: "წლიდან ვსაქმიანობთ" },
];

const servicePhotos = ["/assets/doc-stamp.png", "/assets/doc-desk.png", "/assets/doc-hero.png", "/assets/doc-binders.png", "/assets/doc-hero.png", "/assets/doc-desk.png"];

export default function Home() {
  return (
    <PageShell>
      {/* 1. Hero banner: full-bleed photo, deep plum overlay, headline bottom-left, facts bar */}
      <section className="relative bg-brand-900 text-ink-50 overflow-hidden">
        <ParallaxPhoto id="hero-parallax" src="/assets/doc-hero.png" pos="60% 45%" distance={70} tone="soft" className="absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgb(38 0 42 / 0.72) 0%, rgb(38 0 42 / 0.38) 50%, rgb(38 0 42 / 0.05) 100%), linear-gradient(0deg, rgb(38 0 42 / 0.6) 0%, rgb(38 0 42 / 0) 40%)",
          }}
        />

        <div className="relative">
          <SiteHeader active="home" dark />
        </div>

        <ScrollFadeOut id="hero-out" className="relative mx-auto max-w-[1200px] px-5 md:px-10 pt-24 md:pt-40 pb-10 md:pb-14">
          <HeroLines
            id="hero-title"
            className="text-[27px] sm:text-[52px] md:text-[80px] leading-[1.06] font-extrabold tracking-tight"
            lines={[{ text: "სიზუსტე." }, { text: "კონფიდენციალურობა." }, { text: "სანდოობა.", className: "text-brand-300" }]}
          />
          <Reveal id="hero-copy" delay={0.45} y={12} className="mt-10 md:mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <p className="text-[16px] md:text-[19px] leading-relaxed text-ink-200 max-w-[560px]">
              აუდიტორული, საბუღალტრო, საგადასახადო და შეფასების მომსახურება ერთ სივრცეში. თქვენი ბიზნესის ფინანსები სანდო ხელშია.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-pill bg-ink-50 text-brand-800 px-7 py-4 text-[15px] font-semibold">
                დაგვიკავშირდით <Icon name="ArrowRight" className="w-[18px] h-[18px]" />
              </span>
              <span className="inline-flex items-center gap-3 rounded-pill border border-ink-50/40 px-7 py-4 text-[15px] font-medium">
                მომსახურებები
              </span>
            </div>
          </Reveal>
        </ScrollFadeOut>

        {/* Facts bar */}
        <Reveal id="hero-facts" delay={0.7} y={0} className="relative border-t border-ink-50/15">
          <div className="mx-auto max-w-[1200px] px-5 md:px-10 grid grid-cols-2 md:grid-cols-4">
            {[
              { k: "რეგისტრაცია", v: company.saras, latinV: true },
              { k: "ბაზარზე", v: "2011 წლიდან" },
              { k: "გუნდი", v: "2 აუდიტორი, 5 ბუღალტერი" },
              { k: "პასუხისმგებლობა", v: "დაზღვეულია" },
            ].map((f, i) => (
              <div key={f.k} className={`py-5 md:py-6 ${i % 2 ? "pl-5 border-l border-ink-50/15" : ""} ${i === 2 ? "md:pl-5 md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0 border-ink-50/15" : ""}`}>
                <div className="text-[12px] text-ink-300">{f.k}</div>
                <div style={f.latinV ? latin : undefined} className="mt-1 text-[15px] md:text-[16px] font-semibold text-ink-50">
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. Statement: words darken while scrolling through, then counters */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <ScrollWords
          id="statement"
          className="text-[26px] md:text-[44px] leading-[1.25] font-extrabold tracking-tight text-ink-900 max-w-[1000px]"
          text="IG GROUP ეხმარება კომპანიებს ფინანსური ამოცანების გამარტივებაში, რათა მათ დრო და ენერგია ბიზნესის განვითარებას დაუთმონ."
        />
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-ink-200">
          {stats.map((s, i) => (
            <div key={s.l} className={`pt-6 pb-2 border-ink-200 ${i % 2 ? "border-l pl-6 md:pl-8" : ""} ${i === 2 ? "md:border-l md:pl-8" : ""}`}>
              <Counter id={`stat-${i}`} value={s.n} suffix={s.s} className="block text-[44px] md:text-[64px] leading-none font-medium text-brand-800" />
              <div className="mt-3 text-[14px] leading-snug text-ink-600">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services: sticky stacking cards */}
      <section className="bg-ink-100/70 border-y border-ink-200">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid lg:grid-cols-[0.8fr_1.6fr] gap-10 lg:gap-14">
          <div>
            <div className="lg:sticky lg:top-24">
              <Reveal id="services-head">
                <h2 className="text-[30px] md:text-[44px] leading-[1.1] font-extrabold tracking-tight text-ink-900">რით შეგვიძლია დაგეხმაროთ</h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
                  ექვსი მიმართულება, რომელიც ფარავს თქვენი კომპანიის ფინანსურ, საგადასახადო და შეფასების საჭიროებებს.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand-800">
                  ყველა მომსახურება <Icon name="ArrowRight" className="w-[18px] h-[18px]" />
                </span>
              </Reveal>
            </div>
          </div>
          <StickyStack id="services-stack" top={96}>
            {serviceList.map((s, i) => (
              <article key={s.slug} className="rounded-[28px] bg-ink-50 border border-ink-200 shadow-card overflow-hidden grid sm:grid-cols-[1.2fr_1fr] min-h-[300px]">
                <div className="p-7 md:p-9 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center">
                      <Icon name={s.icon} className="w-6 h-6" />
                    </span>
                    <span style={latin} className="text-[14px] text-ink-400">
                      0{i + 1} / 06
                    </span>
                  </div>
                  <h3 className="mt-auto pt-10 text-[22px] md:text-[26px] font-bold leading-snug text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-brand-800">
                    დეტალურად <Icon name="ArrowRight" className="w-4 h-4" />
                  </span>
                </div>
                <ParallaxPhoto id={`service-photo-${i}`} src={servicePhotos[i]} distance={30} tone="soft" className="hidden sm:block" />
              </article>
            ))}
          </StickyStack>
        </div>
      </section>

      {/* 4. Why us: photo opens from an inset frame */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-[1fr_1.25fr] gap-10 md:gap-14">
        <div className="flex flex-col">
          <Reveal id="why-head">
            <h2 className="text-[30px] md:text-[44px] leading-[1.1] font-extrabold tracking-tight text-ink-900">პარტნიორი, რომელსაც ენდობით</h2>
          </Reveal>
          <ClipRevealPhoto id="why-photo" src="/assets/doc-desk.png" pos="75% 60%" className="mt-8 h-[280px] md:flex-1 md:min-h-[320px]" />
        </div>
        <RevealGroup id="why-grid" className="grid sm:grid-cols-2 gap-4">
          {why.map((w, i) => (
            <div key={w.t} className={`h-full rounded-card p-6 md:p-7 ${i === 0 ? "bg-brand-800 text-ink-50" : "bg-ink-50 border border-ink-200"}`}>
              <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${i === 0 ? "bg-brand-700 text-ink-50" : "bg-accent-50 text-accent-900"}`}>
                <Icon name={w.icon} className="w-6 h-6" />
              </span>
              <h3 className={`mt-6 text-[19px] font-bold ${i === 0 ? "text-ink-50" : "text-ink-900"}`}>{w.t}</h3>
              <p className={`mt-2 text-[14px] leading-relaxed ${i === 0 ? "text-brand-100" : "text-ink-500"}`}>{w.d}</p>
            </div>
          ))}
        </RevealGroup>
      </section>

      {/* 5. Trust facts (logo strip appears when clients.ts has entries) */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 md:pb-24">
        <Reveal id="trust" className="rounded-[28px] bg-accent-50 border border-accent-100 p-6 md:p-10 grid md:grid-cols-[1fr_1fr_1fr] gap-6 md:gap-10 items-center">
          <h2 className="text-[26px] md:text-[32px] leading-tight font-extrabold tracking-tight text-ink-900">ჩვენ გვენდობიან</h2>
          <div className="flex gap-4">
            <span className="w-11 h-11 shrink-0 rounded-full bg-ink-50 text-accent-900 flex items-center justify-center">
              <Icon name="ShieldCheck" className="w-5 h-5" />
            </span>
            <div>
              <div className="text-[16px] font-semibold text-ink-900">პროფესიული დაზღვევა</div>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-600">ჩვენი პროფესიული პასუხისმგებლობა დაზღვეულია.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="w-11 h-11 shrink-0 rounded-full bg-ink-50 text-accent-900 flex items-center justify-center">
              <Icon name="Users" className="w-5 h-5" />
            </span>
            <div>
              <div className="text-[16px] font-semibold text-ink-900">გუნდი</div>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-600">2 სერტიფიცირებული აუდიტორი, 5 მთავარი ბუღალტერი და იურისტი.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. CTA grows into place */}
      <ScrollScaleIn id="cta">
        <CtaBand />
      </ScrollScaleIn>

      <SiteFooter />
    </PageShell>
  );
}
