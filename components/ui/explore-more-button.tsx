import {cn} from '@/lib/utils'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {Button} from './button'

type Props = {
  label?: string
  className?: string
  arrowSize?: number
  link?: string
  onClick?: () => void
}

export default function ExploreMoreButton({
  className,
  arrowSize = 24,
  label,
  link = '#',
  onClick,
}: Props) {
  return (
    <Link href={link} target={'_self'}>
      <Button
        className={cn(
          'mt-[56px] flex w-fit gap-3 rounded-full py-7 pr-4 btn btn-explore-more',
          className
        )}
        variant='st'
        size='st'
        onClick={onClick}
      >
        {label || 'Explore more'}
        <div className='primary-gradient btn-shadow rounded-full p-2'>
          <ArrowRight size={arrowSize} />
        </div>
      </Button>
    </Link>
  )
}
