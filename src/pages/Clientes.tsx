import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, HardHat, Zap, HeartPulse, GraduationCap, Monitor, ShoppingBag } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigation } from '../hooks/useNavigation'
import SchemaOrg from '../components/SchemaOrg'
import { breadcrumbSchema } from '../lib/schemas'

const STATS = [
  { num: '13+', label: 'Años de experiencia' },
  { num: '500+', label: 'Proyectos entregados' },
  { num: '200+', label: 'Clientes satisfechos' },
  { num: '800+', label: 'Piezas audiovisuales' },
]

const TESTIMONIALS = [
  {
    name: 'Giovanni Scappini',
    role: 'Senior Marketing Assistant',
    company: 'CONMEBOL',
    text: 'Excelente grupo humano y profesional!! Con predisposición, responsabilidad y máximo compromiso. Gracias por todo y vamos por más!',
    stars: 5,
  },
  {
    name: 'José Pablo Peralta',
    role: 'Gerente General',
    company: 'Porsche Volkswagen',
    text: 'Estamos muy contentos con el resultado de nuestro video. No fue fácil coordinar las tomas ya que nos encontramos en medio de una situación complicada para el país, sin embargo, esto no fue un impedimento para que el equipo de Grappi estuviera siempre presente y comprometido con el proyecto.',
    stars: 5,
  },
  {
    name: 'Mili Rosales',
    role: 'Productora',
    company: 'Sony Interactive Entertainment L.A.',
    text: 'Trabajar con los chicos de Grappi fue una experiencia excelente. Ellos se encargaron de conseguir todo lo que necesitábamos para completar la producción en Chile. Nos ayudaron a fijar desde el más pequeño detalle hasta el más grande, siempre con gran profesionalismo.',
    stars: 5,
  },
  {
    name: 'Macarena Vega',
    role: 'Jefa de Marketing Digital',
    company: 'Abastible',
    text: 'En medio de la pandemia llegamos a Grappi con el fin de realizar un video para nuestro segmento industrial, el cual resultó excelente. Entendieron desde el primer momento lo que necesitábamos y el tono y estilo del video se ajustó perfectamente a nuestra línea comunicacional. El equipo siempre tuvo muy buena disposición para realizar todos los cambios que requerimos con el fin de que el video fuese perfecto!! 100% recomendados!',
    stars: 5,
  },
  {
    name: 'Denisse Diaz',
    role: 'Jefa Marketing Digital',
    company: 'Ansaldo',
    text: 'Teníamos la misión de llevar a cabo la Campaña de los 120 años de Ansaldo, y entre las ideas que teníamos, estaba la de hacer una mini-serie animada de 5 cápsulas de un minuto cada una, que contara la historia de la empresa. Sin duda, lograron recrear de manera muy creativa y profesional la larga historia de Ansaldo cumpliendo al pie de la letra la planificación.',
    stars: 5,
  },
  {
    name: 'Ricardo Cornejo',
    role: 'Jefe de Promociones, Gerencia de Marketing',
    company: 'MEGA',
    text: 'Trabajamos a diario con Grappi y son un equipo creativo, comprometido y muy apegado a los tiempos. Tienen no solo un gran equipamiento, sino que un equipo humano excelente que está siempre dispuesto a colaborar en las distintas aventuras que nos propone el trabajo.',
    stars: 5,
  },
  {
    name: 'Marialy Muñoz',
    role: 'Gerenta Comercial',
    company: 'Banco Estado',
    text: 'Trabajar con Grappi ha sido una gran sorpresa, nos encontramos con un equipo comprometido, creativo y que se preocupan de agregar valor a lo que hacen. Lograron captar el sentido a lo que hacemos y han tenido la flexibilidad para adaptarse a nuestras necesidades.',
    stars: 5,
  },
  {
    name: 'Silvia Rojas',
    role: 'Directora Innovación y Emprendimiento',
    company: 'Inacap',
    text: 'Trabajar con el equipo de Grappi ha sido sin duda una excelente experiencia, y superaron ampliamente nuestras expectativas. En todo momento, ellos demostraron compromiso, profesionalismo, productos de excelente calidad y cumplieron con los plazos establecidos.',
    stars: 5,
  },
  {
    name: 'Guillermo Castañeira',
    role: 'Content Marketing Coordinator',
    company: 'Pedidos Ya',
    text: 'Cuando trabajé con el equipo de Grappi sentí que estaba en manos de profesionales, todo estaba contemplado y cubierto, planificado y pensado. Si acaso yo tenía una sugerencia era escuchada y aplicada si correspondía. Además del excelente producto final, logramos estrechar vínculos.',
    stars: 5,
  },
  {
    name: 'Javiera Yañez',
    role: 'Communication Specialist',
    company: 'Fundación Tierra Austral',
    text: 'Trabajar con Grappi ha sido una experiencia muy gratificante para nosotros. Esta es la tercera ocasión que estamos desarrollando un proyecto de forma conjunta, y además de destacar la calidad de su trabajo, destacamos, también, al equipo humano detrás de cada producción.',
    stars: 5,
  },
  {
    name: 'Consuelo Miguel',
    role: 'Jefa de Selección',
    company: 'Uno Salud',
    text: "Super buena experiencia! Respuestas rápidas y resultados con el nivel de urgencia con el que la empresa trabaja. Eso es un agrado! Cuesta encontrar que un proveedor 'te siga el ritmo'. Sobre todo cuando una empresa como la nuestra trabaja full E-commerce.",
    stars: 5,
  },
  {
    name: 'María José Hartard',
    role: 'Vicepresidenta de Talento y Cultura',
    company: 'Liberty Seguros',
    text: 'Quiero agradecer al equipo que nos apoyó en la realización de las dos cápsulas para la celebración del 18 de septiembre. A pese de que nunca habíamos trabajado juntos y de que la solicitud fue con muy poco tiempo, fueron muy rápidos en las respuestas y muy profesionales en la ejecución.',
    stars: 5,
  },
  {
    name: 'Masashi Ushida',
    role: 'Analista y Desarrollo de nuevos negocios',
    company: 'Mitsubishi',
    text: "Creativa, profesional, puntual, responsable y estudiosa. Según mi experiencia en trabajar con GRAPPI, estas son las palabras que los describe. Pero les falta algo. A todas esas palabras hay que poner 'muy'.",
    stars: 5,
  },
  {
    name: 'Alex Lai',
    role: 'Account Manager',
    company: 'Huawei',
    text: 'Grappi es una agencia que produce videos de muy buena calidad y la experiencia con ellos fue muy buena. Tienen un equipo estupendo y muy profesional, la atención de cliente es impecable. Muy recomendable para los que necesiten hacer contenido audiovisual de calidad.',
    stars: 5,
  },
  {
    name: 'Mónica Villarroel',
    role: 'Gerente de Marketing',
    company: 'Redvoiss',
    text: "Trabajar con el equipo de Grappi, es un agrado en todo sentido, simpáticos, dispuestos, creativos y por sobre todo súper responsables y profesionales. Cada vez que recurro a ellos, obtengo el mejor resultado y en los plazos 'estresados' en que siempre nos movemos.",
    stars: 5,
  },
  {
    name: 'Camila Campos',
    role: 'Marketing Support',
    company: 'Bureau Veritas',
    text: 'Excelente experiencia el poder trabajar con los chicos de Grappi, llegamos a las mejores manos, encontramos una empresa responsable, puntual, comprometida, con muy buena disposición, extremadamente creativos y con visión, que nos ayudaron a plasmar nuestra idea.',
    stars: 5,
  },
  {
    name: 'Ignacio Errázuriz',
    role: 'Periodista Corp.',
    company: 'Municipalidad de Reñca',
    text: 'Muchas gracias por el profesionalismo y la factura de los videos, de verdad quedaron muy bonitos y coloridos. Demuestran el espíritu de la actividad registrada y mucho más.',
    stars: 5,
  },
  {
    name: 'Jorge Saavedra',
    role: 'Gerente de Producción',
    company: 'ME Elecmetal',
    text: 'Este es el segundo año que trabajamos con Grappi y nos sigue sorprendiendo positivamente la capacidad creativa y la calidad de los profesionales de su equipo. Su excelente disposición y compromiso con la satisfacción del cliente son, también, aspectos muy valorados.',
    stars: 5,
  },
  {
    name: 'Constanza Arends',
    role: 'Coordinadora de Diseño',
    company: 'Prosud',
    text: 'Agradezco la disposición, paciencia y profesionalismo del equipo de Grappi. Llegamos a un muy buen resultado, de excelente calidad reuniendo todo lo que buscábamos.',
    stars: 5,
  },
  {
    name: 'Paula Líbano',
    role: 'Analista',
    company: 'Ministerio Público',
    text: 'Fue un agrado trabajar con el equipo de Grappi. Demostraron un alto nivel de compromiso, resolución y flexibilidad, así como una gran dosis de creatividad. Estamos satisfechos con los productos que han diseñado y desarrollado para nosotros.',
    stars: 5,
  },
  {
    name: 'Verónica Villanueva',
    role: 'Latin American Product Application',
    company: 'Soler y Palau',
    text: 'Para Soler y Palau ha sido muy grato trabajar con Grappi, para el desarrollo de nuestros videos de comunicación con nuestros clientes. Consideramos que los objetivos se alcanzaron y logramos reflejar de una forma moderna y agradable, nuestras soluciones de ventilación.',
    stars: 5,
  },
  {
    name: 'Daniela Bravo',
    role: 'Marketing y eventos',
    company: 'Universidad Adolfo Ibañez',
    text: 'Trabajar con Grappi ha sido un agrado. En una breve reunión captaron qué era lo que estábamos buscando en nuestros videos y se cumplieron los plazos de entrega de todas las etapas del proyecto. Respondieron a nuestras inquietudes de manera oportuna.',
    stars: 5,
  },
  {
    name: 'Filipa Briones',
    role: 'Jefa Comunicación Interna',
    company: 'Jardines Vitamina',
    text: 'Para Vitamina trabajar con Grappi ha sido como tener una extensión de nuestro equipo en otra oficina, son nuestros partners. Entienden a la perfección lo que queremos, trabajan de manera eficiente y con altos estándares de calidad en la producción.',
    stars: 5,
  },
  {
    name: 'Mario Iniéscar',
    role: 'Head of ICT Support',
    company: 'The Grange School',
    text: 'Trabajar con la productora Grappi, es una experiencia gratificante, tanto por su calidad profesional como por la atención al cliente que realizan, en la parte de rodaje como post producción. Siempre están atentos a los requerimientos de un proyecto exigente.',
    stars: 5,
  },
  {
    name: 'Yazmin Wieland',
    role: 'Licensing and Marketing Director Latam',
    company: 'Sakar Intl.',
    text: 'Un equipo de grandes profesionales, muy creativos, innovadores y responsables; supieron interpretar nuestra necesidad e ideas de forma excepcional. ¡Encantados de volver a desarrollar un proyecto con ustedes y recomendarlos como nuestros proveedores de confianza!',
    stars: 5,
  },
  {
    name: 'María Inés Mendieta',
    role: 'Director de asuntos públicos y comunicaciones',
    company: 'Universidad de Chile',
    text: 'La experiencia de trabajo con Grappi fue positiva. Muy responsables con los plazos, creativos y preocupados por todos los detalles. Siempre aportaron ideas para que nuestro proyecto fuera novedoso y atractivo, considerando nuestro público y los objetivos del encargo.',
    stars: 5,
  },
  {
    name: 'Jaime Guajardo',
    role: 'Content Manager',
    company: 'Instore View',
    text: 'La disposición de Grappi para trabajar con nosotros fue sobresaliente. Siempre abiertos a generar espacios de conversación y trabajo conjunto, tanto para entender las necesidades del negocio como para la elaboración del proyecto audiovisual.',
    stars: 5,
  },
  {
    name: 'Diego Díaz',
    role: 'Product Manager',
    company: 'Valtek',
    text: 'La experiencia con Grappi ha sido muy grata, desde el primer momento se notó su profesionalismo y buena disposición con nuestra solicitud. Quedamos muy contentos con el resultado final. Definitivamente volveríamos a trabajar con ellos.',
    stars: 5,
  },
]

const INDUSTRIES = [
  { Icon: HardHat, name: 'Minería', desc: 'Codelco, BHP, Anglo American y más' },
  { Icon: Zap, name: 'Energía', desc: 'Colbún, Enel, AES Andes y más' },
  { Icon: HeartPulse, name: 'Salud', desc: 'Clínicas, laboratorios y centros médicos' },
  { Icon: GraduationCap, name: 'Educación', desc: 'Universidades, institutos y colegios' },
  { Icon: Monitor, name: 'Tecnología', desc: 'Startups, SaaS y empresas tech' },
  { Icon: ShoppingBag, name: 'Retail', desc: 'Falabella, Ripley, Cencosud y más' },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
      ))}
    </div>
  )
}

export default function Clientes() {
  const { navigate } = useNavigation()

  return (
    <>
      <Helmet>
        <title>Nuestros Clientes | Empresas que Confían en Grappi Chile</title>
        <meta name="description" content="Más de 200 empresas en Chile confían en Grappi para su producción audiovisual. Conoce nuestros clientes y lee sus testimonios sobre nuestro trabajo." />
        <meta name="keywords" content="clientes grappi, testimonios produccion audiovisual chile, empresas videos corporativos" />
        <link rel="canonical" href="https://www.grappi.cl/clientes" />
        <meta property="og:title" content="Nuestros Clientes | Empresas que Confían en Grappi Chile" />
        <meta property="og:description" content="Más de 200 empresas en Chile confían en Grappi para su producción audiovisual." />
        <meta property="og:url" content="https://www.grappi.cl/clientes" />
        <meta property="og:image" content="https://www.grappi.cl/hero-clientes-chilean.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.grappi.cl/hero-clientes-chilean.png" />
      </Helmet>

      <SchemaOrg schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Grappi Multimedia',
          'url': 'https://www.grappi.cl',
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5.0',
            'reviewCount': '200',
            'bestRating': '5',
          },
        },
        breadcrumbSchema({ name: 'Clientes', path: '/clientes' }),
      ]} />

      <Header />

      <main>
        {/* Hero */}
        <section
          className="hero-section pt-16"
          style={{ backgroundImage: 'url(/hero-clientes-chilean.png)', minHeight: '420px' }}
        >
          <div className="hero-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="section-badge mb-6">
              <span>🏆</span>
              <span>+200 Clientes Satisfechos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empresas que{' '}
              <span className="text-cyan-400">Confían en Nosotros</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Más de 13 años trabajando con las marcas más importantes de Chile y Latinoamérica
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="section-dark py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {STATS.map(s => (
                <div key={s.num} className="card-dark py-8">
                  <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">{s.num}</div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor logro. Aquí compartimos algunas de sus experiencias.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map(t => (
                <article key={t.name} className="card-dark flex flex-col">
                  <Stars count={t.stars} />
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/50 text-xs">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Client logos */}
        <section className="section-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              Marcas que han confiado en Grappi
            </h2>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/banner-marcas.png"
                alt="Clientes y marcas de Grappi"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              Industrias que atendemos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {INDUSTRIES.map(({ Icon, name, desc }) => (
                <article key={name} className="card-light text-center py-6">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-gray-500" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-1">{name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Únete a nuestros clientes
            </h2>
            <p className="text-white/60 mb-8">
              Comienza hoy y descubre por qué más de 200 empresas confían en Grappi para su producción audiovisual.
            </p>
            <button
              onClick={() => navigate('/contacto')}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
            >
              Solicitar Cotización <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
