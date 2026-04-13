import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Target, Users, Rocket } from 'lucide-react'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Visión fresca',
    description: 'Pensamiento no convencional que encuentra soluciones donde otros ven obstáculos.',
  },
  {
    icon: Target,
    title: 'Enfoque en resultados',
    description: 'No vendemos procesos infinitos. Trabajamos para que veas impacto real y medible.',
  },
  {
    icon: Users,
    title: 'Cercanía con el cliente',
    description: 'Nos involucramos profundamente con tu operación. Somos parte de tu equipo, no un servicio externo.',
  },
  {
    icon: Rocket,
    title: 'Ejecución ágil',
    description: 'Diagnóstico rápido, propuestas concretas e implementación sin rodeos ni burocracia innecesaria.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#030303' }}>
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #64CEFB, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Main message */}
          <div>
            <motion.span
              className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Sobre Neident
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Consultoría joven.{' '}
              <span className="shine-text">Ejecución seria.</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>
                Neident nació de una idea simple pero poderosa: que las PyMEs de Monterrey
                merecen asesoría de calidad, accesible y con compromiso real.
              </p>
              <p>
                Somos un equipo de estudiantes con visión empresarial y hambre de impacto.
                No traemos los vicios de la consultoría tradicional: traemos energía, análisis
                riguroso, metodologías actualizadas y una conexión genuina con la realidad
                de las empresas locales.
              </p>
              <p>
                Ser estudiantes no es una limitación. Es nuestra ventaja competitiva:
                pensamos diferente, adoptamos tecnología con naturalidad y nos dedicamos
                100% a cada proyecto porque queremos demostrar con resultados.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {['Monterrey, NL', 'Enfoque en PyMEs', 'Metodología propia', 'Visión 360°'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full text-white/50"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(100,206,251,0.08)', border: '1px solid rgba(100,206,251,0.12)' }}
                  >
                    <Icon size={16} style={{ color: '#64CEFB' }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{p.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-20 lg:mt-24 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="h-px w-16 mx-auto mb-8" style={{ background: 'rgba(100,206,251,0.3)' }} />
          <p className="text-base sm:text-lg text-white/50 italic leading-relaxed">
            "La nueva generación de consultoría para empresas que quieren avanzar,{' '}
            <span className="text-white not-italic font-medium">sin esperar al momento perfecto."</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
