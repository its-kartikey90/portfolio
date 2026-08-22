import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Eye } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectModal from './ProjectModal'
import { projects } from '../../data/portfolioData'

const FILTERS = [
  'All',
  'Web Development',
  'React',
  'JavaScript',
  'Full Stack',
  'UI/UX',
]

function ProjectCard({ project, onOpenModal, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group glass rounded-3xl border border-white/8 overflow-hidden
                 hover:border-white/20 transition-all duration-300"
      style={{ boxShadow: hovered ? `0 8px 40px ${project.color}20` : '' }}
    >
      {/* Image / mockup */}
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)` }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 40%, ${project.color}50, transparent 50%),
                              radial-gradient(circle at 80% 70%, ${project.color}30, transparent 50%)`,
          }}
        />
        {/* Floating title watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-black text-6xl opacity-[0.06] text-white
                       select-none tracking-tighter"
          >
            {project.title.split(' ')[0]}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold
                           bg-brand-500/20 text-brand-300 border border-brand-500/30 backdrop-blur-sm">
            ★ Featured
          </span>
        )}

        {/* Zoom overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center
                       text-white hover:bg-brand-500/40 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center
                       text-white hover:bg-brand-500/40 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
          <button
            aria-label="View details"
            onClick={() => onOpenModal(project)}
            className="w-10 h-10 rounded-xl bg-brand-500/60 border border-brand-400/50 flex items-center justify-center
                       text-white hover:bg-brand-500/80 transition-colors"
          >
            <Eye size={16} />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-white light:text-slate-900 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-400 light:text-slate-600 text-sm leading-6 mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
          >
            <ExternalLink size={13} /> Demo
          </a>
          <button
            onClick={() => onOpenModal(project)}
            className="ml-auto text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1
                       transition-colors focus:outline-none focus-visible:underline"
          >
            <Eye size={13} /> Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <section id="projects" className="section-padding relative bg-[#0a0a1a] light:bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-500/5 blur-[120px]" />
      </div>

      <div className="section-container">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and approach to problem-solving."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Project filters">
          {FILTERS.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400
                         ${activeFilter === filter
                           ? 'bg-gradient-to-r from-brand-500 to-accent-purple text-white shadow-glow'
                           : 'glass text-slate-400 hover:text-white border border-white/8'
                         }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            layout
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenModal={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
