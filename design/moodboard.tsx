import React from "react";
import { BrandFonts, Logo, Eyebrow, Button, Icon, latin, Photo } from "./design-system";

const nav = ["მთავარი", "ჩვენ შესახებ", "მომსახურებები", "კონტაქტი"];

const features = [
  { icon: "audit", t: "აუდიტი", d: "ფინანსური ანგარიშგების დამოუკიდებელი აუდიტი საერთაშორისო სტანდარტებით." },
  { icon: "accounting", t: "ბუღალტერია", d: "აღრიცხვის სრული წარმოება და ანგარიშგება, დროულად და ზუსტად." },
  { icon: "business", t: "შეფასება", d: "ქონებისა და ბიზნესის ობიექტური, დასაბუთებული შეფასება." },
];

const services = [
  { tag: "აუდიტი", icon: "audit", d: "დამოუკიდებელი დასკვნა ინვესტორებისთვის" },
  { tag: "საგადასახადო", icon: "tax", d: "რისკები, სანამ ისინი ჯარიმად იქცევა" },
  { tag: "კონსულტაცია", icon: "consulting", d: "გადაწყვეტილებები ციფრებზე დაყრდნობით" },
  { tag: "ქონება", icon: "property", d: "უძრავი და მოძრავი ქონების შეფასება" },
];


function Select({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-pill border border-ink-200 bg-ink-50 px-5 py-3.5 text-[14px] text-ink-500">
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function Moodboard() {
  return (
    <div className="min-h-screen font-sans text-ink-800 bg-gradient-to-br from-brand-100 via-ink-100 to-accent-50 p-3 md:p-8">
      <BrandFonts />
      <div className="rounded-[28px] md:rounded-[36px] bg-ink-50 shadow-pop overflow-hidden">
        {/* Nav */}
        <nav className="flex items-center justify-between px-5 md:px-10 py-5">
          <Logo className="h-8 md:h-9 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-[14px] text-ink-700">
            {nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <span className="rounded-pill bg-brand-800 text-ink-50 px-4 md:px-5 py-2 md:py-2.5 text-[12px] md:text-[13px] font-medium">დაგვიკავშირდით</span>
        </nav>

        {/* Hero */}
        <section className="relative grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-4 px-5 md:px-10 pt-6 md:pt-10 pb-10">
          <div className="relative z-10 md:pt-16">
            <h1 className="text-[38px] md:text-[64px] leading-[1.08] font-semibold tracking-tight text-ink-900">
              თქვენი ფინანსები
              <br />
              <span className="text-brand-800">სანდო ხელში</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-ink-600 max-w-md">
              აუდიტი, ბუღალტერია, საგადასახადო რისკები და შეფასება ერთ სივრცეში, რომ თქვენ ბიზნესის ზრდაზე იფიქროთ.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button>დაგვიკავშირდით</Button>
              <Button variant="ghost">მომსახურებები</Button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["bg-brand-200", "bg-accent-200", "bg-brand-300"].map((c) => (
                  <span key={c} className={`w-9 h-9 rounded-full border-2 border-ink-50 ${c}`} />
                ))}
              </div>
              <p className="text-[13px] leading-snug text-ink-500">
                <span className="font-semibold text-ink-800">2 სერტიფიცირებული აუდიტორი</span>
                <br />5 მთავარი ბუღალტერი და იურისტი
              </p>
            </div>
          </div>

          <div className="relative">
            <Photo src="/assets/doc-hero.png" pos="center 25%" className="rounded-[28px] h-[420px] md:h-[560px]" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 rounded-b-[28px]" style={{ background: "linear-gradient(to top, var(--surface) 0%, rgb(250 248 245 / 0.6) 45%, rgb(250 248 245 / 0) 100%)" }} />
          </div>
        </section>

        {/* Features */}
        <section className="px-5 md:px-10 pb-12">
          <div className="grid md:grid-cols-3 md:divide-x divide-ink-200 gap-8 md:gap-0">
            {features.map((f) => (
              <div key={f.t} className="md:px-8 md:first:pl-0">
                <div className="flex items-center gap-3">
                  <span className="text-brand-800">
                    <Icon name={f.icon} className="w-6 h-6" />
                  </span>
                  <span className="text-[18px] font-semibold text-ink-900">{f.t}</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bento */}
        <section className="px-3 md:px-6 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:h-[260px]">
            <div className="col-span-2 md:col-span-3 rounded-card bg-brand-800 text-ink-50 p-6 flex flex-col justify-between min-h-[220px]">
              <span style={latin} className="text-[12px] tracking-[0.12em] uppercase text-brand-200">
                SARAS-F-412837
              </span>
              <div>
                <div className="text-[26px] leading-tight font-semibold">
                  15 წელი
                  <br />
                  ზუსტ ციფრებში
                </div>
                <p className="mt-2 text-[13px] text-brand-200">ვაჭრობა, მშენებლობა, წარმოება, ლოჯისტიკა</p>
                <span className="mt-5 inline-flex rounded-pill bg-ink-50 text-brand-800 px-4 py-2 text-[13px] font-medium">
                  ჩვენ შესახებ
                </span>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-3 h-[220px] md:h-auto">
              <Photo src="/assets/doc-desk.png" pos="78% 70%" className="rounded-card" />
              <Photo src="/assets/doc-stamp.png" pos="65% 55%" className="rounded-card" />
            </div>
            <Photo src="/assets/doc-binders.png" className="col-span-1 md:col-span-2 rounded-card h-[220px] md:h-auto" />
            <div className="col-span-2 md:col-span-2 rounded-card bg-ink-100 p-6 flex flex-col justify-between min-h-[200px]">
              <span className="text-[15px] font-medium text-ink-700 leading-snug">გამოცდილება სხვადასხვა ინდუსტრიაში</span>
              <div>
                <div style={latin} className="text-[56px] leading-none font-medium text-brand-800">
                  15+
                </div>
                <div className="mt-2 text-[13px] text-ink-500">წელი ბაზარზე</div>
              </div>
            </div>
            <Photo src="/assets/doc-desk.png" pos="30% 40%" className="col-span-2 md:col-span-3 rounded-card h-[220px] md:h-auto" />
          </div>
        </section>

        {/* Services + form */}
        <section className="px-5 md:px-10 py-12 grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 border-t border-ink-200">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-ink-900">რით დაგეხმარებით</h2>
            <div className="mt-6 space-y-3">
              {services.map((s) => (
                <div key={s.tag} className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-2 md:gap-3">
                  <div className="flex items-center justify-between rounded-pill bg-ink-100 px-4 py-3 text-[14px] font-medium text-ink-800">
                    {s.tag}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 rounded-pill bg-ink-100 px-3 py-2 min-w-0">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-ink-50 text-brand-800 flex items-center justify-center">
                      <Icon name={s.icon} className="w-4 h-4" />
                    </span>
                    <span className="text-[14px] leading-snug text-ink-700">{s.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-ink-900">მოგვწერეთ</h2>
            <div className="mt-6 space-y-3">
              <Select label="აირჩიეთ მომსახურება" />
              <Select label="კომპანიის ზომა" />
              <div className="rounded-pill border border-ink-200 bg-ink-50 px-5 py-3.5 text-[14px] text-ink-500">
                ელფოსტა ან ტელეფონი
              </div>
              <button type="button" className="w-full rounded-pill bg-ink-900 text-ink-50 py-3.5 text-[14px] font-medium">
                მოთხოვნის გაგზავნა
              </button>
            </div>
          </div>
        </section>

        <footer className="px-5 md:px-10 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-ink-100">
          <div className="flex items-center gap-2">
            {["bg-brand-800", "bg-brand-300", "bg-brand-100", "bg-ink-50", "bg-accent-300", "bg-accent-900"].map((c) => (
              <span key={c} className={`w-7 h-7 rounded-full border border-ink-200 ${c}`} />
            ))}
            <span className="ml-3 text-[13px] text-ink-500">მუდბორდი · v2</span>
          </div>
          <span style={latin} className="text-[12px] text-ink-500">
            IG GROUP · ID 404901095 · SARAS-F-412837
          </span>
        </footer>
      </div>
    </div>
  );
}
