<script setup lang="ts">
import { Scale, ShieldCheck } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { team } from '@/content/team'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import PageHero from '@/components/ui/PageHero.vue'
import CountUp from '@/components/motion/CountUp.vue'
import ParallaxPhoto from '@/components/motion/ParallaxPhoto.vue'
import ScrollWords from '@/components/motion/ScrollWords.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { t, tm, rt } = useI18n()
const { to, locale } = useLocale()
useSeo({ title: () => t('meta.about.title'), description: () => t('meta.about.description') })

const years = new Date().getFullYear() - company.foundedYear
const mission = computed(() => (tm('about.mission.paragraphs') as string[]).map((p) => rt(p)))
const values = [
  { key: 'focus', icon: 'Target' },
  { key: 'trust', icon: 'Lock' },
  { key: 'professionalism', icon: 'Award' },
  { key: 'responsibility', icon: 'ShieldCheck' },
  { key: 'adaptability', icon: 'RefreshCw' },
  { key: 'experience', icon: 'Briefcase' },
]
// როლების შეჯამება team.ts-დან
const roles = computed(() => [
  { icon: 'ShieldCheck', n: team.filter((m) => m.saras).length, t: t('about.team.roles.auditors') },
  {
    icon: 'Calculator',
    n: team.filter((m) => m.icon === 'Calculator').length,
    t: t('about.team.roles.accountants'),
  },
  {
    icon: 'Briefcase',
    n: team.filter((m) => m.icon === 'Briefcase').length,
    t: t('about.team.roles.pm'),
  },
  {
    icon: 'Scale',
    n: team.filter((m) => m.icon === 'Scale').length,
    t: t('about.team.roles.lawyer'),
  },
])
const partners = team.filter((m) => m.saras)
const others = team.filter((m) => !m.saras)
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('nav.about') }]">
    <div v-reveal class="mt-8 grid items-end gap-8 pb-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
      <h1 class="h-display text-[32px] md:text-[54px]">
        {{ t('about.titleLead') }} <span class="text-brand-800">{{ t('about.titleAccent') }}</span>
      </h1>
      <p class="text-ink-600 text-[16px] leading-relaxed">
        {{ t('about.lead', { saras: company.saras }) }}
      </p>
    </div>
  </PageHero>

  <!-- ფოტოები + ციფრები -->
  <section class="mx-auto max-w-site px-3 md:px-6">
    <div v-reveal class="grid grid-cols-2 gap-3 md:h-[380px] md:grid-cols-12">
      <ParallaxPhoto
        name="binders"
        pos="center 40%"
        :distance="40"
        class="relative col-span-2 h-[260px] rounded-[28px] md:col-span-6 md:h-auto"
      />
      <ParallaxPhoto
        name="stamp"
        pos="65% 50%"
        :distance="70"
        sizes="(min-width: 768px) 25vw, 50vw"
        class="relative col-span-1 h-[200px] rounded-[28px] md:col-span-3 md:h-auto"
      />
      <div class="col-span-1 grid grid-rows-2 gap-3 md:col-span-3">
        <div class="bg-brand-800 text-ink-50 flex flex-col justify-end rounded-[28px] p-6">
          <CountUp :value="years" suffix="+" class="text-[40px] leading-none font-medium" />
          <span class="text-brand-200 mt-2 text-[13px]">{{ t('about.stats.years') }}</span>
        </div>
        <div class="bg-accent-50 flex flex-col justify-end rounded-[28px] p-6">
          <CountUp
            :value="team.length"
            class="text-accent-900 text-[40px] leading-none font-medium"
          />
          <span class="text-ink-600 mt-2 text-[13px]">{{ t('about.stats.team') }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- მისია -->
  <section class="container-site grid gap-8 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24">
    <h2 v-reveal class="h-display text-[28px] md:text-[40px]">{{ t('about.mission.title') }}</h2>
    <div class="text-ink-600 space-y-5 text-[17px] leading-relaxed">
      <p v-reveal>{{ mission[0] }}</p>
      <ScrollWords
        :text="mission[1]"
        class="text-ink-900 border-brand-800 border-l-2 pl-5 text-[22px] leading-snug font-semibold md:text-[28px]"
      />
      <p v-reveal>{{ mission[2] }}</p>
    </div>
  </section>

  <!-- ფასეულობები -->
  <section class="bg-ink-100/70 border-ink-200 border-y" aria-labelledby="values-title">
    <div class="container-site py-16 md:py-24">
      <h2 id="values-title" v-reveal class="h-display text-[28px] md:text-[40px]">
        {{ t('about.values.title') }}
      </h2>
      <ul v-reveal-group class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="v in values"
          :key="v.key"
          class="rounded-card bg-ink-50 border-ink-200 border p-6 md:p-7"
        >
          <span
            class="bg-brand-50 text-brand-800 flex size-12 items-center justify-center rounded-2xl"
          >
            <AppIcon :name="v.icon" />
          </span>
          <h3 class="text-ink-900 mt-6 text-[18px] leading-snug font-bold">
            {{ t(`about.values.items.${v.key}.title`) }}
          </h3>
          <p class="text-ink-500 mt-2 text-[14px] leading-relaxed">
            {{ t(`about.values.items.${v.key}.text`) }}
          </p>
        </li>
      </ul>
    </div>
  </section>

  <!-- გუნდი -->
  <section class="container-site py-16 md:py-24" aria-labelledby="team-title">
    <div v-reveal class="grid items-end gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
      <h2 id="team-title" class="h-display text-[30px] md:text-[44px]">
        {{ t('about.team.title') }}
      </h2>
      <p class="text-ink-600 text-[16px] leading-relaxed">{{ t('about.team.intro') }}</p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-10">
      <aside>
        <div class="bg-ink-100 rounded-[28px] p-7 lg:sticky lg:top-24">
          <CountUp
            :value="team.length"
            class="text-brand-800 block text-[72px] leading-none font-medium"
          />
          <div class="text-ink-600 mt-2 text-[15px]">{{ t('about.team.total') }}</div>
          <ul class="mt-8 space-y-4">
            <li v-for="r in roles" :key="r.t" class="flex items-center gap-4">
              <span
                class="bg-ink-50 text-brand-800 flex size-10 shrink-0 items-center justify-center rounded-full"
              >
                <AppIcon :name="r.icon" :size="18" />
              </span>
              <span class="text-ink-700 flex-1 text-[14px] leading-snug">{{ r.t }}</span>
              <span class="latin text-ink-900 text-[20px] font-medium">{{ r.n }}</span>
            </li>
          </ul>
        </div>
      </aside>

      <div>
        <ul v-reveal-group class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="(m, i) in partners"
            :key="m.id"
            class="flex h-full min-h-[260px] flex-col rounded-[28px] p-7 transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none"
            :class="i === 0 ? 'bg-brand-800 text-ink-50' : 'bg-ink-50 border-ink-200 border'"
          >
            <div class="flex items-start justify-between">
              <span
                class="flex size-14 items-center justify-center overflow-hidden rounded-2xl"
                :class="i === 0 ? 'bg-brand-700 text-ink-50' : 'bg-brand-50 text-brand-800'"
              >
                <img
                  v-if="m.photo"
                  :src="m.photo"
                  :alt="m.name[locale]"
                  loading="lazy"
                  class="size-full object-cover"
                />
                <AppIcon v-else :name="m.icon" :size="28" />
              </span>
              <span
                class="latin text-[12px]"
                :class="i === 0 ? 'text-brand-200' : 'text-ink-400'"
                >{{ m.saras }}</span
              >
            </div>
            <h3
              class="mt-auto pt-10 text-[22px] leading-snug font-bold"
              :class="i === 0 ? '' : 'text-ink-900'"
            >
              {{ m.name[locale] }}
            </h3>
            <p class="mt-1 text-[14px]" :class="i === 0 ? 'text-brand-100' : 'text-ink-500'">
              {{ m.role[locale] }}
            </p>
          </li>
        </ul>

        <ul v-reveal-group class="border-ink-200 mt-6 border-t">
          <li
            v-for="m in others"
            :key="m.id"
            class="group border-ink-200 hover:bg-brand-50 flex items-center gap-4 rounded-2xl border-b px-2 py-4 transition-colors duration-200 md:gap-6 md:px-4 md:py-5"
          >
            <span
              class="bg-ink-100 text-ink-700 group-hover:bg-brand-800 group-hover:text-ink-50 flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors duration-200"
            >
              <img
                v-if="m.photo"
                :src="m.photo"
                :alt="m.name[locale]"
                loading="lazy"
                class="size-full object-cover"
              />
              <AppIcon v-else :name="m.icon" :size="20" />
            </span>
            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:items-center md:gap-6">
              <h3 class="text-ink-900 text-[16px] font-semibold md:text-[17px]">
                {{ m.name[locale] }}
              </h3>
              <p class="text-ink-500 text-[14px]">{{ m.role[locale] }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- დაზღვევა + დამოუკიდებლობა -->
  <section v-reveal-group class="container-site grid gap-4 pb-16 md:grid-cols-2 md:pb-24">
    <div class="bg-accent-50 border-accent-100 rounded-[28px] border p-7 md:p-10">
      <span class="bg-ink-50 text-accent-900 flex size-12 items-center justify-center rounded-2xl">
        <ShieldCheck :size="24" :stroke-width="1.5" aria-hidden="true" />
      </span>
      <h2 class="text-ink-900 mt-6 text-[22px] font-bold">{{ t('about.insurance.title') }}</h2>
      <p class="text-ink-600 mt-3 text-[15px] leading-relaxed">{{ t('about.insurance.text') }}</p>
      <p class="text-accent-900 mt-5 text-[14px] font-medium">
        {{ t('about.insurance.insurer', { insurer: company.insurer[locale] }) }}
      </p>
    </div>
    <div class="bg-brand-50 border-brand-100 rounded-[28px] border p-7 md:p-10">
      <span class="bg-ink-50 text-brand-800 flex size-12 items-center justify-center rounded-2xl">
        <Scale :size="24" :stroke-width="1.5" aria-hidden="true" />
      </span>
      <h2 class="text-ink-900 mt-6 text-[22px] font-bold">{{ t('about.independence.title') }}</h2>
      <p class="text-ink-600 mt-3 text-[15px] leading-relaxed">
        {{ t('about.independence.text') }}
      </p>
    </div>
  </section>

  <CtaSection class="mb-20 md:mb-24" />
</template>
