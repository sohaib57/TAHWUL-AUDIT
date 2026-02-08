type ProgressRingProps = {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
  color?: string
  trackColor?: string
}

export function ProgressRing({
  value,
  size = 72,
  strokeWidth = 10,
  label,
  color = 'var(--success)',
  trackColor = 'rgba(15, 36, 64, 0.08)',
}: ProgressRingProps) {
  const v = Math.max(0, Math.min(100, value))
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const dash = (v / 100) * c

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ width: size, height: size, position: 'relative' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: size >= 72 ? 14 : 12, color: 'var(--text)' }}>
            {Math.round(v)}%
          </div>
        </div>
      </div>
      {label ? (
        <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 800 }}>
          {label}
        </div>
      ) : null}
    </div>
  )
}


