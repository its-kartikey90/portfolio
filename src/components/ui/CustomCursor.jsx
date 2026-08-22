import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const sx = useSpring(mx, { stiffness: 500, damping: 40 })
  const sy = useSpring(my, { stiffness: 500, damping: 40 })

  // Trailing dot
  const tx = useSpring(mx, { stiffness: 150, damping: 25 })
  const ty = useSpring(my, { stiffness: 150, damping: 25 })

  const isHovering = useRef(false)

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }

    const enter = () => { isHovering.current = true }
    const leave = () => { isHovering.current = false }

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [mx, my])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full
                   border border-brand-400/50 mix-blend-difference"
        style={{
          x: tx,
          y: ty,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full
                   bg-brand-400"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
        }}
      />
    </>
  )
}
