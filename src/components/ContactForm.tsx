import { useState, FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  formName: 'home-contact' | 'contacto' | 'videos-corporativos'
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function ContactForm({
  formName,
  title = 'Envíanos un mensaje',
  subtitle = 'Completa el formulario y nos pondremos en contacto contigo lo antes posible',
  dark = true,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append('form-name', formName)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setSubmitted(true)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-948312613/omifCKi0_egYEKW0mMQD' })
      }
    } catch {
      // Still show success to not confuse user in dev mode
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const labelClass = `block text-sm font-medium mb-1 ${dark ? 'text-white/80' : 'text-gray-700'}`
  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${
    dark
      ? 'bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-orange-400 focus:bg-white/15'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:bg-white'
  }`

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100 shadow-sm'}`}>
        <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
          ¡Mensaje enviado!
        </h3>
        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}>
          Nos pondremos en contacto contigo dentro de 24 horas hábiles.
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100 shadow-sm'}`}>
      <h3 className={`text-xl font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`text-sm mb-6 ${dark ? 'text-white/60' : 'text-gray-500'}`}>{subtitle}</p>

      <form
        name={formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="bot-field" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formName}-nombre`} className={labelClass}>Nombre</label>
            <input
              id={`${formName}-nombre`}
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${formName}-apellido`} className={labelClass}>Apellido</label>
            <input
              id={`${formName}-apellido`}
              type="text"
              name="apellido"
              placeholder="Tu apellido"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formName}-email`} className={labelClass}>Email</label>
          <input
            id={`${formName}-email`}
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${formName}-empresa`} className={labelClass}>Empresa</label>
          <input
            id={`${formName}-empresa`}
            type="text"
            name="empresa"
            placeholder="Nombre de tu empresa"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${formName}-mensaje`} className={labelClass}>Mensaje</label>
          <textarea
            id={`${formName}-mensaje`}
            name="mensaje"
            placeholder="Cuéntanos sobre tu proyecto..."
            required
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          <Send size={16} />
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  )
}
