import { motion } from 'framer-motion'
import { Globe, Layers, Paintbrush, Zap, User, BarChart2, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/portfolioData'

const ICON_MAP = { Globe, Layers, Paintbrush, Zap, User, BarChart2 }

function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-3xl p-7 border border-white/8
                 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Bg glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 30% 20%, ${service.color}12, transparent 60%)` }}
      />

      {/* Top line accent */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
        style={{ background: `${service.color}15` }}
      >
        <Icon size={26} style={{ color: service.color }} />
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ boxShadow: `0 0 20px ${service.color}50` }}
        />
      </div>

      {/* Text */}
      <h3 className="font-display font-bold text-lg text-white light:text-slate-900 mb-2">
        {service.title}
      </h3>
      <p className="text-slate-400 light:text-slate-600 text-sm leading-6 mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map(feat => (
          <li key={feat} className="flex items-center gap-2 text-xs text-slate-500 light:text-slate-500">
            <CheckCircle2 size={12} style={{ color: service.color }} className="shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-[#0a0a1a] light:bg-slate-50">
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full
                      bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="section-container">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services"
          subtitle="End-to-end digital solutions tailored to your goals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
