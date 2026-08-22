import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { personal } from '../../data/portfolioData'

const SOCIAL_LINKS = [
  { href: personal.social.github,    Icon: Github,    label: 'GitHub' },
  { href: personal.social.linkedin,  Icon: Linkedin,  label: 'LinkedIn' }  
]

const CONTACT_INFO = [
  { Icon: Mail,    label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { Icon: MapPin,  label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-[#080814] light:bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full
                        bg-brand-500/8 blur-[100px]" />
      </div>

      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20
                                  flex items-center justify-center shrink-0 mt-0.5
                                  group-hover:bg-brand-500/20 transition-colors">
                    <Icon size={16} className="text-brand-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    {href
                      ? <a href={href} className="text-slate-300 light:text-slate-700 text-sm
                                                  hover:text-brand-300 transition-colors link-underline">
                          {value}
                        </a>
                      : <span className="text-slate-300 light:text-slate-700 text-sm">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/6" />

            {/* Social */}
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, Icon, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl glass border border-white/8
                               flex items-center justify-center text-slate-400
                               hover:text-white hover:border-white/20 transition-colors
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl
                            bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full
                                 bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {personal.availability}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

