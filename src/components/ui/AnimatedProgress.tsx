import { useEffect, useState } from 'react'

type AnimatedProgressProps = {
  value: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export function AnimatedProgress({ 
  value, 
  duration = 1500,
  className = '',
  style = {}
}: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progressRatio = Math.min(elapsed / duration, 1)
      
      const easeOutExpo = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio)
      const currentValue = startValue + (value - startValue) * easeOutExpo
      
      setProgress(currentValue)

      if (progressRatio < 1) {
        requestAnimationFrame(animate)
      } else {
        setProgress(value)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, duration])

  return (
    <div 
      className={className}
      style={{
        ...style,
        width: `${progress}%`,
        transition: 'none'
      }}
    />
  )
}

