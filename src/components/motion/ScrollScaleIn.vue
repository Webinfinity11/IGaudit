<script setup lang="ts">
// ბლოკი იზრდება ოდნავ პატარა ზომიდან, როცა სქროლით შემოდის
import { ref } from 'vue'
import { mapRange, useScrollProgress } from '@/composables/useMotion'

const root = ref<HTMLElement>()
useScrollProgress(root, ['start end', 'start 0.55'], (p) => {
  if (!root.value) return
  root.value.style.transform = `scale(${mapRange(p, 0, 1, 0.9, 1)})`
  root.value.style.opacity = String(mapRange(p, 0, 0.6, 0.4, 1))
})
</script>

<template>
  <div ref="root"><slot /></div>
</template>
