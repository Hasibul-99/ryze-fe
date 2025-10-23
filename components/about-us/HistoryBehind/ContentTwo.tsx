import { useTranslation } from 'next-i18next'

export default function ContentTwo() {
  const { t } = useTranslation('common')

  return (
    <div className='md:flex md:h-screen w-screen md:w-full px-10'>
      <div>
        <img
          src={'/images/about-us/Image2.jpg'}
          className='w-screen md:w-auto h-60 md:h-screen'
          alt='image2'
        />
      </div>

      <div className='flex flex-col md:flex-row items-center p-0 gap-[30px] md:gap-[80px] mx-auto mt-6 md:mt-0'>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              100K
              <span className='text-pink-600 font-montserrat text-[30px] font-semibold align-super relative -top-2 left-0'>
                +
              </span>
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              {t('about.history_behind.content_two.active_user')}
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              400K
              <span className='text-pink-600 font-montserrat text-[30px] font-semibold align-super relative -top-2 left-0'>
                +
              </span>
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              {t('about.history_behind.content_two.apps_download')}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              90
              <span className='text-pink-600 font-montserrat text-[30px] font-semibold align-super relative -top-2 left-0'>
                %
              </span>
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              {t('about.history_behind.content_two.satisfied_user')}
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              200
              <span className='text-pink-600 font-montserrat text-[30px] font-semibold align-super relative -top-2 left-0'>
                +
              </span>
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              {t('about.history_behind.content_two.partner_joined')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
