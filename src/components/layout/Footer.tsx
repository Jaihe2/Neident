import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const links = {
  Servicios: ['Diagnóstico', 'Optimización', 'Automatización', 'Transformación Digital', 'Estrategia'],
  Empresa: ['Sobre Neident', 'Proceso', 'Blog', 'Casos de éxito'],
  Legal: ['Aviso de privacidad', 'Términos de uso'],
}

const socials = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
            <button onClick={() => handleScroll('#inicio')} className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#64CEFB] transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-[#64CEFB] transition-colors" />
              </div>
              <span className="text-white font-semibold tracking-tight">Neident</span>
            </button>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Consultoría estratégica para PyMEs de Monterrey y Nuevo León.
              Ordenamos, optimizamos y transformamos tu operación.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="group flex items-center gap-1 text-xs text-white/30 hover:text-white transition-colors"
                >
                  {s.name}
                  <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">{section}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-sm text-white/45 hover:text-white transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-white/25 text-center sm:text-left">
            © {new Date().getFullYear()} Neident. Todos los derechos reservados.
            Monterrey, Nuevo León, México.
          </p>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#64CEFB' }} />
            <p className="text-xs text-white/25">
              Disponibles para nuevos proyectos
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
