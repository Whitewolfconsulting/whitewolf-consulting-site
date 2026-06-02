import { useEffect, useRef } from 'react'

export function useFadeUp() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const el = ref.current
    if (el) {
      el.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
