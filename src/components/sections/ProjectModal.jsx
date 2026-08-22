import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2, AlertCircle, TrendingUp, Layers } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto
                     bg-[#0d0d20] border border-white/10 rounded-3xl shadow-2xl"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#3730a3 transparent' }}
        >
          {/* Header image placeholder */}
          <div
            className="h-44 relative overflow-hidden rounded-t-3xl"
            style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-4xl opacity-10 text-white select-none">
                {project.title}
              </span>
            </div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, ${project.color}, transparent 60%)`,
              }}
            />
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-xl glass
                         flex items-center justify-center text-white/70 hover:text-white
                         border border-white/10 hover:bg-white/10 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Title + tags */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <Section icon={Layers} title="Overview" color={project.color}>
              <p className="text-slate-400 leading-7">{project.overview}</p>
            </Section>

            {/* Problem / Solution */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Section icon={AlertCircle} title="Problem" color="#ec4899">
                <p className="text-slate-400 leading-7 text-sm">{project.problem}</p>
              </Section>
              <Section icon={CheckCircle2} title="Solution" color="#10b981">
                <p className="text-slate-400 leading-7 text-sm">{project.solution}</p>
              </Section>
            </div>

            {/* Features */}
            <Section icon={CheckCircle2} title="Key Features" color={project.color}>
              <ul className="space-y-2">
                {project.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: project.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Challenges */}
            <Section icon={AlertCircle} title="Challenges" color="#f59e0b">
              <ul className="space-y-2">
                {project.challenges.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Results */}
            <Section icon={TrendingUp} title="Results" color="#10b981">
              <ul className="space-y-2">
                {project.results.map(r => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Actions */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Section({ icon: Icon, title, color, children }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-semibold text-sm text-white mb-3">
        <Icon size={14} style={{ color }} />
        {title}
      </h3>
      {children}
    </div>
  )
}
