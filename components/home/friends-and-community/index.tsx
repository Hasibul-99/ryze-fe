import OrbitingCircles from '@/components/ui/orbiting-circles'
import useWindowSize from '@/hooks/useWindowSize'
import BgGradient from '@/public/svgs/globe-gradient.svg'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import FeatureCard from './feature-card'

export default function FriendsAndCommunity() {
  const [startingRadius, setStartingRadius] = useState(100)
  const {width} = useWindowSize()

  useEffect(() => {
    if (width && width < 768) {
      setStartingRadius(50)
    }
  }, [width])

  return (
    <section
      id='friendsAndCommunity'
      className='container mx-auto px-4 pb-40 pt-20'
    >
      <div className='relative mx-auto flex size-full h-[550px] max-w-3xl items-center justify-center overflow-hidden rounded-lg md:h-[750px] md:shadow-xl'>
        <div className='absolute left-0 top-8 z-20 flex w-full justify-center bg-black/50 text-center'>
          <p className='max-w-[333px] text-2xl leading-tight md:max-w-[632px] md:text-5xl'>
            Join the fun with your friends and thousands of SkyLo users
          </p>
        </div>

        <div
          className='relative overflow-hidden rounded-full'
          style={{
            height: startingRadius + 25 + 'px',
            width: startingRadius + 25 + 'px',
          }}
        >
          <Image
            className='!left-[-15%] !h-[130%] !w-[130%] !max-w-[200%] object-cover'
            src={'/images/home/9d0.jpeg'}
            alt='User'
            fill
            quality={100}
          />
        </div>
        <Image
          src={BgGradient}
          alt='bg gradient'
          className='left-0 top-0 -z-20 size-full'
          fill
        />

        {[1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1]
          .slice(1, 11)
          .map((item, index) => {
            let radiusMultiplier
            let delay
            let reverse

            if (index < 2) {
              // First orbit circle
              radiusMultiplier = 1
              delay = index * 10 + 10
              reverse = false
            } else {
              // Subsequent orbit circles
              radiusMultiplier = Math.floor((index - 2) / 4) + 2
              delay = ((index - 2) % 4) * 5 + 10
              reverse = radiusMultiplier === 2
            }

            return (
              <OrbitingCircles
                key={index}
                className='size-[60px] border-none bg-transparent'
                radius={startingRadius * radiusMultiplier}
                duration={20}
                delay={delay}
                reverse={reverse}
              >
                <Image
                  width={startingRadius}
                  height={startingRadius}
                  src={'/images/icons/chorki.png'}
                  alt='avatar'
                />
              </OrbitingCircles>
            )
          })}
      </div>

      <div className='mx-auto mt-12 grid max-w-[1124px] justify-center gap-6 lg:grid-cols-3'>
        {[1, , 11, 1].map((card, idx) => (
          <FeatureCard key={idx} />
        ))}
      </div>
    </section>
  )
}
