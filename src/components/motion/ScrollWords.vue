<script setup lang="ts">
// აბზაცი: თითო სიტყვა მუქდება სქროლისას
import { computed, ref } from 'vue'
import { mapRange, useScrollProgress } from '@/composables/useMotion'

const props = withDefaults(defineProps<{ text: string; as?: string }>(), { as: 'p' })
const root = ref<HTMLElement>()
const words = computed(() => props.text.split(' '))

useScrollProgress(root, ['start 0.85', 'end 0.5'], (p) => {
  const spans = root.value?.querySelectorAll<HTMLElement>('[data-word]')
  if (!spans) return
  const n = spans.length
  spans.forEach((s, i) => (s.style.opacity = String(mapRange(p, i / n, (i + 1) / n, 0.18, 1))))
})
</script>

<template>
  <component :is="as" ref="root">
    <template v-for="(w, i) in words" :key="i">
      <span data-word class="scroll-word">{{ w }}</span
      >{{ i < words.length - 1 ? ' ' : '' }}
    </template>
  </component>
</template>
