import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { buildHashHref, navigate } from './hashRouter.ts'
import { cx } from '../lib/cx.ts'
import { useHashLocation } from './useHashLocation.ts'

type LinkProps = {
  to: string
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>

export function Link({ to, className, onClick, ...props }: LinkProps) {
  return (
    <a
      {...props}
      href={buildHashHref(to)}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(to)
      }}
    />
  )
}

type NavLinkProps = LinkProps & {
  activeClassName?: string
  exact?: boolean
}

export function NavLink({
  to,
  className,
  activeClassName,
  exact = true,
  ...props
}: NavLinkProps) {
  const { pathname: current } = useHashLocation()
  const isActive = exact ? current === to : current.startsWith(to)

  return (
    <Link
      to={to}
      {...props}
      className={cx(className, isActive && (activeClassName || ''))}
    />
  )
}


