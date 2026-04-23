import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function RibbonSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.92 }}
    >
      <defs>
        {/* Main ribbon gradient — blues + gold edge */}
        <linearGradient id="rg1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#030d25" />
          <stop offset="12%"  stopColor="#0b2060" />
          <stop offset="28%"  stopColor="#1246c8" />
          <stop offset="45%"  stopColor="#3b7aff" />
          <stop offset="55%"  stopColor="#7ab4ff" />
          <stop offset="68%"  stopColor="#3b7aff" />
          <stop offset="82%"  stopColor="#1246c8" />
          <stop offset="91%"  stopColor="#0b2060" />
          <stop offset="96%"  stopColor="#c9a96e" />
          <stop offset="100%" stopColor="#7a5820" />
        </linearGradient>

        {/* Second face gradient */}
        <linearGradient id="rg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#030d25" />
          <stop offset="20%"  stopColor="#0e2870" />
          <stop offset="45%"  stopColor="#1d5ad4" />
          <stop offset="60%"  stopColor="#5294ff" />
          <stop offset="78%"  stopColor="#1d5ad4" />
          <stop offset="92%"  stopColor="#b88c3a" />
          <stop offset="100%" stopColor="#6a4210" />
        </linearGradient>

        {/* Gold edge line */}
        <linearGradient id="goldLine" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(201,169,110,0)" />
          <stop offset="15%"  stopColor="rgba(201,169,110,0.4)" />
          <stop offset="35%"  stopColor="rgba(232,213,163,0.9)" />
          <stop offset="55%"  stopColor="rgba(255,240,190,1)" />
          <stop offset="75%"  stopColor="rgba(232,213,163,0.7)" />
          <stop offset="90%"  stopColor="rgba(201,169,110,0.3)" />
          <stop offset="100%" stopColor="rgba(201,169,110,0)" />
        </linearGradient>

        {/* Specular highlight streak */}
        <linearGradient id="specular" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
          <stop offset="25%"  stopColor="rgba(160,210,255,0.4)" />
          <stop offset="50%"  stopColor="rgba(255,255,255,0.85)" />
          <stop offset="75%"  stopColor="rgba(160,210,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Blue ambient glow */}
        <linearGradient id="glowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#1a5cd6" stopOpacity="0" />
          <stop offset="50%"  stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1a5cd6" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter for ribbon */}
        <filter id="glowFx" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft ambient glow filter */}
        <filter id="ambientFx" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="45" />
        </filter>

        {/* Sharper glow */}
        <filter id="sharpFx" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <clipPath id="heroClip">
          <rect width="1440" height="900" />
        </clipPath>
      </defs>

      <g clipPath="url(#heroClip)">

        {/* ── Ambient atmosphere ── */}
        <ellipse cx="820" cy="440" rx="580" ry="360"
          fill="url(#glowGrad)"
          filter="url(#ambientFx)"
        />

        {/* ── Deep shadow behind ribbon ── */}
        <path
          d="M -60,960 C 80,850 270,740 420,565
             C 570,390 690,265 930,110
             L 1010,55 C 770,210 650,335 500,510
             C 350,685 160,795 20,905 Z"
          fill="#071840"
          opacity="0.55"
          filter="url(#ambientFx)"
        />

        {/* ── LAYER 2: Diffuse glow behind ribbon (animated, delay 1.5s) ── */}
        <path
          d="M -60,960 C 80,850 270,740 420,565
             C 570,390 690,265 930,110
             L 952,164 C 712,318 592,443 442,618
             C 292,793 102,903 -38,1010 Z"
          fill="rgba(60,140,255,0.25)"
          filter="url(#ambientFx)"
          style={{ filter: 'blur(80px)' }}
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </path>

        {/* ── Ribbon extension — right tip (creates 3D bend illusion) ── */}
        <path
          d="M 930,110 C 1065,52 1200,28 1420,18
             L 1440,72 C 1220,82 1085,106 952,164 Z"
          fill="url(#rg2)"
          opacity="0.72"
          filter="url(#sharpFx)"
        />

        {/* ── Main ribbon body (animated pulse) ── */}
        <path
          d="M -60,960 C 80,850 270,740 420,565
             C 570,390 690,265 930,110
             L 952,164 C 712,318 592,443 442,618
             C 292,793 102,903 -38,1010 Z"
          fill="url(#rg1)"
          filter="url(#glowFx)"
        >
          <animate attributeName="opacity" values="0.7;0.97;0.7" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </path>

        {/* ── Ribbon extension — bottom fade-out ── */}
        <path
          d="M -60,960 C -30,980 10,1010 -38,1010
             C -60,1010 -80,980 -60,960 Z"
          fill="url(#rg1)"
          opacity="0.3"
        />

        {/* ── Specular highlight center streak ── */}
        <path
          d="M 15,990 C 145,880 315,775 462,602
             C 609,429 722,308 948,140"
          fill="none"
          stroke="rgba(140,200,255,0.45)"
          strokeWidth="28"
          filter="url(#sharpFx)"
        />
        <path
          d="M 25,992 C 155,882 328,778 474,606
             C 620,434 734,312 956,143"
          fill="none"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="3.5"
          opacity="0.7"
        />

        {/* ── LAYER 3: Thin tenue line beside ribbon (animated, delay 0.8s) ── */}
        <path
          d="M -80,940 C 60,830 250,720 400,548
             C 550,376 672,252 912,98"
          fill="none"
          stroke="rgba(100,180,255,0.25)"
          strokeWidth="6"
          filter="url(#sharpFx)"
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </path>

        {/* ── Gold edge — top edge of ribbon ── */}
        <path
          d="M -60,960 C 80,850 270,740 420,565
             C 570,390 690,265 930,110"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2.5"
          opacity="0.9"
        />

        {/* ── Gold edge — bottom edge of ribbon ── */}
        <path
          d="M -38,1010 C 102,903 292,793 442,618
             C 592,443 712,318 952,164"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="1.5"
          opacity="0.55"
        />

        {/* ── Gold edge on right tip ── */}
        <path
          d="M 930,110 C 1065,52 1200,28 1420,18"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* ── Accent glow nodes at curve peaks ── */}
        <circle cx="420" cy="565" r="24" fill="#3b7aff" opacity="0.18" filter="url(#ambientFx)" />
        <circle cx="420" cy="565" r="4"  fill="#93c5fd" opacity="0.8"  filter="url(#sharpFx)" />
        <circle cx="420" cy="565" r="1.5" fill="white" opacity="0.95" />

        <circle cx="690" cy="265" r="18" fill="#c9a96e" opacity="0.22" filter="url(#ambientFx)" />
        <circle cx="690" cy="265" r="3"  fill="#e8d5a3" opacity="0.9"  filter="url(#sharpFx)" />
        <circle cx="690" cy="265" r="1.2" fill="white" opacity="1" />

        <circle cx="220" cy="760" r="12" fill="#3b82f6" opacity="0.15" filter="url(#ambientFx)" />
        <circle cx="220" cy="760" r="2"  fill="#bfdbfe" opacity="0.7" />

      </g>
    </svg>
  )
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden"
      style={{ background: '#050d1a' }}
    >
      {/* Ribbon */}
      <div className="absolute inset-0 z-0">
        <RibbonSVG />
      </div>

      {/* Left-side readability gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to right, rgba(5,13,26,0.82) 0%, rgba(5,13,26,0.5) 45%, rgba(5,13,26,0.1) 80%, rgba(5,13,26,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Top descriptor row — desktop only */}
        <div className="hidden lg:flex items-start justify-between pt-36">
          <motion.p
            className="max-w-xs text-sm text-white/55 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Ayudamos a PyMEs regiomontanas a ordenar, optimizar y transformar
            su operación con visión estratégica y ejecución ágil.
          </motion.p>

          <motion.p
            className="max-w-xs text-sm text-white/45 text-right leading-relaxed"
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

          {/* Eyebrow badge */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span
              className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-white/65 font-medium px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              Consultoría estratégica · Monterrey, Nuevo León
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-medium leading-none tracking-tighter select-none"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-white">Transforma</span>
            <span className="gradient-flow block">
              Tu Negocio.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-8 sm:mt-10 max-w-lg text-sm sm:text-base text-white/55 leading-relaxed"
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
            {/* Primary — gold */}
            <button
              onClick={() => handleScroll('#contacto')}
              className="group flex items-center gap-2 text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #c9a96e 0%, #e8d5a3 50%, #c9a96e 100%)',
                color: '#1a0e00',
                boxShadow: '0 0 24px rgba(201,169,110,0.25)',
              }}
            >
              Agenda una consulta
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary */}
            <button
              onClick={() => handleScroll('#servicios')}
              className="group flex items-center gap-2 text-sm text-white/65 hover:text-white px-7 py-4 rounded-full transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.13)',
                background: 'rgba(255,255,255,0.04)',
              }}
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
