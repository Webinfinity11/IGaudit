<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import PageHero from '@/components/ui/PageHero.vue'

const { t, tm, rt } = useI18n()
const { to, locale } = useLocale()
useSeo({ title: () => t('meta.privacy.title'), description: () => t('meta.privacy.description') })

type Section = { title: string; text: string }
const sections = computed(() =>
  (tm('privacy.sections') as Section[]).map((s, i) => ({
    id: `section-${i + 1}`,
    title: rt(s.title),
    text: rt(s.text),
  })),
)

// სარჩევში აქტიური სექცია
const active = ref('section-1')
let observer: IntersectionObserver | undefined
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = e.target.id)),
    { rootMargin: '-30% 0px -60% 0px' },
  )
  sections.value.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer?.observe(el)
  })
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('privacy.title') }]">
    <div v-reveal class="mt-8 pb-10">
      <h1 class="h-display max-w-3xl text-[32px] md:text-[50px]">{{ t('privacy.title') }}</h1>
      <p class="text-ink-500 mt-5 flex items-center gap-2 text-[14px]">
        <Clock :size="16" aria-hidden="true" /> {{ t('privacy.draftNote') }}
      </p>
    </div>
  </PageHero>

  <section class="container-site grid gap-10 pb-20 md:grid-cols-[260px_1fr] md:gap-16 md:pb-24">
    <nav class="hidden md:block" :aria-label="t('privacy.toc')">
      <div class="rounded-card bg-ink-100 sticky top-24 p-5">
        <p class="text-ink-500 text-[12px] font-medium">{{ t('privacy.toc') }}</p>
        <ol class="text-ink-700 mt-3 space-y-2.5 text-[14px]">
          <li v-for="(s, i) in sections" :key="s.id">
            <a
              :href="`#${s.id}`"
              class="hover:text-brand-800 flex gap-2 transition-colors"
              :class="active === s.id && 'text-brand-800 font-medium'"
              :aria-current="active === s.id ? 'location' : undefined"
            >
              <span class="latin text-ink-400">0{{ i + 1 }}</span> {{ s.title }}
            </a>
          </li>
        </ol>
      </div>
    </nav>
    <div v-reveal-group class="max-w-[680px] space-y-10">
      <article v-for="(s, i) in sections" :id="s.id" :key="s.id" class="scroll-mt-28">
        <div class="flex items-baseline gap-3">
          <span class="latin text-brand-400 text-[14px]">0{{ i + 1 }}</span>
          <h2 class="text-ink-900 text-[22px] font-bold md:text-[24px]">{{ s.title }}</h2>
        </div>
        <p class="text-ink-600 mt-3 text-[16px] leading-[1.75]">{{ s.text }}</p>
      </article>
      <div class="rounded-card bg-brand-50 border-brand-100 border p-6">
        <h2 class="text-ink-900 text-[18px] font-bold">{{ t('privacy.contactTitle') }}</h2>
        <p class="text-ink-700 mt-2 text-[15px]">
          {{ company.name }} · {{ company.address[locale] }}, {{ company.city[locale] }} ·
          <a :href="company.phoneHref" class="latin hover:text-brand-800">{{ company.phone }}</a>
          <template v-if="company.email">
            ·
            <a :href="`mailto:${company.email}`" class="latin hover:text-brand-800">{{
              company.email
            }}</a>
          </template>
        </p>
      </div>
    </div>
  </section>
</template>
