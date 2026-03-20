"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Menu, 
  X, 
  Clock, 
  Award, 
  Users, 
  Quote, 
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Video portfolio data
const portfolioVideos = [
  { id: "1046006549", title: "Video Corporativo" },
  { id: "1045407071", title: "Video Corporativo" },
  { id: "775903603", title: "Video Corporativo" },
  { id: "824753809", title: "Video Animado" },
  { id: "1125341771", title: "Video Corporativo" },
  { id: "1128948124", title: "Video Corporativo" },
  { id: "1108898718", title: "Video Corporativo" },
  { id: "385247961", title: "Video Animado" },
  { id: "827258728", title: "Video Corporativo" },
  { id: "1129595144", title: "Video Corporativo" },
  { id: "830575842", title: "Video Corporativo" },
  { id: "552966291", title: "Video Animado" },
];

// Testimonials data
const testimonials = [
  {
    name: "Macarena Vega",
    role: "Jefa de Marketing",
    company: "Sodimac",
    text: "En medio de la pandemia llegamos a Grappi con el fin de realizar un video para nuestro segmento industrial, el cual resultó excelente. Entendieron desde el primer momento lo que necesitábamos y el tono y estilo del video se ajustó perfectamente a nuestra línea comunicacional. El equipo siempre tuvo muy buena disposición para realizar todos los cambios que requerimos con el fin de que el video fuese perfecto!! 100% recomendados!",
    initial: "M",
  },
  {
    name: "Carolina Pérez",
    role: "Gerente de Comunicaciones",
    company: "BHP",
    text: "Trabajar con Grappi fue una experiencia excepcional. Su profesionalismo y creatividad superaron nuestras expectativas. El video corporativo que produjeron para nosotros ha sido fundamental en nuestra estrategia de comunicación interna y externa.",
    initial: "C",
  },
  {
    name: "Roberto Sánchez",
    role: "Director de Marketing",
    company: "CMPC",
    text: "La calidad del trabajo de Grappi es impresionante. Supieron capturar la esencia de nuestra empresa y transmitirla de manera efectiva. El proceso fue fluido y los resultados hablan por sí solos. Definitivamente los recomendamos.",
    initial: "R",
  },
];

// Services data
const services = [
  {
    title: "Videos Corporativos",
    description: "Producción de videos institucionales que transmiten la esencia de tu empresa, cultura organizacional y valores.",
    icon: "🎬",
  },
  {
    title: "Videos Animados 2D/3D",
    description: "Animaciones creativas que explican conceptos complejos de manera simple y atractiva para tu audiencia.",
    icon: "✨",
  },
  {
    title: "Publicidad Audiovisual",
    description: "Spots publicitarios y campañas audiovisuales para medios digitales, televisión y redes sociales.",
    icon: "📺",
  },
  {
    title: "Videos para Redes Sociales",
    description: "Contenido optimizado para cada plataforma, diseñado para maximizar el engagement y alcance.",
    icon: "📱",
  },
];

// Navigation links
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Videos Corporativos", href: "/videos-corporativos" },
  { name: "Videos Animados", href: "/videos-animados" },
  { name: "Videos", href: "/videos" },
  { name: "Clientes", href: "/clientes" },
  { name: "Contacto", href: "/contacto" },
];

// Video Modal Component
function VideoModal({ videoId, isOpen, onClose }: { videoId: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl mx-4 aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoId: string }>({ isOpen: false, videoId: "" });
  const [formData, setFormData] = useState({ nombre: "", apellido: "", email: "", empresa: "", mensaje: "" });
  const { toast } = useToast();

  const handleVideoClick = (videoId: string) => {
    setVideoModal({ isOpen: true, videoId });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ nombre: "", apellido: "", email: "", empresa: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Video Modal */}
      <VideoModal
        videoId={videoModal.videoId}
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoId: "" })}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <img
                src="/images/logo.avif"
                alt="Grappi Logo"
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="https://calendly.com/grappi/reunion" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Agenda hoy
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://calendly.com/grappi/reunion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Agenda hoy
                  </Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-home-new.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-slate-900/70 to-cyan-900/60" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Productora Audiovisual Líder en Chile
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Productora Audiovisual
                  </span>
                  <br />
                  <span className="text-white">en Santiago de Chile</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Creamos videos corporativos, videos animados 2D/3D y publicidad audiovisual para empresas en Santiago.
                  Desde el guion hasta la post producción, entregamos piezas audiovisuales listas para web, redes sociales y campañas digitales.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                  <a href="https://calendly.com/grappi/reunion" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg flex items-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                      Agenda tu reunión
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50" />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portafolio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  Nuestro Portafolio
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Mira algunos de nuestros proyectos más destacados. Cada video corporativo que producimos es diseñado para generar conexión, transmitir identidad y dejar huella en la audiencia.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioVideos.map((video, index) => (
                <AnimatedSection key={video.id} delay={index * 50}>
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg group cursor-pointer" onClick={() => handleVideoClick(video.id)}>
                    <img
                      src={`https://vumbnail.com/${video.id}.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </span>
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12" delay={200}>
              <a href="/videos">
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  Ver Galería Completa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: "url('/images/bg-nosotros-new.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/85 via-slate-900/80 to-cyan-900/75" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Productora Audiovisual Líder en Chile
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Nosotros
                  </span>
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <AnimatedSection delay={100}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                    <p className="text-white text-lg leading-relaxed">
                      Somos <span className="font-bold text-orange-400">Grappi Multimedia</span>, una productora audiovisual con más de 13 años de experiencia creando contenidos que transforman ideas en historias visuales memorables. Nacimos en Santiago de Chile con la convicción de que la comunicación corporativa podía ser mucho más que información: podía inspirar, emocionar y dejar huella.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                    <p className="text-white text-lg leading-relaxed">
                      Desde nuestros primeros proyectos, hemos acompañado a empresas líderes en sectores como <span className="text-cyan-300">minería, energía, salud, educación y tecnología</span>, entregando soluciones audiovisuales de alto impacto —desde videos institucionales y campañas digitales, hasta producciones animadas y formatos híbridos con inteligencia artificial.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={300}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-400/50 transition-all duration-300 group">
                    <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">13+</div>
                    <div className="text-sm text-gray-300">Años de experiencia</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-400/50 transition-all duration-300 group">
                    <Award className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-gray-300">Proyectos entregados</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-400/50 transition-all duration-300 group">
                    <Users className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">200+</div>
                    <div className="text-sm text-gray-300">Clientes satisfechos</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
              <AnimatedSection className="md:w-1/3 text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Confianza <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    que inspira
                  </span>
                </h2>
                <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6" />
                <p className="text-gray-400 text-lg leading-relaxed">
                  Más de 85 grandes empresas han elegido nuestra visión para potenciar su imagen. La excelencia es nuestro único estándar.
                </p>
              </AnimatedSection>

              <AnimatedSection className="md:w-2/3 w-full" delay={200}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-700" />
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-2xl transform transition-transform duration-500 hover:-translate-y-1">
                    <img
                      src="/images/banner-marcas.png"
                      alt="Nuestros Clientes Corporativos"
                      className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Lo que dicen nuestros clientes
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                La mejor carta de presentación son las experiencias de quienes ya confiaron en nosotros.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} delay={index * 100}>
                  <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                    <div className="relative z-10">
                      <Quote className="w-8 h-8 text-violet-200 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  Nuestros Servicios
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Soluciones audiovisuales completas para potenciar tu marca y conectar con tu audiencia.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Contáctanos
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente? Cuéntanos y hagamos realidad tu visión.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <AnimatedSection>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                          <Input
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            required
                            className="border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                          <Input
                            type="text"
                            placeholder="Tu apellido"
                            value={formData.apellido}
                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                            required
                            className="border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                        <Input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                        <Textarea
                          placeholder="Cuéntanos sobre tu proyecto..."
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          required
                          rows={4}
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/25"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </div>
                </AnimatedSection>

                {/* Contact Info */}
                <AnimatedSection delay={200}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Dirección</p>
                            <p className="text-gray-600">Badajoz 100, Oficina 1014, Vitacura, Santiago, Chile</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Teléfono</p>
                            <p className="text-gray-600">+56 9 51011962</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">contacto@grappi.cl</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Síguenos</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://www.instagram.com/grappi.cl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/grappi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.facebook.com/grappifilms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-violet-50 to-cyan-50 p-6 rounded-2xl border border-violet-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sábado y Domingo: Cerrado</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logo.avif" alt="Grappi Logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400 text-sm">
                Productora audiovisual líder en Santiago, Chile. Especialistas en videos corporativos, animación y publicidad audiovisual.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="/videos-corporativos" className="text-gray-400 hover:text-white transition-colors text-sm">Videos Corporativos</a></li>
                <li><a href="/videos-animados" className="text-gray-400 hover:text-white transition-colors text-sm">Videos Animados</a></li>
                <li><a href="/videos" className="text-gray-400 hover:text-white transition-colors text-sm">Portafolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#nosotros" className="text-gray-400 hover:text-white transition-colors text-sm">Nosotros</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a></li>
                <li><a href="/clientes" className="text-gray-400 hover:text-white transition-colors text-sm">Clientes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">+56 9 51011962</li>
                <li className="text-gray-400 text-sm">contacto@grappi.cl</li>
                <li className="text-gray-400 text-sm">Vitacura, Santiago, Chile</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grappi Multimedia. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/grappi.cl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/grappi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/grappifilms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
