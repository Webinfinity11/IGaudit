import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import type { Locale } from '@/content/company'
import type { ServiceSlug } from '@/content/services'
import { routeName, localePrefix, type PageName } from '@/router/routes'

/** მიმდინარე ენა და ბმულების აწყობა ამ ენაზე */
export function useLocale() {
  const route = useRoute()
  const locale = computed<Locale>(() => route.meta.locale ?? 'ka')

  function to(
    page: PageName,
    slug?: ServiceSlug,
    query?: Record<string, string>,
  ): RouteLocationRaw {
    return {
      name: routeName(locale.value, page),
      params: slug ? { slug } : undefined,
      query,
    }
  }

  /** ქვე-სერვისის გვერდი: /services/<slug>/<sub> */
  function toSub(slug: ServiceSlug, sub: string): RouteLocationRaw {
    return { name: routeName(locale.value, 'subservice'), params: { slug, sub } }
  }

  return { locale, to, toSub }
}

/** ერთი და იგივე გვერდის მისამართი სხვა ენაზე */
export function switchLocalePath(path: string, from: Locale, target: Locale) {
  // `//evil.com` ბრაუზერისთვის გარე მისამართია (protocol-relative) - ზედმეტ „/“-ებს ვაერთიანებთ
  const safe = path.replace(/^\/+/, '/')
  const bare =
    from === 'ka'
      ? safe
      : safe.replace(new RegExp(`^/${from}(?=/|$)`), '').replace(/^\/+/, '/') || '/'
  const prefix = localePrefix(target)
  if (!prefix) return bare
  return bare === '/' ? prefix : `${prefix}${bare}`
}
