import Image from 'next/image'
import {useRef} from 'react'

const min = 1000
const max = 6000

export default function Wheel() {
  const wheelRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    const deg = Math.floor(Math.random() * (min - max)) + max
    console.log(deg)
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${deg}deg)`
    }
  }

  return (
    <div className='relative w-fit'>
      <Image
        ref={wheelRef}
        style={{transition: 'transform 3s ease'}}
        src='/images/feature/wheel.webp'
        width={325}
        height={325}
        alt='wheel'
        quality={100}
      />
      <button
        className='primary-gradient absolute left-1/2 top-1/2 hidden size-24 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-white hover:!animate-none group-hover/gamification:block'
        onClick={handleClick}
      >
        Spin
      </button>
      <Image
        className='absolute left-1/2 top-[-40px] -translate-x-1/2'
        src='/images/feature/indicator.webp'
        width={84}
        height={80}
        alt='indicator'
      />
    </div>
  )
}
