<script setup lang="ts">
import { Building2, CalendarCheck, Lock } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { clients } from '@/content/clients'
import { company } from '@/content/company'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import PageHero from '@/components/ui/PageHero.vue'
import CountUp from '@/components/motion/CountUp.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { t } = useI18n()
const { to, locale } = useLocale()
useSeo({ title: () => t('meta.clients.title'), description: () => t('meta.clients.description') })

const published = clients.filter((c) => c.consent)
const logos = published.filter((c) => c.logo)
const named = published.filter((c) => !c.logo)
const years = new Date().getFullYear() - company.foundedYear
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('nav.clients') }]">
    <div v-reveal class="mt-8 grid items-end gap-8 pb-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
      <h1 class="h-display text-[32px] md:text-[54px]">
        {{ t('clients.titleLead') }}
        <span class="text-brand-800">{{ t('clients.titleAccent') }}</span>
      </h1>
      <p class="text-ink-600 text-[16px] leading-relaxed">{{ t('clients.lead') }}</p>
    </div>
  </PageHero>

  <!-- ლოგოები: ერთნაირი ჩარჩოები, ფაილებიც ერთ ზომაზეა (480×240) -->
  <section class="container-site pt-4 pb-16 md:pb-24" aria-labelledby="clients-grid-title">
    <h2 id="clients-grid-title" class="sr-only">{{ t('clients.gridTitle') }}</h2>
    <ul v-reveal-group class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      <li
        v-for="c in logos"
        :key="c.logo"
        class="group bg-ink-50 border-ink-200 hover:border-brand-200 hover:shadow-card relative flex aspect-[2/1] items-center justify-center overflow-hidden rounded-[28px] border p-3 transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none md:p-4"
      >
        <span
          aria-hidden="true"
          class="from-brand-50 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <img
          :src="c.logo"
          :alt="c.name || t('clients.logoAlt')"
          :title="c.name || undefined"
          width="480"
          height="240"
          loading="lazy"
          decoding="async"
          class="relative size-full object-contain transition duration-300 group-hover:scale-[1.04] motion-reduce:transform-none"
        />
      </li>
    </ul>

    <!-- ლოგოს გარეშე კომპანიები - სახელით, იმავე ჩარჩოებში -->
    <template v-if="named.length">
      <h3 v-reveal class="text-ink-500 mt-10 text-[14px] font-medium md:mt-14">
        {{ t('clients.alsoTrust') }}
      </h3>
      <ul v-reveal-group class="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        <li
          v-for="c in named"
          :key="c.name"
          class="group bg-ink-50 border-ink-200 hover:border-brand-200 hover:shadow-card relative flex min-h-[112px] flex-col items-center justify-center overflow-hidden rounded-[28px] border px-4 py-6 text-center transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none md:min-h-[136px]"
        >
          <span
            aria-hidden="true"
            class="from-brand-50 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span class="h-display text-ink-900 relative text-[17px] leading-tight md:text-[22px]">
            {{ locale === 'en' ? (c.nameEn ?? c.name) : c.name }}
          </span>
        </li>
      </ul>
    </template>

    <!-- ფაქტები -->
    <div v-reveal-group class="mt-10 grid gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
      <div class="bg-brand-800 text-ink-50 flex items-center gap-5 rounded-[28px] p-6 md:p-7">
        <span class="bg-brand-700 flex size-12 shrink-0 items-center justify-center rounded-2xl">
          <CalendarCheck :size="22" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <div>
          <CountUp :value="years" suffix="+" class="text-[32px] leading-none font-medium" />
          <div class="text-brand-200 mt-1 text-[13px]">{{ t('clients.years') }}</div>
        </div>
      </div>
      <div
        class="bg-accent-50 border-accent-100 flex items-center gap-5 rounded-[28px] border p-6 md:p-7"
      >
        <span
          class="bg-ink-50 text-accent-900 flex size-12 shrink-0 items-center justify-center rounded-2xl"
        >
          <Building2 :size="22" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <div>
          <CountUp
            :value="published.length"
            suffix="+"
            class="text-accent-900 text-[32px] leading-none font-medium"
          />
          <div class="text-ink-600 mt-1 text-[13px]">{{ t('clients.companies') }}</div>
        </div>
      </div>
      <div class="bg-ink-100 flex items-center gap-5 rounded-[28px] p-6 md:p-7">
        <span
          class="bg-ink-50 text-brand-800 flex size-12 shrink-0 items-center justify-center rounded-2xl"
        >
          <Lock :size="22" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <div>
          <div class="text-ink-900 text-[16px] font-semibold">{{ t('clients.confidential') }}</div>
          <p class="text-ink-600 mt-1 text-[13px] leading-relaxed">
            {{ t('clients.confidentialText') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection class="mb-20 md:mb-24" />
</template>
