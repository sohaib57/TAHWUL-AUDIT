import { useEffect, useState } from 'react'
import { getHashPathname } from './hashRouter.ts'

export function useHashLocation(defaultPathname = '/dashboard') {
  const [pathname, setPathname] = useState(() => getHashPathname())

  useEffect(() => {
    const sync = () => setPathname(getHashPathname())

    window.addEventListener('hashchange', sync)

    if (!window.location.hash) {
      window.location.hash = `#${defaultPathname}`
      sync()
    }

    sync()
    return () => window.removeEventListener('hashchange', sync)
  }, [defaultPathname])

  return { pathname }
}


