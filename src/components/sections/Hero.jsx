import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Circle } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { personal } from '../../data/portfolioData'

const TECH_BADGES = [
  { label: 'React',      color: '#61dafb', x: '78%', y: '18%', delay: 0.8 },
  { label: 'Node.js',    color: '#339933', x: '82%', y: '60%', delay: 1.0 },
  { label: 'Tailwind',   color: '#06b6d4', x: '72%', y: '80%', delay: 1.2 },
  { label: 'MongoDB',    color: '#47a248', x: '10%', y: '22%', delay: 1.1 },
  { label: 'Figma',      color: '#f24e1e', x: '6%',  y: '65%', delay: 0.9 },
  { label: 'TypeScript', color: '#3178c6', x: '18%', y: '82%', delay: 1.3 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function Avatar() {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto">
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#0a0a1a]" />
      </motion.div>

      {/* Static glow ring */}
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-purple/20
                      border border-brand-500/30 shadow-glow-purple" />

      {/* Avatar body */}
      <div className="absolute inset-4 rounded-full overflow-hidden
                      bg-gradient-to-br from-[#1e1b4b] to-[#0f0f2e]">
        <img
          src={`${import.meta.env.BASE_URL}professional.jpeg`}
          alt={`${personal.name} profile photo`}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            // Fallback to initials if image not found
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback initials (shown if image fails to load) */}
        <div
          style={{ display: 'none' }}
          className="w-full h-full items-center justify-center
                     font-display font-bold text-5xl text-brand-300"
        >
          {personal.firstName[0]}
        </div>
      </div>

      {/* Availability badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 300 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap
                   flex items-center gap-1.5 px-3 py-1.5 rounded-full
                   bg-emerald-500/10 border border-emerald-500/30 text-emerald-400
                   text-xs font-medium backdrop-blur-sm shadow-card"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        {personal.availability}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const glowX = useTransform(mouseX, [0, 1], ['-20%', '120%'])
  const glowY = useTransform(mouseY, [0, 1], ['-20%', '120%'])

  useEffect(() => {
    const move = (e) => {
      const { innerWidth: W, innerHeight: H } = window
      mouseX.set(e.clientX / W)
      mouseY.set(e.clientY / H)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a] light:bg-slate-50"
      aria-label="Hero"
    >
      {/* Animated gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]" />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ x: glowX, y: glowY, background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] opacity-10 bg-accent-purple animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-[80px] opacity-10 bg-accent-cyan animate-float" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating tech badges */}
      {TECH_BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, type: 'spring', stiffness: 200 }}
          className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     glass text-xs font-mono font-medium text-white/70
                     border border-white/10 backdrop-blur-sm shadow-card
                     animate-float"
          style={{ left: badge.x, top: badge.y, animationDelay: `${badge.delay}s` }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: badge.color }} />
          {badge.label}
        </motion.div>
      ))}

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                               bg-brand-500/10 border border-brand-500/25 text-brand-300
                               text-xs font-mono font-semibold tracking-wide">
                <Sparkles size={12} className="text-brand-400" />
                Hi, I&apos;m {personal.firstName} 👋
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-6xl xl:text-7xl
                         leading-[1.05] tracking-tight text-white light:text-slate-900 mb-4"
            >
              <TypeAnimation
                sequence={[
                  'Creative Developer',
                  2200,
                  'UI/UX Engineer',
                  2200,
                  'Problem Solver',
                  2200,
                  'Full-Stack Builder',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
              <br />
              <span className="text-white/90 light:text-slate-800">&amp; Digital Craftsman</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-slate-400 light:text-slate-600 text-lg leading-relaxed max-w-lg mb-8"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
                <ArrowDown size={15} className="ml-1 rotate-[-90deg]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Let&apos;s Connect
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-xs text-slate-500 font-mono">Find me on</span>
              {[
                { href: personal.social.github,   Icon: Github,   label: 'GitHub' },
                { href: personal.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, Icon: Mail,   label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center
                             text-slate-400 hover:text-white hover:border-brand-500/50
                             hover:bg-brand-500/10 transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <Avatar />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
          role="button"
          aria-label="Scroll to about section"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToAbout()}
        >
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-brand-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
