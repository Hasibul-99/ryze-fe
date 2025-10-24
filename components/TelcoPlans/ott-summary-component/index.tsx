import {Fragment} from 'react'
import { useTranslation } from 'next-i18next'
import styles from './ott-summary.module.scss'

export default function OttSummaryComponent() {
  const { t } = useTranslation('common')
  return (
    <div
      style={{
        backgroundImage: `url("/images/telco/S8IOrrA8W01uoEWoJo3R6vklEtLikcka0d1MvRYv.png")`,
      }}
      className={styles.ottSummary}
    >
      <div className='container'>
        <div className='flex flex-col items-center justify-between gap-10 border-[#B0B3B5] py-24 lg:flex-row lg:border-y'>
          <Fragment>
            <div className='max-w-sm'>
              <h3 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                {t('telco.unlimited_4g_internet')}
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                {t('telco.boundless_reliable_network')}
              </p>
            </div>

            <div className='h-[0.1px] w-full max-w-xs bg-[#B0B3B5] lg:h-[150px] lg:w-[0.1px]' />
          </Fragment>

          <Fragment>
            <div className='max-w-sm'>
              <h3 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                {t('telco.ott_endless_choices')}
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                {t('telco.curated_content_platforms')}
              </p>
            </div>

            <div className='h-[0.1px] w-full max-w-xs bg-[#B0B3B5] lg:h-[150px] lg:w-[0.1px]' />
          </Fragment>

          <Fragment>
            <div className='max-w-sm'>
              <h3 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                {t('telco.ai_powered_app')}
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                {t('telco.enhance_skylo_experience')}
              </p>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  )
}
