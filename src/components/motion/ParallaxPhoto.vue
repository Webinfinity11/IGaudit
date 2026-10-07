<script setup lang="ts">
// ფოტო, რომელიც გვერდზე ნელა მოძრაობს (overscan - კიდეები არ ჩანს)
import { ref } from 'vue'
import { useScrollProgress } from '@/composables/useMotion'
import type { PhotoName } from '@/content/photos'
import BrandPhoto from './BrandPhoto.vue'

const props = withDefaults(
  defineProps<{
    name: PhotoName
    pos?: string
    distance?: number
    tone?: 'plum' | 'soft' | 'deep'
    eager?: boolean
    sizes?: string
  }>(),
  { distance: 60 },
)
const root = ref<HTMLElement>()
const layer = ref<HTMLElement>()

useScrollProgress(root, ['start end', 'end start'], (p) => {
  if (layer.value)
    layer.value.style.transform = `translateY(${-props.distance + 2 * props.distance * p}px)`
})
</script>

<template>
  <div ref="root" class="overflow-hidden">
    <div
      ref="layer"
      class="absolute inset-x-0 will-change-transform"
      :style="{ top: `-${distance}px`, bottom: `-${distance}px` }"
    >
      <BrandPhoto
        :name="name"
        :pos="pos"
        :tone="tone"
        :eager="eager"
        :sizes="sizes"
        class="size-full"
      />
    </div>
  </div>
</template>
