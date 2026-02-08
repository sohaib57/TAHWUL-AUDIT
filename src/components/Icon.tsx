import type { SVGProps } from 'react'

export type IconName =
  | 'dashboard'
  | 'perspectives'
  | 'tasks'
  | 'documents'
  | 'reports'
  | 'users'
  | 'search'
  | 'bell'
  | 'chevronDown'
  | 'arrowLeft'
  | 'arrowUp'
  | 'upload'
  | 'filter'
  | 'file'
  | 'edit'
  | 'send'
  | 'sort'
  | 'fileReview'
  | 'fileProgress'
  | 'fileComplete'
  | 'barChart'

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    ...props,
  }

  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <path
            d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bell':
      return (
        <svg {...common}>
          <path
            d="M12 22a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'chevronDown':
      return (
        <svg {...common}>
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'arrowLeft':
      return (
        <svg {...common}>
          <line
            x1="8"
            y1="6"
            x2="8"
            y2="18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 6L4 12l4 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )
    case 'file':
      return (
        <svg {...common}>
          <path
            d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v5h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'filter':
      return (
        <svg {...common}>
          <path
            d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'dashboard':
      return (
        <svg {...common}>
          <path
            d="M4 13h7V4H4v9Zm9 7h7V11h-7v9ZM4 20h7v-5H4v5Zm9-11h7V4h-7v5Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      )
    case 'perspectives':
      return (
        <svg {...common}>
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 6v12"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      )
    case 'tasks':
      return (
        <svg {...common}>
          <path
            d="M9 11l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 3h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'documents':
      return (
        <svg {...common}>
          <path
            d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14 3v4h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'reports':
      return (
        <svg {...common}>
          <path
            d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 21h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 11h8M8 7h5M8 15h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 21v-2a3.5 3.5 0 0 0-3-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.6"
          />
          <path
            d="M16 3.5a4 4 0 0 1 0 7.5"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      )
    case 'edit':
      return (
        <svg {...common}>
          <path
            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'send':
      return (
        <svg {...common}>
          <path
            d="M22 2 11 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2 15 22l-4-9-9-4 20-7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sort':
      return (
        <svg {...common}>
          <path
            d="M8 7l4-4 4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          />
          <path
            d="M16 17l-4 4-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'fileReview':
      return (
        <svg {...common}>
          <path
            d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v5h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 10v1M12 16v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'fileProgress':
      return (
        <svg {...common}>
          <path
            d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v5h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 10v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'fileComplete':
      return (
        <svg {...common}>
          <path
            d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v5h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 13l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'arrowUp':
      return (
        <svg {...common}>
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'upload':
      return (
        <svg {...common}>
          <path
            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 8l-5-5-5 5M12 3v12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'barChart':
      return (
        <svg {...common}>
          <line x1="7" y1="12" x2="17" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="12" r="1.5" fill="currentColor" />
          <line x1="12" y1="10" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" />
          <line x1="16" y1="6" x2="16" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="4" r="1.5" fill="currentColor" />
        </svg>
      )
  }
}


