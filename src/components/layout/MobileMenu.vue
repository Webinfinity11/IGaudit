<script setup lang="ts">
import { ChevronDown, Phone } from 'lucide-vue-next'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { company } from '@/content/company'
import { useLocale } from '@/composables/useLocale'
import { useServiceMenu } from '@/composables/useServiceMenu'
import LangSwitcher from './LangSwitcher.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()
const { to } = useLocale()
const servicesOpen = ref(false)
const menu = useServiceMenu()
const panel = ref<HTMLElement>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  async (open) => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (open) {
      document.addEventListener('keydown', onKeydown)
      await nextTick()
      panel.value?.querySelector<HTMLElement>('a, button')?.focus()
    } else {
      document.removeEventListener('keydown', onKeydown)
      servicesOpen.value = false
    }
  },
)
onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})

const linkClass = 'block border-b border-ink-200 py-4 text-lg font-medium text-ink-900'
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-150"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      id="mobile-menu"
      ref="panel"
      class="bg-ink-50 fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto lg:hidden"
    >
      <nav :aria-label="t('nav.mainMenu')" class="container-site pt-2 pb-10">
        <RouterLink
          :to="to('home')"
          :class="linkClass"
          exact-active-class="!text-brand-800"
          @click="emit('close')"
        >
          {{ t('nav.home') }}
        </RouterLink>
        <RouterLink
          :to="to('about')"
          :class="linkClass"
          active-class="!text-brand-800"
          @click="emit('close')"
        >
          {{ t('nav.about') }}
        </RouterLink>
        <RouterLink
          :to="to('clients')"
          :class="linkClass"
          active-class="!text-brand-800"
          @click="emit('close')"
        >
          {{ t('nav.clients') }}
        </RouterLink>

        <div class="border-ink-200 border-b">
          <button
            type="button"
            class="text-ink-900 flex w-full items-center justify-between py-4 text-left text-lg font-medium"
            :aria-expanded="servicesOpen"
            aria-controls="mobile-services"
            @click="servicesOpen = !servicesOpen"
          >
            {{ t('nav.services') }}
            <ChevronDown
              :size="20"
              class="transition-transform"
              :class="servicesOpen && 'rotate-180'"
              aria-hidden="true"
            />
          </button>
          <ul v-show="servicesOpen" id="mobile-services" class="pb-3">
            <li v-for="s in menu" :key="s.key">
              <RouterLink
                :to="s.to"
                class="text-ink-600 block py-2.5 pl-4"
                active-class="!text-brand-800"
                @click="emit('close')"
              >
                {{ s.label }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="to('services')"
                class="text-brand-800 block py-2.5 pl-4 font-medium"
                @click="emit('close')"
              >
                {{ t('nav.allServices') }} →
              </RouterLink>
            </li>
          </ul>
        </div>

        <RouterLink
          :to="to('contact')"
          :class="linkClass"
          active-class="!text-brand-800"
          @click="emit('close')"
        >
          {{ t('nav.contact') }}
        </RouterLink>

        <div class="mt-8 flex items-center justify-between gap-4">
          <a
            :href="company.phoneHref"
            class="latin text-brand-800 flex items-center gap-2 font-medium"
          >
            <Phone :size="18" aria-hidden="true" />
            {{ company.phone }}
          </a>
          <LangSwitcher placement="top" @select="emit('close')" />
        </div>
      </nav>
    </div>
  </Transition>
</template>
