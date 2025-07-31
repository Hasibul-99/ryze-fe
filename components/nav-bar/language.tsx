// components/common/Language.tsx
import {useRouter} from 'next/router'
import {cn} from '../../lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const locales = ['en', 'es', 'bn', 'fr', 'de']

export default function Language({className}: {className?: string}) {
  const router = useRouter()
  const currentLocale = router.locale ?? 'en'
  const {pathname, query, asPath} = router

  const handleLanguageChange = (value: string) => {
    if (!locales.includes(value)) return

    router.push({pathname, query}, asPath, {locale: value})
  }

  return (
    <div className={cn(className)}>
      <Select onValueChange={handleLanguageChange} value={currentLocale}>
        <SelectTrigger
          aria-label='Choose Language Button'
          className='w-[70px] border-none bg-transparent focus:border-none'
        >
          <SelectValue placeholder={currentLocale.toUpperCase()} />
        </SelectTrigger>

        <SelectContent className='bg-[#303233] text-white'>
          {locales.map((lng) => (
            <SelectItem key={lng} value={lng} aria-label={lng.toUpperCase()}>
              {lng.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
