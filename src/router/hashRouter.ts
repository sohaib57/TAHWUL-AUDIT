export type RouteMatch = {
  params: Record<string, string>
}

function normalizePath(path: string) {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function getHashPathname() {
  const hash = window.location.hash || ''
  const raw = hash.startsWith('#') ? hash.slice(1) : hash
  return normalizePath(raw.split('?')[0] || '/')
}

export function buildHashHref(to: string) {
  return `#${normalizePath(to)}`
}

export function navigate(to: string) {
  window.location.hash = buildHashHref(to)
}

export function matchPath(pattern: string, pathname: string): RouteMatch | null {
  const p = normalizePath(pattern)
  const path = normalizePath(pathname)

  if (p === '*' || p === '/*') return { params: {} }

  const pSeg = p.split('/').filter(Boolean)
  const sSeg = path.split('/').filter(Boolean)

  if (pSeg.length !== sSeg.length) return null

  const params: Record<string, string> = {}
  for (let i = 0; i < pSeg.length; i++) {
    const a = pSeg[i]
    const b = sSeg[i]
    if (a?.startsWith(':')) {
      params[a.slice(1)] = decodeURIComponent(b ?? '')
      continue
    }
    if (a !== b) return null
  }
  return { params }
}


