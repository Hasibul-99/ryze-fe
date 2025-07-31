import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function useTranslation(pageName: string, lang?: string) {
  const {locale} = useRouter()
  const [data, setData] = useState<{[key: string]: string | null}>(null)

  useEffect(() => {
    import(`../lang/${pageName}/${lang || locale}.json`)
      .then((res) => setData(res))
      .catch((error) => console.error('Error loading translation. ', error))
  }, [locale, pageName, lang])

  return data
}
