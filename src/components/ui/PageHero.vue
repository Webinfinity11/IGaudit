<script setup lang="ts">
// შიდა გვერდების თავი: გრადიენტი (header-ის ქვეშაც), breadcrumbs, სათაური
import type { RouteLocationRaw } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppBreadcrumbs from './AppBreadcrumbs.vue'

defineProps<{ crumbs?: { text: string; to?: RouteLocationRaw }[] }>()
const { t } = useI18n()
</script>

<template>
  <div class="from-brand-50 to-ink-50 bg-gradient-to-b pt-[var(--header-h)]">
    <div class="container-site pt-8 md:pt-14">
      <AppBreadcrumbs v-if="crumbs" :label="t('nav.breadcrumbs')" :items="crumbs" />
      <slot />
    </div>
  </div>
</template>
