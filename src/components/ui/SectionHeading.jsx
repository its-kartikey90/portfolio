import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest
                         uppercase text-brand-400 mb-4">
          <span className="w-6 h-px bg-brand-400" />
          {eyebrow}
          <span className="w-6 h-px bg-brand-400" />
        </span>
      )}
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle mt-3 ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
