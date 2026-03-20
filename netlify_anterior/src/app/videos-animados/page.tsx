"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Menu, 
  X, 
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  ChevronDown,
  Zap,
  Target,
  TrendingUp,
  Palette,
  Film,
  Layers,
  PenTool,
  Monitor,
  Lightbulb,
  FileText,
  Clapperboard,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Animated videos portfolio data
const animatedVideos = [
  { id: "824753809", title: "Video Animado 2D" },
  { id: "385247961", title: "Video Animado 2D" },
  { id: "552966291", title: "Motion Graphics" },
  { id: "1046006549", title: "Animación Corporativa" },
  { id: "1045407071", title: "Video Explicativo" },
  { id: "775903603", title: "Animación 3D" },
];

// Types of animated videos
const videoTypes = [
  {
    title: "Video Explicativo Animado",
    description: "Simplifica conceptos complejos con animaciones claras y atractivas que conectan con tu audiencia y comunican tu mensaje de forma efectiva.",
    icon: Lightbulb,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Video de Producto Animado",
    description: "Muestra las características y beneficios de tu producto de manera dinámica y visualmente impactante, destacando cada detalle.",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Motion Graphics",
    description: "Gráficos en movimiento que dan vida a tu marca con diseños modernos y animaciones fluidas que capturan la atención.",
    icon: Layers,
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Animación 3D",
    description: "Creaciones tridimensionales realistas que impresionan y muestran productos, espacios o conceptos con máximo realismo.",
    icon: Film,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Whiteboard Animation",
    description: "Videos de pizarra blanca que explican procesos y conceptos de forma didáctica, perfectos para capacitaciones y tutoriales.",
    icon: PenTool,
    description: "Videos de pizarra blanca que explican procesos y conceptos de forma didáctica, perfectos para capacitaciones y tutoriales.",
    icon: PenTool,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Video Corporativo Animado",
    description: "Presenta la cultura, valores y propuestas de tu empresa con animaciones profesionales que transmiten confianza.",
    icon: Clapperboard,
    color: "from-indigo-500 to-violet-600",
  },
];

// Animation process steps
const processSteps = [
  {
    step: 1,
    title: "Descubrimiento",
    description: "Entendemos tu marca, objetivos y audiencia para crear una estrategia de comunicación visual efectiva.",
    icon: Lightbulb,
  },
  {
    step: 2,
    title: "Guion y Storyboard",
    description: "Desarrollamos la narrativa y visualizamos cada escena para asegurar una historia coherente y atractiva.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Diseño y Estilo",
    description: "Creamos los personajes, escenarios y elementos visuales que representan tu marca de forma única.",
    icon: Palette,
  },
  {
    step: 4,
    title: "Animación",
    description: "Damos vida a cada elemento con movimientos fluidos y expresivos que conectan emocionalmente.",
    icon: Zap,
  },
  {
    step: 5,
    title: "Voz y Sonido",
    description: "Añadimos locución profesional, efectos de sonido y música que potencian el mensaje.",
    icon: Clapperboard,
  },
  {
    step: 6,
    title: "Entrega Final",
    description: "Revisamos y optimizamos el video para cada plataforma, listo para impactar a tu audiencia.",
    icon: CheckCircle,
  },
];

// Benefits of animated videos
const benefits = [
  {
    title: "Mayor Retención",
    description: "Los videos animados capturan la atención y se recuerdan hasta 70% más que el contenido estático.",
    icon: Target,
    stat: "70%",
  },
  {
    title: "Mayor Conversión",
    description: "Incrementa las conversiones en tu landing page hasta un 80% con videos explicativos animados.",
    icon: TrendingUp,
    stat: "80%",
  },
  {
    title: "Comunicación Efectiva",
    description: "Explica productos complejos en menos de 2 minutos de forma clara y entretenida.",
    icon: Zap,
    stat: "2 min",
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

export default function VideosAnimadosPage() {
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
        <section className="relative py-12 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-animated-new.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-slate-900/70 to-cyan-900/60" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Especialistas en Animación 2D y 3D
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Videos Animados
                  </span>
                  <br />
                  <span className="text-white">2D/3D</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Transformamos tus ideas en animaciones memorables. Videos explicativos, motion graphics y animaciones 3D que conectan con tu audiencia y potencian tu marca.
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

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  ¿Por qué elegir videos animados?
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                La animación es una herramienta poderosa para comunicar, educar y vender. Descubre los beneficios.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={index * 100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 text-center h-full">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2">
                      {benefit.stat}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Tipos de Videos Animados
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ofrecemos una amplia variedad de estilos de animación para satisfacer las necesidades de cada proyecto.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTypes.map((type, index) => (
                <AnimatedSection key={type.title} delay={index * 100}>
                  <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <type.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  Nuestro Proceso de Animación
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un proceso estructurado que garantiza resultados excepcionales en cada proyecto.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 h-full relative">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20">
                      {step.step}
                    </div>
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Portafolio de Animaciones
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre algunos de nuestros proyectos de animación más destacados.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {animatedVideos.map((video, index) => (
                <AnimatedSection key={video.id} delay={index * 100}>
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
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold text-sm">{video.title}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ¿Listo para dar vida a tus ideas?
                </h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Agenda una reunión con nuestro equipo de animación y descubre cómo podemos transformar tu visión en contenido visual impactante.
                </p>
                <a href="https://calendly.com/grappi/reunion" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Agenda tu reunión gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </AnimatedSection>
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
                    Solicita tu Video Animado
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.
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
                          placeholder="Cuéntanos sobre tu proyecto de animación..."
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
                <li><a href="/#nosotros" className="text-gray-400 hover:text-white transition-colors text-sm">Nosotros</a></li>
                <li><a href="/#contacto" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a></li>
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
