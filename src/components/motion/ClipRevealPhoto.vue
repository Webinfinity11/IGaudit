<script setup lang="ts">
// ფოტო იხსნება ჩარჩოდან, როცა ხედვის არეში შედის
import { ref } from 'vue'
import { mapRange, useScrollProgress } from '@/composables/useMotion'
import type { PhotoName } from '@/content/photos'
import BrandPhoto from './BrandPhoto.vue'

defineProps<{ name: PhotoName; pos?: string }>()
const root = ref<HTMLElement>()
const inner = ref<HTMLElement>()

useScrollProgress(root, ['start end', 'center center'], (p) => {
  const inset = mapRange(p, 0, 1, 14, 0)
  if (root.value)
    root.value.style.clipPath = `inset(${inset}% ${inset}% ${inset}% ${inset}% round 24px)`
  if (inner.value) inner.value.style.transform = `scale(${mapRange(p, 0, 1, 1.15, 1)})`
})
</script>

<template>
  <div ref="root" class="rounded-card relative overflow-hidden">
    <div ref="inner" class="absolute inset-0">
      <BrandPhoto :name="name" :pos="pos" class="size-full" />
    </div>
  </div>
</template>
