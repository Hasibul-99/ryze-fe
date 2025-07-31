// next-i18next.config.ts
import type {UserConfig} from 'next-i18next'

const config: UserConfig = {
  i18n: {
    defaultLocale: 'bn',
    locales: ['en', 'bn'], // English and Bangla
    localeDetection: false,
  },
}

export default config
