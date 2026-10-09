<script setup lang="ts">
import { ArrowRight, ChevronDown } from 'lucide-vue-next'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import { useServiceMenu } from '@/composables/useServiceMenu'
import AppIcon from '@/components/ui/AppIcon.vue'

defineProps<{ pillClass: unknown; activeClass: string }>()

const { t } = useI18n()
const { to } = useLocale()
const route = useRoute()
const menu = useServiceMenu()

const open = ref(false)
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
let closeTimer: ReturnType<typeof setTimeout> | undefined

const active = computed(() => route.meta.page === 'services' || route.meta.page === 'service')

function show() {
  clearTimeout(closeTimer)
  open.value = true
}
function hide(delay = 0) {
  clearTimeout(closeTimer)
  if (delay) closeTimer = setTimeout(() => (open.value = false), delay)
  else open.value = false
}

async function onTriggerKey(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    show()
    await nextTick()
    panel.value?.querySelector<HTMLElement>('a')?.focus()
  }
}

function onPanelKey(e: KeyboardEvent) {
  const links = [...(panel.value?.querySelectorAll<HTMLElement>('a') ?? [])]
  const i = links.indexOf(document.activeElement as HTMLElement)
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    const next =
      e.key === 'ArrowDown' ? (i + 1) % links.length : (i - 1 + links.length) % links.length
    links[next]?.focus()
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    hide()
    trigger.value?.focus()
  }
}

function onFocusOut(e: FocusEvent) {
  if (!root.value?.contains(e.relatedTarget as Node)) hide()
}

function onDocClick(e: MouseEvent) {
  if (!root.value?.contains(e.target as Node)) hide()
}

watch(open, (value) => {
  if (value) document.addEventListener('click', onDocClick)
  else document.removeEventListener('click', onDocClick)
})
watch(
  () => route.fullPath,
  () => hide(),
)
onBeforeUnmount(() => {
  clearTimeout(closeTimer)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <div
    ref="root"
    class="relative"
    @mouseenter="show"
    @mouseleave="hide(150)"
    @keydown="onKeydown"
    @focusout="onFocusOut"
  >
    <button
      ref="trigger"
      type="button"
      :class="[pillClass, active && activeClass]"
      :aria-expanded="open"
      aria-controls="services-menu"
      aria-haspopup="true"
      @click="open ? hide() : show()"
      @keydown="onTriggerKey"
    >
      {{ t('nav.services') }}
      <ChevronDown
        :size="14"
        class="transition-transform duration-200"
        :class="open && 'rotate-180'"
        aria-hidden="true"
      />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="open"
        id="services-menu"
        ref="panel"
        class="absolute top-full left-1/2 z-50 w-[640px] -translate-x-1/2 pt-3"
        @keydown="onPanelKey"
      >
        <div class="rounded-card border-ink-200 bg-ink-50 shadow-pop border p-3">
          <ul class="grid grid-cols-2 gap-1">
            <li v-for="s in menu" :key="s.key">
              <RouterLink
                :to="s.to"
                class="rounded-field hover:bg-brand-50 focus-visible:bg-brand-50 flex gap-3 p-3 transition-colors"
                active-class="bg-brand-50"
              >
                <span
                  class="bg-brand-50 text-brand-800 flex size-9 shrink-0 items-center justify-center rounded-full"
                >
                  <AppIcon :name="s.icon" :size="18" />
                </span>
                <span class="text-ink-900 pt-2 text-[14px] leading-snug font-medium">
                  {{ s.label }}
                </span>
              </RouterLink>
            </li>
          </ul>
          <RouterLink
            :to="to('services')"
            class="border-ink-200 text-brand-800 mt-2 flex items-center gap-1 border-t px-3 pt-3 pb-1 text-[13px] font-medium hover:underline"
          >
            {{ t('nav.allServices') }} <ArrowRight :size="16" aria-hidden="true" />
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
