import { useTranslation } from 'next-i18next'

export default function ContentFour() {
  const { t } = useTranslation('common')

  return (
    <div className='inline-block md:block'>
      <div className='mb-5 flex w-screen flex-col items-center gap-6 pt-20 md:mx-auto md:mb-48 md:h-[184px] md:w-10/12 md:gap-8 md:pt-40 '>
        <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
          <span className='text-center text-lg font-normal leading-[24px] text-[#FFFFFF] md:text-[16px]'>
            {t('about.history_behind.content_four.mission_label')}
          </span>
        </div>

        <div className='px-5 text-center text-xl text-[#FFFFFF] md:text-3xl'>
          {t('about.history_behind.content_four.mission_text')}
        </div>
      </div>

      <div className='flex w-screen flex-col items-center justify-between gap-[40px] p-0 px-6  md:flex-row'>
        {/* <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/blog-1.f679e713.jpg'}
              alt='img1'
              className='rounded-2xl'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-xl font-semibold leading-8 text-white'>
              {t('about.history_behind.content_four.digital_lifestyle_title')}
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              {t('about.history_behind.content_four.digital_lifestyle_description')}
            </p>
          </div>
        </div> */}
        <div className='group relative h-fill bg-gray-200 overflow-hidden'>
          {/* <Image
            src='/images/about-us/blog-1.f679e713.jpg'
            alt='img1'
            layout='fill'
            objectFit='cover'
            className='object-cover rounded-2xl'
          /> */}
          <img
            src={'/images/about-us/blog-1.f679e713.jpg'}
            alt='img1'
            className='rounded-2xl'
          />

          <div
            className='absolute inset-0 opacity-0 group-hover:opacity-100 translate-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0'
            style={{
              background:
                'linear-gradient(180deg, #212121 50%, rgba(33,33,33,0.8) 100%);',
            }}
          >
            <div className='absolute top-24 left-0 p-4 lg:p-6 bg-white '>
              <p>hello</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/blog-2.6d6d7fc2.jpg'}
              alt='img1'
              className='rounded-2xl'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-xl font-semibold leading-8 text-white'>
              Digital lifestyle
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              Elevate the people digital lifestyle and experiences
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/blog-3.dd321114.jpg'}
              alt='img1'
              className='rounded-2xl'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-2xl font-semibold leading-8 text-white'>
              {t('about.history_behind.content_four.digital_lifestyle_title')}
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              {t('about.history_behind.content_four.digital_lifestyle_description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
