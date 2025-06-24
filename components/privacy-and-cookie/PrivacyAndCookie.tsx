import {useState} from 'react'
import SelectCustom from '../common/Select'

export default function PrivacyAndCookieContent() {
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
          Data Protection
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'policy-privacy' === selectedTab ? 'text-[#9413F1]' : 'text-white'
          }`}
          onClick={() => setSelectedTab('policy-privacy')}
        >
          Policy Privacy
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'policy-terms-of-use' === selectedTab
              ? 'text-[#9413F1]'
              : 'text-white'
          }`}
          onClick={() => setSelectedTab('policy-terms-of-use')}
        >
          Policy Terms of use
        </div>

        <div
          className={`font-semibold text-[24px] leading-[32px] w-60 cursor-pointer ${
            'cookies-policy' === selectedTab ? 'text-[#9413F1]' : 'text-white'
          }`}
          onClick={() => setSelectedTab('cookies-policy')}
        >
          Cookies Policy
        </div>
      </div>

      <div className='flex flex-col items-center p-6 md:p-[40px_122px_40px_40px] gap-[32px]'>
        <div className='md:hidden w-full mt-20'>
          <SelectCustom
            options={[
              {value: 'data-protection', lable: 'Data Protection'},
              {value: 'policy-privacy', lable: 'Policy Privacy'},
              {value: 'policy-terms-of-use', lable: 'Policy Terms of use'},
              {value: 'cookies-policy', lable: 'Cookies Policy'},
            ]}
            setSelectedTab={setSelectedTab}
            value={selectedTab}
          />
        </div>

        <div>
          {selectedTab === 'data-protection' ? <dataProtection /> : null}
        </div>
      </div>
    </section>
  )
}

export const dataProtection = () => {
  return <>Hello</>
}
