<script setup lang="ts">
// ლოგო SVG-ად, ლოგო.png-ის გეომეტრიიდან (design/design-system.tsx → Logo)
import { computed } from 'vue'

const props = withDefaults(defineProps<{ tone?: 'color' | 'plum' | 'white'; title?: string }>(), {
  tone: 'color',
  title: 'IG GROUP',
})
const mark = computed(() =>
  props.tone === 'white' ? 'var(--color-ink-50)' : 'var(--color-brand-800)',
)
const word = computed(() =>
  props.tone === 'color'
    ? 'var(--color-accent-900)'
    : props.tone === 'white'
      ? 'var(--color-ink-50)'
      : 'var(--color-brand-800)',
)
</script>

<template>
  <svg
    viewBox="320 230 1520 700"
    role="img"
    :aria-label="title"
    class="transition-colors duration-300"
  >
    <rect x="343" y="268" width="62" height="624" :fill="mark" />
    <path
      d="M1110.3 405.4 A297 297 0 1 0 1164.1 621.3"
      fill="none"
      :stroke="mark"
      stroke-width="63"
    />
    <rect x="1070" y="592" width="167" height="61" :fill="mark" />
    <rect x="1251" y="592" width="557" height="26" :fill="mark" />
    <text
      x="1266"
      y="826"
      :fill="word"
      font-size="205"
      textLength="519"
      lengthAdjust="spacingAndGlyphs"
      style="font-family: 'Jost Variable', Jost, sans-serif; font-weight: 400"
    >
      group
    </text>
  </svg>
</template>
