import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Clock, ArrowRight } from 'lucide-react'
import SocialLinks from '../components/SocialLinks'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import FAQItem from '../components/FAQItem'
import SchemaOrg from '../components/SchemaOrg'
import { breadcrumbSchema, faqSchema } from '../lib/schemas'

const FAQS = [
  { question: '¿Cuánto cuesta un video corporativo?', answer: 'El precio varía según la duración, complejidad y tipo de producción. Contáctanos y te enviamos una propuesta personalizada sin costo ni compromiso.' },
  { question: '¿Cuánto tiempo demora la producción de un video?', answer: 'El tiempo depende del tipo y complejidad del proyecto. Cada producción tiene un calendario personalizado que definimos juntos desde la primera reunión, incluyendo revisiones.' },
  { question: '¿Trabajan con empresas fuera de Santiago?', answer: 'Sí, trabajamos con empresas en todo Chile y también a nivel latinoamericano. Tenemos experiencia en filmaciones en diversas regiones del país y el extranjero.' },
  { question: '¿Cuántas revisiones incluyen en el proyecto?', answer: 'Incluimos rondas de revisiones en todos nuestros proyectos. Esto cubre ajustes de texto, color, música y otros elementos dentro del alcance original del proyecto.' },
  { question: '¿Pueden hacer videos en otros idiomas?', answer: 'Sí, trabajamos con locutores y traductores profesionales para producir videos en inglés, portugués y otros idiomas según tus necesidades de mercado.' },
  { question: '¿En qué formatos entregan el video final?', answer: 'Entregamos en todos los formatos necesarios: alta calidad para web y redes sociales, versiones adaptadas para distintas plataformas (Instagram, LinkedIn, YouTube) y el archivo fuente si se requiere.' },
]

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | Productora de Video en Santiago Chile | Grappi</title>
        <meta name="description" content="Contáctanos para cotizar tu video corporativo, animado o publicitario. Estamos en Santiago, Chile. Respuesta en menos de 24 horas hábiles." />
        <meta name="keywords" content="contacto grappi, cotizar video corporativo chile, productora video santiago" />
        <link rel="canonical" href="https://www.grappi.cl/contacto" />
        <meta property="og:title" content="Contacto | Productora de Video en Santiago Chile | Grappi" />
        <meta property="og:description" content="Contáctanos para cotizar tu proyecto audiovisual. Respondemos en menos de 24 horas." />
        <meta property="og:url" content="https://www.grappi.cl/contacto" />
        <meta property="og:image" content="https://www.grappi.cl/bg-contacto-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.grappi.cl/bg-contacto-new.png" />
      </Helmet>

      <SchemaOrg schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Contacto — Grappi Multimedia',
          'url': 'https://www.grappi.cl/contacto',
          'description': 'Contacta a Grappi Multimedia, productora audiovisual en Santiago de Chile. Solicita tu cotización de video corporativo o animado.',
          'mainEntity': { '@type': 'Organization', 'name': 'Grappi Multimedia', 'email': 'contacto@grappi.cl' },
        },
        breadcrumbSchema({ name: 'Contacto', path: '/contacto' }),
        faqSchema(FAQS),
      ]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{ backgroundImage: 'url(/bg-contacto-new.png)', minHeight: '360px' }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
            <div className="section-badge mb-6">
              <span>📩</span>
              <span>Respuesta en menos de 24 horas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Contacta a tu{' '}
              <span className="text-cyan-400">Productora Audiovisual</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl">en Santiago, Chile</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Cuéntanos tu idea y te enviamos una propuesta personalizada sin costo ni compromiso.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <ContactForm
                formName="contacto"
                title="Envíanos un mensaje"
                subtitle="Completa el formulario y nos pondremos en contacto contigo lo antes posible"
                dark={true}
              />

              {/* Info */}
              <div className="space-y-6">
                <div className="card-dark">
                  <h3 className="text-white font-bold text-lg mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={16} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Dirección</div>
                        <div className="text-white/60 text-sm">Badajoz 100, Oficina 1014</div>
                        <div className="text-white/60 text-sm">Vitacura, Santiago, Chile</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail size={16} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Email</div>
                        <a
                          href="mailto:contacto@grappi.cl"
                          className="text-orange-400 hover:text-orange-300 text-sm transition-colors"
                        >
                          contacto@grappi.cl
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock size={16} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Horario de atención</div>
                        <div className="text-white/60 text-sm">Lunes a Viernes · 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-white font-medium text-sm mb-3">Síguenos</div>
                    <SocialLinks variant="subtle" />
                  </div>
                </div>

                {/* Calendly CTA */}
                <div className="card-dark text-center">
                  <h3 className="text-white font-bold mb-2">¿Prefieres agendar una reunión?</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Reserva un espacio en nuestro calendario y conversamos sobre tu proyecto.
                  </p>
                  <a
                    href="https://tidycal.com/grappi/reunion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                  >
                    Agendar Reunión <ArrowRight size={15} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-light py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Preguntas frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FAQS.map(faq => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} dark={false} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
