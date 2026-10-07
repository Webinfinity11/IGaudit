/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_ENABLE_EN?: string
  readonly VITE_FORM_ENDPOINT?: string
  readonly VITE_FORM_KEY?: string
  readonly VITE_TURNSTILE_SITE_KEY?: string
  readonly VITE_GA_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
