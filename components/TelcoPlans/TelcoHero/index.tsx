import BlurFade from '@/components/ui/blur-fade'
import {telcoPlansDelay} from '@/constants/delay'
import Image from 'next/image'

export default function TelcoHero() {
  return (
    <section className='container flex min-h-[500px] flex-col items-center overflow-hidden pt-[130px] sm:min-h-[800px]'>
      <div
        className='absolute top-[-130px] h-[800px] w-full bg-contain bg-center bg-no-repeat fade-in sm:h-[800px] md:h-[calc(100vh+130px)]'
        style={{
          backgroundImage: `url('/images/telco/S8IOrrA8W01uoEWoJo3R6vklEtLikcka0d1MvRYv.png')`,
        }}
      />

      <BlurFade delay={telcoPlansDelay} inView>
        <h1 className='mt-20 max-w-[882px] text-center text-2xl font-semibold leading-tight sm:text-[64px]'>
          The best telco plan offerings with the fastest 4G network
        </h1>
      </BlurFade>

      <div className='flex justify-center'>
        <Image
          src={'/images/telco/ryze-sim.gif'}
          alt='SkyLo SIM'
          width={344}
          height={432}
          quality={100}
          className='z-50 size-3/4 sm:size-full'
        />
        {/* <div className='h-[310px] max-h-[310px] w-[500px] max-w-[500px] translate-y-0 sm:h-[476px] sm:max-h-[476px] sm:w-[768px] sm:max-w-screen-md'>
        </div> */}
      </div>
    </section>
  )
}
