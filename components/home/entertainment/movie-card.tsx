import {cn} from '@/lib/utils'
import Image from 'next/image'
import {Card, CardContent, CardHeader} from '../../ui/card'

export default function MovieCard({
  img,
  name,
  headerClass,
}: {
  img: string
  name: string
  headerClass?: string
}) {
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
        <Image src={img} alt='footer image' fill quality={100} />
      </CardHeader>

      <CardContent className='pb-0 pt-4'>
        <h2 className='text-sm font-bold text-white md:text-base'>{name}</h2>
      </CardContent>
    </Card>
  )
}
