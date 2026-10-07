<script setup lang="ts">
// დოკუმენტური ფოტო ბრენდის ტონით: იისფერი multiply + რბილი გრადიენტი (design: Photo)
import { computed } from 'vue'
import { photos, type PhotoName } from '@/content/photos'

const props = withDefaults(
  defineProps<{
    name: PhotoName
    pos?: string
    tone?: 'plum' | 'soft' | 'deep'
    eager?: boolean
    sizes?: string
  }>(),
  { pos: 'center', tone: 'plum', sizes: '(min-width: 768px) 50vw, 100vw' },
)
const tint = computed(() => ({ deep: 0.42, soft: 0.16, plum: 0.26 })[props.tone])
const photo = computed(() => photos[props.name])
</script>

<template>
  <div class="group/photo bg-brand-900 relative overflow-hidden">
    <img
      :src="photo.src"
      :srcset="photo.srcset"
      :sizes="sizes"
      alt=""
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
      class="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out group-hover/photo:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      :style="{ objectPosition: pos, filter: 'grayscale(0.45) contrast(1.1) brightness(1.06)' }"
    />
    <div
      aria-hidden="true"
      class="bg-brand-800 absolute inset-0 mix-blend-multiply"
      :style="{ opacity: tint }"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0"
      style="background: linear-gradient(180deg, rgb(84 0 97 / 0) 55%, rgb(38 0 42 / 0.45) 100%)"
    />
  </div>
</template>
