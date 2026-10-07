<script setup lang="ts">
// Cloudflare Turnstile - იტვირთება მხოლოდ თუ VITE_TURNSTILE_SITE_KEY მითითებულია
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (id?: string) => void
  remove: (id: string) => void
}
declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

const props = defineProps<{ language: string }>()
const token = defineModel<string>({ required: true })
const el = ref<HTMLElement>()
const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
let widgetId: string | undefined

const SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

function loadScript(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = SRC
      script.async = true
      document.head.appendChild(script)
    }
    script.addEventListener('load', () => (window.turnstile ? resolve(window.turnstile) : reject()))
    script.addEventListener('error', reject)
  })
}

onMounted(async () => {
  if (!siteKey || !el.value) return
  try {
    const ts = await loadScript()
    widgetId = ts.render(el.value, {
      sitekey: siteKey,
      language: props.language,
      callback: (t: string) => (token.value = t),
      'expired-callback': () => (token.value = ''),
      'error-callback': () => (token.value = ''),
    })
  } catch {
    /* ქსელის შეცდომა - ვალიდაცია captcha-ს შეცდომას აჩვენებს */
  }
})

onBeforeUnmount(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
})

defineExpose({ reset: () => widgetId && window.turnstile?.reset(widgetId) })
</script>

<template>
  <div v-if="siteKey" ref="el" class="min-h-[65px]" />
</template>
