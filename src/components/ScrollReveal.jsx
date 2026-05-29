import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fromVars = {
      up:    { y: 60, opacity: 0 },
      down:  { y: -60, opacity: 0 },
      left:  { x: -60, opacity: 0 },
      right: { x: 60, opacity: 0 },
      scale: { scale: 0.88, opacity: 0 },
    }[direction] || { y: 60, opacity: 0 }

    const toVars = {
      y: 0, x: 0, scale: 1, opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    }

    gsap.fromTo(el, fromVars, toVars)
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [direction, delay])

  return <div ref={ref} className={className}>{children}</div>
}
