import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { company } from '@/content/company'
import { enEnabled } from '@/i18n'
import { switchLocalePath } from './useLocale'

export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://iggroup.ge').replace(/\/$/, '')

/** `/` → `https://site/`, `/about/` → `https://site/about` (იგივე ფორმატი, რაც sitemap-ში) */
function absoluteUrl(path: string) {
  const clean = path.length > 1 ? path.replace(/\/$/, '') : '/'
  return `${siteUrl}${clean}`
}

interface SeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  /** title-ს არ დაემატება „ | IG GROUP“ (მთავარი გვერდი) */
  rawTitle?: boolean
  noindex?: boolean
}

/** title, description, Open Graph, Twitter, canonical, hreflang */
export function useSeo(options: SeoOptions) {
  const route = useRoute()
  const locale = computed(() => route.meta.locale ?? 'ka')

  const title = computed(() =>
    options.rawTitle ? toValue(options.title) : `${toValue(options.title)} | ${company.name}`,
  )
  const description = computed(() => toValue(options.description))
  const canonical = computed(() => absoluteUrl(route.path))
  const alternates = computed(() => {
    if (!enEnabled || options.noindex) return []
    const ka = switchLocalePath(route.path, locale.value, 'ka')
    const en = switchLocalePath(route.path, locale.value, 'en')
    return [
      { rel: 'alternate', hreflang: 'ka', href: absoluteUrl(ka) },
      { rel: 'alternate', hreflang: 'en', href: absoluteUrl(en) },
      { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(ka) },
    ]
  })

  useHead({
    htmlAttrs: { lang: locale },
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: options.noindex ? 'noindex, follow' : 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: company.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: `${siteUrl}/og-image.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:locale',
        content: computed(() => (locale.value === 'ka' ? 'ka_GE' : 'en_US')),
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}/og-image.png` },
    ],
    link: computed(() => [
      ...(options.noindex ? [] : [{ rel: 'canonical', href: canonical.value }]),
      ...alternates.value,
    ]),
  })
}
