import Image from 'next/image'
import {EnBn} from '~/@types/common'
import {Card, CardContent, CardHeader} from '~/components/ui/card'
import {cn, translate} from '~/lib/utils'
import {getStorageUrl} from '~/utils/common'

type Props = {
  title: EnBn
  image: EnBn
  headerClass?: string
  localImage?: boolean
}

export default function WatchCard({
  title,
  image,
  headerClass,
  localImage,
}: Props) {
  return (
    <Card
      className={cn(
        'entertainment-card bg-[#18191A] cursor-pointer border border-[#303233] relative w-[184px] md:w-[232px] overflow-hidden rounded-xl p-4'
      )}
    >
      <CardHeader
        className={cn(
          'relative h-[200px] md:h-[250px]',
          headerClass && headerClass
        )}
      >
        <Image
          src={localImage ? translate(image) : getStorageUrl(translate(image))}
          alt='footer image'
          fill
          sizes='100%'
        />
      </CardHeader>

      <CardContent className='pb-0 pt-4'>
        <h2 className='text-sm font-bold text-white md:text-base'>
          {title.en}
        </h2>
      </CardContent>
    </Card>
  )
}
