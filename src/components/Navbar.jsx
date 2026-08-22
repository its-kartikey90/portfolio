import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import ThemeToggle from './ui/ThemeToggle'
import { personal } from '../data/portfolioData'
import faviconUrl from '../../favicon.svg'

const NAV_LINKS = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Experience',   id: 'experience' },
  { label: 'Services',     id: 'services' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.id)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS, 100)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300
          ${scrolled
            ? 'py-3 bg-[#0a0a1a]/80 dark:bg-[#0a0a1a]/80 light:bg-white/80 backdrop-blur-xl border-b border-white/5 shadow-card'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <img src={faviconUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg text-white light:text-slate-900 tracking-tight">
              {personal.firstName}
              <span className="text-brand-400">.</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400
                  ${activeId === link.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                  }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-brand-500/15 border border-brand-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Resume
            </motion.a>

            {/* Hamburger */}
            <motion.button
              onClick={() => setMenuOpen(o => !o)}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
                         glass text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-72 lg:hidden
                       bg-[#0d0d20] border-l border-white/8 flex flex-col pt-20 pb-8 px-6"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400
                    ${activeId === link.id
                      ? 'bg-brand-500/15 text-white border border-brand-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/8">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-4 py-2"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
