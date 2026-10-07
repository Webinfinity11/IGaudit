<script setup lang="ts">
defineProps<{ id: string; error?: string; required?: boolean }>()
const model = defineModel<boolean>({ required: true })
defineEmits<{ blur: [] }>()
</script>

<template>
  <div>
    <div class="flex items-start gap-3">
      <input
        :id="id"
        v-model="model"
        :name="id"
        type="checkbox"
        :required="required"
        :aria-required="required ? 'true' : undefined"
        :aria-invalid="error ? 'true' : 'false'"
        :aria-describedby="error ? `${id}-error` : undefined"
        class="accent-brand-800 mt-0.5 size-5 shrink-0 cursor-pointer rounded-md"
        @blur="$emit('blur')"
        @change="$emit('blur')"
      />
      <label :for="id" class="text-ink-600 cursor-pointer text-[14px] leading-snug">
        <slot />
        <span v-if="required" class="text-brand-700" aria-hidden="true">*</span>
      </label>
    </div>
    <p v-if="error" :id="`${id}-error`" class="text-brand-700 mt-1.5 text-[12px]" role="alert">
      {{ error }}
    </p>
  </div>
</template>
