import useWindowSize from '@/hooks/useWindowSize'
import {cn} from '@/lib/utils'
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  MonitorSmartphone,
  Phone,
} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'
import styles from './stack-carousel.module.scss'

const Icon = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => (
  <div
    className={cn(
      'icon-box-shadow h-fit rounded-2xl p-4 origin-bottom-right',
      className && className
    )}
  >
    <div className='relative flex size-[60px] items-center justify-center'>
      <Image src={src} alt={alt} fill quality={100} className='rounded-2xl' />
    </div>
  </div>
)

const packages = [
  {
    name: 'PRO',
    regular_price: 577,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: '300',
    loyalty_discount: 41600,
    sms: '500',
    tag: 'Value Pack',
    otts: 2,
  },
  {
    name: 'FLY',
    regular_price: 977,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 500,
    loyalty_discount: 70300,
    sms: '500',
    tag: 'Recommended',
  },
  {
    name: 'ELEVATE',
    regular_price: 777,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 400,
    loyalty_discount: 55900,
    sms: null,
    tag: 'Recommended',
  },
  {
    name: 'BLAZE',
    regular_price: 227,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '0',
    loyalty_discount: 16400,
    sms: null,
    tag: 'True Endless',
  },
  {
    name: 'LIFT',
    regular_price: 677,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 0,
    loyalty_discount: 48800,
    sms: null,
    tag: 'True Endless',
  },
  {
    name: 'STARTER',
    regular_price: 377,
    data_volume: '999999',
    validity: '30 Days',
    voice_volume: '200',
    loyalty_discount: 27200,
    sms: null,
    tag: 'Popular',
  },
  {
    name: 'PULSE',
    regular_price: 177,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '50',
    loyalty_discount: 12800,
    sms: null,
    tag: 'Value Pack',
  },
  {
    name: 'VIBE',
    regular_price: 277,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '50',
    loyalty_discount: '20000',
    sms: null,
    tag: 'Recommended',
  },
]

export default function StackCarousel() {
  const [currDeg, setCurrDeg] = useState(0)
  const {width} = useWindowSize()

  const dataLength = 3

  const rotate = (direction: 'n' | 'p') => {
    const angle = 360 / dataLength
    if (direction === 'n') {
      setCurrDeg(currDeg - angle)
    } else if (direction === 'p') {
      setCurrDeg(currDeg + angle)
    }
  }

  const carouselStyle = {
    transform: `rotateY(${currDeg}deg)`,
  }

  const itemStyle = {
    transform: `rotateY(${-currDeg}deg)`,
  }

  return (
    <>
      <div className='flex w-full items-center justify-center'>
        {/* --- left icons container --- */}
        <div className='hidden items-center gap-10 lg:flex'>
          <Icon
            src='/images/telco-plans/hoichoi.jpg'
            alt='Hoichoi'
            className='-rotate-12'
          />

          <div className='flex flex-col gap-10'>
            <Icon
              src='/images/telco-plans/chorki.jpg'
              alt='Chorki'
              className='rotate-12'
            />
            <Icon
              src='/images/telco-plans/toffee.jpg'
              alt='YouTube'
              className='-rotate-12'
            />
          </div>
        </div>

        <div
          className={cn(
            styles.container,
            'w-[200px] mb-10 mt-20 mx-auto'
            // sm:my-20
          )}
        >
          <div className={styles.carousel} style={carouselStyle}>
            {packages.map((item, i) => {
              const angle = (360 / dataLength) * i
              // const z = dataLength * 42 > 200 ? dataLength * 42 : 130
              const z = dataLength * ((width as number) >= 640 ? 20 : 15)

              return (
                <div
                  key={i}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${z}px) rotateY(-${angle}deg)`,
                  }}
                >
                  <div
                    className={cn(
                      styles.item,
                      // sm:w-[300px] sm:h-[200px]
                      'primary-gradient w-[200px] h-[160px] sm:w-[240px] sm:h-[170px] rounded-3xl p-3 py-6 sm:p-6'
                    )}
                    style={itemStyle}
                  >
                    <div className='flex h-full flex-col justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <Image
                          // className='h-4 w-16 sm:h-[27.78px] sm:w-[101.85px]'
                          className='h-4 w-16'
                          src='/svgs/ryze-small-logo.svg'
                          width={100}
                          height={25}
                          alt='ryze logo'
                        />
                        <div className='flex items-center gap-1 rounded-full border px-2 py-1'>
                          <Image
                            src='/images/telco-plans/popular.png'
                            height={22}
                            width={22}
                            alt='icon'
                          />
                          {/* <p className='text-[10px] sm:text-sm'>Most popular</p> */}
                          <p className='text-[10px]'>{item.tag}</p>
                        </div>
                      </div>

                      <div className='flex items-end justify-between gap-3'>
                        <div className='flex flex-col'>
                          <span>{item.name}</span>
                          {/* <span className='text-xs sm:text-base'> */}
                          <span className='text-xs'>
                            TK {item.regular_price} / {item.validity}
                          </span>
                        </div>
                        {/* <div className='flex flex-col text-sm sm:text-base'> */}
                        <div className='flex flex-col text-sm'>
                          <span className='flex items-center gap-1'>
                            <MonitorSmartphone size={14} />
                            {item.otts} OTT
                          </span>
                          <span className='flex items-center gap-1'>
                            <Globe size={14} />{' '}
                            {Number(item.data_volume) >= 999999 ? (
                              <span>Endless</span>
                            ) : (
                              item.data_volume
                            )}
                          </span>
                          <span className='flex items-center gap-1'>
                            <Phone size={14} /> {item.voice_volume} Min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* --- right icons container --- */}
        <div className='hidden items-center gap-10 lg:flex'>
          <Icon
            src='/images/telco-plans/toffee.jpg'
            alt='Toffee'
            className='-rotate-12'
          />

          <div className='flex flex-col gap-10'>
            <Icon
              src='/images/telco-plans/chorki.jpg'
              alt='Chorki'
              className='rotate-12'
            />
            <Icon
              src='/images/telco-plans/hoichoi.jpg'
              alt='Hoichoi'
              className='-rotate-12'
            />
          </div>
        </div>
      </div>

      <div className='mt-20 flex justify-center gap-5'>
        <div className={styles.prev} onClick={() => rotate('p')}>
          <ArrowLeft />
        </div>
        <div className={styles.next} onClick={() => rotate('n')}>
          <ArrowRight />
        </div>
      </div>
    </>
  )
}
