import {useEffect, useState} from 'react'
import styles from './scroll-down.module.scss'

type Props = {
  threshold?: number
}

export default function ScrollDown({threshold = 150}: Props) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  if (!isVisible) return null

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: 'smooth',
    })
  }

  return (
    <div className='absolute bottom-2 z-50 flex w-full flex-col items-center'>
      <div className={styles.mouseBtn} onClick={scrollToNextSection}>
        <span className={styles.mouseScroll}></span>
      </div>
      <span>Scroll Down</span>
    </div>
  )
}
