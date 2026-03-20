"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  Clock,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Video,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Navigation links
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Videos Corporativos", href: "/videos-corporativos" },
  { name: "Videos Animados", href: "/videos-animados" },
  { name: "Videos", href: "/videos" },
  { name: "Clientes", href: "/clientes" },
  { name: "Contacto", href: "/contacto" },
];

// FAQ data
const faqs = [
  {
    question: "¿Cuánto cuesta un video corporativo?",
    answer:
      "El costo varía según la complejidad, duración y requerimientos del proyecto. Ofrecemos presupuestos personalizados sin compromiso. Contáctanos para una cotización detallada adaptada a tus necesidades.",
  },
  {
    question: "¿Cuál es el tiempo de entrega de un proyecto?",
    answer:
      "El tiempo de entrega depende del tipo de proyecto. Un video corporativo típico toma entre 3-6 semanas, mientras que animaciones pueden requerir 4-8 semanas. Siempre definimos plazos claros al inicio del proyecto.",
  },
  {
    question: "¿Ofrecen servicios de grabación en todo Chile?",
    answer:
      "Sí, realizamos grabaciones en todo Chile y también en el extranjero cuando el proyecto lo requiere. Contamos con equipo profesional y logística para desplazarnos según las necesidades del cliente.",
  },
  {
    question: "¿Qué incluye el proceso de producción?",
    answer:
      "Nuestro proceso incluye: briefing inicial, desarrollo de guion, storyboard, pre-producción, grabación/animación, edición, revisión con el cliente y entrega final en los formatos requeridos.",
  },
  {
    question: "¿Pueden trabajar con material que ya tenemos?",
    answer:
      "Absolutamente. Podemos integrar material existente de tu empresa, fotografías, videos institucionales o cualquier recurso audiovisual que desees incorporar en tu nuevo proyecto.",
  },
  {
    question: "¿Qué formatos de entrega ofrecen?",
    answer:
      "Entregamos en todos los formatos necesarios: MP4, MOV, formatos optimizados para redes sociales (Instagram, Facebook, LinkedIn, YouTube), y formatos broadcast para televisión.",
  },
];

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

// FAQ Item Component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-violet-300 transition-colors">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-violet-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description:
        "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      empresa: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-violet-900 via-slate-900 to-cyan-900">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <MessageCircle className="w-4 h-4 text-orange-400" />
                  Estamos aquí para ayudarte
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                    Contáctanos
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente? Cuéntanos tus ideas y hagamos
                  realidad tu visión juntos.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <AnimatedSection>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Envíanos un mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre *
                          </label>
                          <Input
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={(e) =>
                              setFormData({ ...formData, nombre: e.target.value })
                            }
                            required
                            className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Apellido *
                          </label>
                          <Input
                            type="text"
                            placeholder="Tu apellido"
                            value={formData.apellido}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                apellido: e.target.value,
                              })
                            }
                            required
                            className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <Input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={(e) =>
                            setFormData({ ...formData, empresa: e.target.value })
                          }
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <Input
                          type="tel"
                          placeholder="+56 9 1234 5678"
                          value={formData.telefono}
                          onChange={(e) =>
                            setFormData({ ...formData, telefono: e.target.value })
                          }
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          placeholder="Cuéntanos sobre tu proyecto..."
                          value={formData.mensaje}
                          onChange={(e) =>
                            setFormData({ ...formData, mensaje: e.target.value })
                          }
                          required
                          rows={5}
                          className="border-gray-200 focus:border-violet-500 focus:ring-violet-500 resize-none rounded-lg"
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
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Información de Contacto
                      </h2>
                      <div className="space-y-5">
                        <div className="flex items-start gap-4 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              Dirección
                            </p>
                            <p className="text-gray-600">
                              Badajoz 100, Oficina 1014, Vitacura, Santiago,
                              Chile
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              Teléfono
                            </p>
                            <a
                              href="tel:+56951011962"
                              className="text-gray-600 hover:text-violet-600 transition-colors"
                            >
                              +56 9 51011962
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <a
                              href="mailto:contacto@grappi.cl"
                              className="text-gray-600 hover:text-violet-600 transition-colors"
                            >
                              contacto@grappi.cl
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Síguenos
                      </h3>
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

                    {/* Business Hours */}
                    <div className="bg-gradient-to-br from-violet-50 to-cyan-50 p-6 rounded-2xl border border-violet-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-violet-600" />
                        <h3 className="text-lg font-bold text-gray-900">
                          Horario de Atención
                        </h3>
                      </div>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sábado y Domingo: Cerrado</p>
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-64">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5476!2d-70.6134!3d-33.4032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5b7e2b1b1d%3A0x8b5b5b5b5b5b5b5b!2sBadajoz%20100%2C%20Vitacura%2C%20Santiago%2C%20Chile!5e0!3m2!1sen!2scl!4v1620000000000!5m2!1sen!2scl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4 text-orange-400" />
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  ¿Tienes dudas?
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Encuentra respuestas a las preguntas más comunes sobre nuestros
                servicios de producción audiovisual.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection className="text-center mt-12" delay={200}>
              <p className="text-gray-400 mb-6">
                ¿No encuentras lo que buscas? Escríbenos directamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contacto@grappi.cl">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25">
                    <Mail className="w-5 h-5 mr-2" />
                    contacto@grappi.cl
                  </Button>
                </a>
                <a
                  href="https://calendly.com/grappi/reunion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-white/10 py-6 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Agendar una reunión
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Quick Links */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Descubre cómo podemos ayudarte a comunicar tu mensaje de manera
                efectiva.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <AnimatedSection delay={0}>
                <a
                  href="/videos-corporativos"
                  className="block p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-violet-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Videos Corporativos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Producción profesional para empresas e instituciones.
                  </p>
                </a>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <a
                  href="/videos-animados"
                  className="block p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Videos Animados
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Animaciones 2D/3D creativas y atractivas.
                  </p>
                </a>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <a
                  href="/videos"
                  className="block p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Portafolio
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mira nuestros proyectos más destacados.
                  </p>
                </a>
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
                    href="/contacto"
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
