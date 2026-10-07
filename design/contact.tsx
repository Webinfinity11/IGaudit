import React from "react";
import { PageShell, SiteHeader, SiteFooter, Eyebrow, Icon, company, latin, Reveal, RevealGroup } from "./design-system";

function Field({ label, ph, optional = false, error }: { label: string; ph: string; optional?: boolean; error?: string }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[13px] font-medium text-ink-800">
        {label}
        {optional && <span className="font-normal text-ink-400">არასავალდებულო</span>}
      </span>
      <span
        className={`mt-1.5 block rounded-2xl border bg-ink-50 px-4 py-3.5 text-[15px] text-ink-400 ${
          error ? "border-brand-600 ring-2 ring-brand-100" : "border-ink-200"
        }`}
      >
        {ph}
      </span>
      {error && <span className="mt-1.5 block text-[12px] text-brand-700">{error}</span>}
    </label>
  );
}

export default function Contact() {
  return (
    <PageShell>
      <div className="bg-gradient-to-b from-brand-50 to-ink-50">
        <SiteHeader active="contact" />
        <section className="mx-auto max-w-[1200px] px-5 md:px-10 pt-8 md:pt-14 pb-12">
          <div className="text-[13px] text-ink-500 flex items-center gap-1.5">
            მთავარი <Icon name="ChevronRight" className="w-3.5 h-3.5" /> <span className="text-ink-800">კონტაქტი</span>
          </div>
          <Reveal id="page-head" className="mt-8 max-w-2xl">
            <h1 className="text-[34px] md:text-[54px] leading-[1.1] font-extrabold tracking-tight text-ink-900">დაგვიკავშირდით</h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-600">
              გაგვიზიარეთ თქვენი ამოცანა და დაგიკავშირდებით ერთი სამუშაო დღის განმავლობაში.
            </p>
          </Reveal>
        </section>
      </div>

      <RevealGroup id="contact-body" className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 md:pb-20 grid lg:grid-cols-[1.35fr_1fr] gap-6">
        {/* Form */}
        <div className="rounded-[28px] bg-ink-50 border border-ink-200 shadow-card p-6 md:p-10">
          <h2 className="text-[22px] font-bold text-ink-900">მოთხოვნის ფორმა</h2>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <Field label="სახელი, გვარი" ph="ნინო ბერიძე" />
            <Field label="კომპანიის დასახელება" ph="არასავალდებულო" />
            <Field label="ტელეფონი" ph="+995 5__ __ __ __" />
            <Field label="ელფოსტა" ph="name@company.ge" />
          </div>
          <div className="mt-4">
            <span className="text-[13px] font-medium text-ink-800">მომსახურება</span>
            <div className="mt-1.5 flex items-center justify-between rounded-2xl border border-ink-200 bg-ink-50 px-4 py-3.5 text-[15px] text-ink-400">
              აირჩიეთ მომსახურება <Icon name="ChevronDown" className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="flex items-center justify-between text-[13px] font-medium text-ink-800">
              შეტყობინება <span className="font-normal text-ink-400">არასავალდებულო</span>
            </span>
            <div className="mt-1.5 h-32 rounded-2xl border border-ink-200 bg-ink-50 px-4 py-3.5 text-[15px] text-ink-400">
              მოგვიყევით მოკლედ თქვენი ამოცანის შესახებ…
            </div>
          </div>
          <label className="mt-5 flex items-start gap-3 text-[14px] leading-snug text-ink-600">
            <span className="mt-0.5 w-5 h-5 shrink-0 rounded-md bg-brand-800 text-ink-50 flex items-center justify-center">
              <Icon name="Check" className="w-3.5 h-3.5" />
            </span>
            <span>
              ვეთანხმები პერსონალური მონაცემების დამუშავებას <span className="text-brand-800 underline underline-offset-2">კონფიდენციალურობის პოლიტიკის</span>{" "}
              შესაბამისად
            </span>
          </label>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <span className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand-800 text-ink-50 px-7 py-3.5 text-[15px] font-medium">
              გაგზავნა <Icon name="Send" className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="h-full flex flex-col gap-4">
          <div className="rounded-[28px] bg-brand-800 text-ink-50 p-7 md:p-8">
            <h2 className="text-[20px] font-bold">საკონტაქტო ინფორმაცია</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-brand-700 flex items-center justify-center">
                  <Icon name="Phone" className="w-[18px] h-[18px]" />
                </span>
                <div>
                  <div className="text-[12px] text-brand-200">ტელეფონი</div>
                  <div style={latin} className="text-[17px] font-medium">{company.phone}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-brand-700 flex items-center justify-center">
                  <Icon name="MapPin" className="w-[18px] h-[18px]" />
                </span>
                <div>
                  <div className="text-[12px] text-brand-200">მისამართი</div>
                  <div className="text-[16px] font-medium">{company.address}</div>
                </div>
              </li>
            </ul>
            <div style={latin} className="mt-7 pt-5 border-t border-brand-700 text-[12px] text-brand-200">
              ს/კ {company.idCode} · {company.saras}
            </div>
          </div>

          {/* Map placeholder (MapEmbed loads Google Maps on click) */}
          <div className="relative flex-1 min-h-[280px] rounded-[28px] overflow-hidden border border-ink-200 bg-ink-100">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300" aria-hidden>
              <rect width="400" height="300" fill="var(--color-ink-100)" />
              <path d="M-10 210 L420 120" stroke="var(--surface)" strokeWidth="18" />
              <path d="M120 -10 L180 320" stroke="var(--surface)" strokeWidth="12" />
              <path d="M-10 60 L420 90" stroke="var(--surface)" strokeWidth="8" />
              <path d="M300 -10 L260 320" stroke="var(--surface)" strokeWidth="8" />
              <rect x="20" y="230" width="80" height="50" rx="8" fill="var(--color-accent-100)" />
              <rect x="200" y="20" width="70" height="50" rx="8" fill="var(--color-accent-100)" />
            </svg>
            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-full flex flex-col items-center">
              <span className="rounded-pill bg-ink-50 shadow-pop px-3 py-1.5 text-[12px] font-medium text-ink-900 whitespace-nowrap">IG GROUP</span>
              <span className="mt-1 w-10 h-10 rounded-full bg-brand-800 text-ink-50 flex items-center justify-center shadow-pop">
                <Icon name="MapPin" className="w-5 h-5" />
              </span>
            </div>
            <span className="absolute left-4 right-4 bottom-4 flex items-center justify-between rounded-pill bg-ink-50 shadow-card px-4 py-2.5 text-[13px] font-medium text-brand-800">
              გახსნა Google Maps-ში <Icon name="ArrowUpRight" className="w-4 h-4" />
            </span>
          </div>
        </div>
      </RevealGroup>

      <SiteFooter />
    </PageShell>
  );
}
