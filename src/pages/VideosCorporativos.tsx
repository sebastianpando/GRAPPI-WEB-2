import { Helmet } from 'react-helmet-async'
import { Link } from 'wouter'
import { ArrowRight, CheckCircle, CalendarDays } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import FAQItem from '../components/FAQItem'
import SchemaOrg from '../components/SchemaOrg'
import { serviceSchema, breadcrumbSchema, faqSchema } from '../lib/schemas'

const BENEFITS = [
  {
    title: 'Aumenta el Engagement',
    desc: 'El video aumenta el tiempo de permanencia en tu sitio hasta en un 88% y mejora la retención de información en un 65% comparado con texto.',
  },
  {
    title: 'Mejora Conversiones',
    desc: 'Las landing pages con video tienen tasas de conversión hasta 80% más altas que aquellas sin contenido visual.',
  },
  {
    title: 'Fortalece Marca',
    desc: 'Los videos corporativos humanizan tu marca, generan confianza y crean conexiones emocionales duraderas con stakeholders.',
  },
]

const VIDEO_TYPES = [
  {
    title: 'Video Corporativo',
    desc: 'Presenta tu empresa, misión, visión y valores de manera profesional y emotiva.',
    items: ['Historia corporativa', 'Cultura organizacional', 'Valores empresariales'],
  },
  {
    title: 'Video de Productos',
    desc: 'Demuestra tus productos en acción, destacando beneficios y características clave.',
    items: ['Demostraciones', 'Tutoriales de uso', 'Casos de éxito'],
  },
  {
    title: 'Video Testimonial',
    desc: 'Clientes satisfechos comparten sus experiencias, generando confianza social.',
    items: ['Testimonios de clientes', 'Estudios de caso', 'Resultados obtenidos'],
  },
  {
    title: 'Video de Capacitación',
    desc: 'Forma a tu equipo y clientes con contenido educativo profesional y escalable.',
    items: ['Capacitación interna', 'Tutoriales para clientes', 'Onboarding de productos'],
  },
  {
    title: 'Video de Eventos',
    desc: 'Documenta y promociona tus eventos corporativos para amplificar su impacto.',
    items: ['Cobertura de eventos', 'Aftermovies corporativos', 'Lanzamientos de productos'],
  },
  {
    title: 'Video de Reclutamiento',
    desc: 'Atrae talento excepcional mostrando tu cultura y ambiente laboral.',
    items: ['Cultura organizacional', 'Testimonios de empleados', 'Programas de beneficios'],
  },
]

const METHODOLOGY = [
  { num: '1', title: 'Estrategia y Guion', short: 'Analizamos objetivos y creamos guion estratégico', desc: 'Analizamos tus objetivos y desarrollamos un guion estratégico que alinea mensaje y metas empresariales.' },
  { num: '2', title: 'Preproducción', short: 'Planificación, casting y preparación técnica', desc: 'Planificación detallada, casting, locaciones y preparación técnica para garantizar resultados profesionales.' },
  { num: '3', title: 'Producción', short: 'Grabación con equipos 4K profesionales', desc: 'Grabación con equipos 4K profesionales, iluminación cinematográfica y audio de alta fidelidad.' },
  { num: '4', title: 'Postproducción', short: 'Edición, color y efectos visuales', desc: 'Edición profesional, color grading, efectos visuales y entrega en múltiples formatos optimizados.' },
  { num: '5', title: 'Entrega Final', short: 'Revisión y entrega en múltiples formatos', desc: 'Revisión final con el cliente, ajustes últimos detalles y entrega del video completo en todos los formatos necesarios para su distribución.' },
]

const FAQS = [
  { question: '¿Cuánto tiempo toma producir un video corporativo?', answer: 'El tiempo varía según la complejidad. Un video corporativo estándar toma entre 2 y 4 semanas desde la primera reunión hasta la entrega final, incluyendo guion, producción y edición.' },
  { question: '¿Qué necesito para empezar mi video corporativo?', answer: 'Solo necesitas una idea de lo que quieres comunicar. Nosotros nos encargamos del guion, la producción y la postproducción. Una reunión inicial es suficiente para comenzar.' },
  { question: '¿Qué equipos técnicos se utilizan en la producción?', answer: 'Utilizamos cámaras 4K de última generación, iluminación cinematográfica LED, audio de alta fidelidad, drones y equipos de estabilización para garantizar la máxima calidad.' },
  { question: '¿Cómo se mide el éxito de un video corporativo?', answer: 'Medimos el éxito según los objetivos definidos: visualizaciones, tasa de engagement, conversiones, tiempo de permanencia en sitio web, y alcance en redes sociales.' },
  { question: '¿Qué formatos de entrega ofrecen?', answer: 'Entregamos en todos los formatos necesarios: MP4 en alta resolución, formatos optimizados para web, redes sociales (Instagram, LinkedIn, YouTube), y versiones adaptadas para diferentes plataformas.' },
  { question: '¿Ofrecen servicios de marketing para los videos?', answer: 'Sí, ofrecemos asesoría sobre distribución y estrategia digital. Podemos orientarte sobre las mejores plataformas y formatos para maximizar el impacto de tu video.' },
  { question: '¿Cómo se elabora el guion y storyboard?', answer: 'Partimos de una reunión de briefing donde entendemos tu marca, objetivos y audiencia. Con eso, nuestro equipo creativo desarrolla el guion y el storyboard, que revisas y apruebas antes de producir.' },
  { question: '¿Qué tipos de videos corporativos existen?', answer: 'Realizamos videos institucionales, corporativos para RRHH, testimoniales, presentaciones de producto, videos de marca (Brand Videos) y cápsulas para comunicación interna.' },
]

export default function VideosCorporativos() {
  return (
    <>
      <Helmet>
        <title>Videos Corporativos Chile | Productora de Video Empresa | Grappi</title>
        <meta name="description" content="Expertos en videos corporativos en Chile. Creamos videos empresariales de alta calidad que comunican tus valores y fortalecen tu marca. ¡Cotiza tu proyecto hoy!" />
        <meta name="keywords" content="videos corporativos chile, video corporativo santiago, producción video empresarial, videos institucionales" />
        <link rel="canonical" href="https://www.grappi.cl/videos-corporativos" />
        <meta property="og:title" content="Videos Corporativos Chile | Productora de Video Empresa | Grappi" />
        <meta property="og:description" content="Expertos en videos corporativos en Chile. Creamos videos empresariales de alta calidad." />
        <meta property="og:url" content="https://www.grappi.cl/videos-corporativos" />
        <meta property="og:image" content="https://www.grappi.cl/hero-corporate-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.grappi.cl/hero-corporate-new.png" />
      </Helmet>

      <SchemaOrg schema={[
        serviceSchema('Video Corporativo Chile', 'Producción de videos corporativos profesionales para empresas en Chile. Video institucional, video de productos, video testimonial, capacitación y más.', '/videos-corporativos'),
        breadcrumbSchema({ name: 'Videos Corporativos', path: '/videos-corporativos' }),
        faqSchema(FAQS),
      ]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{ backgroundImage: 'url(/hero-corporate-new.png)', minHeight: '480px' }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="section-badge mb-6">
              <span>🎬</span>
              <span>Videos Profesionales para Empresas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-cyan-400">Videos Corporativos</span>
              <br />
              <span className="text-white">en Santiago</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Comunicamos la esencia de tu marca a través de videos corporativos profesionales que generan confianza y ayudan a vender mejor sin sonar a "venta dura"
            </p>
            <a
              href="https://tidycal.com/grappi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
            >
              Agenda una reunión <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              ¿Por qué tu empresa necesita Videos Corporativos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BENEFITS.map(b => (
                <div key={b.title} className="card-light">
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Tipos de Videos Corporativos que producimos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEO_TYPES.map(vt => (
                <div key={vt.title} className="card-dark">
                  <h3 className="text-white font-bold text-lg mb-2">{vt.title}</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">{vt.desc}</p>
                  <ul className="space-y-1">
                    {vt.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle size={14} className="text-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-light py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Nuestra metodología
            </h2>
            {/* Step numbers row */}
            <div className="hidden md:flex items-start justify-between mb-6 relative">
              <div className="absolute top-5 left-8 right-8 h-px bg-orange-200" />
              {METHODOLOGY.map(step => (
                <div key={step.num} className="flex flex-col items-center gap-2 flex-1 relative">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center z-10 text-sm">
                    {step.num}
                  </div>
                  <span className="text-gray-900 font-semibold text-xs text-center">{step.title}</span>
                  <span className="text-gray-500 text-xs text-center">{step.short}</span>
                </div>
              ))}
            </div>
            {/* Full descriptions */}
            <div className="space-y-4">
              {METHODOLOGY.map(step => (
                <div key={step.num} className="flex gap-4 card-light">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="relative py-16 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-productora-new.png)' }}
        >
          <div className="absolute inset-0 bg-[#080c18]/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Transforma tu comunicación corporativa
            </h2>
            <p className="text-white/70 mb-8">
              Descubre cómo nuestros videos corporativos pueden potenciar tu marca y alcanzar tus objetivos de negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tidycal.com/grappi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                <CalendarDays size={16} />
                Agenda hoy
              </a>
              <Link
                href="/videos"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-dark py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Preguntas frecuentes sobre Videos Corporativos
            </h2>
            <div className="space-y-3">
              {FAQS.map(faq => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} dark />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-light py-16">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm
              formName="videos-corporativos"
              title="Cotiza Video Corporativo"
              subtitle="Completa el formulario y nos pondremos en contacto contigo lo antes posible"
              dark={false}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
