import type { RouteRecordRaw } from 'vue-router'
import type { Locale } from '@/content/company'
import { enEnabled } from '@/i18n'

declare module 'vue-router' {
  interface RouteMeta {
    locale: Locale
    page: PageName
  }
}

export type PageName =
  'home' | 'about' | 'clients' | 'services' | 'service' | 'contact' | 'privacy' | 'notFound'

const pages: { page: PageName; path: string; component: RouteRecordRaw['component'] }[] = [
  { page: 'home', path: '', component: () => import('@/pages/HomePage.vue') },
  { page: 'about', path: 'about', component: () => import('@/pages/AboutPage.vue') },
  { page: 'clients', path: 'clients', component: () => import('@/pages/ClientsPage.vue') },
  { page: 'services', path: 'services', component: () => import('@/pages/ServicesPage.vue') },
  { page: 'service', path: 'services/:slug', component: () => import('@/pages/ServicePage.vue') },
  { page: 'contact', path: 'contact', component: () => import('@/pages/ContactPage.vue') },
  { page: 'privacy', path: 'privacy', component: () => import('@/pages/PrivacyPage.vue') },
  { page: 'notFound', path: '404', component: () => import('@/pages/NotFoundPage.vue') },
  {
    page: 'notFound',
    path: ':pathMatch(.*)*',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]

/** ka - პრეფიქსის გარეშე (`/about`), en - `/en/about` */
export function localePrefix(locale: Locale) {
  return locale === 'ka' ? '' : `/${locale}`
}

export function routeName(locale: Locale, page: PageName) {
  return `${locale}:${page}`
}

function buildRoutes(locale: Locale): RouteRecordRaw[] {
  const prefix = localePrefix(locale)
  return pages.map(({ page, path, component }) => ({
    // catch-all-ს სახელი არ სჭირდება, რომ /404-ის სახელს არ დაემთხვეს
    name: path.startsWith(':pathMatch') ? undefined : routeName(locale, page),
    path: `${prefix}/${path}` || '/',
    component,
    meta: { locale, page },
  })) as RouteRecordRaw[]
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [...(enEnabled ? buildRoutes('en') : []), ...buildRoutes('ka')],
  },
]
