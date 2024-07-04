import { useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { UseThrottle } from './use-throttle.interfaces'

export const useThrottle: UseThrottle = (func, limit) => {
  const [lastRun, setLastRun] = useState<number>(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  return useCallback((...args) => {
    const now = Date.now()

    if (now - lastRun >= limit) {
      setLastRun(now)
      return func(...args)
    } else if (!timeout.current) {
      const remainingTime = limit - (now - lastRun)
      timeout.current = setTimeout(() => {
        setLastRun(Date.now())
        func(...args)
        timeout.current = null
      }, remainingTime)
    }
  }, [func, lastRun, limit])
}

