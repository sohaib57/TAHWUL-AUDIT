type SemiGaugeProps = {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number, sweep: '0' | '1' = '1') {
  const start = polarToCartesian(cx, cy, r, startAngle)
  const end = polarToCartesian(cx, cy, r, endAngle)
  return `M ${start.x} ${start.y} A ${r} ${r} 0 0 ${sweep} ${end.x} ${end.y}`
}

export function SemiGauge({
  value,
  size = 280,
  strokeWidth = 20,
  color = '#e23a3a',
  trackColor = 'rgba(15, 36, 64, 0.1)',
}: SemiGaugeProps) {
  const v = Math.max(0, Math.min(100, value))
  const w = size
  const r = (w - strokeWidth) / 2
  const svgHeight = r + 20
  const cx = w / 2
  const cy = r
  const startAngle = 180
  const endAngle = 0
  const fillAngle = startAngle - (v / 100) * 180

  return (
    <svg 
      width={w} 
      height={svgHeight} 
      viewBox={`0 0 ${w} ${svgHeight}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <path
        d={arcPath(cx, cy, r, startAngle, endAngle, '1')}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      {v > 0 && (
        <path
          d={arcPath(cx, cy, r, startAngle, fillAngle, '1')}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}


