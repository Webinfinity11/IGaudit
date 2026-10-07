<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services } from '@/content/services'
import { useLocale } from '@/composables/useLocale'
import { vReveal } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import ParallaxPhoto from '@/components/motion/ParallaxPhoto.vue'
import StickyStack from '@/components/motion/StickyStack.vue'

const { t } = useI18n()
const { to } = useLocale()
</script>

<template>
  <section class="bg-ink-100/70 border-ink-200 border-y" aria-labelledby="services-title">
    <div class="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
      <div>
        <div v-reveal class="lg:sticky lg:top-24">
          <h2 id="services-title" class="h-display text-[30px] md:text-[44px]">
            {{ t('home.services.title') }}
          </h2>
          <p class="text-ink-600 mt-5 text-[16px] leading-relaxed">{{ t('home.services.text') }}</p>
          <RouterLink
            :to="to('services')"
            class="text-brand-800 mt-8 inline-flex items-center gap-2 text-[15px] font-medium hover:underline"
          >
            {{ t('nav.allServices') }} <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
        </div>
      </div>

      <StickyStack :items="services" :top="96">
        <template #default="{ item: s, index: i }">
          <article
            class="group bg-ink-50 border-ink-200 shadow-card relative grid min-h-[300px] overflow-hidden rounded-[28px] border sm:grid-cols-[1.2fr_1fr]"
          >
            <div class="flex flex-col p-7 md:p-9">
              <div class="flex items-center justify-between">
                <span
                  class="bg-brand-50 text-brand-800 flex size-12 items-center justify-center rounded-2xl"
                >
                  <AppIcon :name="s.icon" />
                </span>
                <span class="latin text-ink-400 text-[14px]"
                  >0{{ i + 1 }} / 0{{ services.length }}</span
                >
              </div>
              <h3
                class="text-ink-900 mt-auto pt-10 text-[22px] leading-snug font-bold md:text-[26px]"
              >
                <RouterLink
                  :to="to('service', s.slug)"
                  class="after:absolute after:inset-0 after:rounded-[28px]"
                >
                  {{ t(`services.${s.slug}.title`) }}
                </RouterLink>
              </h3>
              <p class="text-ink-500 mt-2 text-[15px] leading-relaxed">
                {{ t(`services.${s.slug}.short`) }}
              </p>
              <span
                class="text-brand-800 mt-6 inline-flex items-center gap-2 text-[14px] font-medium"
                aria-hidden="true"
              >
                {{ t('common.readMore') }}
                <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <ParallaxPhoto
              :name="s.photo"
              :distance="30"
              tone="soft"
              sizes="(min-width: 1024px) 400px, 50vw"
              class="relative hidden sm:block"
            />
          </article>
        </template>
      </StickyStack>
    </div>
  </section>
</template>
