<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Service } from '@/content/services'
import { useLocale } from '@/composables/useLocale'
import AppIcon from './AppIcon.vue'

withDefaults(defineProps<{ service: Service; compact?: boolean; headingLevel?: 'h2' | 'h3' }>(), {
  headingLevel: 'h3',
})
const { t } = useI18n()
const { to } = useLocale()
</script>

<template>
  <div
    class="group rounded-card bg-ink-50 border-ink-200 hover:shadow-pop hover:border-brand-200 relative flex h-full flex-col border p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 md:p-7 motion-reduce:transform-none motion-reduce:transition-none"
  >
    <div class="flex items-start justify-between">
      <span class="bg-brand-50 text-brand-800 flex size-12 items-center justify-center rounded-2xl">
        <AppIcon :name="service.icon" />
      </span>
      <span
        class="border-ink-200 text-ink-500 group-hover:bg-brand-800 group-hover:text-ink-50 group-hover:border-brand-800 flex size-9 items-center justify-center rounded-full border transition-colors duration-200"
        aria-hidden="true"
      >
        <ArrowUpRight :size="16" />
      </span>
    </div>
    <component
      :is="headingLevel"
      class="text-ink-900 leading-snug font-bold"
      :class="compact ? 'mt-5 text-[17px]' : 'mt-7 text-[19px]'"
    >
      <RouterLink
        :to="to('service', service.slug)"
        class="rounded-card after:absolute after:inset-0"
      >
        {{ t(`services.${service.slug}.title`) }}
      </RouterLink>
    </component>
    <p v-if="!compact" class="text-ink-500 mt-2 text-[14px] leading-relaxed">
      {{ t(`services.${service.slug}.short`) }}
    </p>
  </div>
</template>
