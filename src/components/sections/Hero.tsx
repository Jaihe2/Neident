import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ShinyText from '../ui/ShinyText'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Multi-layer overlay for cinematic depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(100,206,251,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Top two-column descriptor — desktop only */}
        <div className="hidden lg:flex items-start justify-between pt-36">
          <motion.p
            className="max-w-xs text-sm text-white/60 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Ayudamos a PyMEs regiomontanas a ordenar, optimizar y transformar
            su operación con visión estratégica y ejecución ágil.
          </motion.p>

          <motion.p
            className="max-w-xs text-sm text-white/50 text-right leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            Consultoría mexicana con
            <br />
            visión joven y enfoque empresarial.
          </motion.p>
        </div>

        {/* Center hero content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center pt-24 lg:pt-0">
          {/* Eyebrow label */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 font-medium px-4 py-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
              Consultoría estratégica · Monterrey, Nuevo León
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-medium leading-none tracking-tighter select-none"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-white">Transforma</span>
            <ShinyText
              text="Tu Negocio."
              className="block"
            />
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-8 sm:mt-10 max-w-lg text-sm sm:text-base text-white/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Diagnóstico, automatización, optimización de procesos y
            transformación digital para empresas que quieren avanzar en serio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              onClick={() => handleScroll('#contacto')}
              className="group flex items-center gap-2 bg-black text-white text-sm font-medium px-7 py-4 rounded-full hover:bg-[#64CEFB] hover:text-black transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Agenda una consulta
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => handleScroll('#servicios')}
              className="group flex items-center gap-2 text-sm text-white/70 hover:text-white px-7 py-4 rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
            >
              Conoce nuestros servicios
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 opacity-50 group-hover:opacity-100"
              />
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <button
            onClick={() => handleScroll('#credibilidad')}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Explorar</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
