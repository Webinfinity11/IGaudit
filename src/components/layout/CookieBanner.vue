<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCookieConsent } from '@/composables/useCookieConsent'
import { useLocale } from '@/composables/useLocale'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()
const { to } = useLocale()
const { consent, ready, init, accept, reject } = useCookieConsent()

onMounted(init)
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="translate-y-full opacity-0"
  >
    <section
      v-if="ready && consent === null"
      :aria-label="t('cookies.label')"
      class="rounded-card border-ink-200 bg-ink-50 shadow-float fixed inset-x-3 bottom-3 z-40 border md:inset-x-auto md:right-6 md:bottom-6 md:max-w-xl"
    >
      <div
        class="container-site flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-ink-600 text-[14px] leading-relaxed">
          {{ t('cookies.text') }}
          <RouterLink :to="to('privacy')" class="text-brand-800 underline underline-offset-2">
            {{ t('cookies.more') }}
          </RouterLink>
        </p>
        <div class="flex shrink-0 gap-3">
          <BaseButton variant="secondary" size="sm" @click="reject">{{
            t('cookies.reject')
          }}</BaseButton>
          <BaseButton size="sm" @click="accept">{{ t('cookies.accept') }}</BaseButton>
        </div>
      </div>
    </section>
  </Transition>
</template>
