import {Button} from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Wheel from './wheel'

export default function GamificationPrivileges() {
  const { t } = useTranslation('common')

  return (
    <section className='container mt-8 flex flex-col gap-8 lg:flex-row'>
      <div
        style={{
          backgroundImage: `url('/images/feature/c5tdr7A28jQhIneIqmZiNoFEbjPl4XXMevbKQWIl.jpg')`,
        }}
        className='group/gamification w-full rounded-3xl bg-cover bg-center bg-no-repeat p-4 sm:p-8 lg:w-1/2'
      >
        <div className='flex h-24 flex-col justify-center gap-2'>
          <h2 className='origin-left text-left text-xl font-semibold transition-all duration-300 sm:text-[40px] sm:group-hover/gamification:scale-75'>
            {t('features.gamification_title')}
          </h2>
          <p className='text-base opacity-100 transition-opacity duration-300 group-hover/gamification:opacity-100 sm:opacity-0'>
            {t('features.gamification_description')}
          </p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center gap-10'>
          <Wheel />
          <div className='relative flex min-h-[122px] w-full max-w-[412px] rounded-3xl shadow'>
            <Image
              className='z-10'
              src={
                '/images/feature/rxB0ZNSeDPqWLDxC56RwWGXRxSPZGUUKneoSEYBZ.webp'
              }
              alt='game icon'
              fill
            />
          </div>
        </div>
      </div>

      <div className='group/privileges w-full rounded-3xl bg-[#1D0A29] p-4 sm:p-8 lg:w-1/2'>
        <h2 className='text-xl font-semibold sm:text-[40px]'>
          {t('features.exclusive_privileges_title')}
        </h2>
        <p className='text-base opacity-100 transition-opacity group-hover/privileges:opacity-100 sm:text-xl sm:opacity-0'>
          {t('features.exclusive_privileges_description')}
        </p>

        <div className='mx-auto my-8 flex max-w-[482px] items-center justify-between'>
          <div className='relative'>
            <div
              className='absolute left-[-15px] size-full rotate-90'
              style={{
                background:
                  'linear-gradient(180deg, rgba(29, 10, 41, 0) 0%, #1D0A29 80.07%)',
              }}
            />
            <div
              style={{
                backgroundImage: `url("/images/feature/RVpmygv3sZcAeEPYYhz7rZA6LBig1T0AFr8oBDmN.png")`,
              }}
              className='flex size-20 flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat text-center sm:size-32'
            >
              <h3 className='text-lg font-bold sm:text-2xl'>15%</h3>
              <p>{t('features.cashback_label')}</p>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url("/images/feature/sCdjydEh6URXEb5VTkPlDqCL08a1G3P0AmbBBl6q.png")`,
            }}
            className='flex size-24 rotate-12 flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat text-center sm:size-[150px]'
          >
            <h3 className='text-lg font-bold sm:text-2xl'>50+</h3>
            <p>{t('features.partners_label')}</p>
          </div>

          <div className='relative'>
            <div
              className='absolute right-[-15px] size-full -rotate-90'
              style={{
                background:
                  'linear-gradient(180deg, rgba(29, 10, 41, 0) 0%, #1D0A29 80.07%)',
              }}
            />
            <div
              style={{
                backgroundImage: `url("/images/feature/yUKKkUwsJYUOejru4Aa7XnFpyFwjPuUQFeAB4KFj.png")`,
              }}
              className='flex size-20 flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat text-center sm:size-32'
            >
              <h3 className='text-lg font-bold sm:text-2xl'>100+</h3>
              <p>{t('features.privileges_label')}</p>
            </div>
          </div>
        </div>

        <Image
          src={'/images/feature/Y0cZXbdtzmbZjjFtMnUMHbyr7qVTiuGb8THXwlQ8.webp'}
          className='mx-auto'
          width={460}
          height={105}
          alt='privileges banner'
          quality={100}
        />

        <div className='mx-auto mt-8 flex max-w-[460px] gap-4'>
          <div
            style={{
              backgroundImage: `url("/images/feature/7h21TXsFpuK4kvR7lgJoKyLk5MtV8QpyAh8kKv0P.png")`,
            }}
            className='flex w-1/2 flex-col items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat p-3 sm:p-6'
          >
            <div className='flex'>
              <Button
                className='rounded-3xl bg-transparent text-xs sm:text-xl'
                variant='outline'
              >
                {t('features.loyalty_coins')}
              </Button>
              <div className='flex size-10 items-center justify-center rounded-full bg-white p-1'>
                <Image
                  src='/images/feature/coin.webp'
                  width={20}
                  height={16}
                  alt='coin icon'
                />
              </div>
            </div>

            <div className='flex'>
              <div className='flex size-10 items-center justify-center rounded-full bg-white p-1'>
                <ArrowRight color='#9413F1' />
              </div>
              <Button
                className='rounded-3xl bg-transparent text-xs sm:text-xl'
                variant='outline'
              >
                {t('features.redeem')}
              </Button>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url("/images/feature/b5iND8m9PPZnZqKSrSW2CrZVJhCMBNhinUkmU9S5.png")`,
            }}
            className='flex w-1/2 items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat p-3 pt-4 sm:p-6'
          >
            <h3 className='text-lg font-semibold sm:text-xl'>
              {t('features.coins_bundle_purchase')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
