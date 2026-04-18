import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GitBranch,
  Cpu,
  Search,
  Monitor,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    tag: '01',
    title: 'Diagnóstico Empresarial',
    description:
      'Analizamos tu operación desde adentro: procesos, cuellos de botella, flujos de trabajo y áreas de mejora inmediata. Una radiografía honesta de tu negocio.',
    highlights: ['Mapeo de procesos', 'Análisis de fricción', 'Reporte ejecutivo'],
    accent: 'rgba(100,206,251,0.08)',
    accentBorder: 'rgba(100,206,251,0.15)',
  },
  {
    icon: GitBranch,
    tag: '02',
    title: 'Optimización de Procesos',
    description:
      'Rediseñamos cómo trabaja tu empresa: menos pasos innecesarios, más claridad en roles, mejores resultados con los mismos recursos.',
    highlights: ['Reingeniería de procesos', 'SOPs y manuales', 'KPIs operativos'],
    accent: 'rgba(255,255,255,0.04)',
    accentBorder: 'rgba(255,255,255,0.08)',
  },
  {
    icon: Cpu,
    tag: '03',
    title: 'Automatización',
    description:
      'Identificamos qué tareas repetitivas pueden automatizarse y las implementamos. Desde flujos de notificación hasta reportes automáticos e integraciones.',
    highlights: ['Automatización de flujos', 'Integraciones de sistemas', 'Reportes automáticos'],
    accent: 'rgba(255,255,255,0.04)',
    accentBorder: 'rgba(255,255,255,0.08)',
  },
  {
    icon: Monitor,
    tag: '04',
    title: 'Página Web para tu Negocio',
    description:
      'Diseñamos y desarrollamos tu presencia digital: desde landing pages hasta sitios completos. Rápido, moderno y optimizado para convertir visitantes en clientes.',
    highlights: ['Diseño profesional', 'Optimizado para móvil', 'Listo para publicar'],
    accent: 'rgba(100,206,251,0.05)',
    accentBorder: 'rgba(100,206,251,0.12)',
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  inView: boolean
}

function ServiceCard({ service, index, inView }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      className="group relative rounded-2xl p-6 lg:p-8 flex flex-col gap-5 cursor-pointer overflow-hidden"
      style={{
        background: service.accent,
        border: `1px solid ${service.accentBorder}`,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(100,206,251,0.06), transparent 70%)' }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.15)' }}
        >
          <Icon size={18} style={{ color: '#64CEFB' }} />
        </div>
        <span className="text-xs font-mono text-white/20">{service.tag}</span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#64CEFB] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed">{service.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-3 py-1 rounded-full text-white/50"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
          >
            {h}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-xs text-white/30 group-hover:text-[#64CEFB] transition-colors duration-300 mt-1">
        <span>Conocer más</span>
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="relative py-20 lg:py-28" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4">
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-lg">
              Todo lo que tu empresa necesita para{' '}
              <span className="shine-text">trabajar mejor.</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-sm text-sm text-white/50 leading-relaxed lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Desde el diagnóstico inicial hasta la implementación y seguimiento.
            Soluciones reales para negocios reales en Monterrey y Nuevo León.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}

          {/* Placeholder CTA card */}
          <motion.div
            className="rounded-2xl p-6 lg:p-8 flex flex-col items-center justify-center gap-4 text-center cursor-pointer group"
            style={{ border: '1px dashed rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.01)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            whileHover={{ borderColor: 'rgba(100,206,251,0.25)' }}
          >
            <p className="text-sm text-white/30 leading-relaxed">
              ¿Tu necesidad es diferente?
            </p>
            <p className="text-sm font-medium text-white/60 group-hover:text-[#64CEFB] transition-colors">
              Platícanos y lo estudiamos juntos →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
