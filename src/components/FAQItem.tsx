import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  dark?: boolean
}

export default function FAQItem({ question, answer, dark = false }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
      dark
        ? 'border-white/10 bg-white/5 hover:bg-white/8'
        : 'border-gray-200 bg-white hover:shadow-sm'
    }`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm sm:text-base pr-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          } ${dark ? 'text-orange-400' : 'text-orange-500'}`}
        />
      </button>
      {open && (
        <div className={`px-6 pb-4 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-gray-600'}`}>
          {answer}
        </div>
      )}
    </div>
  )
}
