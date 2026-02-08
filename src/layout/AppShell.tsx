import type { ReactNode } from 'react'
import { useState } from 'react'
import { Sidebar } from './Sidebar.tsx'
import { Topbar } from './Topbar.tsx'
import './shell.css'

type AppShellProps = {
  children: ReactNode
}

const STORAGE_KEY = 'tahwul.shell.collapsed'

export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(() => {
    const storage =
      'localStorage' in globalThis ? (globalThis.localStorage as Storage) : undefined
    return storage?.getItem(STORAGE_KEY) === '1'
  })

  const toggleCollapsed = () => {
    setCollapsed((v) => {
      const next = !v
      const storage =
        'localStorage' in globalThis
          ? (globalThis.localStorage as Storage)
          : undefined
      storage?.setItem(STORAGE_KEY, next ? '1' : '0')
      return next
    })
  }

  return (
    <div className={collapsed ? 'collapsed' : undefined}>
      <div className="appShell">
        <Sidebar collapsed={collapsed} onToggleCollapsed={toggleCollapsed} />
        <div className="content">
          <Topbar year="2026" />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}


