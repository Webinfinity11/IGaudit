<script setup lang="ts" generic="T">
// კარტები ჩერდება header-ის ქვეშ და უკან იკუმშება, როცა შემდეგი ფარავს (design: StickyStack)
import { onMounted, ref } from 'vue'
import { mapRange, prefersReducedMotion, useScrollProgress } from '@/composables/useMotion'

const props = withDefaults(defineProps<{ items: T[]; top?: number }>(), { top: 96 })
defineSlots<{ default(props: { item: T; index: number }): unknown }>()

const root = ref<HTMLElement>()
const reduce = ref(false)
onMounted(() => (reduce.value = prefersReducedMotion()))

useScrollProgress(root, ['start start', 'end end'], (p) => {
  const cards = root.value?.querySelectorAll<HTMLElement>('[data-stack-card]')
  const n = props.items.length
  cards?.forEach((card, i) => {
    const target = 1 - (n - 1 - i) * 0.035
    card.style.transform = `scale(${mapRange(p, i / n, 1, 1, target)})`
  })
})
</script>

<template>
  <ul ref="root" class="flex flex-col" :class="reduce ? 'gap-4' : 'gap-10'">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="!reduce && 'sticky'"
      :style="reduce ? undefined : { top: `${top + i * 16}px` }"
    >
      <div data-stack-card class="origin-top">
        <slot :item="item" :index="i" />
      </div>
    </li>
  </ul>
</template>
