import { useTranslation } from 'next-i18next'

export default function ContentOne() {
  const { t } = useTranslation('common')

  return (
    <div className='h-full w-screen gap-8 px-10 py-20 md:flex md:w-full md:px-10 md:pt-40'>
      <div>
        <img src={'/images/about-us/Image.png'} alt='demo' />
      </div>

      <div className='flex w-full flex-col items-start p-0 md:gap-2 lg:w-1/2'>
        <h1 className='mb-3 mt-6 text-xl font-semibold leading-8 sm:text-3xl md:my-0 md:text-[47px] md:leading-[56px]'>
          {t('about.history_behind.content_one.title')}
        </h1>
        <p className='text-base font-normal leading-6 md:text-[24px] md:leading-[32px]'>
          {t('about.history_behind.content_one.description')}
        </p>
      </div>
    </div>
  )
}
