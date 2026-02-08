## TAHWUL Audit UI (Technical Assessment)

Frontend-only implementation of 3 UI screens (Dashboard, Standard Details, and Tracking) based on the provided mockups. Data is mocked with local objects (no backend required).

### Tech stack

- **React 19 + TypeScript + Vite**
- **Custom UI** (CSS variables + reusable components)
- **No router dependency**: a lightweight hash router is implemented in `src/router/`
- **Charts/gauges** implemented using **pure SVG** (`ProgressRing`, `SemiGauge`, `BarChart`) + `react-circular-progressbar` (Overall Compliance Score)

### How to run

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

If you see a Vite `504 (Outdated Optimize Dep)` error after installing/removing dependencies, restart with forced re-optimization:

```bash
npm run dev:force
```

Build:

```bash
npm run build
```

### Screens (routes)

- **Dashboard**: `#/dashboard`
- **Strategic Planning Details** (Overview/Evidence tabs): `#/standards/5.4.1`
- **Tracking screen**: `#/tracking`

### Project structure (high level)

- **Layout**: `src/layout/` (`AppShell`, `Sidebar`, `Topbar`)
- **Router**: `src/router/` (hash matching + `Link`/`NavLink`)
- **Screens**: `src/screens/`
- **Mocked data**: `src/mock/`
- **UI primitives**: `src/components/ui/`

### Assumptions

- This is a **UI-only** implementation; all content is mocked.
- Desktop-first layout, with responsive fallbacks for smaller screens.
- The “Tracking” screen is implemented as an evidence/standards tracking table + summary side panel to match the layout patterns in the mockups.

### What I’d improve with more time

- Replace the simple hash router with `react-router` for nested routes and better DX.
- Add richer interactions (filters/search) and polish micro-interactions.
- Add tests (unit + visual regression) and accessibility passes (ARIA, keyboard flows).
- Add a deploy pipeline (Vercel/Netlify) and include the final hosted URL.

### Live URL

**Live Application**: [https://tahwul-audit.netlify.app](https://tahwul-audit.netlify.app)
