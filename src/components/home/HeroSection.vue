<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useLocale } from '@/composables/useLocale'
import { vReveal } from '@/composables/useMotion'
import BaseButton from '@/components/ui/BaseButton.vue'
import HeroLines from '@/components/motion/HeroLines.vue'
import ParallaxPhoto from '@/components/motion/ParallaxPhoto.vue'
import ScrollFadeOut from '@/components/motion/ScrollFadeOut.vue'

const { t } = useI18n()
const { to } = useLocale()

// სლოგანი სამ სტრიქონად; ბოლო - ღია იისფერი
const lines = computed(() =>
  t('home.hero.title')
    .split(/(?<=\.)\s+/)
    .map((text, i, all) => ({ text, class: i === all.length - 1 ? 'text-brand-300' : '' })),
)
const facts = computed(() => [
  { k: t('home.hero.facts.registration'), v: company.saras, latin: true },
  { k: t('home.hero.facts.market'), v: t('home.hero.facts.marketValue') },
  { k: t('home.hero.facts.team'), v: t('home.hero.facts.teamValue') },
  { k: t('home.hero.facts.liability'), v: t('home.hero.facts.liabilityValue') },
])
</script>

<template>
  <section class="bg-brand-900 text-ink-50 relative overflow-hidden">
    <ParallaxPhoto
      name="hero"
      pos="60% 45%"
      :distance="70"
      tone="soft"
      eager
      sizes="100vw"
      class="absolute inset-0"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0"
      style="
        background:
          linear-gradient(
            90deg,
            rgb(38 0 42 / 0.72) 0%,
            rgb(38 0 42 / 0.38) 50%,
            rgb(38 0 42 / 0.05) 100%
          ),
          linear-gradient(0deg, rgb(38 0 42 / 0.6) 0%, rgb(38 0 42 / 0) 40%);
      "
    />

    <ScrollFadeOut
      class="container-site relative pt-[calc(var(--header-h)+6rem)] pb-10 md:pt-[calc(var(--header-h)+10rem)] md:pb-14"
    >
      <HeroLines
        :lines="lines"
        class="text-[27px] leading-[1.06] font-extrabold tracking-tight sm:text-[52px] md:text-[80px]"
      />
      <div
        v-reveal="{ delay: 0.45, y: 12 }"
        class="mt-10 grid items-end gap-8 md:mt-12 md:grid-cols-[1fr_auto]"
      >
        <p class="text-ink-200 max-w-[560px] text-[16px] leading-relaxed md:text-[19px]">
          {{ t('home.hero.subtitle') }}
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <BaseButton :to="to('contact')" variant="light" size="lg">
            {{ t('common.contactUs') }} <ArrowRight :size="18" aria-hidden="true" />
          </BaseButton>
          <BaseButton :to="to('services')" variant="outline-light" size="lg" class="!font-medium">
            {{ t('home.hero.servicesButton') }}
          </BaseButton>
        </div>
      </div>
    </ScrollFadeOut>

    <div v-reveal="{ delay: 0.7, y: 0 }" class="border-ink-50/15 relative border-t">
      <dl class="container-site grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(f, i) in facts"
          :key="f.k"
          class="border-ink-50/15 flex flex-col-reverse py-5 md:py-6"
          :class="[
            i % 2 ? 'border-l pl-5' : '',
            i === 2 ? 'md:border-l md:pl-5' : '',
            i > 1 ? 'border-t md:border-t-0' : '',
          ]"
        >
          <dd
            class="text-ink-50 mt-1 text-[15px] font-semibold md:text-[16px]"
            :class="f.latin && 'latin'"
          >
            {{ f.v }}
          </dd>
          <dt class="text-ink-300 text-[12px]">{{ f.k }}</dt>
        </div>
      </dl>
    </div>
  </section>
</template>
