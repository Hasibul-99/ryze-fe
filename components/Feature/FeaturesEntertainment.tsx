import useWindowSize from '@/hooks/useWindowSize'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {RefreshCcw} from 'lucide-react'
import Image from 'next/image'
import {useRef, useState} from 'react'
import { useTranslation } from 'next-i18next'

export default function FeaturesEntertainment() {
  const { t } = useTranslation('common')
  const [current, setCurrent] = useState(1)
  const {width} = useWindowSize()
  const sectionRef = useRef(null)

  const {contextSafe} = useGSAP(
    () => {
      if ((width as number) < 1024) {
        gsap.set('.image-4', {yPercent: 200})
        gsap.set('.image-6', {yPercent: -200})
        return
      }
      gsap.set('.image-4', {yPercent: -200})
      gsap.set('.image-5', {yPercent: 200})
      gsap.set('.image-6', {yPercent: -200})
    },
    {scope: sectionRef}
  )

  const animateImages = (
    currentImage: string,
    targetImage: string,
    direction: number
  ) => {
    gsap.to(currentImage, {
      duration: 1,
      yPercent: direction * 200,
      onComplete: () => {
        gsap.to(targetImage, {yPercent: 0, duration: 1})
      },
    })
  }

  const handleRefresh = contextSafe(() => {
    if (current === 1) {
      animateImages('.image-1', '.image-4', -1)
      animateImages('.image-2', '.image-5', 1)
      animateImages('.image-3', '.image-6', -1)
      setCurrent(2)
    }

    if (current === 2) {
      animateImages('.image-4', '.image-1', -1)
      animateImages('.image-5', '.image-2', 1)
      animateImages('.image-6', '.image-3', -1)
      setCurrent(1)
    }
  })

  const handleRefreshMobile = contextSafe(() => {
    if (current === 1) {
      animateImages('.image-1', '.image-4', -1)
      animateImages('.image-3', '.image-6', 1)
      setCurrent(2)
    }

    if (current === 2) {
      animateImages('.image-4', '.image-1', 1)
      animateImages('.image-6', '.image-3', -1)
      setCurrent(1)
    }
  })

  return (
    <section
      ref={sectionRef}
      className='group container h-[500px] w-full overflow-hidden sm:h-[600px] md:h-[680px]'
    >
      {/* --- mobile view --- */}
      <div
        className={`relative flex size-full flex-col gap-10 bg-[url(/images/feature/entertainment-bg.jpg)] bg-cover bg-center bg-no-repeat lg:hidden`}
      >
        <div
          className='absolute bottom-10 left-1/2 z-50 -translate-x-1/2 cursor-pointer rounded-full bg-[#DCD0E6] p-5 shadow-md'
          onClick={handleRefreshMobile}
        >
          <RefreshCcw />
        </div>

        <div className='p-5'>
          <h2 className='text-xl font-semibold md:text-[40px]'>
            {t('features.entertainment_title')}
          </h2>
          <p className='mt-2 text-base md:text-xl'>
            {t('features.entertainment_description')}
          </p>
        </div>

        <div className='flex size-full justify-center gap-10 px-4'>
          <div className='relative h-full min-w-[45%] sm:min-w-[290px] md:min-w-[300px]'>
            <Image
              src={'/images/feature/eve-1.1.webp'}
              className='image-1 absolute bottom-0 h-fit'
              alt={t('features.entertainment_cartoon_alt')}
              fill
            />
            <Image
              src={'/images/feature/eve-1.2.webp'}
              className='image-4 h-fit'
              alt={t('features.entertainment_news_alt')}
              fill
            />
          </div>

          <div className='relative h-full min-w-[45%] sm:min-w-[275px] md:min-w-[290px]'>
            <Image
              src={'/images/feature/eve-2.1.webp'}
              className='image-3 absolute bottom-0 h-fit'
              alt={t('features.entertainment_tv_series_alt')}
              fill
            />
            <Image
              src={'/images/feature/eve-2.2.webp'}
              className='image-6 h-fit'
              alt={t('features.entertainment_game_alt')}
              fill
            />
          </div>
        </div>
      </div>

      {/* --- desktop view --- */}
      <div className='hidden size-full justify-between gap-10 bg-[url(/images/feature/entertainment-bg.jpg)] bg-cover bg-center bg-no-repeat lg:flex'>
        <div className='relative flex flex-col justify-between gap-10 pl-10 pt-10'>
          <div className='min-h-[156px]'>
            <h2 className='max-w-[360px] text-[40px] font-semibold group-hover:text-3xl'>
              {t('features.entertainment_title')}
            </h2>
            <p className='mt-2 block max-w-[360px] text-lg leading-tight transition-all group-hover:block lg:hidden'>
              {t('features.entertainment_description')}
            </p>
          </div>
          <div className='relative h-full min-h-[590px] max-w-[290px]'>
            <Image
              src={'/images/feature/eve-1.1.webp'}
              className='image-1 absolute bottom-0 h-fit'
              alt={t('features.entertainment_cartoon_alt')}
              fill
            />
            <Image
              src={'/images/feature/eve-1.2.webp'}
              className='image-4 h-fit'
              alt={t('features.entertainment_news_alt')}
              fill
            />
          </div>
        </div>

        <div className='relative flex max-h-[560px] min-w-[300px]'>
          <Image
            src={'/images/feature/eve-2.1.webp'}
            className='image-2 absolute top-0 h-fit'
            alt={t('features.entertainment_music_alt')}
            fill
          />
          <Image
            src={'/images/feature/eve-2.2.webp'}
            className='image-5 h-fit'
            alt={t('features.entertainment_music_alt')}
            fill
          />
        </div>

        <div className='relative flex min-w-[290px] flex-col items-center justify-between gap-10'>
          <div
            className='mt-10 cursor-pointer rounded-full bg-[#DCD0E699] p-5 shadow-md'
            onClick={handleRefresh}
          >
            <RefreshCcw />
          </div>
          <div className='relative h-full min-h-[590px] min-w-[290px]'>
            <Image
              src={'/images/feature/eve-3.1.webp'}
              className='image-3 absolute bottom-0 h-fit'
              alt={t('features.entertainment_tv_series_alt')}
              fill
            />
            <Image
              src={'/images/feature/eve-3.2.webp'}
              className='image-6 h-fit'
              alt={t('features.entertainment_game_alt')}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
