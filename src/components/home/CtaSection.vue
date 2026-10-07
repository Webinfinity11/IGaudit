<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useLocale } from '@/composables/useLocale'
import BaseButton from '@/components/ui/BaseButton.vue'
import ScrollScaleIn from '@/components/motion/ScrollScaleIn.vue'

const { t } = useI18n()
const { to } = useLocale()
</script>

<template>
  <ScrollScaleIn class="mx-auto max-w-site px-3 md:px-6">
    <section
      class="bg-brand-800 text-ink-50 relative grid items-center gap-8 overflow-hidden rounded-[28px] px-6 py-12 md:grid-cols-[1fr_auto] md:gap-12 md:px-14 md:py-16"
    >
      <div
        aria-hidden="true"
        class="bg-brand-600 absolute -top-24 -right-20 size-[380px] rounded-full opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        class="bg-accent-700 absolute right-[18%] -bottom-28 size-[260px] rounded-full opacity-30 blur-3xl"
      />
      <div class="relative">
        <h2 class="text-[30px] leading-[1.1] font-extrabold tracking-tight md:text-[44px]">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-brand-100 mt-4 max-w-lg text-[16px] leading-relaxed">
          {{ t('home.cta.text') }}
        </p>
      </div>
      <div class="relative flex flex-col gap-3">
        <BaseButton :to="to('contact')" variant="light">
          {{ t('common.sendRequest') }}
          <ArrowRight :size="18" aria-hidden="true" />
        </BaseButton>
        <a
          :href="company.phoneHref"
          class="latin rounded-pill border-brand-400 hover:bg-ink-50/10 inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-[15px] whitespace-nowrap transition-colors"
        >
          <Phone :size="16" aria-hidden="true" /> {{ company.phone }}
        </a>
      </div>
    </section>
  </ScrollScaleIn>
</template>
