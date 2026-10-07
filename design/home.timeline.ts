// @timeline:begin home
import { useEffect } from "react"
import { useAnimate, useReducedMotion } from "motion/react"

/// Put the returned ref on the element that holds every [data-anim] target.
export function useHomeTimeline() {
  const [scope, animate] = useAnimate()
  const reduce = useReducedMotion()
  useEffect(() => {
    const animation = animate([
      ["[data-anim=hero-title-line-0]", { y: [100, 0, 0] }, { at: 0, duration: 1.2, times: [0, 0.5, 1], ease: [[0.22, 1, 0.36, 1], "linear"] }],
      ["[data-anim=hero-title-line-1]", { y: [100, 100, 0, 0] }, { at: 0, duration: 1.2, times: [0, 0.083333, 0.583333, 1], ease: ["easeOut", [0.22, 1, 0.36, 1], "linear"] }],
      ["[data-anim=hero-title-line-2]", { y: [100, 100, 0, 0] }, { at: 0, duration: 1.2, times: [0, 0.166667, 0.666667, 1], ease: ["easeOut", [0.22, 1, 0.36, 1], "linear"] }],
      ["[data-anim=hero-copy]", { opacity: [0, 0, 1, 1] }, { at: 0, duration: 1.2, times: [0, 0.375, 0.791667, 1], ease: ["easeOut", [0.22, 1, 0.36, 1], "linear"] }],
      ["[data-anim=hero-facts]", { opacity: [0, 0, 1] }, { at: 0, duration: 1.2, times: [0, 0.583333, 1], ease: ["easeOut", [0.22, 1, 0.36, 1]] }],
    ])
    if (reduce) animation.complete()
    return () => animation.stop()
  }, [animate, reduce])
  return scope
}
// @timeline:end home
