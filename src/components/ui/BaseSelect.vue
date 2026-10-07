<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import FieldShell from './FieldShell.vue'
import { fieldBase, fieldState } from './fieldClasses'

defineProps<{
  id: string
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
  error?: string
  required?: boolean
}>()
const model = defineModel<string>({ required: true })
defineEmits<{ blur: [] }>()
</script>

<template>
  <FieldShell :id="id" :label="label" :error="error" :required="required">
    <div class="relative">
      <select
        :id="id"
        v-model="model"
        :name="id"
        :required="required"
        :aria-required="required ? 'true' : undefined"
        :aria-invalid="error ? 'true' : 'false'"
        :aria-describedby="error ? `${id}-error` : undefined"
        class="appearance-none pr-10"
        :class="[fieldBase, fieldState(error), !model && '!text-ink-400']"
        @blur="$emit('blur')"
        @change="$emit('blur')"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="o in options" :key="o.value" :value="o.value" class="text-ink-900">
          {{ o.label }}
        </option>
      </select>
      <ChevronDown
        class="text-ink-500 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
        :size="16"
        aria-hidden="true"
      />
    </div>
  </FieldShell>
</template>
