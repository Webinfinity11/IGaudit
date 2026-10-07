<script setup lang="ts">
// რუკა: ჯერ მსუბუქი placeholder; Google Maps-ის iframe იტვირთება მხოლოდ დაჭერისას (წარმადობა + კონფიდენციალურობა)
import { ArrowUpRight, MapPin } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'

const { t, locale } = useI18n()
const loaded = ref(false)
const q = encodeURIComponent(company.mapQuery)
const embed = (hl: string) => `https://maps.google.com/maps?q=${q}&hl=${hl}&z=16&output=embed`
const external = `https://www.google.com/maps/search/?api=1&query=${q}`
</script>

<template>
  <div
    class="border-ink-200 bg-ink-100 relative min-h-[280px] overflow-hidden rounded-[28px] border"
  >
    <iframe
      v-if="loaded"
      :src="embed(locale)"
      :title="t('contact.mapTitle')"
      class="absolute inset-0 size-full border-0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="group absolute inset-0 size-full cursor-pointer"
      :aria-label="`${t('contact.showMap')}: ${t('contact.mapTitle')}`"
      @click="loaded = true"
    >
      <svg
        class="absolute inset-0 size-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill="var(--color-ink-100)" />
        <path d="M-10 210 L420 120" stroke="var(--color-ink-50)" stroke-width="18" />
        <path d="M120 -10 L180 320" stroke="var(--color-ink-50)" stroke-width="12" />
        <path d="M-10 60 L420 90" stroke="var(--color-ink-50)" stroke-width="8" />
        <path d="M300 -10 L260 320" stroke="var(--color-ink-50)" stroke-width="8" />
        <rect x="20" y="230" width="80" height="50" rx="8" fill="var(--color-accent-100)" />
        <rect x="200" y="20" width="70" height="50" rx="8" fill="var(--color-accent-100)" />
      </svg>
      <span
        class="absolute top-[44%] left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center"
      >
        <span
          class="rounded-pill bg-ink-50 shadow-pop text-ink-900 px-3 py-1.5 text-[12px] font-medium whitespace-nowrap"
        >
          {{ company.name }}
        </span>
        <span
          class="bg-brand-800 text-ink-50 shadow-pop mt-1 flex size-10 items-center justify-center rounded-full transition-transform group-hover:-translate-y-0.5"
        >
          <MapPin :size="20" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <span
          class="text-ink-600 mt-3 text-[13px] font-medium underline-offset-2 group-hover:underline"
          >{{ t('contact.showMap') }}</span
        >
      </span>
    </button>
    <a
      :href="external"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-pill bg-ink-50 shadow-card text-brand-800 hover:bg-brand-50 absolute right-4 bottom-4 left-4 flex items-center justify-between px-4 py-2.5 text-[13px] font-medium transition-colors"
    >
      {{ t('contact.openMap') }} <ArrowUpRight :size="16" aria-hidden="true" />
    </a>
  </div>
</template>
