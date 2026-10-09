<script setup lang="ts">
// სერვისების მიმართულებები - ჰორიზონტალური ზოლი ისრებით (scroll-snap, მობილურზე თითით გადასაწევი)
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services } from '@/content/services'
import { useLocale } from '@/composables/useLocale'
import { vReveal } from '@/composables/useMotion'
import AppIcon from '@/components/ui/AppIcon.vue'
import ParallaxPhoto from '@/components/motion/ParallaxPhoto.vue'

const { t } = useI18n()
const { to } = useLocale()

const track = ref<HTMLElement>()
const canPrev = ref(false)
const canNext = ref(true)

function update() {
  const el = track.value
  if (!el) return
  canPrev.value = el.scrollLeft > 4
  canNext.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

/** ერთი ბარათით გადაწევა */
function go(dir: 1 | -1) {
  const el = track.value
  const card = el?.querySelector<HTMLElement>('li')
  if (!el || !card) return
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0
  el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
}

onMounted(() => {
  update()
  track.value?.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => {
  track.value?.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})

const arrow =
  'flex size-12 items-center justify-center rounded-full border transition-colors duration-200 disabled:cursor-default disabled:opacity-35'
</script>

<template>
  <section class="bg-ink-100/70 border-ink-200 border-y" aria-labelledby="services-title">
    <div class="container-site py-16 md:py-24">
      <div v-reveal class="flex flex-wrap items-end justify-between gap-6">
        <div class="max-w-[680px]">
          <h2 id="services-title" class="h-display text-[30px] md:text-[44px]">
            {{ t('home.services.title') }}
          </h2>
          <p class="text-ink-600 mt-5 text-[16px] leading-relaxed">{{ t('home.services.text') }}</p>
          <RouterLink
            :to="to('services')"
            class="text-brand-800 mt-6 inline-flex items-center gap-2 text-[15px] font-medium hover:underline"
          >
            {{ t('nav.allServices') }} <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
        </div>
        <div class="flex gap-2">
          <button
            type="button"
            :class="[
              arrow,
              'border-ink-300 text-ink-800 enabled:hover:border-brand-800 enabled:hover:text-brand-800',
            ]"
            :disabled="!canPrev"
            :aria-label="t('common.prev')"
            aria-controls="services-track"
            @click="go(-1)"
          >
            <ArrowLeft :size="20" aria-hidden="true" />
          </button>
          <button
            type="button"
            :class="[arrow, 'bg-brand-800 border-brand-800 text-ink-50 enabled:hover:bg-brand-700']"
            :disabled="!canNext"
            :aria-label="t('common.next')"
            aria-controls="services-track"
            @click="go(1)"
          >
            <ArrowRight :size="20" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        id="services-track"
        ref="track"
        class="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        <li
          v-for="(s, i) in services"
          :key="s.slug"
          class="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
        >
          <article
            class="group bg-ink-50 border-ink-200 shadow-card relative flex h-full flex-col overflow-hidden rounded-[28px] border"
          >
            <ParallaxPhoto
              :name="s.photo"
              :distance="20"
              tone="soft"
              sizes="(min-width: 1024px) 400px, 85vw"
              class="relative h-44 md:h-52"
            />
            <div class="flex flex-1 flex-col p-6 md:p-7">
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
              <h3 class="text-ink-900 mt-6 text-[20px] leading-snug font-bold md:text-[22px]">
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
                class="text-brand-800 mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium"
                aria-hidden="true"
              >
                {{ t('common.readMore') }}
                <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
