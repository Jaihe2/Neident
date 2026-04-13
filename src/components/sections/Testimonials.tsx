import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Stethoscope, AlertCircle, Cpu, ArrowRight } from 'lucide-react'

const caseStudy = {
  sector: 'Sector Salud',
  client: 'Clint Clínica Dental',
  location: 'Monterrey, Nuevo León',
  solution: 'Asistente Automatizado para Gestión de Agenda',
  blocks: [
    {
      icon: AlertCircle,
      label: 'Reto',
      text: 'Optimizar la atención de primer contacto y reducir la carga administrativa del personal en la programación de pacientes.',
    },
    {
      icon: Cpu,
      label: 'Implementación',
      text: 'Despliegue de un agente virtual encargado de gestionar el flujo completo de citas. El sistema atiende, filtra y agenda directamente a los pacientes, estandarizando el servicio y liberando horas operativas de la clínica.',
    },
  ],
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="casos" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#050505' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #64CEFB, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4">
              Proyectos activos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-lg">
              Casos de uso{' '}
              <span className="shine-text">en implementación.</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xs text-sm text-white/45 leading-relaxed lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trabajo real, no estimaciones. Soluciones que ya están corriendo.
          </motion.p>
        </div>

        {/* Case study card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(100,206,251,0.5), transparent)' }} />

          <div className="grid lg:grid-cols-5 gap-0">

            {/* Left: Client identity */}
            <div
              className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between gap-8"
              style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex flex-col gap-6">
                {/* Sector badge */}
                <div className="flex items-center gap-2 w-fit">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.18)' }}
                  >
                    <Stethoscope size={14} style={{ color: '#64CEFB' }} />
                  </div>
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                    {caseStudy.sector}
                  </span>
                </div>

                {/* Client name */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1">
                    {caseStudy.client}
                  </h3>
                  <p className="text-sm text-white/35">{caseStudy.location}</p>
                </div>

                {/* Solution pill */}
                <div
                  className="inline-flex w-fit items-center gap-2 px-4 py-2.5 rounded-2xl"
                  style={{ background: 'rgba(100,206,251,0.08)', border: '1px solid rgba(100,206,251,0.15)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#64CEFB' }} />
                  <span className="text-xs font-medium" style={{ color: '#64CEFB' }}>
                    {caseStudy.solution}
                  </span>
                </div>
              </div>

              {/* Status tag */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/30 font-medium">Proyecto activo</span>
              </div>
            </div>

            {/* Right: Reto + Implementación */}
            <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-8">
              {caseStudy.blocks.map((block, i) => {
                const Icon = block.icon
                return (
                  <motion.div
                    key={block.label}
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.15, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={13} style={{ color: 'rgba(100,206,251,0.7)' }} />
                      <span className="text-xs uppercase tracking-widest text-white/35 font-medium">
                        {block.label}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                      {block.text}
                    </p>
                    {i < caseStudy.blocks.length - 1 && (
                      <div className="mt-2 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                    )}
                  </motion.div>
                )
              })}

              {/* CTA link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <button
                  className="group flex items-center gap-2 text-sm text-white/40 hover:text-[#64CEFB] transition-colors duration-200"
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ¿Quieres algo similar para tu empresa?
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Placeholder — more cases coming */}
        <motion.p
          className="text-center text-xs text-white/20 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Más casos en desarrollo — actualizamos conforme avanzamos.
        </motion.p>

      </div>
    </section>
  )
}
