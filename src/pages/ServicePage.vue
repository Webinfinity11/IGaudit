<script setup lang="ts">
import { ArrowRight, Phone, ShieldCheck } from 'lucide-vue-next'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { isServiceSlug, services } from '@/content/services'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal, vRevealGroup } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import ParallaxPhoto from '@/components/motion/ParallaxPhoto.vue'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const { t, te, tm, rt } = useI18n()
const { to } = useLocale()

const slug = computed(() => (isServiceSlug(route.params.slug) ? route.params.slug : null))
const service = computed(() => services.find((s) => s.slug === slug.value))
const others = computed(() => services.filter((s) => s.slug !== slug.value))
const key = (field: string) => `services.${slug.value}.${field}`
const items = computed(() => (slug.value ? (tm(key('items')) as string[]).map((i) => rt(i)) : []))

if (slug.value) {
  useSeo({
    title: () => t(key('title')),
    description: () => `${t(key('heading'))}. ${t(key('short'))}`,
  })
}
</script>

<template>
  <NotFoundPage v-if="!slug || !service" />
  <template v-else>
    <PageHero
      :crumbs="[
        { text: t('nav.home'), to: to('home') },
        { text: t('nav.services'), to: to('services') },
        { text: t(key('title')) },
      ]"
    >
      <div v-reveal class="mt-10 grid gap-12 pb-16 md:pb-24 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
        <div>
          <p class="text-brand-800 mb-4 text-[14px] font-medium">{{ t(key('title')) }}</p>
          <h1 class="h-display text-[32px] md:text-[50px]">{{ t(key('heading')) }}</h1>
          <p v-if="te(key('note'))" class="text-ink-500 mt-4 text-[14px] italic">
            {{ t(key('note')) }}
          </p>
          <p class="text-ink-600 mt-6 text-[17px] leading-relaxed md:text-[18px]">
            {{ t(key('intro')) }}
          </p>

          <div class="bg-ink-50 border-ink-200 mt-10 rounded-[28px] border p-6 md:p-8">
            <h2 class="text-ink-900 text-[20px] font-bold">{{ t('servicesPage.includes') }}</h2>
            <ol class="divide-ink-200 mt-6 divide-y">
              <li v-for="(it, i) in items" :key="i" class="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span
                  class="latin bg-accent-50 text-accent-900 flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-medium"
                  aria-hidden="true"
                >
                  0{{ i + 1 }}
                </span>
                <span class="text-ink-700 pt-1 text-[16px] leading-relaxed">{{ it }}</span>
              </li>
            </ol>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <BaseButton :to="to('contact', undefined, { service: slug })">
              {{ t('common.requestConsultation') }} <ArrowRight :size="18" aria-hidden="true" />
            </BaseButton>
            <a
              :href="company.phoneHref"
              class="latin rounded-pill border-ink-200 text-ink-700 hover:border-brand-800 inline-flex items-center gap-2 border px-5 py-3.5 text-[15px] transition-colors"
            >
              <Phone :size="16" class="text-brand-800" aria-hidden="true" /> {{ company.phone }}
            </a>
          </div>
        </div>

        <aside class="hidden lg:block">
          <div class="sticky top-24 space-y-4">
            <div class="relative h-[360px] overflow-hidden rounded-[28px]">
              <ParallaxPhoto
                :name="service.photo"
                pos="70% 50%"
                :distance="50"
                sizes="440px"
                class="absolute inset-0"
              />
              <div
                class="bg-ink-50 text-brand-800 shadow-pop absolute top-5 left-5 flex size-14 items-center justify-center rounded-2xl"
              >
                <AppIcon :name="service.icon" :size="28" />
              </div>
            </div>
            <div class="bg-brand-800 text-ink-50 rounded-[28px] p-7">
              <p class="text-brand-200 flex items-center gap-2 text-[13px]">
                <ShieldCheck :size="16" aria-hidden="true" /> {{ t('home.hero.registered') }}
              </p>
              <p class="latin mt-3 text-[22px] font-medium">{{ company.saras }}</p>
              <p class="text-brand-100 mt-3 text-[14px] leading-relaxed">
                {{ t('servicesPage.firmCard') }}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </PageHero>

    <section class="bg-ink-100/70 border-ink-200 border-y" aria-labelledby="other-services">
      <div class="container-site py-16 md:py-20">
        <h2 id="other-services" class="h-display text-[26px] md:text-[34px]">
          {{ t('servicesPage.other') }}
        </h2>
        <ul v-reveal-group class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <li v-for="s in others" :key="s.slug"><ServiceCard :service="s" compact /></li>
        </ul>
      </div>
    </section>
  </template>
</template>
