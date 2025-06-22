import {cn} from '@/lib/utils'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card'

type Props = {
  className?: string
}

export default function FeatureCard({className}: Props) {
  return (
    <Card
      className={cn(
        'max-w-[350px] h-full flex-1 w-full border border-[#303233] bg-[#18191A] p-4 text-center text-white flex flex-col justify-between',
        className && className
      )}
    >
      <CardHeader className='flex flex-col items-center px-1'>
        <Image
          src={'/images/home/fnc/crow-dynamic-color.png'}
          alt='card image'
          width={80}
          height={80}
        />
        <CardTitle className='text-[28px] font-bold'>Membership card</CardTitle>
        <CardDescription className='text-base text-white'>
          Free SkyLo membership card made exclusively for SkyLo customers.
        </CardDescription>
      </CardHeader>

      <CardContent className='h-5' />

      <CardFooter
        className={cn(
          'relative h-[180px] w-full'
          // i === 1 && 'h-[235px] rounded-lg'
        )}
      >
        <Image
          className='rounded-[10px]'
          src={'/images/home/fnc/membership-card.png'}
          alt='footer image'
          fill
          quality={100}
        />
      </CardFooter>
    </Card>
  )
}
