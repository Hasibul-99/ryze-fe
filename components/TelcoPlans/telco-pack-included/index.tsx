import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import styles from './telco-pack-included.module.scss'

export default function TelcoPackIncluded() {
  const {t} = useTranslation('common')
  
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
            {t('telco.included_title')}
          </p>
          <div className='w-[132px]' />
        </div>

        <div className='mt-8 flex flex-col gap-8 md:flex-row'>
          <div
            className={cn(
              styles.selectGradient,
              'flex flex-col gap-12 justify-center p-6 bg-[#18191A] rounded-2xl w-full md:w-1/3 items-center'
            )}
          >
            <span className='text-xl font-bold'>{t('telco.skylo_sim')}</span>
            <div
              className={cn(
                styles.simShadow,
                styles.simGradient,
                'rounded-full size-[112px] relative'
              )}
            >
              <Image
                src='/images/telco/skylo-sim.gif'
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
            <span className='text-xl font-bold'>{t('telco.skylo_membership')}</span>
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
            <span className='text-xl font-bold'>{t('telco.live_chat_support')}</span>
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
