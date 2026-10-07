import { animate, inView, scroll } from 'motion'
import { onBeforeUnmount, onMounted, type Directive, type Ref } from 'vue'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export function prefersReducedMotion() {
  return (
    typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

type ScrollOffset = Parameters<typeof scroll>[1] extends infer O
  ? O extends { offset?: infer T }
    ? T
    : never
  : never

/**
 * სქროლზე მიბმული პროგრესი 0..1 (motion `scroll`). reduced-motion-ისას არ ირთვება.
 * offset - იგივე ფორმატი, რაც design/*.tsx-ში (`['start end', 'end start']`).
 */
export function useScrollProgress(
  target: Ref<HTMLElement | undefined>,
  offset: ScrollOffset,
  onProgress: (p: number) => void,
) {
  let stop: (() => void) | undefined
  onMounted(() => {
    if (!target.value || prefersReducedMotion()) return
    stop = scroll(onProgress, { target: target.value, offset })
  })
  onBeforeUnmount(() => stop?.())
}

/** a→b ხაზოვანი ინტერპოლაცია p∈[from,to] დიაპაზონზე (useTransform-ის ანალოგი) */
export function mapRange(p: number, from: number, to: number, a: number, b: number) {
  const t = Math.min(1, Math.max(0, (p - from) / (to - from || 1)))
  return a + (b - a) * t
}

function show(el: Element, delay: number) {
  return animate(
    el,
    { opacity: 1, transform: 'translateY(0px)' },
    { duration: 0.5, delay, ease: EASE_OUT },
  )
}

/**
 * v-reveal - ელემენტი ერთხელ ამოდის, როცა ხედვის არეში შედის.
 * v-reveal="{ delay: 0.45, y: 12 }"
 */
export const vReveal: Directive<HTMLElement, { delay?: number; y?: number } | undefined> = {
  getSSRProps: () => ({ 'data-reveal': '' }),
  mounted(el, { value }) {
    el.setAttribute('data-reveal', '')
    if (value?.y !== undefined) el.style.setProperty('--reveal-y', `${value.y}px`)
    if (prefersReducedMotion()) return
    const stop = inView(
      el,
      () => {
        show(el, value?.delay ?? 0)
      },
      { amount: 0.2 },
    )
    ;(el as HTMLElement & { _revealStop?: () => void })._revealStop = stop
  },
  unmounted(el) {
    ;(el as HTMLElement & { _revealStop?: () => void })._revealStop?.()
  },
}

/** v-reveal-group - პირდაპირი შვილები რიგრიგობით (60ms) ამოდიან */
export const vRevealGroup: Directive<HTMLElement> = {
  getSSRProps: () => ({ 'data-reveal-group': '' }),
  mounted(el) {
    el.setAttribute('data-reveal-group', '')
    if (prefersReducedMotion()) return
    const stop = inView(
      el,
      () => {
        const items = [...el.children]
        const step = Math.min(0.06, 0.5 / Math.max(items.length, 1))
        items.forEach((child, i) =>
          animate(
            child,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.45, delay: i * step, ease: EASE_OUT },
          ),
        )
      },
      { amount: 0.15 },
    )
    ;(el as HTMLElement & { _revealStop?: () => void })._revealStop = stop
  },
  unmounted(el) {
    ;(el as HTMLElement & { _revealStop?: () => void })._revealStop?.()
  },
}
