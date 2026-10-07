<script setup lang="ts">
// რიცხვი ერთხელ ითვლის, როცა ხედვის არეში შედის. SSG HTML-ში - საბოლოო მნიშვნელობა.
import { animate, inView } from 'motion'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { EASE_OUT, prefersReducedMotion } from '@/composables/useMotion'

const props = withDefaults(defineProps<{ value: number; suffix?: string }>(), { suffix: '' })
const root = ref<HTMLElement>()
const shown = ref(String(props.value))
let stop: (() => void) | undefined

onMounted(() => {
  if (!root.value || prefersReducedMotion()) return
  shown.value = '0'
  stop = inView(
    root.value,
    () => {
      animate(0, props.value, {
        duration: props.value > 100 ? 1.4 : 1,
        ease: EASE_OUT,
        onUpdate: (n) => (shown.value = String(Math.round(n))),
      })
    },
    { amount: 0.6 },
  )
})
onBeforeUnmount(() => stop?.())
</script>

<template>
  <span ref="root" class="latin" style="font-variant-numeric: tabular-nums">
    <span class="sr-only">{{ value }}{{ suffix }}</span>
    <span aria-hidden="true">{{ shown }}{{ suffix }}</span>
  </span>
</template>
