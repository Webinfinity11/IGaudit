import { ref } from 'vue'

export type Consent = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'ig-cookie-consent'
const consent = ref<Consent>(null)
const ready = ref(false)

function readStored(): Consent {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected' ? value : null
  } catch {
    return null
  }
}

let analyticsLoaded = false

/** GA4 იტვირთება მხოლოდ თანხმობის შემდეგ და მხოლოდ თუ VITE_GA_ID მითითებულია */
function loadAnalytics() {
  const id = import.meta.env.VITE_GA_ID
  if (analyticsLoaded || !id || typeof document === 'undefined') return
  analyticsLoaded = true
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', id, { anonymize_ip: true })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

export function useCookieConsent() {
  /** კლიენტზე, mount-ის შემდეგ - SSG HTML-ში ბანერი არ რენდერდება */
  function init() {
    consent.value = readStored()
    ready.value = true
    if (consent.value === 'accepted') loadAnalytics()
  }

  function set(value: Exclude<Consent, null>) {
    consent.value = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* private mode - არჩევანი მხოლოდ ამ სესიაზე */
    }
    if (value === 'accepted') loadAnalytics()
  }

  return { consent, ready, init, accept: () => set('accepted'), reject: () => set('rejected') }
}
