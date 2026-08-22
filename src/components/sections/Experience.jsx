import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/portfolioData'

function TimelineItem({ exp, index, isLast }) {
  const isLeft = index % 2 === 0
  const Icon = exp.type === 'work' ? Briefcase : GraduationCap

  return (
    <div className={`relative flex gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start group`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <div
          className="glass rounded-2xl p-6 border border-white/8
                     hover:border-white/20 hover:shadow-card transition-all duration-300
                     group-hover:-translate-y-1"
          style={{ boxShadow: `inset 0 1px 0 ${exp.color}15` }}
        >
          {/* Type badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
            >
              <Icon size={11} />
              {exp.type === 'work' ? 'Work' : 'Education'}
            </span>
          </div>

          {/* Organisation + Role */}
          <h3 className="font-display font-bold text-lg text-white light:text-slate-900 leading-snug">
            {exp.role}
          </h3>
          <p className="text-brand-400 font-medium text-sm mt-0.5 mb-3">{exp.organisation}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> {exp.location}
            </span>
          </div>

          <p className="text-slate-400 light:text-slate-600 text-sm leading-7 mb-4">
            {exp.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map(skill => (
              <span key={skill} className="tag text-xs">{skill}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Centre dot */}
      <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 48 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center z-10 relative shadow-md"
          style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}99)` }}
        >
          <Icon size={16} className="text-white" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="w-0.5 flex-1 mt-2 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${exp.color}60, transparent)`,
              minHeight: 48,
            }}
          />
        )}
      </div>

      {/* Spacer on opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-[#080814] light:bg-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full
                      bg-accent-purple/5 blur-[80px] pointer-events-none" />

      <div className="section-container">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="The path that shaped my skills and perspective."
        />

        {/* Timeline — desktop uses alternating, mobile stacks left */}
        <div className="hidden md:block relative max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Mobile timeline — single column */}
        <div className="md:hidden space-y-6">
          {experiences.map((exp, i) => {
            const Icon = exp.type === 'work' ? Briefcase : GraduationCap
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)` }}
                  >
                    <Icon size={14} className="text-white" />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2" style={{ background: `${exp.color}40` }} />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-6">
                  <div className="glass rounded-2xl p-5 border border-white/8">
                    <h3 className="font-display font-bold text-base text-white mb-0.5">{exp.role}</h3>
                    <p className="text-brand-400 text-sm font-medium mb-2">{exp.organisation}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={10} />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-6 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map(s => <span key={s} className="tag text-xs">{s}</span>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
