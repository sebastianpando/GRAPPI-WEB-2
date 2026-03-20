import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Videos Corporativos', href: '/videos-corporativos' },
  { label: 'Videos Animados', href: '/videos-animados' },
  { label: 'Videos', href: '/videos' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [location] = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/logograppipagina.avif"
              alt="Grappi Logo"
              className="h-8 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location === link.href
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://tidycal.com/grappi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
          >
            <Zap size={14} />
            Agenda hoy
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location === link.href
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://tidycal.com/grappi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-3 rounded-full transition-all duration-200 justify-center"
              >
                <Zap size={14} />
                Agenda hoy
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
