import {useTranslation} from 'next-i18next'

export default function PrivacyHeader() {
  const {t} = useTranslation('common')
  
  return (
    <div className='secondary-gradient overflow-hidden'>
      <div className='hidden md:block'>
        <div className='mt-20 flex flex-col justify-center items-start py-20 px-32 gap-4'>
          <h2 className='font-semibold text-[40px] leading-[48px] flex items-center text-white'>
            {t('privacy.privacy_policy')}
          </h2>
          <p className='font-normal text-2xl leading-[32px] text-white'>
            {t('privacy.privacy_policy_description')}
          </p>
        </div>
      </div>
    </div>
  )
}
