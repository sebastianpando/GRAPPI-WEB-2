// Schema.org JSON-LD helpers — shared across all pages

const BASE_URL = 'https://www.grappi.cl'

interface FAQ {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  path: string
}

interface ReviewData {
  name: string
  role: string
  company: string
  text: string
  stars: number
}

export function breadcrumbSchema(...items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': `${BASE_URL}/` },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        'position': i + 2,
        'name': item.name,
        'item': `${BASE_URL}${item.path}`,
      })),
    ],
  }
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer },
    })),
  }
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}${path}#service`,
    'name': name,
    'provider': {
      '@type': 'Organization',
      'name': 'Grappi Multimedia',
      'url': BASE_URL,
      'logo': `${BASE_URL}/logograppipagina.avif`,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Santiago', 'containedInPlace': { '@type': 'Country', 'name': 'Chile' } },
      { '@type': 'Country', 'name': 'Chile' },
    ],
    'serviceType': 'Producción Audiovisual',
    'description': description,
    'url': `${BASE_URL}${path}`,
    'priceRange': '$$',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': name,
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': name } },
      ],
    },
  }
}

// Individual review schema for rich snippets
export function reviewSchema(reviews: ReviewData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Grappi Multimedia',
    'url': BASE_URL,
    'image': `${BASE_URL}/hero-home-new.png`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Badajoz 100, Oficina 1014',
      'addressLocality': 'Vitacura',
      'addressRegion': 'Región Metropolitana',
      'addressCountry': 'CL',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'bestRating': '5',
      'worstRating': '1',
      'reviewCount': String(reviews.length),
      'ratingCount': String(reviews.length),
    },
    'review': reviews.map(r => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': r.name,
        'jobTitle': r.role,
        'worksFor': { '@type': 'Organization', 'name': r.company },
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': String(r.stars),
        'bestRating': '5',
        'worstRating': '1',
      },
      'reviewBody': r.text,
    })),
  }
}

// VideoObject schema for Vimeo embeds — helps Google show video rich results
export function videoObjectSchema(videos: { id: string; title: string }[]) {
  return videos.map(v => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': v.title,
    'description': `${v.title} — Producción audiovisual por Grappi Multimedia, productora audiovisual en Santiago, Chile.`,
    'thumbnailUrl': `https://vumbnail.com/${v.id}.jpg`,
    'contentUrl': `https://vimeo.com/${v.id}`,
    'embedUrl': `https://player.vimeo.com/video/${v.id}`,
    'uploadDate': '2024-01-01',
    'publisher': {
      '@type': 'Organization',
      'name': 'Grappi Multimedia',
      'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/logograppipagina.avif` },
    },
  }))
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  'name': 'Grappi Multimedia',
  'alternateName': ['Grappi', 'Grappi Films', 'Grappi Multimedia Chile'],
  'url': BASE_URL,
  'logo': {
    '@type': 'ImageObject',
    'url': `${BASE_URL}/logograppipagina.avif`,
    'width': 200,
    'height': 60,
  },
  'email': 'contacto@grappi.cl',
  'foundingDate': '2012',
  'numberOfEmployees': { '@type': 'QuantitativeValue', 'minValue': 5, 'maxValue': 20 },
  'knowsAbout': [
    'Video Corporativo',
    'Producción Audiovisual',
    'Videos Animados 2D',
    'Animación 3D',
    'Motion Graphics',
    'Publicidad Audiovisual',
    'Video Marketing',
    'Video Institucional',
  ],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Badajoz 100, Oficina 1014',
    'addressLocality': 'Vitacura',
    'addressRegion': 'Región Metropolitana',
    'postalCode': '7630000',
    'addressCountry': 'CL',
  },
  'sameAs': [
    'https://www.instagram.com/grappifilming',
    'https://www.facebook.com/grappifilms',
    'https://www.linkedin.com/company/grappi',
    'https://vimeo.com/grappi',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#localbusiness`,
  'name': 'Grappi Multimedia — Productora Audiovisual Santiago',
  'alternateName': 'Grappi Multimedia',
  'description': 'Productora audiovisual en Santiago de Chile con más de 13 años de experiencia. Especialistas en video corporativo, videos animados 2D/3D, motion graphics y publicidad audiovisual para empresas. Más de 500 proyectos entregados y 200 clientes satisfechos.',
  'url': BASE_URL,
  'telephone': '+56900000000',
  'email': 'contacto@grappi.cl',
  'image': [
    `${BASE_URL}/hero-home-new.png`,
    `${BASE_URL}/hero-corporate-new.png`,
    `${BASE_URL}/banner-marcas.png`,
  ],
  'priceRange': '$$',
  'currenciesAccepted': 'CLP',
  'paymentAccepted': 'Transferencia bancaria, Tarjeta de crédito',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Badajoz 100, Oficina 1014',
    'addressLocality': 'Vitacura',
    'addressRegion': 'Región Metropolitana',
    'postalCode': '7630000',
    'addressCountry': 'CL',
  },
  'geo': { '@type': 'GeoCoordinates', 'latitude': -33.3983, 'longitude': -70.5777 },
  'openingHoursSpecification': [{
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'opens': '09:00',
    'closes': '18:00',
  }],
  'areaServed': [
    { '@type': 'City', 'name': 'Santiago' },
    { '@type': 'AdministrativeArea', 'name': 'Región Metropolitana' },
    { '@type': 'Country', 'name': 'Chile' },
  ],
  'hasMap': 'https://maps.google.com/?q=Badajoz+100,+Oficina+1014,+Vitacura,+Santiago,+Chile',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'bestRating': '5',
    'reviewCount': '200',
    'ratingCount': '200',
  },
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  'name': 'Grappi Multimedia',
  'alternateName': 'Grappi — Productora Audiovisual Chile',
  'url': BASE_URL,
  'inLanguage': 'es-CL',
  'publisher': { '@id': `${BASE_URL}/#organization` },
  'potentialAction': {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': `${BASE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
