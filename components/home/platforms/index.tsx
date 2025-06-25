import {cn} from '@/lib/utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

const CurvedSwiper = () => {
  useGSAP(() => {
    const timeLine = gsap.timeline()

    timeLine
      .set(['.cardwheel-body', '.cardwheel-header', '.cardwheel-items'], {
        willChange: 'transform',
      })
      .to('.cardwheel-header', {yPercent: -200, duration: 0.2, ease: 'none'}, 0)
      .to(
        '.cardwheel-body',
        {
          y: 0,
          duration: 0.2,
          ease: 'none',
        },
        0
      )
      .to(
        '.cardwheel-items',
        {
          rotate: 0,
          duration: 0.8,
        },
        0.2
      )
      .to(
        '.cardwheel-body',
        {
          yPercent: 0,
          duration: 0.3,
          ease: 'none',
        },
        0.95
      )
      .add(() => {}, 1.25)
      .set(['.cardwheel-body', '.cardwheel-header', '.cardwheel-items'], {
        willChange: 'auto',
      })

    ScrollTrigger.create({
      trigger: '.cardwheel',
      animation: timeLine,
      // markers: true,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      invalidateOnRefresh: true,
      pin: true,
      pinSpacing: false,
    })
  })

  return (
    <section
      id='platforms'
      className='cardwheel mb-0 sm:mb-32'
      data-menu-inverse
    >
      {/* <div className='absolute h-[190px] w-full 2xl:bg-black' /> */}
      <div className='cardwheel-content'>
        <div className='cardwheel-container'>
          <div className='cardwheel-main'>
            <div className='cardwheel-header mt-20 px-4 md:mt-0'>
              <h2 className='text-3xl md:text-5xl'>
                The world’s leading entertainment & productivity platforms in
                one app
              </h2>
            </div>
            <div className='cardwheel-body'>
              <div className='cardwheel-items'>
                <div className='cardwheel-item black box'>
                  <div className='cardwheel-item-body'>
                    <div className='cardwheel-img'>
                      <Image
                        className={cn('rounded-2xl')}
                        fill
                        src={
                          '/images/home/platforms/Flux_Dev_A_happy_young_Caucasian_woman_with_long_brunette_hair_1.jpg'
                        }
                        loading='lazy'
                        alt='card image'
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                <div className='cardwheel-item black box'>
                  <div className='cardwheel-item-body'>
                    <div className='cardwheel-img'>
                      <Image
                        className={cn('rounded-2xl')}
                        fill
                        src={
                          '/images/home/platforms/Flux_Dev_A_young_Caucasian_male_with_mediumlength_brown_hair_a_0.jpg'
                        }
                        loading='lazy'
                        alt='card image'
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                <div className='cardwheel-item black box'>
                  <div className='cardwheel-item-body'>
                    <div className='cardwheel-img'>
                      <Image
                        className={cn('rounded-2xl')}
                        fill
                        src={
                          '/images/home/platforms/Flux_Dev_A_happy_young_Caucasian_woman_with_long_brunette_hair_0.jpg'
                        }
                        loading='lazy'
                        alt='card image'
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                <div className='cardwheel-item black box'>
                  <div className='cardwheel-item-body'>
                    <div className='cardwheel-img'>
                      <Image
                        className={cn('rounded-2xl')}
                        fill
                        src={
                          '/images/home/platforms/Flux_Dev_A_young_Caucasian_male_with_mediumlength_brown_hair_a_1.jpg'
                        }
                        loading='lazy'
                        alt='card image'
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                <div className='cardwheel-item black box'>
                  <div className='cardwheel-item-body'>
                    <div className='cardwheel-img'>
                      <Image
                        className={cn('rounded-2xl')}
                        fill
                        src={
                          '/images/home/platforms/Flux_Dev_A_happy_young_Caucasian_woman_with_long_brunette_hair_2.jpg'
                        }
                        loading='lazy'
                        alt='card image'
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurvedSwiper
