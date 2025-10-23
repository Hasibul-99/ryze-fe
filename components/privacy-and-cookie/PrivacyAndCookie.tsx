import {useState} from 'react'
import {useTranslation} from 'next-i18next'
import SelectCustom from '../common/Select'

export default function PrivacyAndCookieContent() {
  const {t} = useTranslation('common')
  const [selectedTab, setSelectedTab] = useState<string | undefined>(
    'data-protection'
  )

  return (
    <section className='flex flex-row p-0 jodit-wysiwyg'>
      <div className='hidden md:flex flex-col items-start p-[40px_122px] gap-[40px] w-[430px] '>
        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'data-protection' === selectedTab ? 'text-[#9413F1]' : 'text-white'
          }`}
          onClick={() => setSelectedTab('data-protection')}
        >
          {t('privacy.data_protection')}
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'policy-privacy' === selectedTab ? 'text-[#9413F1]' : 'text-white'
          }`}
          onClick={() => setSelectedTab('policy-privacy')}
        >
          {t('privacy.policy_privacy')}
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'policy-terms-of-use' === selectedTab
              ? 'text-[#9413F1]'
              : 'text-white'
          }`}
          onClick={() => setSelectedTab('policy-terms-of-use')}
        >
          {t('privacy.policy_terms_of_use')}
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'cookies-policy' === selectedTab ? 'text-[#9413F1]' : 'text-white'
          }`}
          onClick={() => setSelectedTab('cookies-policy')}
        >
          {t('privacy.cookies_policy')}
        </div>
      </div>

      <div className='flex flex-col items-center p-6 md:p-[40px_122px_40px_40px] gap-[32px]'>
        <div className='md:hidden w-full mt-20'>
          <SelectCustom
            options={[
              {value: 'data-protection', label: t('privacy.data_protection')},
              {value: 'policy-privacy', label: t('privacy.policy_privacy')},
              {value: 'policy-terms-of-use', label: t('privacy.policy_terms_of_use')},
              {value: 'cookies-policy', label: t('privacy.cookies_policy')},
            ]}
            setSelectedTab={setSelectedTab}
            value={selectedTab}
          />
        </div>

        <div>
          {selectedTab === 'data-protection' ? <DataProtection /> : null}
        </div>
      </div>
    </section>
  )
}

export const DataProtection = () => {
  return <>Hello</>
}
