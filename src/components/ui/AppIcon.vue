<script setup lang="ts">
// Lucide ხატულები სახელით (content/*.ts-დან). ახალი ხატულა - დაამატეთ იმპორტი და icons-ში.
import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  FileSearch,
  Lock,
  MessagesSquare,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-vue-next'
import { computed } from 'vue'

const icons = {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  FileSearch,
  Lock,
  MessagesSquare,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
}

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 24 })
const component = computed(() => icons[props.name as keyof typeof icons] ?? Briefcase)
</script>

<template>
  <component :is="component" :size="size" :stroke-width="1.5" aria-hidden="true" />
</template>
