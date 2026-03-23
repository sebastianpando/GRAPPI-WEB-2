import { Link } from 'wouter'
import { Mail, MapPin } from 'lucide-react'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              <span className="text-orange-500">Grappi</span> Multimedia
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Productora audiovisual en Santiago especializada en videos corporativos, animación 2D/3D (motion graphics) y publicidad audiovisual para empresas.
            </p>
            <a
              href="https://tidycal.com/grappi/reunion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-200"
            >
              Hablemos de tu proyecto →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Badajoz 100, Oficina 1014</p>
                  <p>Vitacura, Santiago, Chile</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@grappi.cl"
                  className="hover:text-white transition-colors duration-200"
                >
                  contacto@grappi.cl
                </a>
              </div>
            </div>
          </div>

          {/* Social + Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="mb-4">
              <SocialLinks variant="strong" />
            </div>
            <p className="text-white/50 text-xs mb-4">
              Síguenos para ver nuestros últimos proyectos y behind the scenes.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Grappi Multimedia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
