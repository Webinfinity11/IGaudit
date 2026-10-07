<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import HeroSection from '@/components/home/HeroSection.vue'
import StatementSection from '@/components/home/StatementSection.vue'
import ServicesStack from '@/components/home/ServicesStack.vue'
import WhyUs from '@/components/home/WhyUs.vue'
import ClientsCarousel from '@/components/home/ClientsCarousel.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { t } = useI18n()
useSeo({
  title: () => t('meta.home.title'),
  description: () => t('meta.home.description'),
  rawTitle: true,
})
</script>

<template>
  <HeroSection />
  <StatementSection />
  <ServicesStack />
  <WhyUs />
  <ClientsCarousel />
  <CtaSection class="mb-20 md:mb-24" />
</template>
