import {telcoPlansDelay} from '@/constants/delay'
import Image from 'next/image'
import BlurFade from '../ui/blur-fade'

export default function FeaturesHero() {
  return (
    <section className='container flex min-h-[500px] flex-col items-center gap-12 overflow-hidden pt-[130px] sm:min-h-[800px]'>
      <BlurFade delay={telcoPlansDelay} inView>
        <h1 className='mt-20 max-w-[882px] text-center text-2xl font-semibold leading-tight sm:text-[64px]'>
          Customizable home screen based on your lifestyle
        </h1>
      </BlurFade>

      <div className='flex flex-col justify-center'>
        <div className='h-[310px] max-h-[310px] w-[500px] max-w-[500px] translate-y-0 sm:h-[476px] sm:max-h-[476px] sm:w-[768px] sm:max-w-screen-md'>
          <Image
            src={'/images/feature/feature-hero.webp'}
            className='hero-image--animation'
            alt='SkyLo SIM'
            fill
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
