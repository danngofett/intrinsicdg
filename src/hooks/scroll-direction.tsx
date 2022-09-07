import { useState, useEffect } from 'react'
import { throttle } from 'throttle-debounce'

const SCROLL_UP = 'up'
const SCROLL_DOWN = 'down'
const SCROLL_AT_TOP = 'at-top'

export interface ScrollDirectionType {
  initialDirection: string
  thresholdPixels: number
  offset: number
  off?: boolean
}

export default function useScrollDirection({
  initialDirection,
  thresholdPixels,
  offset,
  off,
}: ScrollDirectionType) {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDir(
        scrollY <= offset
          ? SCROLL_AT_TOP
          : scrollY > lastScrollY
          ? SCROLL_DOWN
          : SCROLL_UP
      )
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener('scroll', throttle(100, onScroll))
      : setScrollDir(initialDirection)

    return () => window.removeEventListener('scroll', onScroll)
  }, [initialDirection, thresholdPixels, offset, off])

  return scrollDir
}
