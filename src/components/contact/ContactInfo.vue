<script setup lang="ts">
import { Clock, Mail, MapPin, Phone } from 'lucide-vue-next'
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useLocale } from '@/composables/useLocale'
import Linkedin from '@/components/ui/LinkedinIcon.vue'

const { t } = useI18n()
const { locale } = useLocale()

const rows = computed(
  () =>
    [
      {
        icon: Phone,
        label: t('common.phone'),
        value: company.phone,
        href: company.phoneHref,
        latin: true,
      },
      {
        icon: MapPin,
        label: t('common.address'),
        value: `${company.address[locale.value]}, ${company.city[locale.value]}`,
      },
      company.email && {
        icon: Mail,
        label: t('common.email'),
        value: company.email,
        href: `mailto:${company.email}`,
        latin: true,
      },
      {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'IG GROUP',
        href: company.linkedin,
        external: true,
      },
      company.workingHours[locale.value] && {
        icon: Clock,
        label: t('common.workingHours'),
        value: company.workingHours[locale.value],
      },
    ].filter(Boolean) as {
      icon: Component
      label: string
      value: string
      href?: string
      latin?: boolean
      external?: boolean
    }[],
)
</script>

<template>
  <div class="bg-brand-800 text-ink-50 rounded-[28px] p-7 md:p-8">
    <h2 class="text-[20px] font-bold">{{ t('contact.infoTitle') }}</h2>
    <dl class="mt-6 space-y-5">
      <div v-for="r in rows" :key="r.label" class="flex gap-4">
        <span class="bg-brand-700 flex size-10 shrink-0 items-center justify-center rounded-full">
          <component :is="r.icon" :size="18" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <div>
          <dt class="text-brand-200 text-[12px]">{{ r.label }}</dt>
          <dd class="text-[16px] font-medium" :class="r.latin && 'latin text-[17px]'">
            <a
              v-if="r.href"
              :href="r.href"
              :target="r.external ? '_blank' : undefined"
              :rel="r.external ? 'noopener noreferrer' : undefined"
              class="hover:underline"
              >{{ r.value }}</a
            >
            <template v-else>{{ r.value }}</template>
          </dd>
        </div>
      </div>
    </dl>
    <p class="latin border-brand-700 text-brand-200 mt-7 border-t pt-5 text-[12px]">
      {{ t('common.idCode') }} {{ company.idCode }} · {{ company.saras }}
    </p>
  </div>
</template>
