import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return

    const elements = document.querySelectorAll<HTMLElement>(
      '.body h2, .body article, .body .row, #about p, .contact-inner > *'
    )
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animations = new Map<Element, Animation>()
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const element = entry.target
        animations.get(element)?.cancel()
        animations.delete(element)
        if (!entry.isIntersecting || reducedMotion.matches || element.matches(':focus-within')) continue

        const fromBelow = entry.boundingClientRect.top + entry.boundingClientRect.height / 2 >= window.innerHeight / 2
        const animation = element.animate([
          { opacity: 0, translate: fromBelow ? '0 22px' : '0 -22px', scale: '0.965', offset: 0 },
          { opacity: 1, translate: '0 0', scale: '1.008', offset: 0.74 },
          { opacity: 1, translate: '0 0', scale: '1', offset: 1 }
        ], { duration: 490, easing: 'cubic-bezier(.22,.72,.24,1)' })
        animations.set(element, animation)
        animation.onfinish = () => animations.delete(element)
      }
    })
    const sync = () => {
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
      if (!reducedMotion.matches) elements.forEach(element => observer.observe(element))
    }
    sync()
    reducedMotion.addEventListener('change', sync)
    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener('change', sync)
      animations.forEach(animation => animation.cancel())
    }
  }, [])
}
