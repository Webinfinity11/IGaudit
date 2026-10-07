import { createI18n } from 'vue-i18n'
import ka from './locales/ka.json'
import en from './locales/en.json'
import type { Locale } from './content/company'

export const locales: Locale[] = ['ka', 'en']
export const defaultLocale: Locale = 'ka'
export const enEnabled = import.meta.env.VITE_ENABLE_EN !== 'false'
export const LOCALE_STORAGE_KEY = 'ig-locale'

/** ენის სახელი ყოველთვის საკუთარ ენაზე (ენის გადამრთველისთვის) */
export const localeNames: Record<Locale, string> = { ka: 'ქართული', en: 'English' }

export type MessageSchema = typeof ka

export function setupI18n() {
  return createI18n<[MessageSchema], Locale, false>({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages: { ka, en },
  })
}
