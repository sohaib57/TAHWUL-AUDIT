import { Icon } from '../components/Icon.tsx'
import { cx } from '../lib/cx.ts'
import { NavLink } from '../router/Link.tsx'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/arrow-collapse.svg'

type SidebarProps = {
  collapsed: boolean
  onToggleCollapsed: () => void
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: 'dashboard' as const },
  { to: '/tracking', label: 'Perspectives', icon: 'perspectives' as const },
  { to: '/tracking', label: 'Tasks', icon: 'tasks' as const },
  { to: '/standards/5.4.1', label: 'Documents', icon: 'documents' as const },
  { to: '/tracking', label: 'Reports', icon: 'reports' as const },
  { to: '/tracking', label: 'Users & Roles', icon: 'users' as const },
]

export function Sidebar({ collapsed, onToggleCollapsed }: SidebarProps) {
  return (
    <aside className="sidebar">
      {!collapsed && (
        <button
          className="collapseBtn"
          type="button"
          aria-label="Collapse sidebar"
          onClick={onToggleCollapsed}
          title="Collapse"
        >
          <img 
            src={arrow} 
            alt="" 
            className="collapseBtnIcon"
          />
        </button>
      )}
      {collapsed && (
        <button
          className="expandBtn"
          type="button"
          aria-label="Expand sidebar"
          onClick={onToggleCollapsed}
          title="Expand"
        >
          <img 
            src={arrow} 
            alt="" 
            className="expandBtnIcon"
          />
        </button>
      )}

      <div className="brand">
        <img 
          src={logo} 
          alt="TAHWUL Logo" 
          className="brandLogo"
        />
      </div>

      <nav className="navGroup" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={`${item.to}-${item.label}`}
            to={item.to}
            className={cx('navItem')}
            activeClassName="navItemActive"
            exact={item.to !== '/tracking'}
          >
            <span className="navIcon" aria-hidden>
              <Icon name={item.icon} width={18} height={18} />
            </span>
            <span className="navLabel">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}


