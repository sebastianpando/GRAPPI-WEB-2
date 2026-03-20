# Grappi Multimedia - Réplica del Sitio Web

Este proyecto es una réplica funcional completa del sitio web [grappi.cl](https://www.grappi.cl), una productora audiovisual líder en Santiago, Chile.

## Tecnologías Detectadas del Sitio Original

- **Framework Frontend**: React + Vite
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Videos**: Vimeo (hosting de videos)
- **Formularios**: Netlify Forms
- **Analytics**: Google Tag Manager, Umami Analytics

## Stack Tecnológico de la Réplica

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Fuentes**: Inter (Google Fonts)

## Estructura del Proyecto

```
├── public/
│   ├── images/
│   │   ├── logo.avif              # Logo de Grappi
│   │   ├── hero-home-new.png      # Imagen de fondo del hero
│   │   ├── hero-corporate-new.png # Hero videos corporativos
│   │   ├── hero-productora-new.png # Hero productora
│   │   ├── banner-marcas.png      # Banner de clientes/marcas
│   │   └── bg-nosotros-new.png    # Imagen de fondo sección Nosotros
│   └── favicon.ico                # Favicon del sitio
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Layout principal con metadata
│   │   ├── page.tsx               # Página principal (Home)
│   │   ├── globals.css            # Estilos globales
│   │   ├── videos-corporativos/   # Página de videos corporativos
│   │   │   └── page.tsx
│   │   ├── videos-animados/       # Página de videos animados
│   │   │   └── page.tsx
│   │   ├── videos/                # Galería completa de videos
│   │   │   └── page.tsx
│   │   ├── clientes/              # Página de clientes
│   │   │   └── page.tsx
│   │   └── contacto/              # Página de contacto
│   │       └── page.tsx
│   ├── components/
│   │   └── ui/                    # Componentes shadcn/ui
│   └── hooks/
│       └── use-toast.ts           # Hook para notificaciones
└── package.json
```

## Páginas del Sitio

### 1. Home (/)
- Hero con título principal y CTA
- Portafolio con 12 videos de Vimeo
- Sección "Nosotros" con estadísticas
- Banner de clientes
- Testimonios
- Servicios
- Formulario de contacto
- Footer completo

### 2. Videos Corporativos (/videos-corporativos)
- Hero específico para servicios corporativos
- Beneficios de videos corporativos
- 6 tipos de videos corporativos
- Metodología de trabajo (5 pasos)
- FAQ con acordeón
- Formulario de contacto

### 3. Videos Animados (/videos-animados)
- Hero para servicios de animación
- Beneficios de videos animados
- 6 tipos de animación (2D, 3D, Motion Graphics, etc.)
- Proceso de animación (6 pasos)
- Galería de videos animados
- Formulario de contacto

### 4. Galería de Videos (/videos)
- Filtros por categoría
- 16 videos con miniaturas
- Modal de reproducción de Vimeo
- CTA para agendar reunión

### 5. Clientes (/clientes)
- Banner de marcas clientes
- 6 testimonios detallados
- Estadísticas animadas
- 6 industrias atendidas
- CTA para contacto

### 6. Contacto (/contacto)
- Formulario completo
- Información de contacto
- Mapa de ubicación
- FAQ de contacto
- Links a servicios

## Funcionalidades Implementadas

- ✅ Header responsive con menú móvil
- ✅ Animaciones de entrada con Intersection Observer
- ✅ Modal de reproducción de videos de Vimeo
- ✅ Formulario de contacto con validación
- ✅ Scroll suave entre secciones
- ✅ Efectos hover en tarjetas y botones
- ✅ Gradientes y efectos visuales
- ✅ Diseño totalmente responsive

## Cómo Ejecutar el Proyecto

### Desarrollo
```bash
bun run dev
```

### Verificar Código
```bash
bun run lint
```

### Construir para Producción
```bash
bun run build
```

## Características de Diseño

### Paleta de Colores
- **Violeta**: #8b5cf6 (violet-500)
- **Cyan**: #06b6d4 (cyan-500)
- **Naranja**: #f97316 (orange-500)
- **Ámbar**: #f59e0b (amber-500)

### Tipografía
- Fuente principal: Inter
- Tamaños responsivos con Tailwind

### Efectos Visuales
- Gradientes lineales y radiales
- Blur effects (backdrop-blur)
- Animaciones pulse
- Transiciones suaves

## Recursos Externos

- **Videos**: Alojados en Vimeo
- **Miniaturas**: Vumbnail.com
- **Fuentes**: Google Fonts (Inter)

## Créditos

- Sitio original: [grappi.cl](https://www.grappi.cl)
- Réplica desarrollada como proyecto de práctica

---

**Nota**: Este proyecto es una réplica con fines educativos. Todos los derechos del contenido original pertenecen a Grappi Multimedia.
