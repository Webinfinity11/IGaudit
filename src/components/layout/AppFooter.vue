<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { services } from '@/content/services'
import { useLocale } from '@/composables/useLocale'
import AppLogo from '@/components/ui/AppLogo.vue'

const { t } = useI18n()
const { to, locale } = useLocale()
const year = new Date().getFullYear()
const link = 'hover:text-brand-800 transition-colors'
</script>

<template>
  <footer class="border-ink-200 bg-ink-100/60 border-t">
    <div
      class="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr]"
    >
      <div>
        <AppLogo class="h-9 w-auto" />
        <p class="text-ink-500 mt-5 max-w-xs text-[14px] leading-relaxed">
          {{ t('footer.tagline') }}
        </p>
        <p class="latin text-ink-500 mt-5 text-[12px]">
          {{ t('common.idCode') }} {{ company.idCode }} · {{ company.saras }}
        </p>
      </div>

      <nav :aria-label="t('footer.navTitle')">
        <h2 class="text-ink-900 text-[13px] font-semibold">{{ t('footer.navTitle') }}</h2>
        <ul class="text-ink-600 mt-4 space-y-2.5 text-[14px]">
          <li>
            <RouterLink :to="to('home')" :class="link">{{ t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="to('about')" :class="link">{{ t('nav.about') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="to('clients')" :class="link">{{ t('nav.clients') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="to('services')" :class="link">{{ t('nav.services') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="to('contact')" :class="link">{{ t('nav.contact') }}</RouterLink>
          </li>
        </ul>
      </nav>

      <nav :aria-label="t('footer.servicesTitle')">
        <h2 class="text-ink-900 text-[13px] font-semibold">{{ t('footer.servicesTitle') }}</h2>
        <ul class="text-ink-600 mt-4 space-y-2.5 text-[14px]">
          <li v-for="s in services" :key="s.slug">
            <RouterLink :to="to('service', s.slug)" :class="link">{{
              t(`services.${s.slug}.title`)
            }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="text-ink-900 text-[13px] font-semibold">{{ t('footer.contactTitle') }}</h2>
        <ul class="text-ink-600 mt-4 space-y-3 text-[14px]">
          <li class="flex gap-3">
            <MapPin :size="18" class="text-brand-700 shrink-0" aria-hidden="true" />
            {{ company.address[locale] }}, {{ company.city[locale] }}
          </li>
          <li>
            <a :href="company.phoneHref" class="latin flex gap-3" :class="link">
              <Phone :size="18" class="text-brand-700 shrink-0" aria-hidden="true" />
              {{ company.phone }}
            </a>
          </li>
          <li v-if="company.email">
            <a :href="`mailto:${company.email}`" class="latin flex gap-3" :class="link">
              <Mail :size="18" class="text-brand-700 shrink-0" aria-hidden="true" />
              {{ company.email }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-ink-200 border-t">
      <div
        class="container-site text-ink-500 flex flex-col justify-between gap-2 py-5 text-[13px] sm:flex-row"
      >
        <span class="latin">{{ t('footer.copyright', { year }) }}</span>
        <RouterLink :to="to('privacy')" :class="link">{{ t('nav.privacy') }}</RouterLink>
      </div>
    </div>
  </footer>
</template>
