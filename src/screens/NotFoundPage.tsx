import { Link } from '../router/Link.tsx'

export function NotFoundPage() {
  return (
    <div className="page container">
      <div className="card cardPad">
        <h1 className="h1">Page not found</h1>
        <p className="muted" style={{ margin: '8px 0 16px' }}>
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/dashboard" className="btn">
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}


