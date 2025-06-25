import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import ExploreMoreButton from '@/components/ui/explore-more-button'
import {cn} from '@/lib/utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {Minus, Plus} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

const constent = [
  {
    title: 'Smart layout, your style',
    description:
      'Let SkyLo adapt to your lifestyle with dynamic layouts and modular screen options.',
    image: '/images/home/Onboading/mobile_app_design_0.jpg',
  },
  {
    title: 'Your screen, your rules',
    description:
      'Design the SkyLo home screen to reflect your daily flow and aesthetic preferences.',
    image: '/images/home/Onboading/mobile_app_design_1.jpg',
  },

  {
    title: 'Tailored just for you',
    description:
      'Personalize every detail of your SkyLo experience to match your routine, habits, and unique taste.',
    image: '/images/home/Onboading/mobile_app_design_2.jpg',
  },
]

export default function Onboarding() {
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState<{
    [key: string]: boolean
  }>({
    0: true,
    1: false,
    2: false,
  })

  const handleOnOpenChange = (key: string) => {
    setOpen({...open, [key]: !open[key]})
  }

  const getProgress = (value: number): string => {
    if (value <= 3) return '01'
    else if (value <= 6) return '02'
    else return '03'
  }

  useGSAP(() => {
    const updateCardOpacity = (
      card1Opacity: number,
      card2Opacity: number,
      card3Opacity: number
    ) => {
      gsap.to('.card-1', {
        opacity: card1Opacity,
        duration: 1.5,
        ease: 'expoScale(0.5, 7, none)',
      })
      gsap.to('.card-2', {
        opacity: card2Opacity,
        duration: 1.5,
        ease: 'expoScale(0.5, 7, none)',
      })
      gsap.to('.card-3', {
        opacity: card3Opacity,
        duration: 1.5,
        ease: 'expoScale(0.5, 7, none)',
      })
    }

    const cardTimeLine = gsap.timeline()
    cardTimeLine.set('.card', {willChange: 'transform'})
    ScrollTrigger.create({
      // markers: true,
      trigger: '#onboarding-scroll',
      animation: cardTimeLine,
      start: 'top 20%',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = Math.floor(self.progress * 10)

        if (progress > 3 && progress <= 6) {
          updateCardOpacity(0, 1, 0)
        } else if (progress > 6) {
          updateCardOpacity(0, 0, 1)
        } else {
          updateCardOpacity(1, 0, 0)
        }

        setProgress(progress)
        gsap.to('.progressbar-gradient', {
          height: `${progress * 5}%`,
          duration: 0.5,
          ease: 'none',
        })
        gsap.to('.progress-star', {
          height: `${progress * 5 + 1}%`,
          duration: 0.5,
          ease: 'none',
        })
      },
    })
  })

  return (
    <section id='onboarding' className='container items-center'>
      {/* show on mobile view */}
      <div className='mx-auto flex max-w-[400px] flex-col gap-12 text-start lg:hidden'>
        {constent.map((item, index) => (
          <Collapsible
            key={index}
            open={open[index.toString()]}
            onOpenChange={() => handleOnOpenChange(index.toString())}
          >
            <CollapsibleTrigger className='flex w-full cursor-pointer justify-between gap-5 text-xl font-semibold'>
              <span className='text-start'>{item.title}</span>
              <div className='icon-box-shadow w-fit rounded-full p-2'>
                {open[index.toString()] ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='onboarding-image relative my-6 max-w-full'>
                <Image
                  src={item.image}
                  alt='onboarding image'
                  fill
                  quality={100}
                  className='rounded-[50px]'
                />
              </div>
              <p className='text-[#D0D2D3]'>{item.description}</p>
              <ExploreMoreButton
                label={'Explore more'}
                className='mx-auto mb-2 mt-8 py-5 pr-3'
                arrowSize={20}
                link={'/'}
              />
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      {/* show on desktop view */}
      <div
        id='onboarding-scroll'
        className='container hidden h-[2500px] min-h-screen justify-between gap-[2.5%] lg:flex'
      >
        <div className='cards relative size-full'>
          {constent.map((item, index) => (
            <div
              className={cn(
                'card flex gap-20 absolute w-full',
                `card-${index + 1}`
              )}
              key={index}
            >
              {/* <div className='relative h-[460px] max-h-[460px] w-[360px] max-w-[360px] lg:h-[600px] lg:max-h-[600px] lg:w-[440px] lg:max-w-[440px]'> */}
              <div className='w-1/2'>
                <div className='relative h-[580px] w-[450px]'>
                  <Image
                    src={item.image}
                    alt='onboarding image'
                    fill
                    quality={100}
                    className='rounded-[52px]'
                  />
                </div>
              </div>
              <div className='flex w-1/2 flex-col justify-center'>
                <h1 className='text-[32px] font-semibold'>{item.title}</h1>
                <p className='text-2xl text-[#D0D2D3]'>{item.description}</p>
                <ExploreMoreButton label={'Explore more'} link={'/'} />
              </div>
            </div>
          ))}
        </div>

        <div className='progress-wrapper h-full max-h-[460px] lg:max-h-[600px]'>
          <div className='relative flex size-full items-center justify-end'>
            <span className='progressbar mr-[15px] mt-[-100px] flex !w-0 items-start'>
              {getProgress(progress)}
            </span>
            <div className='progressbar mr-[7px]'></div>
            <div className='progressbar join-SkyLo progressbar-gradient mr-[6px]'></div>
            <div className='progress-star'>
              <Image
                src={'/images/star.png'}
                alt='arrow-right'
                width={15}
                height={15}
                className=''
              />
            </div>
            <span className='progressbar mb-[-100px] mr-[15px] flex !w-0 items-end'>
              03
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
