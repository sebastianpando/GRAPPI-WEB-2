import { useLocation } from 'wouter'

export function useNavigation() {
  const [, setLocation] = useLocation()

  const navigate = (path: string) => {
    setLocation(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { navigate }
}
