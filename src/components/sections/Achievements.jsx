import { motion } from 'framer-motion'
import { Award, Trophy, BookOpen, Code2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { achievements } from '../../data/portfolioData'

const TYPE_CONFIG = {
  certificate: { label: 'Certificate',  Icon: Award,    glyph: '📜' },
  hackathon:   { label: 'Hackathon',    Icon: Trophy,   glyph: '🏆' },
  academic:    { label: 'Academic',     Icon: BookOpen, glyph: '📚' },
  competition: { label: 'Competition',  Icon: Code2,    glyph: '💻' },
}

function AchievementCard({ item, index }) {
  const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.certificate
  const { Icon } = config

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl p-6 border border-white/8
                 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Corner gradient */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0
                   group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
        style={{ background: item.color }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        {/* Emoji badge */}
        <div
          className="w-12 h-12 rounded-xl text-2xl flex items-center justify-center"
          style={{ background: `${item.color}15` }}
        >
          {item.badge}
        </div>

        {/* Type tag */}
        <span
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
        >
          <Icon size={10} />
          {config.label}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-base text-white light:text-slate-900 mb-1 leading-snug">
        {item.title}
      </h3>
      <p className="text-brand-400 text-xs font-medium mb-1">{item.issuer}</p>
      <p className="text-slate-500 text-xs mb-3">{item.date}</p>
      <p className="text-slate-400 light:text-slate-600 text-sm leading-6">{item.description}</p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-b-2xl
                   transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Achievements() {
  const types = [...new Set(achievements.map(a => a.type))]

  return (
    <section id="achievements" className="section-padding relative bg-[#080814] light:bg-white">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-64 rounded-full
                      bg-brand-500/5 blur-[100px] pointer-events-none" />

      <div className="section-container">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Certifications, competitions, and milestones that mark my growth."
        />

        {/* Summary pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {types.map(type => {
            const config = TYPE_CONFIG[type]
            const count = achievements.filter(a => a.type === type).length
            return (
              <div
                key={type}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/8 text-sm"
              >
                {config?.glyph} {config?.label}
                <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 text-xs
                                 flex items-center justify-center font-semibold">
                  {count}
                </span>
              </div>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
