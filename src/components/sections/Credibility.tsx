import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Target, Layers } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    tag: '01',
    title: 'Ingeniería en Transformación Digital',
    description:
      'Respaldo académico y metodológico por el Tecnológico de Monterrey. Aplicamos rigor analítico para estructurar y modernizar procesos con bases sólidas.',
  },
  {
    icon: Target,
    tag: '02',
    title: 'Visión Operativa y de Negocio',
    description:
      'La tecnología es un medio, no el fin. Diseñamos soluciones orientadas estrictamente a reducir costos, eliminar cuellos de botella y mejorar la visibilidad financiera.',
  },
  {
    icon: Layers,
    tag: '03',
    title: 'Arquitectura Escalable',
    description:
      'Construimos infraestructuras de datos y flujos de trabajo (BI, automatizaciones) pensadas para el crecimiento de la PyME, eliminando la dependencia de tareas manuales repetitivas.',
  },
]

export default function Credibility() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="credibilidad" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(100,206,251,0.25), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4">
              Por qué Neident
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
              Capacidad real.{' '}
              <span className="shine-text">Enfoque empresarial.</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xs text-sm text-white/45 leading-relaxed lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Somos estudiantes del Tec de Monterrey, y eso no es una limitación, es nuestra ventaja.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.tag}
                className="group relative rounded-2xl p-7 flex flex-col gap-5 overflow-hidden"
                style={{
                  background: i === 0 ? 'rgba(100,206,251,0.06)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${i === 0 ? 'rgba(100,206,251,0.18)' : 'rgba(255,255,255,0.07)'}`,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(100,206,251,0.07), transparent 70%)' }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.18)' }}
                  >
                    <Icon size={19} style={{ color: '#64CEFB' }} />
                  </div>
                  <span className="text-xs font-mono text-white/20">{p.tag}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white leading-snug group-hover:text-[#64CEFB] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom divider statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <div className="h-px w-12 mx-auto mb-7" style={{ background: 'rgba(100,206,251,0.3)' }} />
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            "No vendemos procesos infinitos ni consultoría genérica.{' '}
            <span className="text-white font-medium">Llegamos, entendemos y ejecutamos."</span>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />
    </section>
  )
}
