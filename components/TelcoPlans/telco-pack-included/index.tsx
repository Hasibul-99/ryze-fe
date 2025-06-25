import {cn} from '@/lib/utils'
import Image from 'next/image'
import styles from './telco-pack-included.module.scss'

export default function TelcoPackIncluded() {
  return (
    <div className='container text-center '>
      <div className='mt-12 rounded-2xl border border-[#303233] bg-[#111213] p-4 py-8 md:p-8'>
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0'>
          <Image
            src='/images/telco-plans/logo.png'
            width={132}
            height={32}
            alt='SkyLo logo'
          />
          <p className='mt-5 text-2xl font-bold md:mt-0'>
            Included in every SkyLo telco pack
          </p>
          <div className='w-[132px]' />
        </div>

        <div className='mt-8 flex flex-col gap-8 md:flex-row'>
          {/* {componentData?.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={cn(
                styles.selectGradient,
                'flex flex-col gap-12 items-center justify-center p-6 bg-[#18191A] rounded-2xl w-full md:w-1/3'
              )}
            >
              <span className='text-xl font-bold'>
                {translate(item.title, locale)}
              </span>
              <div className='flex size-full min-h-[170px] items-center justify-center'>
                <div
                  className={cn(
                    styles.simShadow,
                    styles.simGradient,
                    'rounded-full size-[112px] relative',
                    idx === 1 && 'size-full min-h-[170px]'
                  )}
                >
                  <Image
                    src={getStorageUrl(item.image?.en ?? '')}
                    fill
                    alt='SkyLo gif'
                    quality={100}
                    className={cn(
                      idx === 0 && 'max-w-[90px] m-auto',
                      idx === 2 && 'max-w-[62px] max-h-[62px] m-auto'
                    )}
                  />
                </div>
              </div>
            </div>
          ))} */}
          <div
            className={cn(
              styles.selectGradient,
              'flex flex-col gap-12 justify-center p-6 bg-[#18191A] rounded-2xl w-full md:w-1/3 items-center'
            )}
          >
            <span className='text-xl font-bold'>SkyLo sim</span>
            <div
              className={cn(
                styles.simShadow,
                styles.simGradient,
                'rounded-full size-[112px] relative'
              )}
            >
              <Image
                src='/images/telco/ryze-sim.gif'
                fill
                alt='chat bubble'
                className='object-scale-down'
              />
            </div>
          </div>

          <div
            className={cn(
              styles.selectGradient,
              'flex flex-col gap-12 justify-center p-6 bg-[#18191A] rounded-2xl w-full md:w-1/3 items-center'
            )}
          >
            <span className='text-xl font-bold'>SkyLo membership</span>
            <div
              className={cn('rounded-full size-full min-h-[170px] relative')}
            >
              <Image
                src='/images/fnc/membership-card.png'
                fill
                alt='membership card'
                quality={100}
              />
            </div>
          </div>

          <div
            className={cn(
              styles.selectGradient,
              'flex flex-col gap-12 justify-center p-6 bg-[#18191A] rounded-2xl w-full md:w-1/3 items-center'
            )}
          >
            <span className='text-xl font-bold'>24/7 live chat support</span>
            <div
              className={cn(
                styles.simShadow,
                styles.simGradient,
                'rounded-full size-[112px] relative'
              )}
            >
              <Image
                src='/images/telco-plans/bubble.png'
                fill
                alt='chat bubble'
                className='object-scale-down'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
