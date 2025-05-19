import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

export default function CurvedMarquee() {
  useGSAP(() => {
    const wheel = document.querySelector('.wheel')
    const images = gsap.utils.toArray('.wheel__card')

    function setup() {
      const radius = (wheel as HTMLElement).offsetWidth / 2
      const center = radius
      const slice = 360 / images.length
      const DEG2RAD = Math.PI / 180

      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      })
    }

    setup()

    window.addEventListener('resize', setup)

    gsap.to(wheel, {
      rotation: -360,
      ease: 'none',
      duration: images.length * 2,
      repeat: -1,
    })
  })

  return (
    <section className='absolute -z-10 size-full min-h-full overflow-hidden'>
      <div className='wheel absolute left-1/2 top-1/2 flex size-[180vw] max-h-[2400px] max-w-[2400px] -translate-x-1/2 items-center justify-center'>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-1.gif'}
            fill
            alt='flag'
          />
        </div>

        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-2.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-3.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-4.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-5.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-6.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-7.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-8.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-9.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-10.gif'}
            fill
            alt='flag'
          />
        </div>
        <div className='wheel__card flag-item relative flex size-[55px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'>
          <Image
            className='rounded-full object-cover'
            src={'/images/telco-plans/flag-1.gif'}
            fill
            alt='flag'
          />
        </div>
      </div>
    </section>
  )
}
