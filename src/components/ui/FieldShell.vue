<script setup lang="ts">
// label + ველი + შეცდომა - საერთო ჩარჩო BaseInput/BaseSelect-ისთვის
defineProps<{
  id: string
  label: string
  error?: string
  required?: boolean
  optionalLabel?: string
}>()
</script>

<template>
  <div>
    <label :for="id" class="text-ink-800 flex items-center justify-between text-[13px] font-medium">
      <span>
        {{ label }}
        <span v-if="required" class="text-brand-700" aria-hidden="true">*</span>
      </span>
      <span v-if="!required && optionalLabel" class="text-ink-400 font-normal">{{
        optionalLabel
      }}</span>
    </label>
    <div class="mt-1.5"><slot /></div>
    <p v-if="error" :id="`${id}-error`" class="text-brand-700 mt-1.5 text-[12px]" role="alert">
      {{ error }}
    </p>
  </div>
</template>
