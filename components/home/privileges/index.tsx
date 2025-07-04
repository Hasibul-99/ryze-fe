import {Card, CardContent, CardHeader} from '@/components/ui/card'
import Marquee from '@/components/ui/marquee'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useRouter} from 'next/router'
import ExploreMoreButton from '../../ui/explore-more-button'

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string
  name: string
  body: string
}) => {
  return (
    <Card
      className={cn(
        'cursor-pointer border border-[#303233] relative w-[180px] overflow-hidden rounded-xl'
      )}
    >
      <CardHeader className='relative size-full h-[130px]'>
        <Image src={img} alt='footer image' fill quality={100} />
      </CardHeader>

      <CardContent className='py-4'>
        <h2 className='font-bold'>{name}</h2>
        <p className='line-clamp-2 text-sm'>{body}</p>
      </CardContent>
    </Card>
  )
}

export default function Privileges({componentData}: any) {
  const {locale} = useRouter() as {locale: keyof EnBn}
  const header = componentData?.at(0)
  const constents = componentData?.length
    ? componentData.slice(1, componentData.length)
    : []
  const firstRow = constents.slice(0, constents.length / 2)
  const secondRow = constents.slice(constents.length / 2)

  return (
    <section
      id='privileges'
      className={cn(
        'section-bg-gradient py-[120px] flex flex-col items-center'
      )}
    >
      <div className='mb-[48px] flex flex-col items-center md:mb-[104px]'>
        <h2 className='text-xl md:text-5xl'>
          Exciting privileges waiting for you
        </h2>
        <p className='mt-4 w-2/3 text-center text-base md:mt-6 md:text-2xl'>
          Exclusive lifestyle privileges curated for SkyLo members only
        </p>
      </div>
      <div className='relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg'>
        <Marquee pauseOnHover className='[--duration:100s]'>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((review, idx) => (
            <ReviewCard
              key={idx}
              img={'/images/home/privilege/privilege-1.png'}
              name={'5% Discount'}
              body={'Food Panda'}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:100s]'>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((review, idx) => (
            <ReviewCard
              key={idx}
              img={'/images/home/privilege/privilege-1.png'}
              name={'5% Discount'}
              body={'Food Panda'}
            />
          ))}
        </Marquee>
      </div>

      <ExploreMoreButton
        className='mx-auto'
        label={'Explore more'}
        link={'/'}
      />
    </section>
  )
}
