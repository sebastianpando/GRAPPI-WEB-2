import { useEffect } from 'react'

export default function SecurityProtection() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener('contextmenu', handleContextMenu)

    // Disable keyboard shortcuts for dev tools
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    // Disable drag
    const handleDragStart = (e: DragEvent) => e.preventDefault()
    document.addEventListener('dragstart', handleDragStart)

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      alert('El contenido de este sitio está protegido.')
    }
    document.addEventListener('copy', handleCopy)

    // Disable text selection
    document.body.style.userSelect = 'none'

    // Disable draggable on images
    const disableImageDrag = () => {
      document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'))
    }
    disableImageDrag()
    const observer = new MutationObserver(disableImageDrag)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('copy', handleCopy)
      document.body.style.userSelect = ''
      observer.disconnect()
    }
  }, [])

  return null
}
