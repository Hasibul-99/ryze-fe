import {cn} from '@/lib/utils'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

type Props = {
  className?: string
  title: string
  description: string
  icons?: string[]
}

export default function Card({className, title, description, icons}: Props) {
  const { t } = useTranslation('common')
  return (
    <div
      className={cn(
        className && className,
        'p-4 border border-white w-[200px] rounded-3xl transition-transform primary-gradient'
      )}
    >
      <Image
        src='/images/feature/logo.webp'
        alt={t('features.skylo_logo_alt')}
        width={134}
        height={32}
      />
      <h2 className='mb-2 mt-3 text-xl font-semibold'>{title}</h2>
      <div className='relative flex h-16'>
        {icons?.map((icon, index) => (
          <div
            key={index}
            className={cn(
              'absolute size-[50px] rounded-full bg-white p-1.5',
              index === 0 && 'z-20',
              index === 1 && 'z-10 left-[40px]',
              index === 2 && 'z-0 left-[80px]'
            )}
          >
            <Image src={icon} alt={t('features.icon_alt')} width={50} height={50} />
          </div>
        ))}
      </div>
      <p className='text-sm'>{description}</p>
    </div>
  )
}
