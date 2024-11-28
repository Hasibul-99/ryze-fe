import clsx from 'clsx'
import {MdKeyboardBackspace} from 'react-icons/md'

type Props = {
  color?: string
  bgColor?: string
  handleBackClick: () => void
}

export default function BackButton({color, bgColor, handleBackClick}: Props) {
  return (
    <MdKeyboardBackspace
      size={40}
      className={clsx(
        'cursor-pointer rounded-full p-2',
        bgColor ?? 'bg-white/50'
      )}
      color={color ?? 'white'}
      onClick={handleBackClick}
    />
  )
}
