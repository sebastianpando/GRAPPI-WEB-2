"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Video gallery data with categories
const allVideos = [
  { id: "1046006549", title: "Video Corporativo", category: "corporativo" },
  { id: "1045407071", title: "Video Corporativo", category: "corporativo" },
  { id: "775903603", title: "Video Corporativo", category: "corporativo" },
  { id: "824753809", title: "Video Animado", category: "animado" },
  { id: "1125341771", title: "Video Corporativo", category: "corporativo" },
  { id: "1128948124", title: "Video Corporativo", category: "corporativo" },
  { id: "1108898718", title: "Video Corporativo", category: "corporativo" },
  { id: "385247961", title: "Video Animado", category: "animado" },
  { id: "827258728", title: "Video Corporativo", category: "corporativo" },
  { id: "1129595144", title: "Video Corporativo", category: "corporativo" },
  { id: "830575842", title: "Video Corporativo", category: "corporativo" },
  { id: "552966291", title: "Video Animado", category: "animado" },
  // Additional videos
  { id: "1046006549", title: "Video Corporativo Destacado", category: "corporativo" },
  { id: "824753809", title: "Video Animado Destacado", category: "animado" },
  { id: "775903603", title: "Publicidad Corporativa", category: "publicidad" },
  { id: "552966291", title: "Animación Promocional", category: "publicidad" },
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

// Filter categories
const categories = [
  { id: "todos", label: "Todos" },
  { id: "corporativo", label: "Videos Corporativos" },
  { id: "animado", label: "Videos Animados" },
  { id: "publicidad", label: "Publicidad" },
];

// Video Modal Component
function VideoModal({
  videoId,
  isOpen,
  onClose,
}: {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
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
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function VideosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoId: string;
  }>({ isOpen: false, videoId: "" });
  const [activeFilter, setActiveFilter] = useState("todos");

  const handleVideoClick = (videoId: string) => {
    setVideoModal({ isOpen: true, videoId });
  };

  const filteredVideos =
    activeFilter === "todos"
      ? allVideos
      : allVideos.filter((video) => video.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
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
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
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
              <a
                href="https://calendly.com/grappi/reunion"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900/30 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Explora Nuestro Trabajo
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Nuestra Galería
                  </span>
                  <br />
                  <span className="text-white">de Videos</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Descubre nuestra colección completa de videos corporativos, animaciones y publicidad audiovisual. 
                  Cada proyecto es una historia única que cuenta la esencia de nuestros clientes.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-slate-900/80 backdrop-blur-sm sticky top-[73px] z-40 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video, index) => (
                <AnimatedSection key={`${video.id}-${index}`} delay={index * 50}>
                  <div
                    className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg group cursor-pointer"
                    onClick={() => handleVideoClick(video.id)}
                  >
                    <img
                      src={`https://vumbnail.com/${video.id}.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </span>
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium truncate">
                        {video.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 capitalize">
                        {video.category === "corporativo" && "Video Corporativo"}
                        {video.category === "animado" && "Video Animado"}
                        {video.category === "publicidad" && "Publicidad"}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  No hay videos en esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  ¿Tienes un proyecto en mente?
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Creamos videos que
                  </span>
                  <br />
                  <span className="text-white">conectan con tu audiencia</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Cada proyecto es una oportunidad para crear algo único. Cuéntanos tu visión y hagámosla realidad juntos.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/grappi/reunion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg flex items-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                      Agenda tu reunión
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="/contacto">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                    >
                      Contáctanos
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/images/logo.avif"
                alt="Grappi Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Productora audiovisual líder en Santiago, Chile. Especialistas en
                videos corporativos, animación y publicidad audiovisual.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/videos-corporativos"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Videos Corporativos
                  </a>
                </li>
                <li>
                  <a
                    href="/videos-animados"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Videos Animados
                  </a>
                </li>
                <li>
                  <a
                    href="/videos"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Portafolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#nosotros"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/#contacto"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="/clientes"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Clientes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">+56 9 51011962</li>
                <li className="text-gray-400 text-sm">contacto@grappi.cl</li>
                <li className="text-gray-400 text-sm">
                  Vitacura, Santiago, Chile
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grappi Multimedia. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/grappi.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/grappi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/grappifilms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
