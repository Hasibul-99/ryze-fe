import {cn} from '@/lib/utils'
import Image from 'next/image'
import {Card, CardContent, CardHeader} from '../../ui/card'

export default function ListenCard({
  img,
  title,
  singer,
}: {
  img: string
  title: string
  singer: string
}) {
  return (
    <Card
      className={cn(
        'entertainment-card listen bg-[#18191A] cursor-pointer border border-[#303233] relative overflow-hidden rounded-full flex gap-4 px-6 py-4'
      )}
    >
      <CardHeader className='relative size-[50px] md:size-[55px]'>
        <Image src={img} alt='footer image' fill quality={100} />
      </CardHeader>

      <CardContent className='p-0 text-start'>
        <h2 className='text-sm font-bold text-white md:text-base'>{title}</h2>
        <h3 className='uppercase text-[#B0B3B5]'>{singer}</h3>
      </CardContent>
    </Card>
  )
}
