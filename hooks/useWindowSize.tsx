import {useEffect, useState} from 'react'

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number
    height: undefined | number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
