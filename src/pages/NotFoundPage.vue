<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services } from '@/content/services'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()
const { to } = useLocale()
useSeo({
  title: () => t('meta.notFound.title'),
  description: () => t('meta.notFound.description'),
  noindex: true,
})
</script>

<template>
  <div class="from-brand-50 to-ink-50 bg-gradient-to-b pt-[var(--header-h)]">
    <section class="container-site pt-16 pb-16 text-center md:pt-24">
      <div v-reveal>
        <p
          class="latin text-brand-800 text-[110px] leading-none font-light tracking-tight md:text-[180px]"
          aria-hidden="true"
        >
          4<span class="text-brand-200">0</span>4
        </p>
        <h1 class="h-display mt-4 text-[28px] md:text-[40px]">{{ t('notFound.title') }}</h1>
        <p class="text-ink-600 mx-auto mt-4 max-w-md text-[16px] leading-relaxed">
          {{ t('notFound.text') }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <BaseButton :to="to('home')"
            >{{ t('notFound.home') }} <ArrowRight :size="18" aria-hidden="true"
          /></BaseButton>
          <BaseButton :to="to('contact')" variant="secondary">{{ t('nav.contact') }}</BaseButton>
        </div>
      </div>
      <ul
        v-reveal-group
        class="mx-auto mt-14 grid max-w-3xl gap-x-8 gap-y-3 text-left sm:grid-cols-2 md:grid-cols-3"
      >
        <li v-for="s in services" :key="s.slug">
          <RouterLink
            :to="to('service', s.slug)"
            class="border-ink-200 text-ink-700 hover:text-brand-800 flex items-center gap-2 border-b py-2 text-[14px] transition-colors"
          >
            <AppIcon :name="s.icon" :size="16" class="text-brand-800 shrink-0" />
            {{ t(`services.${s.slug}.title`) }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>
