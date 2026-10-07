<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    /** primary - იისფერი; secondary - კონტური; ghost - ტექსტი; light - თეთრი (მუქ ფონზე); outline-light - კონტური მუქ ფონზე */
    variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit'
    disabled?: boolean
    external?: boolean
  }>(),
  { variant: 'primary', size: 'md', type: 'button' },
)

const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2.5 rounded-pill font-medium transition-colors duration-200 select-none whitespace-nowrap',
  'disabled:cursor-not-allowed disabled:opacity-60',
  {
    sm: 'px-5 py-2.5 text-[13px]',
    md: 'px-6 py-3.5 text-[15px]',
    lg: 'px-7 py-4 text-[15px] font-semibold',
  }[props.size],
  {
    primary: 'bg-brand-800 text-ink-50 hover:bg-brand-700',
    secondary: 'border border-brand-800 text-brand-800 hover:bg-brand-50',
    ghost: 'text-brand-800 hover:text-brand-600',
    light: 'bg-ink-50 text-brand-800 hover:bg-brand-50',
    'outline-light': 'border border-ink-50/40 text-ink-50 hover:bg-ink-50/10',
  }[props.variant],
])
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </component>
</template>
