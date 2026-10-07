<script setup lang="ts">
// კითხვის პროგრესის ზოლი გვერდის ზედა კიდეზე
import { scroll } from 'motion'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const bar = ref<HTMLElement>()
let stop: (() => void) | undefined
onMounted(() => {
  stop = scroll((p: number) => {
    if (bar.value) bar.value.style.transform = `scaleX(${p})`
  })
})
onBeforeUnmount(() => stop?.())
</script>

<template>
  <div
    ref="bar"
    aria-hidden="true"
    class="bg-brand-800 fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    style="transform: scaleX(0)"
  />
</template>
