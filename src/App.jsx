import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Hooks
import { useTheme } from './hooks/useTheme'

// Global UI
import Navbar          from './components/Navbar'
import ScrollProgress  from './components/ui/ScrollProgress'
import BackToTop       from './components/ui/BackToTop'
import CustomCursor    from './components/ui/CustomCursor'
import ParticlesBackground from './components/ui/ParticlesBackground'

// Sections
import Hero         from './components/sections/Hero'
import About        from './components/sections/About'
import Skills       from './components/sections/Skills'
import Projects     from './components/sections/Projects'
import Experience   from './components/sections/Experience'
import Services     from './components/sections/Services'
import Achievements from './components/sections/Achievements'
import Testimonials from './components/sections/Testimonials'
import Contact      from './components/sections/Contact'
import Footer       from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // Apply light class to root for Tailwind dark-mode class strategy
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Ambient particle canvas */}
      <ParticlesBackground count={50} />

      {/* Sticky navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page entrance animation */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        id="main-content"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Achievements />
        <Testimonials />
        <Contact />
      </motion.main>

      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  )
}
