import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
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

const SOCIALS = [
  { href: personal.social.github,    Icon: Github,    label: 'GitHub' },
  { href: personal.social.linkedin,  Icon: Linkedin,  label: 'LinkedIn' },
  { href: `mailto:${personal.email}`, Icon: Mail,     label: 'Email' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#06060f] border-t border-white/5 overflow-hidden">
      {/* Animated top border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-y-0 w-1/2"
          style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #06b6d4, transparent)' }}
        />
      </div>

      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2
                         focus-visible:ring-brand-400 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-glow">
                <img src={faviconUrl} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                {personal.firstName}<span className="text-brand-400">.</span>
              </span>
            </button>
            <p className="text-slate-500 text-sm leading-6 max-w-xs">
              {personal.tagline}
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {SOCIALS.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center
                             text-slate-500 hover:text-white hover:border-brand-500/30 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase
                           text-slate-500 mb-5">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-500 hover:text-white light:hover:text-slate-900 text-sm
                               transition-colors link-underline
                               focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase
                           text-slate-500 mb-5">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-white text-sm
                           transition-colors group"
              >
                <Mail size={13} className="text-brand-400 group-hover:scale-110 transition-transform" />
                {personal.email}
              </a>
              <p className="text-slate-600 text-xs leading-5">
                Response time: within 24 hours.<br />
                Open to freelance and full-time opportunities.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personal.availability}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center
                        justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
