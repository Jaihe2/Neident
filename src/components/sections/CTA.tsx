import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#030303' }}>
      {/* Large ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #64CEFB, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(100,206,251,0.4), transparent)' }} />

          <motion.span
            className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Da el primer paso
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            ¿Listo para trabajar
            <br />
            <span className="shine-text">con menos fricción?</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            La primera consulta es gratuita. Platicamos sobre tu operación,
            identificamos oportunidades y te decimos con honestidad si podemos
            ayudarte — y cómo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <button
              onClick={() => handleScroll('#contacto')}
              className="group flex items-center gap-2 bg-white text-black text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#64CEFB] transition-all duration-300"
            >
              Agenda tu consulta gratuita
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <a
              href="https://wa.me/522295204455?text=Hola,%20me%20interesa%20conocer%20los%20servicios%20de%20Neident"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white px-8 py-4 rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <MessageCircle size={16} />
              Escríbenos por WhatsApp
            </a>
          </motion.div>

          <motion.p
            className="mt-8 text-xs text-white/25"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Sin compromiso · Sin costo inicial · Respuesta en menos de 24 horas
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
