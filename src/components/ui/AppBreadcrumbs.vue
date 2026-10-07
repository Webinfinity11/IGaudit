<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

defineProps<{ label: string; items: { text: string; to?: RouteLocationRaw }[] }>()
</script>

<template>
  <nav :aria-label="label" class="text-ink-500 text-[13px]">
    <ol class="flex flex-wrap items-center gap-1.5">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-1.5">
        <RouterLink v-if="item.to" :to="item.to" class="hover:text-brand-800 transition-colors">{{
          item.text
        }}</RouterLink>
        <span v-else aria-current="page" class="text-ink-800">{{ item.text }}</span>
        <ChevronRight v-if="i < items.length - 1" :size="14" aria-hidden="true" />
      </li>
    </ol>
  </nav>
</template>
