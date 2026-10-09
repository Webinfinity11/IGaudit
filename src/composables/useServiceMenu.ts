import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services, type ServiceSlug } from '@/content/services'
import { useLocale } from './useLocale'

/** ქვე-სერვისები, რომლებიც მენიუში ცალკე პუნქტადაც ჩანს (მშობელი მიმართულების შემდეგ) */
const featured: { parent: ServiceSlug; sub: string; icon: string }[] = [
  { parent: 'tax', sub: 'tax-disputes', icon: 'Scale' },
]

export interface ServiceMenuItem {
  key: string
  to: RouteLocationRaw
  icon: string
  label: string
}

/** სერვისების მენიუ: მიმართულებები + ცალკე გამოტანილი ქვე-სერვისები */
export function useServiceMenu() {
  const { t } = useI18n()
  const { to, toSub } = useLocale()
  return computed<ServiceMenuItem[]>(() =>
    services.flatMap((s) => [
      {
        key: s.slug,
        to: to('service', s.slug),
        icon: s.icon,
        label: t(`services.${s.slug}.title`),
      },
      ...featured
        .filter((f) => f.parent === s.slug)
        .map((f) => ({
          key: `${f.parent}/${f.sub}`,
          to: toSub(f.parent, f.sub),
          icon: f.icon,
          label: t(`services.${f.parent}.subs.${f.sub}.title`),
        })),
    ]),
  )
}
