import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, BarChart2, FileText, Wrench, RefreshCw } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico inicial',
    description: 'Conversamos contigo, entendemos tu operación, identificamos cuellos de botella y oportunidades clave. Sin costos, sin compromisos.',
  },
  {
    num: '02',
    icon: BarChart2,
    title: 'Análisis profundo',
    description: 'Mapeamos procesos, recopilamos datos y construimos una visión clara de dónde está el problema y qué tan grande es su impacto.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Propuesta estratégica',
    description: 'Te presentamos un plan concreto: qué vamos a hacer, cómo, en qué tiempo y qué resultados puedes esperar. Sin tecnicismos innecesarios.',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Implementación',
    description: 'Ejecutamos junto a tu equipo: instalamos herramientas, documentamos procesos, automatizamos flujos y capacitamos a las personas clave.',
  },
  {
    num: '05',
    icon: RefreshCw,
    title: 'Seguimiento y mejora',
    description: 'No desaparecemos al terminar. Hacemos seguimiento, medimos resultados y ajustamos lo que sea necesario para asegurar el impacto.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-16 lg:mb-20">
          <motion.span
            className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Cómo trabajamos
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Un proceso claro,{' '}
            <span className="shine-text">sin sorpresas.</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Cada proyecto sigue un método estructurado que maximiza el valor
            y minimiza la incertidumbre para ti y tu equipo.
          </motion.p>
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div className="hidden lg:block relative">
          {/* Connecting base line */}
          <div className="absolute top-[2.75rem] left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(to right, #64CEFB, rgba(100,206,251,0.2))' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  className="group flex flex-col gap-5 cursor-default"
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                >
                  {/* Node */}
                  <div className="relative flex justify-center">
                    <motion.div
                      className="
                        w-11 h-11 rounded-full flex items-center justify-center z-10 relative
                        transition-all duration-300 ease-out
                        group-hover:border-[#64CEFB]
                      "
                      style={{
                        background: 'rgba(10,10,10,1)',
                        border: '2px solid rgba(255,255,255,0.12)',
                      }}
                      whileHover={{
                        scale: 1.12,
                        backgroundColor: 'rgba(100,206,251,0.12)',
                        borderColor: '#64CEFB',
                        boxShadow: '0 0 22px rgba(100,206,251,0.45), 0 0 6px rgba(100,206,251,0.3)',
                        transition: { duration: 0.25, ease: 'easeOut' },
                      }}
                    >
                      <Icon
                        size={16}
                        className="transition-colors duration-300 group-hover:text-[#64CEFB]"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      />
                    </motion.div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-white/25 transition-colors duration-300 group-hover:text-[#64CEFB]/50">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#64CEFB]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed transition-colors duration-300 group-hover:text-white/65">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                className="group flex gap-5 relative pb-8 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              >
                {/* Dot + vertical line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                    style={{
                      background: '#0a0a0a',
                      border: '2px solid rgba(255,255,255,0.1)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(100,206,251,0.12)',
                      borderColor: '#64CEFB',
                      boxShadow: '0 0 20px rgba(100,206,251,0.4)',
                      transition: { duration: 0.25, ease: 'easeOut' },
                    }}
                  >
                    <Icon
                      size={14}
                      className="transition-colors duration-300 group-hover:text-[#64CEFB]"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    />
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pt-1.5">
                  <span className="text-xs font-mono text-white/25 transition-colors duration-300 group-hover:text-[#64CEFB]/50">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#64CEFB]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed transition-colors duration-300 group-hover:text-white/65">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
