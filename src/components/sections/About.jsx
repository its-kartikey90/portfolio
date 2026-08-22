import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Coffee, Heart } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'
import SectionHeading from '../ui/SectionHeading'
import { personal } from '../../data/portfolioData'

function StatCard({ stat, trigger }) {
  const { count, start } = useCounter(stat.value, 1800)
  const started = useRef(false)

  if (trigger && !started.current) {
    started.current = true
    start()
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="glass rounded-2xl p-5 text-center border border-white/8
                 hover:border-brand-500/30 hover:shadow-glow transition-all duration-300"
    >
      <div className="font-display font-bold text-3xl gradient-text mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-slate-400 text-sm leading-tight">{stat.label}</div>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const facts = [
    { icon: MapPin,    text: personal.location },
    { icon: Calendar,  text: 'Computer Science student, class of 2026' },
    { icon: Coffee,    text: 'Fuelled by coffee & curiosity' },
    { icon: Heart,     text: 'Open source enthusiast' },
  ]

  return (
    <section id="about" className="section-padding relative bg-[#0a0a1a] light:bg-slate-50">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 -translate-y-1/2 rounded-full
                      bg-brand-500/5 blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A little background on my journey, what drives me, and where I'm headed."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image placeholder + facts */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Code-style card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="glass rounded-3xl p-8 border border-white/8 relative overflow-hidden"
            >
              {/* Decorative corner glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full
                              bg-brand-500/10 blur-2xl pointer-events-none" />

              <div className="font-mono text-xs text-slate-500 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="ml-2 text-slate-600">about.js</span>
              </div>

              <pre className="font-mono text-sm leading-7 text-slate-300 light:text-slate-700 overflow-x-auto">
                <code>
{`const `}<span className="text-brand-300">developer</span>{` = {
  name:     `}<span className="text-emerald-400">"{personal.name}"</span>{`,
  role:     `}<span className="text-emerald-400">"Full-Stack Developer"</span>{`,
  learning: `}<span className="text-amber-400">true</span>{`,
  building: `}<span className="text-amber-400">true</span>{`,
  available:`}<span className="text-amber-400"> true</span>{`,
  passion:  `}<span className="text-emerald-400">"Great digital experiences"</span>{`,
}`}
                </code>
              </pre>
            </motion.div>

            {/* Quick facts */}
            <motion.div custom={1} variants={fadeUp} className="grid grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl glass
                             border border-white/6 text-sm text-slate-400 light:text-slate-600"
                >
                  <Icon size={14} className="text-brand-400 shrink-0" />
                  <span className="truncate">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — bio + stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {personal.bio.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                className="text-slate-400 light:text-slate-600 text-base leading-8"
              >
                {para}
              </motion.p>
            ))}

            {/* Approach highlight */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="relative pl-5 border-l-2 border-brand-500/50"
            >
              <p className="text-slate-300 light:text-slate-700 italic text-base leading-7">
                "I believe great software is equal parts engineering discipline and creative
                problem-solving. I don't just write code — I craft experiences."
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div custom={4} variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personal.stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} trigger={inView} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
