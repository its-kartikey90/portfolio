import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/portfolioData'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % testimonials.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="section-padding relative bg-[#0a0a1a] light:bg-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[120px]" />
      </div>

      <div className="section-container">
        <SectionHeading
          eyebrow="Kind Words"
          title="Testimonials"
          subtitle="What clients and collaborators say about working with me."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div
                  className="glass rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden"
                  style={{ boxShadow: `0 0 40px ${t.color}15` }}
                >
                  {/* Decorative quote icon */}
                  <Quote
                    size={80}
                    className="absolute -top-2 -right-2 opacity-[0.04] text-white rotate-180"
                  />

                  <div className="relative z-10">
                    <StarRating rating={t.rating} />

                    <blockquote className="mt-5 text-slate-300 light:text-slate-700 text-lg
                                           leading-8 font-light italic">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4 mt-8">
                      {/* Avatar */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center
                                   font-display font-bold text-white text-lg shrink-0"
                        style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                        aria-hidden="true"
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-white light:text-slate-900">{t.name}</div>
                        <div className="text-slate-500 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center
                         text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <ChevronLeft size={16} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-full"
                >
                  <motion.div
                    animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full"
                    style={{ background: i === current ? testimonials[i].color : '#475569' }}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center
                         text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
