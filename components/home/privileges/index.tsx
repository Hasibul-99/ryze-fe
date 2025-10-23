import {Card, CardContent, CardHeader} from '@/components/ui/card'
import Marquee from '@/components/ui/marquee'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'
import ExploreMoreButton from '../../ui/explore-more-button'

const ReviewCard = ({
  img,
  name,
  body,
  alt,
}: {
  img: string
  name: string
  body: string
  alt: string
}) => {
  return (
    <Card
      className={cn(
        'relative w-full cursor-pointer overflow-hidden rounded-xl border-none bg-transparent'
      )}
    >
      <CardHeader className='relative size-full h-[130px]'>
        <Image src={img} alt={alt} fill quality={100} />
      </CardHeader>

      <CardContent className='py-4'>
        <h2 className='font-bold'>{name}</h2>
        <p className='line-clamp-2 text-sm'>{body}</p>
      </CardContent>
    </Card>
  )
}

interface PrivilegesProps {
  componentData?: any[]
}

export default function Privileges({componentData}: PrivilegesProps) {
  const {t} = useTranslation('common')
  const constents = componentData?.length
    ? componentData.slice(1, componentData.length)
    : []

  return (
    <section
      id='privileges'
      className={cn(
        'section-bg-gradient py-[120px] flex flex-col items-center'
      )}
    >
      <div className='mb-[48px] flex flex-col items-center md:mb-[104px]'>
        <h2 className='text-xl md:text-5xl'>
          {t('privileges.title')}
        </h2>
        <p className='mt-4 w-2/3 text-center text-base md:mt-6 md:text-2xl'>
          {t('privileges.description')}
        </p>
      </div>
      <div className='relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg'>
        <Marquee pauseOnHover className='[--duration:100s]'>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((review, idx) => (
            <ReviewCard
              key={idx}
              img={'/images/home/privilege/privilege-1.png'}
              name={t('privileges.discount_name')}
              body={t('privileges.food_panda')}
              alt={t('privileges.footer_image_alt')}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:100s]'>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((review, idx) => (
            <ReviewCard
              key={idx}
              img={'/images/home/privilege/privilege-1.png'}
              name={t('privileges.discount_name')}
              body={t('privileges.food_panda')}
              alt={t('privileges.footer_image_alt')}
            />
          ))}
        </Marquee>
      </div>

      <ExploreMoreButton
        className='mx-auto'
        label={t('privileges.explore_more')}
        link={'/'}
      />
    </section>
  )
}
