import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Privacidad() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </button>

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#64CEFB] mb-4">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Aviso de Privacidad
            </h1>
            <p className="text-sm text-white/40">
              Última actualización: abril de 2026
            </p>
          </div>

          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col gap-6 text-sm text-white/65 leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">1. Identidad del Responsable</h2>
              <p>
                <strong className="text-white/80">Neident</strong> (en adelante "Neident", "nosotros" o "el Responsable"), con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
              </p>
              <p>Contacto del Responsable: <a href="mailto:neidentdigital@gmail.com" className="text-[#64CEFB] hover:underline">neidentdigital@gmail.com</a></p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">2. Datos Personales que Recabamos</h2>
              <p>A través de nuestro sitio web <strong className="text-white/80">neident.mx</strong> podemos recabar los siguientes datos personales:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Nombre completo</li>
                <li>Nombre de empresa</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre necesidades o retos de su negocio</li>
              </ul>
              <p>No recabamos datos personales sensibles en los términos del artículo 3, fracción VI de la LFPDPPP.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">3. Finalidades del Tratamiento</h2>
              <p><strong className="text-white/80">Finalidades primarias</strong> (necesarias para la relación):</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Contactarlo para responder a sus consultas o solicitudes de información.</li>
                <li>Agendar llamadas o reuniones de diagnóstico empresarial.</li>
                <li>Enviar propuestas comerciales relacionadas con los servicios de Neident.</li>
              </ul>
              <p className="mt-2"><strong className="text-white/80">Finalidades secundarias</strong> (opcionales):</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Envío de contenido informativo, boletines o actualizaciones sobre servicios.</li>
                <li>Análisis estadístico interno para mejorar nuestros servicios.</li>
              </ul>
              <p>Si usted no desea que sus datos sean tratados para finalidades secundarias, puede manifestarlo enviando un correo a <a href="mailto:neidentdigital@gmail.com" className="text-[#64CEFB] hover:underline">neidentdigital@gmail.com</a>.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">4. Transferencia de Datos</h2>
              <p>
                Neident no comparte, vende ni cede sus datos personales a terceros, salvo en los casos previstos por el artículo 37 de la LFPDPPP o cuando sea necesario para la prestación del servicio contratado. En dicho caso se solicitará su consentimiento expreso salvo que la ley lo exceptúe.
              </p>
              <p>
                Utilizamos <strong className="text-white/80">Formspree</strong> como procesador de formularios web. Esta plataforma procesa los datos únicamente para entregarnos las solicitudes y no los usa para fines propios.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">5. Medios para Ejercer Derechos ARCO</h2>
              <p>
                Usted tiene derecho de <strong className="text-white/80">Acceso, Rectificación, Cancelación u Oposición</strong> (derechos ARCO) respecto de sus datos personales. Para ejercerlos, envíe su solicitud a:
              </p>
              <p>
                <a href="mailto:neidentdigital@gmail.com" className="text-[#64CEFB] hover:underline">neidentdigital@gmail.com</a>
              </p>
              <p>Su solicitud deberá incluir: nombre completo, descripción del derecho que desea ejercer y, en su caso, documentación que acredite su identidad. Daremos respuesta en un plazo máximo de <strong className="text-white/80">20 días hábiles</strong> conforme al artículo 32 de la LFPDPPP.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">6. Uso de Cookies y Tecnologías de Seguimiento</h2>
              <p>
                Nuestro sitio web puede utilizar cookies técnicas y analíticas para mejorar la experiencia de navegación. No utilizamos cookies de rastreo publicitario de terceros. Puede configurar su navegador para rechazar cookies; sin embargo, esto puede afectar el funcionamiento del sitio.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">7. Cambios al Aviso de Privacidad</h2>
              <p>
                Neident se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestro sitio web <strong className="text-white/80">neident.mx</strong>. Le recomendamos revisarlo periódicamente.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">8. Autoridad Competente</h2>
              <p>
                Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede presentar una queja ante el <strong className="text-white/80">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong> en <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-[#64CEFB] hover:underline">www.inai.org.mx</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
