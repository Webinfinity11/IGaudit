import React from "react";
import { PageShell, SiteHeader, SiteFooter, Button, Icon, serviceList, latin, Reveal, RevealGroup } from "./design-system";

export default function NotFound() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="none" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-16 md:pt-24 pb-16 text-center">
          <Reveal id="nf-head">
          <div style={latin} className="text-[110px] md:text-[180px] leading-none font-light tracking-tight text-brand-800">
            4<span className="text-brand-200">0</span>4
          </div>
          <h1 className="mt-4 text-[28px] md:text-[40px] font-extrabold tracking-tight text-ink-900">გვერდი ვერ მოიძებნა</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-600 max-w-md mx-auto">
            შესაძლოა ბმული მოძველებულია ან მისამართი არასწორადაა აკრეფილი.
          </p>
          <div className="mt-8 flex justify-center">
            <Button>მთავარ გვერდზე</Button>
          </div>
          </Reveal>
          <RevealGroup id="nf-links" className="mt-14 mx-auto max-w-3xl grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-left">
            {serviceList.map((s) => (
              <span key={s.slug} className="flex items-center gap-2 py-2 border-b border-ink-200 text-[14px] text-ink-700">
                <Icon name={s.icon} className="w-4 h-4 text-brand-800" />
                {s.title}
              </span>
            ))}
          </RevealGroup>
        </section>
      </div>
      <SiteFooter />
    </PageShell>
  );
}
