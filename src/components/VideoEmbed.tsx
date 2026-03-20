import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoEmbedProps {
  vimeoId: string
  title?: string
  className?: string
  onPlay?: () => void
}

export function VideoEmbed({ vimeoId, title = 'Video Grappi Multimedia', className = '', onPlay }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  const thumbnailSrc = `https://vumbnail.com/${vimeoId}.jpg`

  if (playing) {
    return (
      <div className={`relative aspect-video rounded-xl overflow-hidden bg-black ${className}`}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className={`relative aspect-video rounded-xl overflow-hidden bg-black/50 group cursor-pointer ${className}`}>
      {!hasError ? (
        <img
          src={thumbnailSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      <button
        onClick={() => onPlay ? onPlay() : setPlaying(true)}
        aria-label={`Reproducir ${title}`}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Play
          size={52}
          className="text-white transition-all duration-200 group-hover:scale-110"
          fill="white"
          style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.6))' }}
        />
      </button>
    </div>
  )
}

interface VideoModalProps {
  vimeoId: string | null
  title?: string
  onClose: () => void
}

export function VideoModal({ vimeoId, title = 'Video', onClose }: VideoModalProps) {
  if (!vimeoId) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-10 right-0 text-white/80 hover:text-white p-2 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
