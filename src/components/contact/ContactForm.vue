<script setup lang="ts">
import { CheckCircle2, Loader2, Send } from 'lucide-vue-next'
import { computed, nextTick, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { services } from '@/content/services'
import { useLocale } from '@/composables/useLocale'
import { useContactForm, type FieldName, type ServiceChoice } from '@/composables/useContactForm'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import TurnstileWidget from './TurnstileWidget.vue'

const props = defineProps<{ initialService?: ServiceChoice }>()

const { t } = useI18n()
const { to, locale } = useLocale()
const { fields, errors, status, captchaToken, onBlur, onInput, submit } = useContactForm(
  props.initialService ?? '',
)
const formEl = ref<HTMLFormElement>()
const successEl = ref<HTMLElement>()
const turnstile = ref<InstanceType<typeof TurnstileWidget>>()

const serviceOptions = computed(() => [
  ...services.map((s) => ({ value: s.slug, label: t(`services.${s.slug}.title`) })),
  { value: 'other', label: t('services.other.title') },
])

function err(field: FieldName) {
  const key = errors[field]
  return key ? t(`contact.errors.${key}`) : undefined
}

async function onSubmit() {
  const label = serviceOptions.value.find((o) => o.value === fields.service)?.label ?? ''
  // წერილი კომპანიას ყოველთვის ქართული სათაურით
  const subject = t('contact.form.subject', { service: label }, { locale: 'ka' })
  const invalid = await submit(subject, label)
  if (invalid) {
    await nextTick()
    const target =
      invalid === 'captcha' ? null : formEl.value?.querySelector<HTMLElement>(`#cf-${invalid}`)
    target?.focus()
    return
  }
  if (status.value === 'success') {
    await nextTick()
    successEl.value?.focus()
  } else if (status.value === 'error') {
    turnstile.value?.reset()
    captchaToken.value = ''
  }
}
</script>

<template>
  <div>
    <div
      v-if="status === 'success'"
      ref="successEl"
      tabindex="-1"
      role="status"
      class="bg-accent-50 flex flex-col items-center rounded-[28px] px-6 py-16 text-center outline-none"
    >
      <CheckCircle2 :size="48" class="text-accent-900" :stroke-width="1.5" aria-hidden="true" />
      <p class="text-ink-900 mt-5 max-w-md text-lg font-medium">{{ t('contact.form.success') }}</p>
    </div>

    <form v-else ref="formEl" novalidate class="space-y-4" @submit.prevent="onSubmit">
      <h2 class="text-ink-900 mb-7 text-[22px] font-bold">{{ t('contact.formTitle') }}</h2>
      <div class="grid gap-4 sm:grid-cols-2 sm:items-end">
        <BaseInput
          id="cf-name"
          v-model="fields.name"
          :label="t('contact.form.name')"
          autocomplete="name"
          :placeholder="t('contact.form.placeholders.name')"
          :maxlength="100"
          required
          :error="err('name')"
          @blur="onBlur('name')"
          @update:model-value="onInput('name')"
        />
        <BaseInput
          id="cf-company"
          v-model="fields.company"
          :label="t('contact.form.company')"
          :optional-label="t('contact.form.optional')"
          autocomplete="organization"
          :maxlength="150"
          :error="err('company')"
          @blur="onBlur('company')"
          @update:model-value="onInput('company')"
        />
        <BaseInput
          id="cf-phone"
          v-model="fields.phone"
          type="tel"
          inputmode="tel"
          :label="t('contact.form.phone')"
          autocomplete="tel"
          :placeholder="t('contact.form.placeholders.phone')"
          required
          :error="err('phone')"
          @blur="onBlur('phone')"
          @update:model-value="onInput('phone')"
        />
        <BaseInput
          id="cf-email"
          v-model="fields.email"
          type="email"
          inputmode="email"
          :label="t('contact.form.email')"
          autocomplete="email"
          :placeholder="t('contact.form.placeholders.email')"
          required
          :error="err('email')"
          @blur="onBlur('email')"
          @update:model-value="onInput('email')"
        />
      </div>
      <BaseSelect
        id="cf-service"
        v-model="fields.service"
        :label="t('contact.form.service')"
        :placeholder="t('contact.form.servicePlaceholder')"
        :options="serviceOptions"
        required
        :error="err('service')"
        @blur="onBlur('service')"
      />
      <BaseInput
        id="cf-message"
        v-model="fields.message"
        multiline
        :rows="5"
        :label="t('contact.form.message')"
        :optional-label="t('contact.form.optional')"
        :maxlength="2000"
        :placeholder="t('contact.form.placeholders.message')"
        :error="err('message')"
        @blur="onBlur('message')"
        @update:model-value="onInput('message')"
      />

      <!-- honeypot: ეკრანიდან და დამხმარე ტექნოლოგიებიდან დამალული -->
      <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label for="cf-website">{{ t('contact.form.honeypot') }}</label>
        <input
          id="cf-website"
          v-model="fields.website"
          name="website"
          type="text"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <BaseCheckbox
        id="cf-consent"
        v-model="fields.consent"
        required
        :error="err('consent')"
        @blur="onBlur('consent')"
      >
        {{ t('contact.form.consent') }}
        <RouterLink
          :to="to('privacy')"
          target="_blank"
          class="text-brand-800 underline underline-offset-2"
        >
          {{ t('contact.form.consentLink') }}</RouterLink
        >
        {{ t('contact.form.consentSuffix') }}
      </BaseCheckbox>

      <div>
        <TurnstileWidget
          ref="turnstile"
          v-model="captchaToken"
          :language="locale"
          @update:model-value="onInput('captcha')"
        />
        <p v-if="err('captcha')" class="text-brand-700 mt-1.5 text-[12px]" role="alert">
          {{ err('captcha') }}
        </p>
      </div>

      <p
        v-if="status === 'error'"
        class="bg-danger-50 text-danger-700 rounded-2xl p-4 text-[14px]"
        role="alert"
      >
        {{ t('contact.form.error', { phone: company.phone }) }}
      </p>

      <BaseButton
        type="submit"
        class="mt-3"
        :disabled="status === 'sending'"
        :aria-busy="status === 'sending'"
      >
        <template v-if="status === 'sending'">
          <Loader2 :size="18" class="animate-spin" aria-hidden="true" />
          {{ t('contact.form.sending') }}
        </template>
        <template v-else>
          {{ t('contact.form.submit') }}
          <Send :size="18" aria-hidden="true" />
        </template>
      </BaseButton>
    </form>
  </div>
</template>
