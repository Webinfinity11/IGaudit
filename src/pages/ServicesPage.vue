<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services } from '@/content/services'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import PageHero from '@/components/ui/PageHero.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { t } = useI18n()
const { to } = useLocale()
useSeo({ title: () => t('meta.services.title'), description: () => t('meta.services.description') })
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('nav.services') }]">
    <div
      v-reveal
      class="mt-8 grid items-end gap-8 pb-12 md:grid-cols-[1.3fr_1fr] md:gap-16 md:pb-16"
    >
      <h1 class="h-display text-[32px] md:text-[54px]">
        {{ t('servicesPage.titleLead') }}
        <span class="text-brand-800">{{ t('servicesPage.titleAccent') }}</span>
      </h1>
      <p class="text-ink-600 text-[16px] leading-relaxed">{{ t('servicesPage.intro') }}</p>
    </div>
  </PageHero>

  <section class="container-site pb-16 md:pb-24">
    <ul v-reveal-group class="grid gap-4 md:grid-cols-2">
      <li v-for="(s, i) in services" :key="s.slug">
        <article
          class="group relative flex h-full min-h-[260px] flex-col rounded-[28px] border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-pop md:p-9 motion-reduce:transform-none"
          :class="
            i === 0 ? 'bg-brand-800 border-brand-800 text-ink-50' : 'bg-ink-50 border-ink-200'
          "
        >
          <div class="flex items-start justify-between">
            <span
              class="flex size-14 items-center justify-center rounded-2xl"
              :class="i === 0 ? 'bg-brand-700 text-ink-50' : 'bg-brand-50 text-brand-800'"
            >
              <AppIcon :name="s.icon" :size="28" />
            </span>
            <span class="latin text-[13px]" :class="i === 0 ? 'text-brand-200' : 'text-ink-400'"
              >0{{ i + 1 }}</span
            >
          </div>
          <h2
            class="mt-auto pt-10 text-[22px] leading-snug font-bold md:text-[26px]"
            :class="i === 0 ? '' : 'text-ink-900'"
          >
            <RouterLink
              :to="to('service', s.slug)"
              class="after:absolute after:inset-0 after:rounded-[28px]"
            >
              {{ t(`services.${s.slug}.title`) }}
            </RouterLink>
          </h2>
          <p
            class="mt-2 text-[15px] leading-relaxed"
            :class="i === 0 ? 'text-brand-100' : 'text-ink-500'"
          >
            {{ t(`services.${s.slug}.short`) }}
          </p>
          <span
            class="mt-6 inline-flex items-center gap-2 text-[14px] font-medium"
            :class="i === 0 ? 'text-ink-50' : 'text-brand-800'"
            aria-hidden="true"
          >
            {{ t('common.readMore') }}
            <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
          </span>
        </article>
      </li>
    </ul>
  </section>

  <CtaSection class="mb-20 md:mb-24" />
</template>
