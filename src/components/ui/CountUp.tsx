import { useEffect, useState } from 'react'

type CountUpProps = {
  value: number | string
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export function CountUp({ 
  value, 
  duration = 1500, 
  decimals = 0,
  prefix = '',
  suffix = ''
}: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const numValue = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.]/g, '')) || 0
      : value

    if (isNaN(numValue) || numValue === 0) {
      setCount(numValue)
      return
    }

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentValue = startValue + (numValue - startValue) * easeOutExpo
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numValue)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, duration])

  const formattedValue = decimals === 0 
    ? Math.round(count).toString()
    : count.toFixed(decimals)
  
  let displayValue = `${prefix}${formattedValue}${suffix}`
  
  if (typeof value === 'string' && value.includes('%')) {
    displayValue = `${formattedValue}%`
  } else if (suffix === '%') {
    displayValue = `${formattedValue}%`
  }

  return <span>{displayValue}</span>
}

