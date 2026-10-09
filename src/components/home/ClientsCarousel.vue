<script setup lang="ts">
// „ჩვენ გვენდობიან“ - ფაქტები + კლიენტების ლოგოები (ზოლი ჩანს მხოლოდ თუ clients.ts-ში ჩანაწერებია)
import { ShieldCheck, Users } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { clients } from '@/content/clients'
import { vReveal } from '@/composables/useMotion'

const { t } = useI18n()
const published = computed(() => clients.filter((c) => c.consent && c.logo))
// ზოლი მოძრაობს მხოლოდ თუ ლოგოები საკმარისია ეკრანის შესავსებად
const animate = computed(() => published.value.length >= 5)
const facts = [
  { key: 'insurance', icon: ShieldCheck },
  { key: 'team', icon: Users },
]
</script>

<template>
  <section class="container-site pb-16 md:pb-24" aria-labelledby="clients-title">
    <div v-reveal class="bg-accent-50 border-accent-100 rounded-[28px] border p-6 md:p-10">
      <div class="grid items-center gap-6 md:grid-cols-3 md:gap-10">
        <h2 id="clients-title" class="h-display text-[26px] leading-tight md:text-[32px]">
          {{ t('home.clients.title') }}
        </h2>
        <div v-for="f in facts" :key="f.key" class="flex gap-4">
          <span
            class="bg-ink-50 text-accent-900 flex size-11 shrink-0 items-center justify-center rounded-full"
          >
            <component :is="f.icon" :size="20" :stroke-width="1.5" aria-hidden="true" />
          </span>
          <div>
            <h3 class="text-ink-900 text-[16px] font-semibold">
              {{ t(`home.clients.${f.key}.title`) }}
            </h3>
            <p class="text-ink-600 mt-1 text-[14px] leading-relaxed">
              {{ t(`home.clients.${f.key}.text`) }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="published.length"
        class="marquee border-accent-100 relative mt-8 overflow-hidden border-t pt-8"
        :class="animate && 'is-animated'"
      >
        <ul
          class="marquee-track flex w-max items-center gap-14"
          :class="!animate && 'mx-auto flex-wrap justify-center'"
        >
          <template v-for="copy in animate ? 2 : 1" :key="copy">
            <li
              v-for="c in published"
              :key="`${copy}-${c.name}`"
              :aria-hidden="copy === 2 ? 'true' : undefined"
            >
              <component
                :is="c.url ? 'a' : 'span'"
                :href="c.url"
                :target="c.url ? '_blank' : undefined"
                :rel="c.url ? 'noopener noreferrer' : undefined"
                :tabindex="copy === 2 ? -1 : undefined"
                class="block"
              >
                <img
                  :src="c.logo"
                  :alt="c.name || t('clients.logoAlt')"
                  loading="lazy"
                  decoding="async"
                  height="56"
                  class="h-14 w-40 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </component>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee.is-animated {
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.is-animated .marquee-track {
  animation: marquee 40s linear infinite;
}
.is-animated:hover .marquee-track,
.is-animated:focus-within .marquee-track {
  animation-play-state: paused;
}
@keyframes marquee {
  to {
    transform: translateX(calc(-50% - 1.75rem));
  }
}
@media (prefers-reduced-motion: reduce) {
  .is-animated .marquee-track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }
  .is-animated .marquee-track > li[aria-hidden='true'] {
    display: none;
  }
}
</style>
