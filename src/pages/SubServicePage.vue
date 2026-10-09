<script setup lang="ts">
import { ArrowRight, Phone, ShieldCheck } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { isServiceSlug, services } from '@/content/services'
import { serviceDetails } from '@/content/serviceDetails'
import { useSeo } from '@/composables/useSeo'
import { useLocale } from '@/composables/useLocale'
import { vReveal } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const { t } = useI18n()
const { to, toSub, locale } = useLocale()

const slug = computed(() => (isServiceSlug(route.params.slug) ? route.params.slug : null))
const service = computed(() => services.find((s) => s.slug === slug.value))
const sub = computed(() => {
  const s = String(route.params.sub ?? '')
  return service.value?.subs.includes(s) ? s : null
})
const blocks = computed(() =>
  sub.value ? (serviceDetails[`${slug.value}/${sub.value}`]?.[locale.value] ?? []) : [],
)
const key = (field: string) => `services.${slug.value}.subs.${sub.value}.${field}`

if (slug.value && sub.value) {
  useSeo({ title: () => t(key('title')), description: () => t(key('short')) })
}
</script>

<template>
  <NotFoundPage v-if="!service || !sub" />
  <template v-else>
    <PageHero
      :crumbs="[
        { text: t('nav.home'), to: to('home') },
        { text: t('nav.services'), to: to('services') },
        { text: t(`services.${service.slug}.title`), to: to('service', service.slug) },
        { text: t(key('title')) },
      ]"
    >
      <div v-reveal class="mt-10 pb-12 md:pb-16">
        <p class="text-brand-800 mb-4 flex items-center gap-2 text-[14px] font-medium">
          <AppIcon :name="service.icon" :size="18" />
          {{ t(`services.${service.slug}.title`) }}
        </p>
        <h1 class="h-display max-w-[900px] text-[30px] md:text-[48px]">{{ t(key('title')) }}</h1>
        <p class="text-ink-600 mt-5 max-w-[760px] text-[17px] leading-relaxed">
          {{ t(key('short')) }}
        </p>
      </div>
    </PageHero>

    <section
      class="container-site grid gap-12 pt-4 pb-16 md:pb-24 lg:grid-cols-[1.6fr_1fr] lg:gap-16"
    >
      <!-- ტექსტი -->
      <article class="min-w-0">
        <template v-for="(b, i) in blocks" :key="i">
          <h2
            v-if="'h' in b"
            class="text-ink-900 mt-10 mb-4 text-[20px] leading-snug font-bold first:mt-0 md:text-[22px]"
          >
            {{ b.h }}
          </h2>
          <p
            v-else-if="'p' in b"
            class="text-ink-700 mb-5 text-[16px] leading-relaxed md:text-[17px]"
          >
            {{ b.p }}
          </p>
          <ul
            v-else-if="'ul' in b"
            class="bg-ink-50 border-ink-200 mb-6 space-y-3 rounded-[24px] border p-6 md:p-7"
          >
            <li v-for="(it, j) in b.ul" :key="j" class="flex gap-3">
              <span class="bg-brand-800 mt-2.5 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
              <span class="text-ink-700 text-[15px] leading-relaxed md:text-[16px]">{{ it }}</span>
            </li>
          </ul>
          <ol
            v-else-if="'ol' in b"
            class="bg-ink-50 border-ink-200 divide-ink-200 mb-6 divide-y rounded-[24px] border px-6 md:px-7"
          >
            <li v-for="(it, j) in b.ol" :key="j" class="flex gap-4 py-4">
              <span
                class="latin bg-accent-50 text-accent-900 flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-medium"
                aria-hidden="true"
              >
                {{ j + 1 }}
              </span>
              <span class="text-ink-700 pt-1 text-[15px] leading-relaxed md:text-[16px]">{{
                it
              }}</span>
            </li>
          </ol>
          <blockquote
            v-else-if="'quote' in b"
            class="border-brand-800 text-ink-900 my-8 border-l-2 pl-5 text-[18px] leading-snug font-semibold md:text-[21px]"
          >
            {{ b.quote }}
          </blockquote>
        </template>

        <div class="mt-10 flex flex-wrap items-center gap-3">
          <BaseButton :to="to('contact', undefined, { service: service.slug })">
            {{ t('common.requestConsultation') }} <ArrowRight :size="18" aria-hidden="true" />
          </BaseButton>
          <a
            :href="company.phoneHref"
            class="latin rounded-pill border-ink-200 text-ink-700 hover:border-brand-800 inline-flex items-center gap-2 border px-5 py-3.5 text-[15px] transition-colors"
          >
            <Phone :size="16" class="text-brand-800" aria-hidden="true" /> {{ company.phone }}
          </a>
        </div>
      </article>

      <!-- ამავე მიმართულების სერვისები -->
      <aside>
        <div class="space-y-4 lg:sticky lg:top-24">
          <nav :aria-label="t('servicesPage.related')" class="bg-ink-100 rounded-[28px] p-6 md:p-7">
            <h2 class="text-ink-900 text-[15px] font-bold">
              {{ t(`services.${service.slug}.title`) }}
            </h2>
            <ul class="mt-4 space-y-1">
              <li v-for="s in service.subs" :key="s">
                <RouterLink
                  :to="toSub(service.slug, s)"
                  class="rounded-field text-ink-700 hover:bg-ink-50 flex items-center justify-between gap-3 px-3 py-2.5 text-[14px] leading-snug transition-colors"
                  :class="s === sub && '!bg-ink-50 text-brand-800 font-semibold'"
                  :aria-current="s === sub ? 'page' : undefined"
                >
                  {{ t(`services.${service.slug}.subs.${s}.title`) }}
                  <ArrowRight :size="15" class="shrink-0 opacity-60" aria-hidden="true" />
                </RouterLink>
              </li>
            </ul>
          </nav>
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
    </section>
  </template>
</template>
