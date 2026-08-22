import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiC, SiCplusplus, SiPython, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiGithub, SiFigma, SiOpenjdk,
} from 'react-icons/si'
import { Code2 as SiVSCode } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/portfolioData'

const ICON_MAP = {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiC, SiCplusplus, SiPython, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiGithub, SiVSCode, SiFigma, SiOpenjdk,
}

const LEVEL_CONFIG = {
  Expert:       { label: 'Expert',       bars: 5, color: '#10b981' },
  Advanced:     { label: 'Advanced',     bars: 4, color: '#6366f1' },
  Intermediate: { label: 'Intermediate', bars: 3, color: '#8b5cf6' },
  Beginner:     { label: 'Beginner',     bars: 2, color: '#06b6d4' },
}

function SkillCard({ skill, catColor, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = ICON_MAP[skill.icon]
  const level = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG.Intermediate

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group glass rounded-2xl p-5 border border-white/8
                 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
      style={{
        boxShadow: hovered ? `0 0 24px ${skill.color}25` : '',
      }}
    >
      {/* BG glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.08 : 0 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: skill.color }}
      />

      {/* Icon */}
      <div className="mb-4 relative">
        <motion.div
          animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 5 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center relative"
          style={{ background: `${skill.color}15` }}
        >
          {Icon
            ? <Icon size={26} style={{ color: skill.color }} />
            : <span className="font-bold text-lg" style={{ color: skill.color }}>
                {skill.name[0]}
              </span>
          }
          {/* Glow ring on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="absolute inset-0 rounded-xl"
                style={{ boxShadow: `0 0 14px ${skill.color}80` }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Name */}
      <div className="font-semibold text-sm text-white light:text-slate-800 mb-1">
        {skill.name}
      </div>

      {/* Level label */}
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="h-1 flex-1 rounded-full origin-left"
                  style={{
                    background: i < level.bars ? level.color : `${level.color}25`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs mt-1.5 block" style={{ color: level.color }}>
              {level.label}
            </span>
          </motion.div>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-slate-500"
          >
            {skill.level}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory)

  const tabs = [
    { id: 'all', label: 'All Skills', color: '#6366f1' },
    ...skillCategories.map(c => ({ id: c.id, label: c.label, color: c.color })),
  ]

  return (
    <section id="skills" className="section-padding relative bg-[#080814] light:bg-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-accent-purple/5 blur-[100px]" />
      </div>

      <div className="section-container">
        <SectionHeading
          eyebrow="My Skills"
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400
                         ${activeCategory === tab.id
                           ? 'text-white shadow-glow'
                           : 'glass text-slate-400 hover:text-white border border-white/8'
                         }`}
              style={activeCategory === tab.id
                ? { background: `linear-gradient(135deg, ${tab.color}cc, ${tab.color}88)` }
                : {}}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Skill grids */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-12"
          >
            {filtered.map((cat) => (
              <div key={cat.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-3 h-3 rounded-full shadow-md"
                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  />
                  <h3 className="font-display font-semibold text-lg text-white light:text-slate-800">
                    {cat.label}
                  </h3>
                  <div className="flex-1 h-px bg-white/6" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                  {cat.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      catColor={cat.color}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
