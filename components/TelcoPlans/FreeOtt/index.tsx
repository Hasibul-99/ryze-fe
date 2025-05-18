import StackCarousel from '@/components/TelcoPlans/FreeOtt/stack-carousel'
import GlobeBack from '@/public/svgs/globe-shape-back-2.svg'
import GlobeFront from '@/public/svgs/globe-shape-front-2.svg'
import Image from 'next/image'

export default function FreeOtt() {
  return (
    <section className='container mt-[120px] flex flex-col items-center'>
      <h2 className='mb-2 max-w-[300px] text-center text-2xl leading-tight md:max-w-[610px] md:text-5xl md:leading-[56px]'>
        Our telco pack with free OTTs included
      </h2>
      <p className='text-base md:text-2xl'>Starting at just TK 377 per month</p>

      <StackCarousel />

      <div
        aria-hidden='true'
        className='relative -z-10 mt-[-290px] max-h-screen min-h-[350px] w-screen overflow-hidden md:mt-[-270px]'
      >
        <Image
          src={GlobeBack}
          alt='globe shape back'
          style={{opacity: 0.4, top: '0%'}}
          className='md:scale-x-150'
          fill
        />
        <Image
          src={GlobeFront}
          alt='globe shape front'
          style={{top: '0%'}}
          className='md:scale-x-150'
          fill
        />
      </div>
    </section>
  )
}
