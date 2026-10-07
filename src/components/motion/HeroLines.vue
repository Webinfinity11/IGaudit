<script setup lang="ts">
// სათაურის სტრიქონები ჩატვირთვისას ნიღბიდან ამოდიან (design: HeroLines)
import { animate } from 'motion'
import { onMounted, ref } from 'vue'
import { EASE_OUT, prefersReducedMotion } from '@/composables/useMotion'

const props = defineProps<{ lines: { text: string; class?: string }[] }>()
const root = ref<HTMLElement>()

onMounted(() => {
  if (prefersReducedMotion() || !root.value) return
  root.value
    .querySelectorAll('[data-hero-line]')
    .forEach((el, i) =>
      animate(
        el,
        { transform: ['translateY(110%)', 'translateY(0%)'] },
        { duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE_OUT },
      ),
    )
})
</script>

<template>
  <h1 ref="root" :aria-label="props.lines.map((l) => l.text).join(' ')">
    <span
      v-for="(l, i) in lines"
      :key="i"
      aria-hidden="true"
      class="-mb-[0.08em] block overflow-hidden pb-[0.08em]"
    >
      <span data-hero-line class="block" :class="l.class">{{ l.text }}</span>
    </span>
  </h1>
</template>
