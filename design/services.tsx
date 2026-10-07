import React from "react";
import { PageShell, SiteHeader, SiteFooter, CtaBand, Eyebrow, Icon, serviceList, Reveal, RevealGroup, ScrollScaleIn } from "./design-system";

export default function Services() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="services" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-8 md:pt-14 pb-12 md:pb-16">
          <div className="text-[13px] text-ink-500 flex items-center gap-1.5">
            მთავარი <Icon name="ChevronRight" className="w-3.5 h-3.5" /> <span className="text-ink-800">მომსახურებები</span>
          </div>
          <Reveal id="page-head" className="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-end">
            <div>
              <h1 className="text-[32px] md:text-[54px] leading-[1.1] font-extrabold tracking-tight text-ink-900">
                ფინანსური მომსახურება <span className="text-brand-800">ერთ სივრცეში</span>
              </h1>
            </div>
            <p className="text-[16px] leading-relaxed text-ink-600">
              აუდიტიდან ბიზნესის შეფასებამდე: ექვსი მიმართულება, რომელიც ფარავს თქვენი კომპანიის ფინანსურ, საგადასახადო და შეფასების
              საჭიროებებს.
            </p>
          </Reveal>
        </section>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 md:pb-24">
        <RevealGroup id="services-list" className="grid md:grid-cols-2 gap-4">
          {serviceList.map((s, i) => (
            <div
              key={s.slug}
              className={`group rounded-[28px] p-7 md:p-9 flex flex-col min-h-[260px] border ${
                i === 0 ? "bg-brand-800 border-brand-800 text-ink-50" : "bg-ink-50 border-ink-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    i === 0 ? "bg-brand-700 text-ink-50" : "bg-brand-50 text-brand-800"
                  }`}
                >
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <span className={`text-[13px] ${i === 0 ? "text-brand-200" : "text-ink-400"}`}>0{i + 1}</span>
              </div>
              <h2 className={`mt-auto pt-10 text-[22px] md:text-[26px] font-bold leading-snug ${i === 0 ? "" : "text-ink-900"}`}>{s.title}</h2>
              <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "text-brand-100" : "text-ink-500"}`}>{s.short}</p>
              <span className={`mt-6 inline-flex items-center gap-2 text-[14px] font-medium ${i === 0 ? "text-ink-50" : "text-brand-800"}`}>
                დეტალურად <Icon name="ArrowRight" className="w-4 h-4" />
              </span>
            </div>
          ))}
        </RevealGroup>
      </section>

      <ScrollScaleIn id="cta">
        <CtaBand />
      </ScrollScaleIn>
      <SiteFooter />
    </PageShell>
  );
}
