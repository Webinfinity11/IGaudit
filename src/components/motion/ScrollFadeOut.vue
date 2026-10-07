<script setup lang="ts">
// კონტენტი ზემოთ მიცურავს და ოდნავ ქრება, როცა სექცია სქროლით მიდის
import { ref } from 'vue'
import { mapRange, useScrollProgress } from '@/composables/useMotion'

const root = ref<HTMLElement>()
useScrollProgress(root, ['start start', 'end start'], (p) => {
  if (!root.value) return
  root.value.style.transform = `translateY(${mapRange(p, 0, 1, 0, -80)}px)`
  root.value.style.opacity = String(mapRange(p, 0, 0.8, 1, 0.25))
})
</script>

<template>
  <div ref="root"><slot /></div>
</template>
