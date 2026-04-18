import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terminos() {
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
              Términos de Uso
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
              <h2 className="text-base font-semibold text-white">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web <strong className="text-white/80">neident.mx</strong> (en adelante "el Sitio"), usted acepta quedar vinculado por los presentes Términos de Uso. Si no está de acuerdo con alguno de ellos, le pedimos que se abstenga de utilizar el Sitio. Estos términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos, en particular el <em>Código de Comercio</em>, el <em>Código Civil Federal</em> y la <em>Ley Federal de Protección al Consumidor</em>.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">2. Descripción del Servicio</h2>
              <p>
                <strong className="text-white/80">Neident</strong> es una empresa de consultoría estratégica con sede en Monterrey, Nuevo León, México, que ofrece servicios de diagnóstico empresarial, optimización de procesos, automatización y desarrollo de presencia digital para PyMEs.
              </p>
              <p>
                El presente Sitio tiene como finalidad proporcionar información sobre nuestros servicios y facilitar el contacto entre los usuarios interesados y el equipo de Neident. La contratación formal de cualquier servicio se formaliza mediante un contrato de prestación de servicios independiente.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">3. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del Sitio, incluyendo pero no limitado a textos, diseños, logotipos, imágenes, código fuente y elementos gráficos, son propiedad exclusiva de Neident o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables en México, en particular la <em>Ley Federal del Derecho de Autor</em> y la <em>Ley de la Propiedad Industrial</em>.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido del Sitio sin autorización previa y por escrito de Neident.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">4. Uso Permitido del Sitio</h2>
              <p>El usuario se compromete a utilizar el Sitio de manera lícita y conforme a los presentes Términos. Queda expresamente prohibido:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Usar el Sitio para fines ilegales o no autorizados.</li>
                <li>Intentar acceder a sistemas, redes o datos no autorizados.</li>
                <li>Transmitir virus, malware o cualquier código dañino.</li>
                <li>Suplantar la identidad de Neident o de terceros.</li>
                <li>Realizar scraping, minería de datos u obtención automatizada de información sin consentimiento.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">5. Limitación de Responsabilidad</h2>
              <p>
                Neident no garantiza que el Sitio esté libre de errores, interrupciones o virus. En la medida permitida por la legislación mexicana, Neident no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del Sitio.
              </p>
              <p>
                La información publicada en el Sitio tiene carácter informativo y no constituye asesoría legal, fiscal, contable o de ninguna otra índole profesional regulada.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">6. Enlaces a Terceros</h2>
              <p>
                El Sitio puede contener enlaces a sitios web de terceros. Neident no tiene control sobre dichos sitios y no asume ninguna responsabilidad por su contenido, políticas de privacidad o prácticas. Le recomendamos revisar los términos y políticas de cualquier sitio externo que visite.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">7. Modificaciones</h2>
              <p>
                Neident se reserva el derecho de modificar los presentes Términos de Uso en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio tras dichas modificaciones implica la aceptación de los nuevos términos.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">8. Jurisdicción y Ley Aplicable</h2>
              <p>
                Los presentes Términos de Uso se rigen e interpretan de conformidad con las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de <strong className="text-white/80">Monterrey, Nuevo León, México</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white">9. Contacto</h2>
              <p>
                Para cualquier pregunta relacionada con estos Términos de Uso, puede contactarnos en:
              </p>
              <p>
                <a href="mailto:neidentdigital@gmail.com" className="text-[#64CEFB] hover:underline">neidentdigital@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
