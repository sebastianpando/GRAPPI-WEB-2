import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { VideoEmbed, VideoModal } from '../components/VideoEmbed'
import { useNavigation } from '../hooks/useNavigation'
import SchemaOrg from '../components/SchemaOrg'
import { breadcrumbSchema } from '../lib/schemas'

const ALL_VIDEOS = [
  '1046006549', '1045407071', '775903603', '824753809', '827258728', '928094842',
  '288171638', '977961868', '1149021473', '305966106', '254973280', '533236778',
  '384767148', '301934715', '1055011878', '1019493348', '214028239', '1018767682',
  '326810975', '546622524', '266382707', '662261264', '480239358', '345701967',
  '178088997', '467702315', '301930634', '385247961', '241020778', '288458283',
  '214021213', '1012538637', '904482826', '379306927', '1108898395', '827014893',
  '903124976', '289771217', '1129593312', '1129595144', '1128948124', '1018765591',
  '303578633', '740371181', '1111806179', '521466587', '385249298', '331256368',
  '354701807', '412192873', '266381449', '512901150', '263933144', '662256895',
  '309301722', '395459290', '867265833', '1012538802', '412192730', '1061423751',
  '376919323', '596164465', '369557903', '266383494', '819526567', '247790618',
  '596165080', '1108899333', '218689484', '909852690', '1108898718', '1125341771',
]

export default function Videos() {
  const { navigate } = useNavigation()
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  return (
    <>
      <Helmet>
        <title>Portafolio de Videos | Producción Audiovisual Chile | Grappi</title>
        <meta name="description" content="Explora nuestro portafolio completo de producción audiovisual. Videos corporativos, animados, publicidad y más para empresas en Chile y Latinoamérica." />
        <meta name="keywords" content="portafolio videos chile, produccion audiovisual, videos corporativos, videos animados, motion graphics" />
        <link rel="canonical" href="https://www.grappi.cl/videos" />
        <meta property="og:title" content="Portafolio de Videos | Producción Audiovisual Chile | Grappi" />
        <meta property="og:description" content="Explora nuestro portafolio completo de producción audiovisual en Chile." />
        <meta property="og:url" content="https://www.grappi.cl/videos" />
        <meta property="og:image" content="https://www.grappi.cl/bg-videos-hero-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.grappi.cl/bg-videos-hero-new.png" />
      </Helmet>

      <SchemaOrg schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Portafolio Audiovisual — Grappi Multimedia',
          'description': 'Galería completa de videos corporativos, animados y publicitarios producidos por Grappi Multimedia, productora audiovisual en Chile.',
          'url': 'https://www.grappi.cl/videos',
          'provider': { '@type': 'Organization', 'name': 'Grappi Multimedia', 'url': 'https://www.grappi.cl' },
        },
        breadcrumbSchema({ name: 'Videos', path: '/videos' }),
      ]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{ backgroundImage: 'url(/bg-videos-hero-new.png)', minHeight: '420px' }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="section-badge mb-6">
              <span>🎬</span>
              <span>+70 Producciones Destacadas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portafolio{' '}
              <span className="text-cyan-400">Audiovisual</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">Productora en Chile</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Cada proyecto es una solución estratégica. Trabajamos con marcas que necesitan comunicar con claridad y generar impacto real.
            </p>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
            >
              Ver Videos <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Video Gallery */}
        <section id="gallery" className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Todos nuestros videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {ALL_VIDEOS.map(id => (
                <article key={id}>
                  <VideoEmbed
                    vimeoId={id}
                    title={`Video producción ${id}`}
                    onPlay={() => setActiveVideo({ id, title: `Video producción ${id}` })}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-light py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ¿Listo para tu próximo video?
            </h2>
            <p className="text-gray-600 mb-8">
              Cotiza tu proyecto hoy y recibe una propuesta personalizada en 24 horas hábiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contacto')}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
              >
                Solicitar Cotización <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate('/videos-corporativos')}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Videos Corporativos
              </button>
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
