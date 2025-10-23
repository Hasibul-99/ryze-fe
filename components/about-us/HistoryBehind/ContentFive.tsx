import { useTranslation } from 'next-i18next'

export default function ContentFive() {
  const { t } = useTranslation('common')

  return (
    <div
      className={`bg-[url("/images/about-us/image5/png")] inline-block overflow-hidden !bg-cover  !bg-center !bg-no-repeat md:block`}
    >
      <div className='mb-20 flex w-screen flex-col items-center gap-6 pt-20 md:mx-auto md:mb-40 md:h-[184px] md:w-10/12 md:gap-8 md:pt-40 '>
        <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
          <span className='text-center text-lg font-normal leading-[24px] text-[#FFFFFF] md:text-[16px]'>
            {t('about.history_behind.content_five.team_title')}
          </span>
        </div>

        <div className='text-center text-2xl font-normal leading-8 text-[#FFFFFF] md:text-[32px] md:font-normal md:leading-[48px]'>
          {t('about.history_behind.content_five.team_values')}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-10 p-0 pb-20 md:flex-row'>
        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-01.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              {t('about.history_behind.content_five.mark_name')}
            </div>
            <span className='opacity-70'>{t('about.history_behind.content_five.mark_title')}</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-02.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              {t('about.history_behind.content_five.john_name')}
            </div>
            <span className='opacity-70'>{t('about.history_behind.content_five.john_title')}</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-03.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              {t('about.history_behind.content_five.kim_name')}
            </div>
            <span className='opacity-70'>{t('about.history_behind.content_five.kim_title')}</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-04.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              André Garcia
            </div>
            <span className='opacity-70'>Product Manager</span>
          </div>
        </div>
      </div>
    </div>
  )
}
