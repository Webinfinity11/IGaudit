import React from "react";
import { PageShell, SiteHeader, SiteFooter, ServiceCard, Eyebrow, Button, Icon, serviceList, company, latin, Photo, Reveal, RevealGroup, ParallaxPhoto, ScrollScaleIn } from "./design-system";

const items = [
  "ფინანსური ანგარიშგების სავალდებულო და ნებაყოფლობით აუდიტს;",
  "ფინანსური ინფორმაციის მიმოხილვას;",
  "შეთანხმებულ პროცედურებს;",
  "რეკომენდაციებს შიდა კონტროლის გასაუმჯობესებლად (მენეჯმენტის წერილი).",
];

export default function ServiceAudit() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="services" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-8 md:pt-14 pb-16 md:pb-24">
          <div className="text-[13px] text-ink-500 flex flex-wrap items-center gap-1.5">
            მთავარი <Icon name="ChevronRight" className="w-3.5 h-3.5" /> მომსახურებები <Icon name="ChevronRight" className="w-3.5 h-3.5" />
            <span className="text-ink-800">აუდიტორული მომსახურება</span>
          </div>

          <Reveal id="page-head" className="mt-10 grid lg:grid-cols-[1.45fr_1fr] gap-12 lg:gap-16">
            <div>
              <h1 className="text-[32px] md:text-[50px] leading-[1.1] font-extrabold tracking-tight text-ink-900">
                დამოუკიდებელი შეფასება, რომელსაც ენდობიან
              </h1>
              <p className="mt-6 text-[17px] md:text-[18px] leading-relaxed text-ink-600">
                ფინანსური ანგარიშგების აუდიტი ზრდის ინვესტორების, ბანკებისა და პარტნიორების ნდობას თქვენი კომპანიის მიმართ. აუდიტს ვატარებთ
                აუდიტის საერთაშორისო სტანდარტების (ISA) შესაბამისად.
              </p>

              <div className="mt-10 rounded-[28px] bg-ink-50 border border-ink-200 p-6 md:p-8">
                <h2 className="text-[20px] font-bold text-ink-900">მომსახურება მოიცავს:</h2>
                <ul className="mt-6 divide-y divide-ink-200">
                  {items.map((it, i) => (
                    <li key={it} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span style={latin} className="w-8 h-8 shrink-0 rounded-full bg-accent-50 text-accent-900 flex items-center justify-center text-[13px] font-medium">
                        0{i + 1}
                      </span>
                      <span className="pt-1 text-[16px] leading-relaxed text-ink-700">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button>მოითხოვეთ კონსულტაცია</Button>
                <span style={latin} className="inline-flex items-center gap-2 rounded-pill border border-ink-200 px-5 py-3.5 text-[15px] text-ink-700">
                  <Icon name="Phone" className="w-4 h-4 text-brand-800" /> {company.phone}
                </span>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-4">
                <div className="relative rounded-[28px] h-[360px] overflow-hidden">
                  <ParallaxPhoto id="audit-photo" src="/assets/doc-stamp.png" pos="70% 50%" distance={50} className="absolute inset-0" />
                  <div className="absolute left-5 top-5 w-14 h-14 rounded-2xl bg-ink-50 text-brand-800 flex items-center justify-center shadow-pop">
                    <Icon name="FileSearch" className="w-7 h-7" />
                  </div>
                </div>
                <div className="rounded-[28px] bg-brand-800 text-ink-50 p-7">
                  <div className="flex items-center gap-2 text-[13px] text-brand-200">
                    <Icon name="ShieldCheck" className="w-4 h-4" /> რეგისტრირებული აუდიტორული ფირმა
                  </div>
                  <div style={latin} className="mt-3 text-[22px] font-medium">{company.saras}</div>
                  <p className="mt-3 text-[14px] leading-relaxed text-brand-100">
                    2 სერტიფიცირებული აუდიტორი · პროფესიული პასუხისმგებლობა დაზღვეულია
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </section>
      </div>

      <section className="bg-ink-100/70 border-y border-ink-200">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-20">
          <h2 className="text-[26px] md:text-[34px] font-extrabold tracking-tight text-ink-900">სხვა მომსახურებები</h2>
          <RevealGroup id="other-services" className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {serviceList
              .filter((s) => s.slug !== "audit")
              .map((s) => (
                <ServiceCard key={s.slug} s={s} compact />
              ))}
          </RevealGroup>
        </div>
      </section>

      <SiteFooter flush />
    </PageShell>
  );
}
