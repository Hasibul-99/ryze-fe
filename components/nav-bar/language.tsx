// import {useRouter as navigationRouter} from 'next/navigation'
import {useRouter} from 'next/router'
import {cn} from '../../lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function Language({className}: {className?: string}) {
  const router = useRouter()
  // const navRouter = navigationRouter()

  const handleLanguageChange = (value: string) => {
    const {pathname, query, asPath} = router
    router.push({pathname, query}, asPath, {locale: value})

    /* --- if we don't want to change url with prefix --- */
    // document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000`
    // navRouter.refresh()
  }

  return (
    <div className={cn(className && className)}>
      <Select onValueChange={handleLanguageChange} value={router.locale}>
        <SelectTrigger
          aria-label='Choose Language Button'
          className='w-[70px] border-none bg-transparent focus:border-none'
        >
          <SelectValue placeholder='EN' />
        </SelectTrigger>
        <SelectContent className='bg-[#303233] text-white'>
          <SelectItem aria-label='English' value='en'>
            EN
          </SelectItem>
          <SelectItem aria-label='Spanish' value='es'>
            ES
          </SelectItem>
          <SelectItem aria-label='French' value='fr'>
            FR
          </SelectItem>
          <SelectItem aria-label='German' value='de'>
            DE
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
