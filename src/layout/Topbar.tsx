import { Icon } from '../components/Icon.tsx'

type TopbarProps = {
  year?: string
}

export function Topbar({}: TopbarProps) {
  return (
    <header className="topbar">
      <div className="searchWrap">
        <div className="searchBox" role="search">
          <Icon name="search" width={18} height={18} style={{ color: '#8597A8' }} />
          <input className="searchInput" placeholder="Search" />
        </div>
      </div>

      <div className="topbarRight">
        <button className="notif" type="button" aria-label="Notifications">
          <Icon name="bell" width={18} height={18} />
          <span className="notifDot" aria-hidden />
        </button>

        <div className="profile" role="button" tabIndex={0} aria-label="Profile">
          <span className="avatar" aria-hidden>
            <img
              src="https://i.pravatar.cc/64?img=33"
              alt=""
              style={{ width: '100%', height: '100%', borderRadius: '999px', objectFit: 'cover' }}
            />
          </span>
          <span className="profileName">Mohamed</span>
          <Icon name="chevronDown" width={16} height={16} style={{ color: '#8597A8' }} />
        </div>
      </div>
    </header>
  )
}


