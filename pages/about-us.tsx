import AboutHero from '@/components/about-us/hero'
import HistoryBehind from '@/components/about-us/HistoryBehind'
import Layout from '@/components/layout'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function AboutUs() {
  return (
    <Layout id='about-us'>
      <AboutHero />
      <HistoryBehind />
    </Layout>
  )
}

export const getServerSideProps = (async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}) satisfies GetServerSideProps<{}>
