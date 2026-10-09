<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import ClipRevealPhoto from '@/components/motion/ClipRevealPhoto.vue'

const { t } = useI18n()
// წლები ავტომატურად იზრდება
const years = new Date().getFullYear() - company.foundedYear
const items = [
  { key: 'trust', icon: 'Lock' },
  { key: 'professionalism', icon: 'Award' },
  { key: 'experience', icon: 'Briefcase' },
  { key: 'focus', icon: 'Target' },
]
</script>

<template>
  <section class="container-site grid gap-10 py-16 md:grid-cols-[1fr_1.25fr] md:gap-14 md:py-24">
    <div class="flex flex-col">
      <div v-reveal>
        <p class="text-accent-900 mb-3 text-[14px] font-medium">{{ t('home.why.eyebrow') }}</p>
        <h2 class="h-display text-[30px] md:text-[44px]">{{ t('home.why.title') }}</h2>
      </div>
      <ClipRevealPhoto
        name="desk"
        pos="75% 60%"
        class="mt-8 h-[280px] md:min-h-[320px] md:flex-1"
      />
    </div>
    <ul v-reveal-group class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="(w, i) in items"
        :key="w.key"
        class="rounded-card h-full p-6 md:p-7"
        :class="i === 0 ? 'bg-brand-800 text-ink-50' : 'bg-ink-50 border-ink-200 border'"
      >
        <span
          class="flex size-12 items-center justify-center rounded-2xl"
          :class="i === 0 ? 'bg-brand-700 text-ink-50' : 'bg-accent-50 text-accent-900'"
        >
          <AppIcon :name="w.icon" />
        </span>
        <h3 class="mt-6 text-[19px] font-bold" :class="i === 0 ? 'text-ink-50' : 'text-ink-900'">
          {{ t(`home.why.items.${w.key}.title`) }}
        </h3>
        <p
          class="mt-2 text-[14px] leading-relaxed"
          :class="i === 0 ? 'text-brand-100' : 'text-ink-500'"
        >
          {{ t(`home.why.items.${w.key}.text`, { years }) }}
        </p>
      </li>
    </ul>
  </section>
</template>
