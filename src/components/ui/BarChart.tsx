type BarDatum = {
  label: string
  value: number
}

type BarChartProps = {
  data: BarDatum[]
  height?: number
  max?: number
}

export function BarChart({ data, height = 220, max = 100 }: BarChartProps) {
  const w = 1200
  const h = height
  const padX = 40
  const padY = 16
  const innerW = w - padX * 2
  const innerH = h - padY * 2
  const maxVal = max
  const barW = innerW / Math.max(1, data.length)
  const yAxisLabels = [0, 20, 40, 60, 80, 100]

  const barWidth = barW * 0.6
  const barSpacing = barW * 0.4

  return (
    <svg
      width="100%"
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#0078D7" />
          <stop offset="100%" stopColor="rgba(0, 120, 215, 0)" />
        </linearGradient>
      </defs>
      {yAxisLabels.map((label) => {
        const y = padY + innerH - (label / maxVal) * innerH
        return (
          <line
            key={`grid-${label}`}
            x1={padX}
            y1={y}
            x2={padX + innerW}
            y2={y}
            stroke="#E0E8ED"
            strokeWidth="1"
            opacity="0.6"
          />
        )
      })}
      {yAxisLabels.map((label) => {
        const y = padY + innerH - (label / maxVal) * innerH
        return (
          <text
            key={label}
            x={padX - 10}
            y={y + 4}
            textAnchor="end"
            fontSize="10"
            fill="#8597A8"
            fontWeight="400"
            fontFamily="'Cairo', system-ui, -apple-system, sans-serif"
          >
            {label}
          </text>
        )
      })}

      {data.map((d, idx) => {
        const v = Math.max(0, Math.min(d.value, maxVal))
        const bh = (v / maxVal) * innerH
        const x = padX + (idx * barW) + (barSpacing / 2)
        const adjustedX = idx === 0 ? Math.max(padX, x) : x
        const dataBarTop = padY + (innerH - bh)
        const dataBarBottom = dataBarTop + bh
        const chartBottom = padY + innerH
        const bgTop = dataBarBottom
        const bgHeight = chartBottom - bgTop
        
        if (bgHeight <= 0) return null
        
        return (
          <rect
            key={`bg-${idx}`}
            x={adjustedX}
            y={bgTop}
            width={barWidth}
            height={bgHeight}
            fill="#E0E8ED"
            opacity="0.4"
          />
        )
      })}
      {data.map((d, idx) => {
        const v = Math.max(0, Math.min(d.value, maxVal))
        const bh = (v / maxVal) * innerH
        const x = padX + (idx * barW) + (barSpacing / 2)
        const adjustedX = idx === 0 ? Math.max(padX, x) : x
        const y = padY + (innerH - bh)
        const topRadius = 4
        const bottomY = padY + innerH
        
        const path = `
          M ${adjustedX + topRadius},${y}
          L ${adjustedX + barWidth - topRadius},${y}
          Q ${adjustedX + barWidth},${y} ${adjustedX + barWidth},${y + topRadius}
          L ${adjustedX + barWidth},${bottomY}
          L ${adjustedX},${bottomY}
          L ${adjustedX},${y + topRadius}
          Q ${adjustedX},${y} ${adjustedX + topRadius},${y}
          Z
        `
        
        return (
          <path
            key={`bar-${idx}`}
            d={path}
            fill="url(#barGrad)"
          />
        )
      })}
    </svg>
  )
}
