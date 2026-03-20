import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'wouter'
import { ArrowRight, ChevronDown, Star, MapPin, Mail, CalendarDays } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { VideoEmbed, VideoModal } from '../components/VideoEmbed'
import ContactForm from '../components/ContactForm'
import FAQItem from '../components/FAQItem'
import SchemaOrg from '../components/SchemaOrg'
import { organizationSchema, localBusinessSchema, webSiteSchema, faqSchema } from '../lib/schemas'

// Featured portfolio videos shown on home page
const FEATURED_VIDEOS = [
  { id: '1046006549', title: 'SHOWREEL 2025' },
  { id: '1045407071', title: 'ANIMATION SHOWREEL' },
  { id: '775903603', title: 'REEL EXTENDED' },
  { id: '824753809', title: 'REEL INDUSTRIAL' },
  { id: '1125341771', title: 'Video Corporativo' },
  { id: '1128948124', title: 'Video Animado' },
  { id: '1108898718', title: 'Motion Graphics' },
  { id: '385247961', title: 'Video Empresarial' },
  { id: '827258728', title: 'Producción' },
  { id: '1129595144', title: 'Animación 3D' },
  { id: '830575842', title: 'Video Corporativo 2' },
  { id: '552966291', title: 'Producción Audiovisual' },
]

const TESTIMONIALS = [
  {
    initials: 'MV',
    name: 'Macarena Vega',
    role: 'Jefa de Marketing Digital, Abastible',
    text: '"En medio de la pandemia llegamos a Grappi con el fin de realizar un video para nuestro segmento industrial, el cual resultó excelente. Entendieron desde el primer momento lo que necesitábamos y el tono y estilo del video se ajustó perfectamente a nuestra línea comunicacional. El equipo siempre tuvo muy buena disposición para realizar todos los cambios que requerimos con el fin de que el video fuese perfecto!! 100% recomendados!"',
  },
  {
    initials: 'DD',
    name: 'Denisse Diaz',
    role: 'Jefa Marketing Digital, Ansaldo',
    text: '"Teníamos la misión de llevar a cabo la Campaña de los 120 años de Ansaldo, y entre las ideas que teníamos, estaba la de hacer una mini-serie animada de 5 cápsulas de un minuto cada una, que contara la historia de la empresa. Sin duda, lograron recrear de manera muy creativa y profesional la larga historia de Ansaldo cumpliendo al pie de la letra la planificación."',
  },
  {
    initials: 'GC',
    name: 'Guillermo Castañeira',
    role: 'Content Marketing Coordinator, Pedidos Ya',
    text: '"Cuando trabajé con el equipo de Grappi sentí que estaba en manos de profesionales, todo estaba contemplado y cubierto, planificado y pensado. Si acaso yo tenía una sugerencia era escuchada y aplicada si correspondía. Además del excelente producto final, logramos estrechar vínculos."',
  },
  {
    initials: 'MM',
    name: 'Marialy Muñoz',
    role: 'Gerenta Comercial, Banco Estado',
    text: '"Trabajar con Grappi ha sido una gran sorpresa, nos encontramos con un equipo comprometido, creativo y que se preocupan de agregar valor a lo que hacen. Lograron captar el sentido a lo que hacemos."',
  },
  {
    initials: 'GS',
    name: 'Giovanni Scappini',
    role: 'Senior Marketing Assistant, CONMEBOL',
    text: '"Excelente grupo humano y profesional!! Con predisposición, responsabilidad y máximo compromiso. Gracias por todo y vamos por más!"',
  },
  {
    initials: 'DB',
    name: 'Daniela Bravo',
    role: 'Marketing y eventos, Universidad Adolfo Ibañez',
    text: '"Trabajar con Grappi ha sido un agrado. En una breve reunión captaron qué era lo que estábamos buscando en nuestros videos y se cumplieron los plazos de entrega de todas las etapas del proyecto."',
  },
]

const FAQS = [
  {
    question: '¿Cuánto cuesta hacer un video corporativo?',
    answer: 'El costo varía según la complejidad y duración del proyecto. Ofrecemos soluciones para diferentes presupuestos. Agenda una reunión gratuita para recibir una cotización personalizada sin compromiso.',
  },
  {
    question: '¿Cuánto tarda una producción audiovisual?',
    answer: 'El tiempo de producción depende del tipo de video. Un video corporativo puede tomar entre 2-4 semanas desde la primera reunión hasta la entrega final, considerando guion, grabación y edición.',
  },
  {
    question: '¿Trabajan con empresas de otras regiones o países?',
    answer: 'Sí, trabajamos con empresas de todo Chile y también de otros países de Latinoamérica. Podemos coordinar producciones remotas o desplazarnos según las necesidades del proyecto.',
  },
  {
    question: '¿Puedo solicitar solo la edición si ya tengo el material grabado?',
    answer: 'Por supuesto. Ofrecemos servicios de postproducción y edición de material existente. Puedes enviarnos tu material y lo transformamos en un video profesional y atractivo.',
  },
  {
    question: '¿Qué incluye una producción audiovisual completa?',
    answer: 'Nuestra producción completa incluye: reunión de briefing, guion estratégico, storyboard, casting y producción, grabación con equipos 4K, edición profesional, color grading, música y efectos de sonido, y entrega en múltiples formatos.',
  },
  {
    question: '¿Qué diferencia a Grappi de otras productoras?',
    answer: 'Combinamos experiencia técnica con visión estratégica. No solo grabamos videos: creamos piezas que comunican, generan confianza y ayudan a alcanzar objetivos de negocio. Con más de 13 años y 500+ proyectos, sabemos qué funciona.',
  },
]

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  return (
    <>
      <Helmet>
        <title>Grappi Multimedia | Productora Audiovisual en Santiago, Chile</title>
        <meta name="description" content="Productora audiovisual líder en Santiago, Chile. Especialistas en videos corporativos, animación 2D/3D y publicidad audiovisual. Guion, producción y post producción para empresas. ¡Cotiza hoy!" />
        <meta name="keywords" content="productora audiovisual santiago, videos corporativos chile, animación 2d 3d, video marketing, producción audiovisual" />
        <link rel="canonical" href="https://www.grappi.cl/" />
        <meta property="og:title" content="Grappi Multimedia | Productora Audiovisual en Santiago, Chile" />
        <meta property="og:description" content="Productora audiovisual líder en Santiago, Chile. Videos corporativos, animación 2D/3D y publicidad audiovisual." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grappi.cl/" />
        <meta property="og:image" content="https://www.grappi.cl/hero-home-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grappi Multimedia | Productora Audiovisual en Santiago, Chile" />
        <meta name="twitter:description" content="Productora audiovisual líder en Santiago, Chile." />
        <meta name="twitter:image" content="https://www.grappi.cl/hero-home-new.png" />
      </Helmet>

      <SchemaOrg schema={[organizationSchema, localBusinessSchema, webSiteSchema, faqSchema(FAQS)]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{
            backgroundImage: 'url(/hero-home-new.png)',
            minHeight: '560px',
          }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="section-badge mb-6">
              <span>✨</span>
              <span>Productora Audiovisual Líder en Chile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-white">Productora Audiovisual</span>
              <br />
              <span className="text-white">en Santiago de Chile</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Creamos videos corporativos, videos animados 2D/3D y publicidad audiovisual para empresas en Santiago. Desde el guion hasta la post producción, entregamos piezas audiovisuales listas para web, redes sociales y campañas digitales.
            </p>
            <a
              href="https://tidycal.com/grappi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-lg shadow-orange-500/30"
            >
              Agenda tu reunión <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nuestro <span className="text-orange-400">Portafolio</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Mira algunos de nuestros proyectos más destacados. Cada video corporativo que producimos es diseñado para generar conexión, transmitir identidad y dejar huella en la audiencia.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {FEATURED_VIDEOS.map(video => (
                <VideoEmbed
                  key={video.id}
                  vimeoId={video.id}
                  title={video.title}
                  onPlay={() => setActiveVideo(video)}
                />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Ver Galería Completa <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(/bg-nosotros-new.png)' }}
        >
          <div className="absolute inset-0 bg-[#080c18]/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="section-badge mb-4">
                <span>✨</span>
                <span>Productora Audiovisual Líder en Chile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                <span className="text-orange-400">Nosotros</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="card-dark">
                <p className="text-white/80 leading-relaxed">
                  Somos <span className="text-orange-400 font-semibold">Grappi Multimedia</span>, una productora audiovisual con más de 13 años de experiencia creando contenidos que transforman ideas en historias visuales memorables. Nacimos en Santiago de Chile con la convicción de que la comunicación corporativa podía ser mucho más que información: podía inspirar, emocionar y dejar huella.
                </p>
              </div>
              <div className="card-dark">
                <p className="text-white/80 leading-relaxed">
                  Desde nuestros primeros proyectos, hemos acompañado a empresas líderes en sectores como{' '}
                  <span className="text-cyan-400">minería, energía, salud, educación y tecnología</span>,
                  entregando soluciones audiovisuales de alto impacto —desde videos institucionales y campañas digitales, hasta producciones animadas y formatos híbridos con inteligencia artificial.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: '13+', label: 'Años de experiencia' },
                { value: '500+', label: 'Proyectos entregados' },
                { value: '200+', label: 'Clientes satisfechos' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clientes Banner */}
        <section className="bg-[#080c18] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Confianza que{' '}
                <span className="text-orange-400">inspira</span>
              </h2>
              <p className="text-white/60">
                Más de 85 grandes empresas han elegido nuestra visión para potenciar su imagen. La excelencia es nuestro único estándar.
              </p>
            </div>
            <img
              src="/banner-marcas.png"
              alt="Nuestros Clientes Corporativos"
              className="w-full max-w-5xl mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Lo que dicen{' '}
                <span className="text-orange-500">nuestros clientes</span>
              </h2>
              <p className="text-gray-500">
                La mejor carta de presentación son las experiencias de quienes ya confiaron en nosotros.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-gray-900 text-sm font-semibold">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/clientes"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                Ver todos los testimonios <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-dark py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="section-badge mb-4">
                <span>💬</span>
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                ¿Tienes dudas?
              </h2>
              <p className="text-white/60">
                Aquí respondemos las preguntas más comunes sobre nuestros servicios.
              </p>
            </div>
            <div className="space-y-3 mb-10">
              {FAQS.map(faq => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} dark />
              ))}
            </div>
            <div className="text-center card-dark py-8">
              <h3 className="text-white font-semibold mb-2">¿No encontraste tu respuesta?</h3>
              <p className="text-white/60 text-sm mb-4">
                Agenda una reunión con nosotros y resolvemos todas tus dudas.
              </p>
              <a
                href="https://tidycal.com/grappi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                <CalendarDays size={16} />
                Agendar Reunión
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(/bg-contacto-new.png)' }}
        >
          <div className="absolute inset-0 bg-[#080c18]/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="section-badge mb-4">
                <span>📍</span>
                <span>Estamos para Ayudarte</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                <span className="text-orange-400">Contacto</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Cuéntanos qué quieres comunicar y nosotros nos encargamos de transformarlo en una experiencia audiovisual única.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Badajoz+100,+Oficina+1014,+Vitacura,+Santiago,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-dark block hover:border-orange-500/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Dirección</h3>
                      <p className="text-white/60 text-sm">Badajoz 100, Oficina 1014</p>
                      <p className="text-white/60 text-sm">Vitacura, Santiago, Chile</p>
                      <p className="text-orange-400 text-xs mt-1">Ver en mapa →</p>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:contacto@grappi.cl"
                  className="card-dark block hover:border-orange-500/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-white/60 text-sm">contacto@grappi.cl</p>
                      <p className="text-orange-400 text-xs mt-1">Enviar correo →</p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://tidycal.com/grappi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-dark block hover:border-orange-500/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <CalendarDays size={18} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Agendar</h3>
                      <p className="text-white/60 text-sm">Programa una reunión con nuestro equipo</p>
                      <p className="text-orange-400 text-xs mt-1">Agendar ahora →</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Form */}
              <ContactForm
                formName="home-contact"
                title="Envíanos un mensaje"
                subtitle="Completa el formulario y nos pondremos en contacto contigo lo antes posible"
              />
            </div>
          </div>
        </section>
      </main>

      {/* SEO Keywords Section */}
      <section className="section-dark py-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-bold text-white mb-3">
            Productora Audiovisual en Santiago, Chile
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            Grappi Multimedia es una productora audiovisual con más de 13 años de experiencia en Santiago de Chile.
            Somos especialistas en video corporativo, videos institucionales, videos animados 2D y 3D, motion graphics
            y publicidad audiovisual para empresas. Trabajamos con las principales empresas de Chile en sectores como
            minería, energía, retail, tecnología, salud y educación. Nuestro estudio de producción está ubicado en
            Vitacura, Santiago, y atendemos proyectos en todo Chile y Latinoamérica. Si buscas una productora de
            video corporativo en Santiago, una empresa de animación 2D/3D en Chile, o expertos en motion graphics y
            contenido audiovisual para empresas, Grappi es tu partner ideal.
          </p>
        </div>
      </section>

      <Footer />

      <VideoModal
        vimeoId={activeVideo?.id ?? null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}
