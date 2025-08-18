// // next-i18next.config.ts
// import type {UserConfig} from 'next-i18next'

// const config: UserConfig = {
//   i18n: {
//     defaultLocale: 'bn',
//     locales: ['en', 'bn'], // English and Bangla
//     localeDetection: false,
//   },
// }

// export default config

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'fr', 'bn'], // add your supported languages
  },
}
