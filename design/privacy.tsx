import React from "react";
import { PageShell, SiteHeader, SiteFooter, Eyebrow, Icon, company, latin, Reveal, RevealGroup } from "./design-system";

const sections = [
  {
    t: "რა მონაცემებს ვაგროვებთ",
    d: "საკონტაქტო ფორმის საშუალებით ვიღებთ თქვენ მიერ მითითებულ ინფორმაციას: სახელს, გვარს, კომპანიის დასახელებას, ტელეფონის ნომერს, ელფოსტას, არჩეულ მომსახურებას და შეტყობინების ტექსტს.",
  },
  {
    t: "დამუშავების მიზანი",
    d: "მონაცემები გამოიყენება მხოლოდ თქვენს მოთხოვნაზე პასუხის გასაცემად და შესაბამისი მომსახურების შესათავაზებლად. მონაცემები მესამე პირებს არ გადაეცემა, გარდა ფორმის ტექნიკური გაგზავნის სერვისისა.",
  },
  {
    t: "Cookie-ები და ანალიტიკა",
    d: "საიტის მუშაობის ანალიზისთვის ვიყენებთ ანალიტიკის სერვისს, რომელიც ჩაირთვება მხოლოდ თქვენი თანხმობის შემდეგ. თანხმობის შეცვლა შეგიძლიათ ბრაუზერის მონაცემების გასუფთავებით.",
  },
  {
    t: "თქვენი უფლებები",
    d: "გაქვთ უფლება მოითხოვოთ თქვენი მონაცემების ნახვა, შესწორება ან წაშლა. ამისთვის დაგვიკავშირდით ქვემოთ მითითებულ საკონტაქტო ინფორმაციაზე.",
  },
];

export default function Privacy() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="none" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-8 md:pt-14 pb-10">
          <div className="text-[13px] text-ink-500 flex items-center gap-1.5">
            მთავარი <Icon name="ChevronRight" className="w-3.5 h-3.5" /> <span className="text-ink-800">კონფიდენციალურობის პოლიტიკა</span>
          </div>
          <Reveal id="page-head" className="mt-8">
            <h1 className="text-[32px] md:text-[50px] leading-[1.1] font-extrabold tracking-tight text-ink-900 max-w-3xl">
              კონფიდენციალურობის პოლიტიკა
            </h1>
            <div className="mt-5 flex items-center gap-2 text-[14px] text-ink-500">
              <Icon name="Clock" className="w-4 h-4" /> სამუშაო ვერსია. საბოლოო ტექსტი დაზუსტდება იურისტთან.
            </div>
          </Reveal>
        </section>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 grid md:grid-cols-[260px_1fr] gap-10 md:gap-16">
        <nav className="hidden md:block">
          <div className="sticky top-8 rounded-card bg-ink-100 p-5">
            <div className="text-[12px] font-medium text-ink-500">შინაარსი</div>
            <ol className="mt-3 space-y-2.5 text-[14px] text-ink-700">
              {sections.map((s, i) => (
                <li key={s.t} className={`flex gap-2 ${i === 0 ? "text-brand-800 font-medium" : ""}`}>
                  <span style={latin} className="text-ink-400">0{i + 1}</span> {s.t}
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <RevealGroup id="policy-sections" className="max-w-[680px] space-y-10">
          {sections.map((s, i) => (
            <article key={s.t}>
              <div className="flex items-baseline gap-3">
                <span style={latin} className="text-[14px] text-brand-400">0{i + 1}</span>
                <h2 className="text-[22px] md:text-[24px] font-bold text-ink-900">{s.t}</h2>
              </div>
              <p className="mt-3 text-[16px] leading-[1.75] text-ink-600">{s.d}</p>
            </article>
          ))}
          <div className="rounded-card bg-brand-50 border border-brand-100 p-6">
            <h2 className="text-[18px] font-bold text-ink-900">კონტაქტი</h2>
            <p style={latin} className="mt-2 text-[15px] text-ink-700">
              IG GROUP · {company.address} · {company.phone}
            </p>
          </div>
        </RevealGroup>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
