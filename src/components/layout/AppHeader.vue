<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useLocale } from '@/composables/useLocale'
import AppLogo from '@/components/ui/AppLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import NavDropdown from './NavDropdown.vue'
import MobileMenu from './MobileMenu.vue'
import LangSwitcher from './LangSwitcher.vue'

const { t } = useI18n()
const { to } = useLocale()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

/** მთავარ გვერდზე, სანამ hero ჩანს - გამჭვირვალე ფონი და თეთრი ტექსტი */
const dark = computed(() => route.meta.page === 'home' && !scrolled.value && !menuOpen.value)
const solid = computed(() => scrolled.value || menuOpen.value)

function onScroll() {
  scrolled.value = window.scrollY > 24
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
)

const pill =
  'inline-flex items-center gap-1 rounded-pill px-4 py-2 text-[14px] transition-colors duration-200'
const pillIdle = computed(() =>
  dark.value ? 'text-ink-50 hover:bg-ink-50/15' : 'text-ink-700 hover:bg-ink-50',
)
const pillActive = 'bg-ink-50 !text-brand-800 font-medium shadow-card'
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300"
    :class="
      solid
        ? 'bg-ink-50/90 shadow-[0_1px_0_var(--color-ink-200)] backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <div class="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
      <RouterLink
        :to="to('home')"
        class="shrink-0"
        :aria-label="`${company.name} - ${t('nav.home')}`"
      >
        <AppLogo :tone="dark ? 'white' : 'color'" class="h-8 w-auto md:h-9" />
      </RouterLink>

      <nav :aria-label="t('nav.mainMenu')" class="hidden lg:block">
        <ul
          class="rounded-pill flex items-center gap-1 p-1"
          :class="dark ? 'bg-ink-50/10' : 'bg-ink-100/70'"
        >
          <li>
            <RouterLink :to="to('home')" :class="[pill, pillIdle]" :exact-active-class="pillActive">
              {{ t('nav.home') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="to('about')" :class="[pill, pillIdle]" :active-class="pillActive">
              {{ t('nav.about') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="to('clients')" :class="[pill, pillIdle]" :active-class="pillActive">
              {{ t('nav.clients') }}
            </RouterLink>
          </li>
          <li><NavDropdown :pill-class="[pill, pillIdle]" :active-class="pillActive" /></li>
          <li>
            <RouterLink :to="to('contact')" :class="[pill, pillIdle]" :active-class="pillActive">
              {{ t('nav.contact') }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <!-- wrapper: კომპონენტების საკუთარი inline-flex „hidden“-ს გადაფარავდა -->
        <div class="hidden items-center gap-3 lg:flex">
          <LangSwitcher :dark="dark" />
          <BaseButton :to="to('contact')" :variant="dark ? 'light' : 'primary'" size="sm">
            {{ t('common.contactUs') }}
          </BaseButton>
        </div>
        <button
          type="button"
          class="flex size-10 items-center justify-center rounded-full transition-colors lg:hidden"
          :class="dark ? 'bg-ink-50/15 text-ink-50' : 'bg-ink-100 text-ink-800'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="20" aria-hidden="true" />
          <Menu v-else :size="20" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
  <!-- header-ის გარეთ: backdrop-filter fixed ელემენტს header-ის ფარგლებში „ჩაკეტავდა“ -->
  <MobileMenu :open="menuOpen" @close="menuOpen = false" />
</template>
