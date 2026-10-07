<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { isServiceSlug } from '@/content/services'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import type { ServiceChoice } from '@/composables/useContactForm'
import PageHero from '@/components/ui/PageHero.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import MapEmbed from '@/components/contact/MapEmbed.vue'

const { t } = useI18n()
const { to } = useLocale()
const route = useRoute()
useSeo({ title: () => t('meta.contact.title'), description: () => t('meta.contact.description') })

// ?service=audit → ფორმაში წინასწარ არჩეული
const initialService = computed<ServiceChoice>(() => {
  const q = route.query.service
  return isServiceSlug(q) ? q : q === 'other' ? 'other' : ''
})
</script>

<template>
  <PageHero :crumbs="[{ text: t('nav.home'), to: to('home') }, { text: t('nav.contact') }]">
    <div v-reveal class="mt-8 max-w-2xl pb-12">
      <h1 class="h-display text-[34px] md:text-[54px]">{{ t('contact.title') }}</h1>
      <p class="text-ink-600 mt-5 text-[17px] leading-relaxed">{{ t('contact.text') }}</p>
    </div>
  </PageHero>

  <div v-reveal-group class="container-site grid gap-6 pb-16 md:pb-20 lg:grid-cols-[1.35fr_1fr]">
    <div class="bg-ink-50 border-ink-200 shadow-card rounded-[28px] border p-6 md:p-10">
      <!-- key: ?service= შეცვლისას (იმავე გვერდზე) ფორმა თავიდან იქმნება -->
      <ContactForm :key="initialService" :initial-service="initialService" />
    </div>
    <div class="flex h-full flex-col gap-4">
      <ContactInfo />
      <MapEmbed class="flex-1" />
    </div>
  </div>
</template>
