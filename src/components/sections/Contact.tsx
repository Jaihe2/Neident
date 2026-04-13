import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, ArrowRight, MessageSquare } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Correo',
    value: 'neidentdigital@gmail.com',
    href: 'mailto:neidentdigital@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 229 520 4455',
    href: 'tel:+522295204455',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Monterrey, Nuevo León, México',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@neident.mx',
    href: 'https://instagram.com/neident.mx',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.message.trim()) e.message = 'Requerido'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const fieldStyle = (field: keyof typeof form) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '12px',
    width: '100%',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <section id="contacto" className="relative py-20 lg:py-28" style={{ background: '#000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-6">

          {/* ── LEFT: Info ── */}
          <motion.div
            className="rounded-3xl p-8 lg:p-10 flex flex-col gap-7"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-white/50" style={{ fontSize: '13px' }}>✦</span>
              <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Contacto</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                Hablemos de la siguiente etapa de tu operación.
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-white/45 leading-relaxed max-w-sm">
              Este bloque está planteado para captación de leads con fricción mínima: formulario, WhatsApp, correo y presencia local clara para empresas de Monterrey y Nuevo León.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                const inner = (
                  <div
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-colors duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.15)' }}
                    >
                      <Icon size={17} style={{ color: '#64CEFB' }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/35 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            className="rounded-3xl p-8 lg:p-10 flex flex-col gap-6"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            {/* Form header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35 font-medium mb-3">
                  Lead Capture
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Cuéntanos qué está frenando hoy a tu empresa.
                </h3>
              </div>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ml-4 mt-1"
                style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.15)' }}
              >
                <MessageSquare size={16} style={{ color: '#64CEFB' }} />
              </div>
            </div>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(100,206,251,0.1)', border: '1px solid rgba(100,206,251,0.2)' }}
                >
                  ✓
                </div>
                <p className="text-white font-semibold">¡Mensaje enviado!</p>
                <p className="text-sm text-white/45 max-w-xs">Te respondemos en menos de 24 horas para agendar una primera llamada.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-white/30 hover:text-white/60 transition-colors mt-1">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={fieldStyle('name')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)')}
                    />
                    {errors.name && <p className="text-xs text-red-400/70 mt-1 pl-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={fieldStyle('company')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Correo</label>
                    <input
                      type="email"
                      placeholder="correo@empresa.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={fieldStyle('email')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)')}
                    />
                    {errors.email && <p className="text-xs text-red-400/70 mt-1 pl-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+52 81..."
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={fieldStyle('phone')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                {/* Row 3 — Reto principal */}
                <div>
                  <label className="block text-xs text-white/40 mb-2">Reto principal</label>
                  <textarea
                    placeholder="Ej. Tenemos procesos poco claros, seguimiento manual o queremos empezar a automatizar."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{ ...fieldStyle('message'), resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)')}
                  />
                  {errors.message && <p className="text-xs text-red-400/70 mt-1 pl-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white font-semibold text-sm transition-all duration-300 hover:bg-[#64CEFB]"
                  style={{ color: '#000' }}
                >
                  Enviar mensaje
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
