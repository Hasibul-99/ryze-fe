import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import CurvedMarquee from './curved-marquee'

export default function Roaming() {
  const {t} = useTranslation('common')
  
  return (
    <section className='py-20'>
      <div className='mb-10 flex flex-col items-center gap-6 px-4 text-center sm:mb-16'>
        <h2 className='text-xl sm:text-5xl'>{t('telco.roaming')}</h2>
        <p className='max-w-[575px] text-base text-[#D0D2D3] sm:text-2xl'>
          {t('telco.roaming_description')}
        </p>
      </div>

      <div className='relative flex justify-center'>
        <Image
          className='size-[210px] sm:size-[620px]'
          src='/images/telco-plans/window.png'
          width={620}
          height={620}
          alt=''
        />
        <div className='absolute top-1/2 -z-10 size-[150px] -translate-y-1/2 rounded-3xl bg-[url(/images/telco-plans/flag-bg.jpg)] bg-cover bg-center bg-no-repeat sm:size-[450px]' />
        {/* <RoamingCarousel data={roaming?.items} /> */}
        <CurvedMarquee />
      </div>
    </section>
  )
}
