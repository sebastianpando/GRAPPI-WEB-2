import { Instagram, Facebook, Linkedin } from 'lucide-react'

const LINKS = [
  { href: 'https://www.instagram.com/grappifilming/', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/grappifilms', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.linkedin.com/company/grappi/', label: 'LinkedIn', Icon: Linkedin },
]

interface SocialLinksProps {
  /** 'strong' = naranja sólido al hover (Footer); 'subtle' = naranja translúcido (Contacto) */
  variant?: 'strong' | 'subtle'
}

export default function SocialLinks({ variant = 'strong' }: SocialLinksProps) {
  const hoverBg = variant === 'strong' ? 'hover:bg-orange-500' : 'hover:bg-orange-500/20'
  const iconColor = variant === 'strong' ? 'text-white' : 'text-white/70'

  return (
    <div className="flex items-center gap-3">
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-9 h-9 rounded-full bg-white/10 ${hoverBg} flex items-center justify-center transition-all duration-200`}
        >
          <Icon size={16} className={iconColor} />
        </a>
      ))}
    </div>
  )
}
