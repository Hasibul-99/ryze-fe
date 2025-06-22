import {Fragment} from 'react'
import styles from './ott-summary.module.scss'

export default function OttSummaryComponent() {
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
                Unlimited 4G Internet
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                Boundless, reliable 4G high-speed network to keep up with your
                every move
              </p>
            </div>

            <div className='h-[0.1px] w-full max-w-xs bg-[#B0B3B5] lg:h-[150px] lg:w-[0.1px]' />
          </Fragment>

          <Fragment>
            <div className='max-w-sm'>
              <h3 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                OTT: Endless Choices
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                Curated content across OTT platforms to keep your entertainment
                fueled to choose from
              </p>
            </div>

            <div className='h-[0.1px] w-full max-w-xs bg-[#B0B3B5] lg:h-[150px] lg:w-[0.1px]' />
          </Fragment>

          <Fragment>
            <div className='max-w-sm'>
              <h3 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                AI-Powered App
              </h3>
              <p className='text-lg sm:text-xl lg:text-2xl'>
                Enhance your SkyLo experience with the most intelligent app
              </p>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  )
}
