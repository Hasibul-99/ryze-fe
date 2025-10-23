import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import GlobeBack from '@/public/svgs/globe-shape-back.svg'
import GlobeFront from '@/public/svgs/globe-shape-front.svg'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'

export default function AddOns() {
  const {t} = useTranslation('common')
  
  return (
    <section className='pb-20'>
      <div
        aria-hidden='true'
        className='relative -z-10 max-h-screen min-h-[500px] w-screen rotate-180 overflow-hidden md:min-h-[700px]'
      >
        <Image
          src={GlobeBack}
          alt='globe shape back'
          style={{width: '100%', opacity: 0.4, top: '10%'}}
          className='scale-x-125 md:scale-100'
          fill
        />
        <Image
          src={GlobeFront}
          alt='globe shape back'
          style={{width: '100%', top: '10%'}}
          className='scale-x-125 md:scale-100'
          fill
        />
      </div>

      <div className='container mt-[-150px] md:mt-[-200px]'>
        <h2 className='text-center text-xl sm:text-5xl'>{t('telco.add_ons_ott')}</h2>
        <p className='mx-auto mt-6 max-w-[530px] text-center text-base text-[#D0D2D3] sm:text-2xl'>
          {t('telco.add_ons_description')}
        </p>

        <Tabs defaultValue='all' className='w-full'>
          <TabsList className='relative mx-auto my-10 flex h-16 w-fit gap-5 rounded-full bg-[#30323399] px-4 md:my-16'>
            <TabsTrigger
              value={'all'}
              className='rounded-full text-base font-semibold'
            >
              {t('telco.all')}
            </TabsTrigger>

            <TabsTrigger
              value={'entertainment'}
              className='rounded-full text-base font-semibold'
            >
              {t('telco.entertainment')}
            </TabsTrigger>

            <TabsTrigger
              value={'productivity'}
              className='rounded-full text-base font-semibold'
            >
              {t('telco.productivity')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value={'all'}>
            <div
            // className={idx === 0 ? '' : 'mt-[60px] sm:mt-[120px]'}
            >
              <h3 className='text-right text-[28px] font-semibold'>
                {t('telco.entertainment')}
              </h3>
              <div className='mt-[30px] flex flex-wrap justify-center gap-8'>
                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/bongo.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>

                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/chorki.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
            // className={idx === 0 ? '' : 'mt-[60px] sm:mt-[120px]'}
            >
              <h3 className='text-right text-[28px] font-semibold'>
                {t('telco.productivity')}
              </h3>
              <div className='mt-[30px] flex flex-wrap justify-center gap-8'>
                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/toffee.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>

                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/telegram.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value={'entertainment'}>
            <div
            // className={idx === 0 ? '' : 'mt-[60px] sm:mt-[120px]'}
            >
              <h3 className='text-right text-[28px] font-semibold'>
                {t('telco.entertainment')}
              </h3>
              <div className='mt-[30px] flex flex-wrap justify-center gap-8'>
                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/bongo.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>

                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/chorki.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value={'productivity'}>
            <div
            // className={idx === 0 ? '' : 'mt-[60px] sm:mt-[120px]'}
            >
              <h3 className='text-right text-[28px] font-semibold'>
                {t('telco.productivity')}
              </h3>
              <div className='mt-[30px] flex flex-wrap justify-center gap-8'>
                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/toffee.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>

                <div className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'>
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/icons/telegram.png'}
                      alt={'bongo'}
                      fill
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
