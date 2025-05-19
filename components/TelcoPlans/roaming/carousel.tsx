import Image from 'next/image'
import {RoamingItem} from '~/@types/telco-plans'
import Marquee from '~/components/ui/marquee'
import {getStorageUrl} from '~/utils/common'

export default function Carousel({data}: {data: RoamingItem[] | undefined}) {
  return (
    <div
      className='carousel absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2'
      style={{
        perspective: '1000px',
      }}
    >
      <Marquee className='[--gap:75px] sm:[--gap:100px]'>
        {data?.map((flag, index) => {
          return (
            <div
              key={index}
              className='flag-item relative flex size-[45px] cursor-pointer items-center justify-center rounded-full shadow-sm sm:size-[100px]'
            >
              <Image
                className='rounded-full object-cover'
                key={index}
                src={getStorageUrl(flag.image2.en ?? '')}
                fill
                alt='flag'
              />
            </div>
          )
        })}
      </Marquee>
    </div>
  )
}
