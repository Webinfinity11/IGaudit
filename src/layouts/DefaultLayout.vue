<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { company } from '@/content/company'
import { enEnabled, LOCALE_STORAGE_KEY } from '@/i18n'
import { siteUrl } from '@/composables/useSeo'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CookieBanner from '@/components/layout/CookieBanner.vue'
import ScrollProgress from '@/components/motion/ScrollProgress.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// JSON-LD: Organization / AccountingService
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['AccountingService', 'Organization'],
        name: company.name,
        url: siteUrl,
        logo: `${siteUrl}/icon-512.png`,
        image: `${siteUrl}/og-image.png`,
        telephone: company.phone.replace(/\s/g, ''),
        ...(company.email ? { email: company.email } : {}),
        foundingDate: String(company.foundedYear),
        taxID: company.idCode,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.ka,
          addressLocality: company.city.ka,
          addressCountry: 'GE',
        },
        areaServed: 'GE',
      }),
    },
  ],
})

// მთავარ გვერდზე პირველი შესვლისას - ადრე არჩეული ენა
onMounted(() => {
  if (!enEnabled || route.path !== '/') return
  try {
    if (localStorage.getItem(LOCALE_STORAGE_KEY) === 'en') router.replace('/en')
  } catch {
    /* ignore */
  }
})
</script>

<template>
  <a
    href="#main"
    class="focus:bg-brand-800 sr-only z-[60] focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
  >
    {{ t('common.skipToContent') }}
  </a>
  <ScrollProgress />
  <AppHeader />
  <main id="main" tabindex="-1" class="outline-none">
    <RouterView />
  </main>
  <AppFooter />
  <CookieBanner />
</template>
