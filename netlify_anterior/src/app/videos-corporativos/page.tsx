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
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  ChevronDown,
  Video,
  Package,
  MessageSquare,
  GraduationCap,
  Calendar,
  UserPlus,
  Target,
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  PenTool,
  Film,
  FileEdit,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Navigation links
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Videos Corporativos", href: "/videos-corporativos" },
  { name: "Videos Animados", href: "/videos-animados" },
  { name: "Videos", href: "/videos" },
  { name: "Clientes", href: "/clientes" },
  { name: "Contacto", href: "/contacto" },
];

// Why your company needs corporate videos data
const whyCorporateVideos = [
  {
    icon: TrendingUp,
    title: "Aumenta tu visibilidad",
    description: "Los videos corporativos mejoran significativamente el reconocimiento de marca y aumentan el engagement en hasta un 80% en comparación con contenido estático.",
  },
  {
    icon: Target,
    title: "Comunica con claridad",
    description: "Transmite los valores, misión y cultura de tu empresa de manera efectiva, conectando emocionalmente con tu audiencia objetivo.",
  },
  {
    icon: HeartHandshake,
    title: "Genera confianza",
    description: "El contenido audiovisual profesional proyecta credibilidad y seriedad, fortaleciendo la relación con clientes y socios comerciales.",
  },
];

// Types of corporate videos
const videoTypes = [
  {
    icon: Video,
    title: "Video Corporativo",
    description: "Piezas audiovisuales que presentan la identidad, valores y cultura de tu empresa. Ideales para páginas web, presentaciones y ferias comerciales.",
    features: ["Storytelling corporativo", "Entrevistas a directivos", "Recorridos por instalaciones"],
  },
  {
    icon: Package,
    title: "Video de Productos",
    description: "Muestras detalladas de tus productos o servicios en acción. Perfectos para e-commerce, catálogos digitales y campañas de lanzamiento.",
    features: ["Demostraciones de uso", "Beneficios destacados", "Testimonios de usuarios"],
  },
  {
    icon: MessageSquare,
    title: "Video Testimonial",
    description: "Experiencias reales de clientes satisfechos que refuerzan la credibilidad de tu marca y generan confianza en potenciales compradores.",
    features: ["Casos de éxito", "Historias auténticas", "Resultados medibles"],
  },
  {
    icon: GraduationCap,
    title: "Video de Capacitación",
    description: "Contenido educativo y formativo para empleados, clientes o partners. Optimiza procesos de inducción y entrenamiento corporativo.",
    features: ["Módulos de formación", "Manuales audiovisuales", "Certificaciones internas"],
  },
  {
    icon: Calendar,
    title: "Video de Eventos",
    description: "Cobertura profesional de conferencias, seminarios, lanzamientos y actividades corporativas. Documenta momentos importantes de tu empresa.",
    features: ["Resúmenes ejecutivos", "Highlights de eventos", "Transmisiones en vivo"],
  },
  {
    icon: UserPlus,
    title: "Video de Reclutamiento",
    description: "Atrae talento mostrando el ambiente laboral, beneficios y oportunidades de crecimiento. Difunde tu cultura organizacional a candidatos potenciales.",
    features: ["Día a día en la empresa", "Testimonios de colaboradores", "Beneficios y valores"],
  },
];

// Methodology steps
const methodologySteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Analizamos tus objetivos, público objetivo y mensaje clave. Definimos juntos la estrategia audiovisual más efectiva.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Guion y Planificación",
    description: "Desarrollamos el guion creativo, storyboard y cronograma de producción. Cada detalle queda documentado antes de grabar.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Producción",
    description: "Nuestro equipo profesional captura las imágenes con equipamiento de alta calidad. Dirigimos cada escena con precisión.",
    icon: Film,
  },
  {
    number: "04",
    title: "Post-producción",
    description: "Editamos, corregimos color, añadimos música y efectos. Iteramos contigo hasta lograr el resultado perfecto.",
    icon: FileEdit,
  },
  {
    number: "05",
    title: "Entrega",
    description: "Entregamos tu video en los formatos optimizados para cada plataforma. Listo para web, redes sociales y presentaciones.",
    icon: CheckCircle,
  },
];

// FAQ data
const faqData = [
  {
    question: "¿Cuánto tiempo toma producir un video corporativo?",
    answer: "El tiempo de producción varía según la complejidad del proyecto. Un video corporativo típico toma entre 3 a 6 semanas, incluyendo pre-producción, grabación y post-producción. Proyectos más simples pueden completarse en 2 semanas, mientras que producciones más elaboradas pueden requerir hasta 8 semanas.",
  },
  {
    question: "¿Qué incluye el servicio de producción de video?",
    answer: "Nuestro servicio completo incluye: reunión de briefing, desarrollo de guion creativo, storyboard, grabación con equipo profesional (cámaras 4K, iluminación, audio), edición, corrección de color, música licenciada, motion graphics básicos, y entrega en múltiples formatos optimizados para diferentes plataformas.",
  },
  {
    question: "¿Pueden grabar en nuestras oficinas o instalaciones?",
    answer: "Absolutamente. Nos adaptamos a tus necesidades. Podemos grabar en tus oficinas, plantas, instalaciones industriales, o cualquier ubicación que sea relevante para tu mensaje. Contamos con equipo portátil profesional y experiencia en diversos entornos corporativos.",
  },
  {
    question: "¿Qué duración debe tener un video corporativo?",
    answer: "La duración ideal depende del objetivo y plataforma. Para web: 2-3 minutos. Para redes sociales: 30-90 segundos. Para presentaciones: 3-5 minutos. Para capacitaciones: puede ser más extenso con capítulos. Te asesoramos sobre la duración óptima según tus objetivos.",
  },
  {
    question: "¿Ofrecen servicios de locución y doblaje?",
    answer: "Sí, contamos con una red de locutores profesionales en español (neutro, chileno, y otros acentos), inglés y portugués. También ofrecemos servicios de subtitulado para versiones en múltiples idiomas.",
  },
  {
    question: "¿Cómo es el proceso de revisión y aprobación?",
    answer: "Incluimos hasta 3 rondas de revisiones en nuestro proceso. Te presentamos avances en etapas clave: guion, edición inicial, y versión final. Tus comentarios se integran en cada etapa para asegurar que el resultado final cumpla tus expectativas.",
  },
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

export default function VideosCorporativos() {
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
        <section className="relative py-12 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-corporate-new.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-slate-900/70 to-cyan-900/60" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Video className="w-4 h-4 text-orange-400" />
                  Producción de Videos Corporativos
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Videos Corporativos
                  </span>
                  <br />
                  <span className="text-white">en Santiago</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Potencia tu marca con videos corporativos profesionales que conectan con tu audiencia. 
                  Más de 13 años creando contenido audiovisual de alto impacto para empresas en Chile.
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

        {/* Why Corporate Videos Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  ¿Por qué tu empresa necesita Videos Corporativos?
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                El contenido audiovisual es la herramienta más poderosa para comunicar la esencia de tu marca.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyCorporateVideos.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Corporate Videos Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Tipos de Videos Corporativos que producimos
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluciones audiovisuales adaptadas a cada necesidad de comunicación empresarial.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTypes.map((video, index) => (
                <AnimatedSection key={video.title} delay={index * 100}>
                  <div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <video.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {video.description}
                      </p>
                      <ul className="space-y-2">
                        {video.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  Nuestra metodología
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un proceso estructurado que garantiza resultados excepcionales en cada proyecto.
              </p>
            </AnimatedSection>

            {/* Desktop Timeline - Horizontal */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 rounded-full" />
                
                <div className="grid grid-cols-5 gap-4">
                  {methodologySteps.map((step, index) => (
                    <AnimatedSection key={step.number} delay={index * 100}>
                      <div className="relative flex flex-col items-center">
                        {/* Circle */}
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-6 relative z-10 shadow-lg shadow-orange-500/30">
                          {step.number}
                        </div>
                        
                        {/* Content */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                          <step.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile - Vertical Cards */}
            <div className="lg:hidden space-y-6">
              {methodologySteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 100}>
                  <div className="relative flex gap-4">
                    {/* Left side - Number and line */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/30">
                        {step.number}
                      </div>
                      {index < methodologySteps.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent mt-2" />
                      )}
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-orange-400" />
                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg-nosotros-new.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-slate-900/85 to-cyan-900/80" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Comienza tu proyecto hoy
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ¿Listo para transformar tu comunicación corporativa?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                  Agenda una reunión con nuestro equipo y descubre cómo podemos crear juntos 
                  un video corporativo que impulse los objetivos de tu empresa.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/grappi/reunion" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg flex items-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                      Agenda tu reunión gratuita
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="#contacto">
                    <Button variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                      Solicitar cotización
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Preguntas Frecuentes
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestra producción de videos corporativos.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection delay={100}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-violet-600 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Contáctanos
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente? Cuéntanos y hagamos realidad tu visión.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <AnimatedSection>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                          <Input
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Apellido</label>
                          <Input
                            type="text"
                            placeholder="Tu apellido"
                            value={formData.apellido}
                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                        <Input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                        <Textarea
                          placeholder="Cuéntanos sobre tu proyecto..."
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          required
                          rows={4}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-violet-500 resize-none"
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
                      <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Dirección</p>
                            <p className="text-gray-400">Badajoz 100, Oficina 1014, Vitacura, Santiago, Chile</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Teléfono</p>
                            <p className="text-gray-400">+56 9 51011962</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-gray-400">contacto@grappi.cl</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
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

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-white mb-2">Horario de Atención</h3>
                      <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-400">Sábado y Domingo: Cerrado</p>
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
