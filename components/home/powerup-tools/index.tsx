import ExploreMoreButton from '@/components/ui/explore-more-button'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'

export default function PowerupTools() {
  const {t} = useTranslation('common')
  
  return (
    <section
      id='powerup-tools'
      className='container relative flex flex-col items-center px-4 pb-[120px] text-center'
    >
      <div>
        <h2 className='text-[20px] md:text-[48px]'>
          {t('powerup_tools.title')}
        </h2>

        <h3 className='text-base text-[#D0D2D3] md:text-[24px]'>
          {t('powerup_tools.subtitle')}
        </h3>
      </div>

      <div className='mt-[54px] flex flex-wrap justify-center gap-4 md:mb-10 md:mt-20'>
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 4, 11,
          4, 1, 1, 1, 11, 11, 1, 1, 1,
        ].map((item, index) => (
          <div
            key={index}
            className='explore-item-shadow flex h-[132px] w-[110px] flex-col items-center justify-center gap-4 rounded-xl bg-[#18191A] p-4'
          >
            <Image
              src={'/images/icons/bongo.png'}
              alt={t('powerup_tools.icon_alt')}
              className='size-16'
              width={64}
              height={64}
              quality={100}
            />
            <p className='text-[#D0D2D3]'>{t('powerup_tools.tool_name')}</p>
          </div>
        ))}
      </div>

      <div className='black-bg-gradient absolute bottom-[200px] h-[150px] w-full' />

      <ExploreMoreButton
        label={t('powerup_tools.explore_more')}
        link={'/'}
        className='mx-auto'
      />
    </section>
  )
}
