import { AppShell } from './layout/AppShell.tsx'
import { RouterView } from './router/RouterView.tsx'

function App() {
  return (
    <AppShell>
      <RouterView />
    </AppShell>
  )
}

export default App
