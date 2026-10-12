<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { resourceGroups } from '@/content/resources'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import PageHero from '@/components/ui/PageHero.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { t } = useI18n()
const { to, locale } = useLocale()

useSeo({
  title: () => t('meta.resources.title'),
  description: () => t('meta.resources.description'),
})

/** ბმულის ტექსტად - დომენი, `www.`-ის გარეშე */
const host = (url: string) => new URL(url).hostname.replace(/^www\./, '')
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('nav.resources') }]">
    <div v-reveal class="mt-8 grid items-end gap-8 pb-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
      <h1 class="h-display text-[32px] md:text-[54px]">
        {{ t('resources.titleLead') }}
        <span class="text-brand-800">{{ t('resources.titleAccent') }}</span>
      </h1>
      <p class="text-ink-600 text-[16px] leading-relaxed">{{ t('resources.lead') }}</p>
    </div>
  </PageHero>

  <div class="container-site space-y-12 pt-4 pb-16 md:space-y-16 md:pb-24">
    <section
      v-for="g in resourceGroups"
      :key="g.key"
      :aria-labelledby="`res-${g.key}`"
      class="grid gap-5 md:grid-cols-[240px_1fr] md:gap-10"
    >
      <h2 :id="`res-${g.key}`" class="text-ink-900 flex items-center gap-3 text-[20px] font-bold">
        <span
          class="bg-brand-50 text-brand-800 flex size-11 shrink-0 items-center justify-center rounded-2xl"
        >
          <AppIcon :name="g.icon" :size="20" />
        </span>
        {{ t(`resources.groups.${g.key}`) }}
      </h2>
      <ul v-reveal-group class="grid gap-3 sm:grid-cols-2 md:gap-4">
        <li v-for="l in g.links" :key="l.url">
          <a
            :href="l.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-ink-50 border-ink-200 hover:border-brand-200 hover:shadow-card flex h-full flex-col rounded-[28px] border p-6 transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none"
          >
            <span class="flex items-start justify-between gap-4">
              <span class="text-ink-900 text-[17px] font-semibold">{{ l.title[locale] }}</span>
              <ArrowUpRight
                :size="18"
                class="text-brand-800 mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
            <span class="text-ink-600 mt-2 text-[14px] leading-relaxed">{{ l.text[locale] }}</span>
            <span class="latin text-brand-800 mt-auto pt-4 text-[13px]">{{ host(l.url) }}</span>
            <span class="sr-only">({{ t('resources.newTab') }})</span>
          </a>
        </li>
      </ul>
    </section>
  </div>

  <CtaSection class="mb-20 md:mb-24" />
</template>
