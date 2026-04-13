import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    category: 'Automatización',
    date: 'Mar 2026',
    readTime: '5 min',
    title: '5 procesos que toda PyME debería automatizar antes de escalar',
    excerpt:
      'Antes de crecer, hay que ordenar. Descubre qué tareas consumen tiempo valioso de tu equipo y cómo automatizarlas sin grandes inversiones.',
    gradient: 'from-[#64CEFB]/10 to-transparent',
  },
  {
    category: 'Transformación Digital',
    date: 'Feb 2026',
    readTime: '7 min',
    title: 'Transformación digital no significa comprar más tecnología',
    excerpt:
      'El error más común en PyMEs es confundir herramientas con estrategia. Te explicamos la diferencia y cómo empezar en el orden correcto.',
    gradient: 'from-white/5 to-transparent',
  },
  {
    category: 'Operaciones',
    date: 'Ene 2026',
    readTime: '4 min',
    title: 'Cómo detectar cuellos de botella en tu operación en menos de 48 horas',
    excerpt:
      'Un diagnóstico operativo no tiene que ser largo ni costoso. Te mostramos el método que usamos en Neident para identificar problemas críticos de forma rápida.',
    gradient: 'from-white/5 to-transparent',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="relative py-20 lg:py-28" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium block mb-4">
              Blog & recursos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ideas para empresas
              <br />
              <span className="shine-text">que quieren avanzar.</span>
            </h2>
          </motion.div>

          <motion.button
            className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors self-start sm:self-end flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ver todos los artículos
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Gradient top area */}
              <div className={`h-40 bg-gradient-to-b ${post.gradient} relative`}>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(ellipse at center top, rgba(100,206,251,0.07), transparent)' }}
                />
              </div>

              {/* Border top highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to right, transparent, rgba(100,206,251,0.4), transparent)' }}
              />

              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(100,206,251,0.1)',
                      color: '#64CEFB',
                      border: '1px solid rgba(100,206,251,0.15)',
                    }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/30">
                    <Clock size={10} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-[#64CEFB] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-2 mt-auto">
                  <span className="text-xs text-white/25">{post.date}</span>
                  <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-[#64CEFB] transition-colors duration-300">
                    <span>Leer</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
