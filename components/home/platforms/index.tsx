import {cn} from '@/lib/utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import {useRef} from 'react'

const CurvedSwiper = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // if (sectionRef?.current) {
  useGSAP(
    () => {
      const timeLine = gsap.timeline()

      timeLine
        .set(['.cardwheel-body', '.cardwheel-header', '.cardwheel-items'], {
          willChange: 'transform',
        })
        .to(
          '.cardwheel-header',
          {yPercent: -200, duration: 0.2, ease: 'none'},
          0
        )
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
    },
    {
      scope: sectionRef,
    }
  )
  // }

  return (
    <section
      ref={sectionRef}
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
                          '/images/home/platforms/3oLKYPdhgDvBoENWEPOFheJR2WbA8GcebKQK0pmY.png'
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
                          '/images/home/platforms/KTJNVfxUdQdH6iZRNaHpL3rRVHskNlPigWDnQWWh.png'
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
                          '/images/home/platforms/MOTDt27oN0ugXNaj7hvhDEUPJpmm4J9OQ68fOkXM.png'
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
                          '/images/home/platforms/xPr162bBkmzuydQI8dQU1jQyWLLtbuZ3MNKPfmD7.png'
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
                          '/images/home/platforms/zzhy2Ym3hbxpMdGjZdHRYboL8peqV9UqxR2LM0pB.png'
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
                          '/images/home/platforms/3oLKYPdhgDvBoENWEPOFheJR2WbA8GcebKQK0pmY.png'
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
                          '/images/home/platforms/3oLKYPdhgDvBoENWEPOFheJR2WbA8GcebKQK0pmY.png'
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
