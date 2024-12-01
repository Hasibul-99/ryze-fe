import styles from '@/components/home/hero/hero.module.scss'
import Particles from '@/components/ui/particles'
import {cn} from '@/lib/utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import {useRef} from 'react'
// import GlobeFront from 'svgs/globe-shape-front.svg'
import Features from './features'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const globeTween = gsap.timeline()
      globeTween.to('#globe-back', {opacity: 0.4, duration: 1.5}, 0.5)
      globeTween.to('#globe-front', {opacity: 1, duration: 1}, 1)

      const heroTimeline = gsap.timeline({
        repeat: -1,
      })

      const features = document.querySelectorAll('.feature')

      features.forEach((feature, index) => {
        heroTimeline
          .to(feature.querySelector('.feature-icon-box'), {
            opacity: 1,
            duration: 1.5,
            delay: index === 0 ? 1.5 : -0.5,
          })
          .to(
            feature.querySelector('.feature-icon-box'),
            {
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              duration: 1,
            },
            '>'
          )
          .to(
            feature,
            {
              border: '1px solid #969A9C',
              background: '#303233',
              duration: 1,
            },
            '<'
          )
          .to(feature.querySelector('p'), {opacity: 1, duration: 1}, '<')
          .to(feature, {opacity: 0, duration: 0.5}, '+=1')
      })
    },
    {
      scope: sectionRef,
    }
  )
  return (
    <section
      ref={sectionRef}
      id='hero'
      className='relative min-h-[750px] md:min-h-[900px]'
    >
      <div aria-hidden='true' className={cn('container', styles.hero)}>
        <Particles
          className='absolute inset-0 mt-[-120px] h-full'
          quantity={1350}
          color='#ffffff'
          refresh
        />
        <Image
          id='globe-back'
          src={'/svgs/globe-shape-back.svg'}
          alt='globe shape back'
          className='!h-4/5 scale-x-125 opacity-0 md:!h-full md:scale-110'
          style={{width: '100%', opacity: 0.4, top: '20%'}}
          fill
          quality={100}
        />
        <Image
          id='globe-front'
          src={'/svgs/globe-shape-front.svg'}
          alt='globe shape front'
          className='!h-4/5 scale-x-125 opacity-0 md:!h-full md:scale-110'
          style={{width: '100%', top: '20%'}}
          fill
          quality={100}
        />
      </div>

      <div className='container absolute left-1/2 top-[5%] z-10 flex -translate-x-1/2 flex-col items-center pt-[130px]'>
        <h1 className='hero-title--animation mb-[90px] max-w-full text-center text-2xl font-bold leading-8 sm:text-3xl md:max-w-[1000px] md:text-5xl md:leading-[1.15] lg:text-6xl lg:leading-[1.15]'>
          <span className='text-[#9413F1]'>Ryze </span>
          is the best all-in-one digital lifestyle app in town
        </h1>
        {/* <div className='relative h-[450px] w-1/2 min-w-[230px] max-w-[300px] md:h-[550px] md:w-[300px] md:max-w-[300px]'> */}
        <div className='relative h-[580px] w-[285px] md:h-[650px] md:w-[320px]'>
          <Features />

          <Image
            src={'/images/home/home_mobile.png'}
            alt='Hero'
            fill
            className='hero-image--animation'
            loading='eager'
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
