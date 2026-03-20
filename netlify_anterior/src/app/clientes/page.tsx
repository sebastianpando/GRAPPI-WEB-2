"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  Clock, 
  Award, 
  Users, 
  Quote, 
  Star,
  Building2,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation links
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Videos Corporativos", href: "/videos-corporativos" },
  { name: "Videos Animados", href: "/videos-animados" },
  { name: "Videos", href: "/videos" },
  { name: "Clientes", href: "/clientes" },
  { name: "Contacto", href: "/contacto" },
];

// Testimonials data - 6 testimonials for the clientes page
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
  {
    name: "Andrea Muñoz",
    role: "Directora de Comunicaciones",
    company: "Banco de Chile",
    text: "El equipo de Grappi demostró un nivel de profesionalismo que rara vez encontramos. Su capacidad para entender nuestras necesidades financieras y traducirlas en contenido visual impactante fue extraordinaria. Los videos que produjeron han elevado significativamente nuestra imagen corporativa.",
    initial: "A",
  },
  {
    name: "Felipe Contreras",
    role: "Gerente de Marketing Digital",
    company: "Falabella",
    text: "Hemos trabajado con Grappi en múltiples proyectos de retail y siempre han superado nuestras expectativas. Su entendimiento del sector retail y la capacidad de crear contenido que conecta con nuestros clientes es notable. La calidad de producción y los tiempos de entrega son impecables.",
    initial: "F",
  },
  {
    name: "Patricia Herrera",
    role: "Subgerente de Responsabilidad Social",
    company: "Colbún",
    text: "Grappi transformó nuestra visión de sostenibilidad en una pieza audiovisual conmovedora y profesional. Su sensibilidad para abordar temas medioambientales y su creatividad visual nos permitieron comunicar efectivamente nuestro compromiso con las comunidades y el medio ambiente.",
    initial: "P",
  },
];

// Industries data
const industries = [
  {
    name: "Minería",
    icon: "⛏️",
    description: "Videos de seguridad, capacitación y comunicación corporativa para la industria minera.",
  },
  {
    name: "Energía",
    icon: "⚡",
    description: "Contenido audiovisual para empresas eléctricas, renovables y del sector energético.",
  },
  {
    name: "Salud",
    icon: "🏥",
    description: "Videos institucionales, de capacitación y comunicación para el sector salud.",
  },
  {
    name: "Educación",
    icon: "🎓",
    description: "Material audiovisual para universidades, colegios y centros de formación.",
  },
  {
    name: "Tecnología",
    icon: "💻",
    description: "Videos para startups, empresas tech y lanzamientos de productos digitales.",
  },
  {
    name: "Retail",
    icon: "🛒",
    description: "Contenido publicitario y corporativo para el sector retail y comercio.",
  },
];

// Stats data
const stats = [
  {
    value: "13+",
    label: "Años de experiencia",
    icon: Clock,
    color: "from-orange-500 to-amber-500",
  },
  {
    value: "500+",
    label: "Proyectos entregados",
    icon: Award,
    color: "from-violet-500 to-purple-500",
  },
  {
    value: "200+",
    label: "Clientes satisfechos",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
  },
  {
    value: "85+",
    label: "Empresas",
    icon: Building2,
    color: "from-green-500 to-emerald-500",
  },
];

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

// Counter Animation Component
function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericPart = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = numericPart / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start) + suffix);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericPart, suffix, value]);

  return <>{displayValue}</>;
}

export default function ClientesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900/50 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  +85 Empresas Confían en Nosotros
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Nuestros Clientes
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Más de 85 empresas líderes han confiado en nosotros para contar sus historias. 
                  Conoce a algunos de nuestros clientes y lo que dicen sobre nuestro trabajo.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Client Banner Section */}
        <section className="py-20 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Empresas que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  confían en nosotros
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Marcas líderes de Chile y Latinoamérica han elegido Grappi para sus proyectos audiovisuales.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-700" />
                <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-6 shadow-2xl transform transition-transform duration-500 hover:-translate-y-1">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} delay={index * 100}>
                  <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                    <div className="relative z-10 flex flex-col flex-1">
                      <Quote className="w-8 h-8 text-violet-200 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
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

        {/* Stats Section */}
        <section ref={statsRef} className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  Empresas que confían en nosotros
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Números que respaldan nuestra trayectoria y compromiso con la excelencia.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <AnimatedCounter value={stat.value} isVisible={statsVisible} />
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Industrias que atendemos
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experiencia diversa en múltiples sectores, adaptando nuestras soluciones a cada necesidad.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <AnimatedSection key={industry.name} delay={index * 100}>
                  <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                    <div className="relative z-10">
                      <div className="text-5xl mb-4">{industry.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-violet-900 via-slate-900 to-cyan-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Target className="w-4 h-4 text-orange-400" />
                ¿Listo para comenzar?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Únete a nuestras{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  empresas clientes
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Más de 85 empresas ya confían en Grappi para contar sus historias. 
                Agenda una reunión gratuita y descubre cómo podemos ayudarte a destacar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/grappi/reunion" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg flex items-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Agenda tu reunión gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="/#contacto">
                  <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                    <Mail className="w-5 h-5 mr-2" />
                    Contáctanos
                  </Button>
                </a>
              </div>
            </AnimatedSection>
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
