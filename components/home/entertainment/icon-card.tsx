import Image from 'next/image'
import {useRouter} from 'next/router'
import {EnBn} from '~/@types/common'
import {translate} from '~/lib/utils'
import {getStorageUrl} from '~/utils/common'

export default function IconCard({image}: {image: EnBn}) {
  const {locale} = useRouter() as {locale: keyof EnBn}

  return (
    <div className='icon-box-shadow rounded-2xl p-4'>
      <div className='relative flex size-[30px] items-center justify-center md:size-[60px] '>
        <Image
          src={getStorageUrl(translate(image, locale))}
          alt='icon'
          fill
          sizes='100%'
        />
      </div>
    </div>
  )
}
