import React from "react";
import { BrandFonts, Logo, Rule, Eyebrow, Button, Icon, serif, latin } from "./design-system";

const ramps: { name: string; key: "brand" | "accent" | "ink"; role: string; hex: string[] }[] = [
  {
    name: "Plum",
    key: "brand",
    role: "ძირითადი · ლოგოს „IG“",
    hex: ["#fbf6fb", "#f4e9f5", "#e8d2eb", "#d3aed8", "#b47fbd", "#91509c", "#74327f", "#5f1d6a", "#520059", "#3e0044", "#26002a"],
  },
  {
    name: "Forest",
    key: "accent",
    role: "დამხმარე · ლოგოს „group“",
    hex: ["#f4f7f1", "#e5eedf", "#cadcbf", "#a4c497", "#76a567", "#518743", "#3b6c30", "#275722", "#144b10", "#034403", "#012601"],
  },
  {
    name: "Paper & Ink",
    key: "ink",
    role: "ნეიტრალური · ფონი და ტექსტი",
    hex: ["#faf8f5", "#f3f0eb", "#e7e2db", "#d3ccc3", "#a8a097", "#7a736b", "#5c5650", "#433e3a", "#2c2826", "#1d1a19", "#100e0d"],
  },
];
const steps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

function Section({
  num,
  label,
  title,
  lead,
  children,
}: {
  num: string;
  label: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24 border-t border-ink-200">
      <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-16">
        <div>
          <h2 style={serif} className="text-[30px] md:text-[34px] leading-[1.25] font-normal text-ink-900">
            {title}
          </h2>
          {lead && <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{lead}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

// Brand book v1
export default function Brandbook() {
  return (
    <div className="min-h-screen bg-ink-50 text-ink-800 font-sans">
      <BrandFonts />
      {/* Cover */}
      <header className="relative overflow-hidden px-6 md:px-16 pt-10 pb-20 md:pb-28">
        <div className="flex items-center justify-between text-[13px] text-ink-500">
          <Logo className="h-9 w-auto" />
          <span style={latin} className="tracking-[0.14em] uppercase">
            Brand guidelines · v1.0 · 2026
          </span>
        </div>
        <div className="mt-20 md:mt-28">
          <h1 style={serif} className="text-[30px] sm:text-[44px] md:text-[76px] leading-[1.12] break-words font-light text-brand-900">
            სიზუსტე. კონფიდენციალურობა.
            <br />
            <span className="text-accent-900">სანდოობა.</span>
          </h1>
          <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-ink-200 pt-8">
            <p className="text-[17px] leading-relaxed text-ink-600 max-w-xl">
              IG GROUP-ის ვიზუალური ენა: ღია, მშვიდი და ზუსტი. ეს დოკუმენტი განსაზღვრავს ლოგოს, ფერებს,
              ტიპოგრაფიას და ელემენტებს, რომლებზეც აეწყობა საიტის ყველა გვერდი.
            </p>
            <div style={latin} className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-500">
              {["01 ლოგო", "02 ფერი", "03 ტიპოგრაფია", "04 ელემენტები", "05 ტონი"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-brand-100 opacity-60 blur-3xl" />
      </header>

      {/* 01 Logo */}
      <Section
        num="01"
        label="ლოგო"
        title="ნიშანი, რომელიც ხაზს უსვამს"
        lead="„G“-ს ჰორიზონტალური ხაზი გრძელდება და „group“-ს ზემოთ ჩერდება. ეს ხაზი ბრენდის მთავარი გრაფიკული მოტივია."
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2 rounded-card bg-ink-50 border border-ink-200 flex items-center justify-center py-16 md:py-20 relative">
            <div className="relative">
              <Logo className="h-28 md:h-36 w-auto" />
              <div aria-hidden className="absolute -inset-8 md:-inset-10 border border-dashed border-brand-300 rounded-sm" />
            </div>
            <span className="absolute left-5 bottom-4 text-[12px] text-ink-500">
              ძირითადი ვერსია · თავისუფალი ზონა = „I“-ს სიგანე × 2
            </span>
          </div>
          <div className="rounded-card bg-brand-800 flex items-center justify-center py-12 relative">
            <Logo tone="white" className="h-20 w-auto" />
            <span className="absolute left-5 bottom-4 text-[12px] text-brand-200">ინვერსიული · Plum 800-ზე</span>
          </div>
          <div className="rounded-card bg-ink-100 flex items-center justify-center py-12 relative">
            <Logo tone="plum" className="h-20 w-auto" />
            <span className="absolute left-5 bottom-4 text-[12px] text-ink-500">მონოქრომი · ბეჭდვა, ბეჭედი</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { t: "მინ. ზომა", d: "ეკრანზე 96px სიგანე · ბეჭდვაში 25მმ" },
            { t: "ფავიკონი", d: "მხოლოდ „IG“ ნიშანი, Plum 800" },
          ].map((r) => (
            <div key={r.t} className="rounded-card border border-ink-200 p-5">
              <div className="text-[14px] font-medium text-ink-900">{r.t}</div>
              <div className="mt-1 text-[13px] text-ink-500 leading-snug">{r.d}</div>
            </div>
          ))}
          {[
            { t: "არ გაწელოთ", cls: "scale-x-150" },
            { t: "არ შეცვალოთ ფერი", cls: "hue-rotate-180" },
          ].map((r) => (
            <div key={r.t} className="rounded-card border border-ink-200 p-5 relative overflow-hidden">
              <div className="h-10 flex items-center justify-center">
                <Logo className={`h-8 w-auto ${r.cls} opacity-70`} />
              </div>
              <div className="mt-3 flex items-center gap-2 text-[13px] text-ink-600">
                <span className="w-4 h-4 rounded-full border border-brand-700 text-brand-700 text-[10px] leading-[14px] text-center">✕</span>
                {r.t}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 Colour */}
      <Section
        num="02"
        label="ფერი"
        title="ღია ფონი, ორი ლოგოს ფერი"
        lead="ბაზა თბილი ქაღალდის ტონია. Plum: ღილაკები, სათაურები, ბმულები. Forest: მხოლოდ მცირე აქცენტად."
      >
        <div className="grid grid-cols-3 gap-4">
          {[
            { n: "Plum 800", h: "#520059", bg: "bg-brand-800", fg: "text-ink-50" },
            { n: "Forest 900", h: "#034403", bg: "bg-accent-900", fg: "text-ink-50" },
            { n: "Paper 50", h: "#FAF8F5", bg: "bg-ink-50 border border-ink-200", fg: "text-ink-800" },
          ].map((c) => (
            <div key={c.n} className={`rounded-card ${c.bg} ${c.fg} h-40 md:h-52 p-5 flex flex-col justify-end`}>
              <div className="text-[15px] font-medium">{c.n}</div>
              <div style={latin} className="text-[13px] opacity-75 uppercase">
                {c.h}
              </div>
            </div>
          ))}
        </div>

        {/* proportion */}
        <div className="mt-6">
          <div className="flex h-3 rounded-pill overflow-hidden">
            <div className="bg-ink-100" style={{ width: "62%" }} />
            <div className="bg-ink-300" style={{ width: "20%" }} />
            <div className="bg-brand-800" style={{ width: "13%" }} />
            <div className="bg-accent-900" style={{ width: "5%" }} />
          </div>
          <div className="mt-2 flex justify-between text-[12px] text-ink-500">
            <span>Paper 60%</span>
            <span>Ink 20%</span>
            <span>Plum 15%</span>
            <span>Forest 5%</span>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {ramps.map((r) => (
            <div key={r.key}>
              <div className="flex items-baseline justify-between">
                <span className="text-[14px] font-medium text-ink-900">{r.name}</span>
                <span className="text-[12px] text-ink-500">{r.role}</span>
              </div>
              <div className="mt-2 grid grid-cols-11 rounded-field overflow-hidden border border-ink-200">
                {r.hex.map((h, i) => (
                  <div key={h} className="h-14 md:h-16 flex flex-col justify-end p-1.5" style={{ background: h }}>
                    <span
                      style={latin}
                      className={`text-[10px] leading-none ${i >= 5 ? "text-ink-50" : "text-ink-700"}`}
                    >
                      {steps[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-ink-500">
          კონტრასტი: Plum 800 Paper-ზე 13.4:1, Ink 600 Paper-ზე 7.2:1 (WCAG AAA). Forest არ გამოიყენება გრძელ ტექსტში.
        </p>
      </Section>

      {/* 03 Typography */}
      <Section
        num="03"
        label="ტიპოგრაფია"
        title="სერიფი ნდობისთვის, სანსი სიცხადისთვის"
        lead="Noto Serif Georgian: სათაურები. Noto Sans Georgian: ტექსტი და ინტერფეისი. Jost: ლათინური და ციფრები, ლოგოს გეომეტრიის გაგრძელება."
      >
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div style={serif} className="text-[64px] leading-none text-brand-800 font-light">
              აბგ
            </div>
            <div className="mt-6 text-[14px] font-medium text-ink-900">Noto Serif Georgian</div>
            <div className="text-[12px] text-ink-500">Light 300 · Regular 400</div>
          </div>
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div className="text-[64px] leading-none text-ink-900" style={{ fontFamily: '"Noto Sans Georgian", sans-serif' }}>
              აბგ
            </div>
            <div className="mt-6 text-[14px] font-medium text-ink-900">Noto Sans Georgian</div>
            <div className="text-[12px] text-ink-500">Regular 400 · Medium 500 · Semibold 600</div>
          </div>
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div style={latin} className="text-[64px] leading-none text-accent-900 font-light">
              Ag 15
            </div>
            <div className="mt-6 text-[14px] font-medium text-ink-900">Jost</div>
            <div className="text-[12px] text-ink-500">Light 300 · Regular 400 · Medium 500</div>
          </div>
        </div>

        <div className="mt-10 divide-y divide-ink-200 border-y border-ink-200">
          {[
            { tag: "H1 · 56/64 · Serif 300", el: <span style={serif} className="text-[40px] md:text-[56px] leading-[1.15] font-light text-ink-900">თქვენი ფინანსები სანდო ხელში</span> },
            { tag: "H2 · 36/44 · Serif 400", el: <span style={serif} className="text-[30px] md:text-[36px] leading-snug text-ink-900">ჩვენი მომსახურებები</span> },
            { tag: "H3 · 20/28 · Sans 600", el: <span className="text-[20px] leading-7 font-semibold text-ink-900">აუდიტორული მომსახურება</span> },
            { tag: "Body · 16/26 · Sans 400", el: <span className="text-[16px] leading-[26px] text-ink-600 max-w-xl block">ფინანსური ანგარიშგების დამოუკიდებელი აუდიტი საერთაშორისო სტანდარტების შესაბამისად.</span> },
            { tag: "Caption · 13/20 · Jost", el: <span style={latin} className="text-[13px] tracking-[0.12em] uppercase text-ink-500">SARAS-F-412837 · Since 2011</span> },
          ].map((r) => (
            <div key={r.tag} className="py-5 grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-baseline">
              <span style={latin} className="text-[12px] text-ink-400">{r.tag}</span>
              {r.el}
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Elements */}
      <Section
        num="04"
        label="ელემენტები"
        title="ხაზი, ხატულა, ღილაკი"
        lead="ყველა ელემენტი ერთ ლოგიკას მისდევს: თხელი ხაზი, მრგვალი კუთხე, ბევრი ჰაერი."
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div className="text-[13px] text-ink-500">ხაზის მოტივი</div>
            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4">
                <Rule /> <span className="text-[14px] text-ink-700">სექციის მარკერი · 48×2</span>
              </div>
              <div className="flex items-center gap-4">
                <Rule tone="accent" /> <span className="text-[14px] text-ink-700">აქცენტი · Forest</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="block h-px flex-1 bg-ink-200" />
                <span className="text-[14px] text-ink-700">გამყოფი · Ink 200</span>
              </div>
            </div>
          </div>
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div className="text-[13px] text-ink-500">ხატულები · ხაზოვანი 1.5px</div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {["audit", "accounting", "tax", "consulting", "property", "business", "lock", "target"].map((n) => (
                <div key={n} className="aspect-square rounded-field bg-brand-50 text-brand-800 flex items-center justify-center">
                  <Icon name={n} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div className="text-[13px] text-ink-500">ღილაკები</div>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Button>დაგვიკავშირდით</Button>
              <Button variant="secondary">გაიგეთ მეტი</Button>
              <Button variant="ghost">ყველა სერვისი</Button>
            </div>
          </div>
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6">
            <div className="text-[13px] text-ink-500">ფორმის ველი</div>
            <label className="mt-5 block text-[13px] font-medium text-ink-700">ელფოსტა</label>
            <div className="mt-1.5 rounded-field border border-ink-300 bg-ink-50 px-4 py-3 text-[15px] text-ink-400">
              name@company.ge
            </div>
          </div>
        </div>

        {/* card sample */}
        <div className="mt-4 rounded-card bg-ink-50 border border-ink-200 p-6 md:p-8 grid md:grid-cols-[1fr_1fr] gap-6 items-center">
          <div className="rounded-card bg-ink-50 border border-ink-200 p-6 shadow-card">
            <div className="w-11 h-11 rounded-field bg-brand-50 text-brand-800 flex items-center justify-center">
              <Icon name="audit" />
            </div>
            <div className="mt-5 text-[18px] font-semibold text-ink-900">აუდიტორული მომსახურება</div>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
              ფინანსური ანგარიშგების დამოუკიდებელი აუდიტი საერთაშორისო სტანდარტების შესაბამისად.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[14px] font-medium text-brand-800">
              <Rule className="w-6" /> დეტალურად
            </div>
          </div>
          <div className="text-[14px] leading-relaxed text-ink-600">
            <div className="text-[13px] text-ink-500 mb-3">ბარათი</div>
            რადიუსი 20px · ჩარჩო Ink 200 · ჩრდილი მხოლოდ ჰოვერზე ან აწეულ ბარათზე. ხატულა Plum 50-ის კვადრატში.
            ბმული იწყება ხაზის მოტივით.
          </div>
        </div>
      </Section>

      {/* 05 Voice */}
      <Section
        num="05"
        label="ხმა და ტონი"
        title="ვსაუბრობთ როგორც პარტნიორი"
        lead="მოკლე წინადადებები, კონკრეტული ფაქტები, ზედმეტი ეპითეტების გარეშე."
      >
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { t: "ზუსტი", d: "ციფრები და ფაქტები: SARAS ნომერი, 15 წელი, 2 აუდიტორი.", ex: "„2011 წლიდან“ და არა „დიდი ხანია“" },
            { t: "მშვიდი", d: "არანაირი ძახილის ნიშანი და გადაჭარბება.", ex: "„დაგიკავშირდებით“ და არა „არ გამოტოვოთ!“" },
            { t: "ადამიანური", d: "მივმართავთ „თქვენ“-ით, ვსაუბრობთ კლიენტის მიზანზე.", ex: "„თქვენს ბიზნესს მოერგება“" },
          ].map((v) => (
            <div key={v.t} className="rounded-card border border-ink-200 p-6">
              <div style={serif} className="text-[24px] text-brand-800">{v.t}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-600">{v.d}</p>
              <p className="mt-4 pt-4 border-t border-ink-200 text-[13px] text-accent-900">{v.ex}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="px-6 md:px-16 py-10 border-t border-ink-200 flex items-center justify-between text-[12px] text-ink-500">
        <Logo className="h-7 w-auto" />
        <span style={latin}>IG GROUP · ID 404901095 · SARAS-F-412837</span>
      </footer>
    </div>
  );
}
