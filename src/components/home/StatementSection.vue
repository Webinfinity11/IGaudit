<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { clients } from '@/content/clients'
import { company } from '@/content/company'
import { services } from '@/content/services'
import CountUp from '@/components/motion/CountUp.vue'
import ScrollWords from '@/components/motion/ScrollWords.vue'

const { t } = useI18n()
const stats = computed(() => [
  { n: new Date().getFullYear() - company.foundedYear, s: '+', l: t('home.about.stats.years') },
  { n: services.length, s: '', l: t('home.about.stats.services') },
  { n: clients.filter((c) => c.consent).length, s: '+', l: t('home.about.stats.clients') },
  { n: company.foundedYear, s: '', l: t('home.about.stats.since') },
])
</script>

<template>
  <section class="container-site pt-10 pb-16 md:pt-16 md:pb-24">
    <h2 class="sr-only">{{ t('home.about.eyebrow') }}</h2>
    <ScrollWords
      :text="t('home.statement')"
      class="text-ink-900 max-w-[1000px] text-[26px] leading-[1.25] font-extrabold tracking-tight md:text-[44px]"
    />
    <dl class="border-ink-200 mt-14 grid grid-cols-2 border-t md:mt-20 md:grid-cols-4">
      <div
        v-for="(s, i) in stats"
        :key="s.l"
        class="border-ink-200 flex flex-col-reverse pt-6 pb-2"
        :class="[i % 2 ? 'border-l pl-6 md:pl-8' : '', i === 2 ? 'md:border-l md:pl-8' : '']"
      >
        <dt class="text-ink-600 mt-3 text-[14px] leading-snug">{{ s.l }}</dt>
        <dd>
          <CountUp
            :value="s.n"
            :suffix="s.s"
            class="text-brand-800 block text-[44px] leading-none font-medium md:text-[64px]"
          />
        </dd>
      </div>
    </dl>
  </section>
</template>
