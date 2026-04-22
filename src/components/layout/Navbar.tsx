import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Casos', href: '#casos' },
]

// Instagram SVG icon inline (lucide-react doesn't have Instagram)
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Logo — text only */}
          <button
            onClick={() => handleNav('#inicio')}
            className="flex-shrink-0 group"
          >
            <span className="text-white font-semibold tracking-tight text-base group-hover:text-[#64CEFB] transition-colors duration-200">
              Neident
            </span>
          </button>

          {/* Desktop nav pill */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 text-sm rounded-full text-white/65 hover:text-white transition-colors duration-200 hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: Instagram + Contacto + CTA */}
          <div className="flex items-center gap-3">
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/neident.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
              aria-label="Instagram de Neident"
            >
              <InstagramIcon size={15} />
              <span className="hidden lg:inline text-xs">@neident.mx</span>
            </a>

            {/* Divider */}
            <div className="hidden lg:block w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />

            {/* Contacto text link */}
            <button
              onClick={() => handleNav('#contacto')}
              className="hidden sm:flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors group"
            >
              Contacto
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {/* CTA pill */}
            <button
              onClick={() => handleNav('#contacto')}
              className="hidden sm:block text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #c9a96e 0%, #e8d5a3 50%, #c9a96e 100%)',
                color: '#1a0e00',
              }}
            >
              Agenda consulta
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-2xl font-medium text-white/80 hover:text-white py-3 border-b transition-colors"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Instagram in mobile menu */}
              <motion.a
                href="https://www.instagram.com/neident.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-left text-2xl font-medium text-white/80 hover:text-white py-3 border-b transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
              >
                <InstagramIcon size={22} />
                Instagram
              </motion.a>
            </nav>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => handleNav('#contacto')}
                className="w-full py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-[#64CEFB] transition-colors"
              >
                Agenda una consulta
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
