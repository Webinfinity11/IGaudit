<script setup lang="ts">
import FieldShell from './FieldShell.vue'
import { fieldBase, fieldState } from './fieldClasses'

defineProps<{
  id: string
  label: string
  type?: string
  error?: string
  required?: boolean
  optionalLabel?: string
  autocomplete?: string
  inputmode?: 'text' | 'tel' | 'email'
  multiline?: boolean
  rows?: number
  maxlength?: number
  placeholder?: string
}>()
// v-model დინამიკურ <component :is="'input'">-ზე არ მუშაობს - ამიტომ :value + @input
const model = defineModel<string>({ required: true })
defineEmits<{ blur: [] }>()
</script>

<template>
  <FieldShell
    :id="id"
    :label="label"
    :error="error"
    :required="required"
    :optional-label="optionalLabel"
  >
    <component
      :is="multiline ? 'textarea' : 'input'"
      :id="id"
      :value="model"
      :name="id"
      :type="multiline ? undefined : type || 'text'"
      :rows="multiline ? rows || 5 : undefined"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
      :aria-required="required ? 'true' : undefined"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="error ? `${id}-error` : undefined"
      :class="[fieldBase, fieldState(error), multiline && 'min-h-32 resize-y']"
      @input="model = ($event.target as HTMLInputElement).value"
      @blur="$emit('blur')"
    />
  </FieldShell>
</template>
