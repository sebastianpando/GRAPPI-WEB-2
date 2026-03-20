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
    '@type': 'Service',
    'name': name,
    'provider': { '@type': 'Organization', 'name': 'Grappi Multimedia', 'url': BASE_URL },
    'areaServed': { '@type': 'Country', 'name': 'Chile' },
    'description': description,
    'url': `${BASE_URL}${path}`,
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Grappi Multimedia',
  'url': BASE_URL,
  'logo': `${BASE_URL}/logograppipagina.avif`,
  'email': 'contacto@grappi.cl',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Badajoz 100, Oficina 1014',
    'addressLocality': 'Vitacura',
    'addressRegion': 'Región Metropolitana',
    'addressCountry': 'CL',
  },
  'sameAs': [
    'https://www.instagram.com/grappifilming',
    'https://www.facebook.com/grappifilms',
    'https://www.linkedin.com/company/grappi',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Grappi Multimedia — Productora Audiovisual Santiago',
  'description': 'Productora audiovisual en Santiago de Chile. Expertos en video corporativo, videos animados 2D/3D y motion graphics para empresas.',
  'url': BASE_URL,
  'email': 'contacto@grappi.cl',
  'image': `${BASE_URL}/hero-home-new.png`,
  'priceRange': '$$',
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
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Grappi Multimedia',
  'url': BASE_URL,
}
