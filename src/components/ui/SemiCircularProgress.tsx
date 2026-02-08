import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type SemiCircularProgressProps = {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
  strokeLinecap?: 'butt' | 'round' | 'square'
  className?: string
  duration?: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function SemiCircularProgress({
  value,
  size = 280,
  strokeWidth = 20,
  color = '#DB1F26',
  trackColor = '#E0E8ED',
  strokeLinecap = 'butt',
  className,
  duration = 1500,
}: SemiCircularProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0
    const targetValue = clamp(value, 0, 100)

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentValue = startValue + (targetValue - startValue) * easeOutExpo
      
      setAnimatedValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setAnimatedValue(targetValue)
      }
    }

    const rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [value, duration])

  const v = clamp(animatedValue, 0, 100)

  const strokeWidthPct = clamp((strokeWidth / size) * 100, 0, 100)

  const cropHeight = Math.round(size / 2 + strokeWidth / 2)

  return (
    <div
      className={className}
      style={{
        width: size,
        height: cropHeight,
        overflow: 'hidden',
        display: 'block',
      }}
    >
      <div style={{ width: size, height: size }}>
        <CircularProgressbar
          value={v}
          circleRatio={0.5}
          strokeWidth={strokeWidthPct}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap,
            pathColor: color,
            trailColor: trackColor,
            pathTransition: 'none',
            trailTransition: 'none',
          })}
        />
      </div>
    </div>
  )
}



