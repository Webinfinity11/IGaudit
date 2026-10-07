<script setup lang="ts">
// ენის გადამრთველი: გლობუსი + ენის სახელი, ანიმირებული ჩამოსაშლელი სია
import { Check, ChevronDown, Globe } from 'lucide-vue-next'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { enEnabled, localeNames, locales, LOCALE_STORAGE_KEY } from '@/i18n'
import { switchLocalePath, useLocale } from '@/composables/useLocale'
import type { Locale } from '@/content/company'

const props = withDefaults(defineProps<{ dark?: boolean; placement?: 'bottom' | 'top' }>(), {
  placement: 'bottom',
})
const emit = defineEmits<{ select: [] }>()

const route = useRoute()
const { t } = useI18n()
const { locale } = useLocale()

const open = ref(false)
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
const uid = `lang-menu-${props.placement}`

const links = computed(() =>
  locales.map((code) => ({
    code,
    name: localeNames[code],
    to: { path: switchLocalePath(route.path, locale.value, code), query: route.query },
  })),
)

function remember(code: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
  open.value = false
  emit('select')
}

async function toggle(focusFirst = false) {
  open.value = !open.value
  if (open.value && focusFirst) {
    await nextTick()
    const items = panel.value
    ;(
      items?.querySelector<HTMLElement>('[aria-current="true"]') ??
      items?.querySelector<HTMLElement>('a')
    )?.focus()
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    open.value = false
    trigger.value?.focus()
    return
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    if (!open.value) return toggle(true)
    const items = [...(panel.value?.querySelectorAll<HTMLElement>('a') ?? [])]
    const i = items.indexOf(document.activeElement as HTMLElement)
    const next =
      e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length
    items[next]?.focus()
  }
}

function onDocClick(e: MouseEvent) {
  if (!root.value?.contains(e.target as Node)) open.value = false
}
function onFocusOut(e: FocusEvent) {
  if (!root.value?.contains(e.relatedTarget as Node)) open.value = false
}

watch(open, (value) => {
  if (value) document.addEventListener('click', onDocClick)
  else document.removeEventListener('click', onDocClick)
})
watch(
  () => route.fullPath,
  () => (open.value = false),
)
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <div v-if="enEnabled" ref="root" class="relative" @keydown="onKeydown" @focusout="onFocusOut">
    <button
      ref="trigger"
      type="button"
      class="rounded-pill inline-flex items-center gap-2 border py-2 pr-3 pl-3 text-[13px] font-medium transition-colors duration-200"
      :class="
        dark
          ? 'border-ink-50/30 text-ink-50 hover:bg-ink-50/10'
          : 'border-ink-200 text-ink-800 hover:border-ink-300 hover:bg-ink-100'
      "
      :aria-expanded="open"
      :aria-controls="uid"
      aria-haspopup="true"
      :aria-label="`${t('nav.language')}: ${localeNames[locale]}`"
      @click="toggle()"
    >
      <Globe
        :size="16"
        :stroke-width="1.5"
        aria-hidden="true"
        class="transition-transform duration-500"
        :class="open && 'rotate-[30deg]'"
      />
      <span>{{ localeNames[locale] }}</span>
      <ChevronDown
        :size="14"
        aria-hidden="true"
        class="transition-transform duration-300"
        :class="open && 'rotate-180'"
      />
    </button>

    <Transition
      enter-active-class="lang-enter transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
      :enter-from-class="`opacity-0 scale-95 ${placement === 'top' ? 'translate-y-1' : '-translate-y-1'}`"
      leave-active-class="transition duration-150 ease-in"
      :leave-to-class="`opacity-0 scale-95 ${placement === 'top' ? 'translate-y-1' : '-translate-y-1'}`"
    >
      <div
        v-show="open"
        :id="uid"
        ref="panel"
        class="absolute right-0 z-50 w-48"
        :class="
          placement === 'top'
            ? 'bottom-full origin-bottom-right pb-2'
            : 'top-full origin-top-right pt-2'
        "
      >
        <ul
          class="rounded-card border-ink-200 bg-ink-50 shadow-pop border p-1.5"
          :aria-label="t('nav.language')"
        >
          <li v-for="(link, i) in links" :key="link.code" class="lang-item" :style="{ '--i': i }">
            <RouterLink
              :to="link.to"
              :hreflang="link.code"
              :lang="link.code"
              :aria-current="link.code === locale ? 'true' : undefined"
              class="rounded-field flex items-center gap-3 px-3 py-2.5 text-[14px] transition-colors"
              :class="
                link.code === locale
                  ? 'bg-brand-50 text-brand-800 font-medium'
                  : 'text-ink-700 hover:bg-ink-100'
              "
              @click="remember(link.code)"
            >
              <span class="latin text-ink-400 w-6 text-[11px] font-medium uppercase">{{
                link.code
              }}</span>
              <span class="flex-1">{{ link.name }}</span>
              <Check v-if="link.code === locale" :size="16" aria-hidden="true" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* პუნქტები რიგრიგობით ჩნდება, როცა სია იხსნება */
.lang-enter .lang-item {
  animation: lang-item-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(var(--i) * 50ms + 40ms);
}
@keyframes lang-item-in {
  from {
    opacity: 0;
    transform: translateX(6px);
  }
}
</style>
