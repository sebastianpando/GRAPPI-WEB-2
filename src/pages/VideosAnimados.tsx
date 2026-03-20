import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { VideoEmbed, VideoModal } from '../components/VideoEmbed'
import FAQItem from '../components/FAQItem'
import { useNavigation } from '../hooks/useNavigation'
import SchemaOrg from '../components/SchemaOrg'
import { serviceSchema, breadcrumbSchema, faqSchema } from '../lib/schemas'

const BENEFITS = [
  { title: 'Simplifica lo Complejo', desc: 'La animación convierte conceptos abstractos y técnicos en contenido visual fácil de entender y recordar.', stat: 'Retención +75%' },
  { title: 'Ilimitado Creativo', desc: 'Sin límites físicos ni de presupuesto, la animación permite crear cualquier escenario o concepto imaginable.', stat: 'Flexibilidad 100%' },
  { title: 'Alto Engagement', desc: 'Los videos animados generan 2x más shares y 3x más comentarios que el video tradicional en redes sociales.', stat: 'Engagement +200%' },
]

const PROCESS = [
  { num: '1', title: 'Brief y Concepto', short: 'Definimos objetivos y estilo visual', desc: 'Definimos tus objetivos, mensaje clave y estilo visual para crear una animación alineada con tu marca.' },
  { num: '2', title: 'Guion y Storyboard', short: 'Escribimos guion y viñetas visuales', desc: 'Desarrollamos un guion narrativo y creamos viñetas visuales que sirven como guía del proyecto.' },
  { num: '3', title: 'Diseño y Estilo', short: 'Creamos personajes y escenarios', desc: 'Diseñamos personajes, escenarios y elementos visuales únicos que representan tu identidad de marca.' },
  { num: '4', title: 'Animación', short: 'Damos vida con animación fluida', desc: 'Damos vida a los elementos con animación fluida, sincronización precisa y movimiento profesional.' },
  { num: '5', title: 'Postproducción', short: 'Sonido, efectos y entrega final', desc: 'Añadimos efectos de sonido, música, ajustes finales y entregamos en todos los formatos necesarios.' },
]

const STYLES = [
  { title: 'Animación 2D Clásica', desc: 'Estilo tradicional con personajes y escenarios planos, ideal para contenido corporativo.', badge: '★★★★★ Popular' },
  { title: 'Animación 3D', desc: 'Realismo y profundidad para productos, arquitectura y visualizaciones técnicas.', badge: '★★★★★ Impacto' },
  { title: 'Motion Graphics', desc: 'Diseño gráfico animado perfecto para datos, infografías y contenido moderno.', badge: '★★★★★ Versátil' },
  { title: 'Videos Técnicos Explicativos', desc: 'Animaciones especializadas para explicar procesos técnicos, científicos y de ingeniería con precisión y claridad.', badge: '★★★★★ Profesional' },
]

// Vimeo IDs from the live site
const ANIMATED_VIDEOS = [
  '1012538802', '925115920', '637665967', '624596291', '830575842', '412192873',
  '903125221', '541682464', '345701250', '903124976', '463032643', '578573014',
  '637665933', '178088997', '578619318', '928094842', '901143053', '829520631',
  '314018532', '369557342', '925115889', '546622524', '874138406', '534607769',
  '1031509672', '1031509695', '412192730', '1031507641', '331256368', '279345050',
]

const FAQS = [
  { question: '¿Cuánto tiempo toma producir un video animado?', answer: 'Depende de la complejidad y duración. Un video animado de 1-2 minutos puede tomar entre 3 y 6 semanas, incluyendo guion, storyboard, diseño, animación y postproducción.' },
  { question: '¿Qué información necesito para empezar mi proyecto?', answer: 'Necesitamos entender tu objetivo, audiencia, mensaje principal y referencias visuales que te gusten. Con eso, desarrollamos el concepto completo.' },
  { question: '¿Pueden animar mi logo o marca existente?', answer: 'Absolutamente. Trabajamos con tu identidad de marca existente para crear animaciones coherentes con tu imagen corporativa.' },
  { question: '¿Qué ventajas ofrece la animación 3D frente a la 2D?', answer: 'La animación 3D ofrece mayor realismo y profundidad, ideal para productos, arquitectura o procesos industriales. La 2D es más económica y perfecta para explicar conceptos o construir personajes de marca.' },
  { question: '¿Cómo integran la animación en videos reales?', answer: 'Usamos técnicas de composición y efectos visuales (VFX) para combinar elementos animados con footage real, creando un resultado cohesionado y profesional.' },
  { question: '¿Cuánto demoran en hacer un video con IA?', answer: 'Un video corto con IA (15-30 segundos) puede estar listo en 1-2 semanas. Para videos más largos o complejos, el tiempo varía según los requerimientos específicos.' },
  { question: '¿Cómo hacen los videos con IA?', answer: 'Combinamos herramientas de IA generativa con supervisión humana creativa. Generamos los assets visuales con IA y los integramos con animación, audio y dirección de arte profesional.' },
  { question: '¿En un video IA podemos poner lo que sea?', answer: 'Trabajamos dentro de los límites éticos y legales. Podemos crear prácticamente cualquier concepto visual que sea apropiado, pero evitamos contenido que viole derechos de imagen o sea inapropiado.' },
]

export default function VideosAnimados() {
  const { navigate } = useNavigation()
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  return (
    <>
      <Helmet>
        <title>Videos Animados Chile | Animación 2D y 3D para Empresas | Grappi</title>
        <meta name="description" content="Expertos en videos animados y motion graphics en Chile. Creamos animaciones 2D y 3D profesionales que explican conceptos complejos de manera simple y atractiva." />
        <meta name="keywords" content="videos animados chile, animación 2d santiago, motion graphics, video explicativo animado, animación 3d" />
        <link rel="canonical" href="https://www.grappi.cl/videos-animados" />
        <meta property="og:title" content="Videos Animados Chile | Animación 2D y 3D para Empresas | Grappi" />
        <meta property="og:description" content="Expertos en videos animados y motion graphics en Chile." />
        <meta property="og:url" content="https://www.grappi.cl/videos-animados" />
        <meta property="og:image" content="https://www.grappi.cl/hero-animated-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.grappi.cl/hero-animated-new.png" />
      </Helmet>

      <SchemaOrg schema={[
        serviceSchema('Videos Animados Chile — Animación 2D y 3D', 'Producción de videos animados 2D, 3D y motion graphics para empresas en Chile. Animaciones profesionales que simplifican conceptos complejos.', '/videos-animados'),
        breadcrumbSchema({ name: 'Videos Animados', path: '/videos-animados' }),
        faqSchema(FAQS),
      ]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{ backgroundImage: 'url(/hero-animated-new.png)', minHeight: '480px' }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="section-badge mb-6">
              <span>✨</span>
              <span>Animación 2D, 3D y Motion Graphics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-cyan-400">Videos Animados</span>
              <br />
              <span className="text-white">en Chile</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Transformamos ideas complejas en animaciones simples, atractivas y memorables que capturan la atención de tu audiencia
            </p>
            <button
              onClick={() => navigate('/contacto')}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
            >
              Solicitar Cotización <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              ¿Por qué elegir videos animados?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BENEFITS.map(b => (
                <article key={b.title} className="card-light">
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{b.desc}</p>
                  <span className="text-violet-600 font-semibold text-sm">{b.stat}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-dark py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              Nuestro proceso de animación
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {PROCESS.map(step => (
                <article key={step.num} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-white/50 text-xs">{step.short}</p>
                </article>
              ))}
            </div>
            <div className="space-y-3">
              {PROCESS.map(step => (
                <article key={step.num} className="card-dark flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="section-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  <Sparkles size={14} />
                  Realizado con IA
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Animación con Inteligencia Artificial
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transformamos el futuro de la producción de video mediante Inteligencia Artificial, creando contenido de alta calidad de forma más eficiente.
                </p>
                <h3 className="text-gray-900 font-bold text-xl mb-4">El Futuro de la Animación está Aquí</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  La Inteligencia Artificial está revolucionando la forma en que creamos contenido visual. Combinamos tecnología de vanguardia con creatividad humana para producir resultados extraordinarios.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    { title: 'Mayor Eficiencia', desc: 'Procesos optimizados que reducen tiempos de producción hasta un 60%' },
                    { title: 'Creatividad Sin Límites', desc: 'Generación de conceptos, personajes y escenarios únicos al instante' },
                    { title: 'Costos Competitivos', desc: 'Alta calidad profesional a precios más accesibles que la animación tradicional' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 font-semibold text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/contacto')}
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  Solicitar Animación con IA <ArrowRight size={16} />
                </button>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-violet-900 to-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles size={48} className="text-violet-400 mx-auto mb-3" />
                  <p className="text-white/70 text-sm">Video de Animación con IA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Styles */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Estilos de animación
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STYLES.map(s => (
                <article key={s.title} className="card-dark">
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-yellow-400 text-xs font-medium">{s.badge}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-light py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Anima tus ideas y captura atención
            </h2>
            <p className="text-gray-600 mb-8">
              Transforma conceptos complejos en animaciones memorables que conectan con tu audiencia y generan resultados reales.
            </p>
            <button
              onClick={() => navigate('/videos-corporativos')}
              className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Ver Otros Servicios
            </button>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Nuestros Videos Animados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {ANIMATED_VIDEOS.map(id => (
                <article key={id}>
                  <VideoEmbed
                    vimeoId={id}
                    title={`Video animado ${id}`}
                    onPlay={() => setActiveVideo({ id, title: `Video animado ${id}` })}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-light py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Preguntas frecuentes sobre videos animados
            </h2>
            <div className="space-y-3">
              {FAQS.map(faq => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <VideoModal
        vimeoId={activeVideo?.id ?? null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}
