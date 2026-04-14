import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, ArrowRight, MessageSquare, Loader2 } from 'lucide-react'

// ⚠️  Reemplaza 'YOUR_FORM_ID' con el ID de tu formulario en formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjlqwbn'

const serviceOptions = [
  'Diagnóstico Empresarial',
  'Optimización de Procesos',
  'Automatización',
  'Transformación Digital',
  'Consultoría Estratégica',
  'Página Web',
  'Todos los anteriores',
]

const challengeOptions = [
  'Demasiadas tareas manuales',
  'No sé por dónde empezar',
  'Mis procesos no son claros',
  'Quiero escalar mi operación',
]

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

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  service: string
  challenge: string
  message: string
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '',
    service: '', challenge: '', message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState(false)

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.service) e.service = 'Selecciona un servicio'
    if (!form.challenge) e.challenge = 'Selecciona un reto'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setSendError(false)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: form.name,
          Empresa: form.company,
          Correo: form.email,
          Teléfono: form.phone,
          Servicio: form.service,
          'Mayor reto': form.challenge,
          Mensaje: form.message,
        }),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setSendError(true)
      }
    } catch {
      setSendError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (field: keyof FormState) => ({
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
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-white/50" style={{ fontSize: '13px' }}>✦</span>
              <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Contacto</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                Hablemos de la siguiente etapa de tu operación.
              </h2>
            </div>

            <p className="text-sm text-white/45 leading-relaxed max-w-sm">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas para agendar una primera llamada sin compromiso.
            </p>

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
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35 font-medium mb-3">Lead Capture</p>
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
                <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', challenge: '', message: '' }) }} className="text-xs text-white/30 hover:text-white/60 transition-colors mt-1">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                {/* Nombre + Empresa */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Nombre *</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle('name')}
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
                      style={inputStyle('company')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                {/* Correo + Teléfono */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Correo *</label>
                    <input
                      type="email"
                      placeholder="correo@empresa.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle('email')}
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
                      style={inputStyle('phone')}
                      onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-xs text-white/40 mb-3">¿Qué servicio te interesa? *</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className="text-xs px-3 py-2 rounded-full transition-all duration-200"
                        style={{
                          background: form.service === s ? 'rgba(100,206,251,0.15)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.service === s ? 'rgba(100,206,251,0.5)' : 'rgba(255,255,255,0.1)'}`,
                          color: form.service === s ? '#64CEFB' : 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.service && <p className="text-xs text-red-400/70 mt-2 pl-1">{errors.service}</p>}
                </div>

                {/* Reto */}
                <div>
                  <label className="block text-xs text-white/40 mb-3">¿Cuál es tu mayor reto? *</label>
                  <div className="flex flex-wrap gap-2">
                    {challengeOptions.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setForm({ ...form, challenge: c })}
                        className="text-xs px-3 py-2 rounded-full transition-all duration-200"
                        style={{
                          background: form.challenge === c ? 'rgba(100,206,251,0.15)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.challenge === c ? 'rgba(100,206,251,0.5)' : 'rgba(255,255,255,0.1)'}`,
                          color: form.challenge === c ? '#64CEFB' : 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  {errors.challenge && <p className="text-xs text-red-400/70 mt-2 pl-1">{errors.challenge}</p>}
                </div>

                {/* Mensaje opcional */}
                <div>
                  <label className="block text-xs text-white/40 mb-2">Cuéntanos más (opcional)</label>
                  <textarea
                    placeholder="Cualquier detalle adicional sobre tu empresa o situación."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    style={{ ...inputStyle('message'), resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(100,206,251,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                {sendError && (
                  <p className="text-xs text-red-400/70 text-center">
                    Error al enviar. Intenta de nuevo o escríbenos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white font-semibold text-sm transition-all duration-300 hover:bg-[#64CEFB] disabled:opacity-60"
                  style={{ color: '#000' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Agendar llamada
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
