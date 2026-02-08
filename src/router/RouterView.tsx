import { matchPath } from './hashRouter.ts'
import { useHashLocation } from './useHashLocation.ts'
import { DashboardPage } from '../screens/DashboardPage.tsx'
import { StandardDetailsPage } from '../screens/StandardDetailsPage.tsx'
import { TrackingPage } from '../screens/TrackingPage.tsx'
import { NotFoundPage } from '../screens/NotFoundPage.tsx'

export function RouterView() {
  const { pathname } = useHashLocation('/dashboard')

  if (matchPath('/dashboard', pathname)) return <DashboardPage />
  if (matchPath('/tracking', pathname)) return <TrackingPage />

  const details = matchPath('/standards/:id', pathname)
  if (details) return <StandardDetailsPage standardId={details.params.id} />

  return <NotFoundPage />
}


