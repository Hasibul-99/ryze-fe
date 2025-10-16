import Layout from '@/components/layout'
import PrivacyHeader from '@/components/privacy-and-cookie/Header'
import PrivacyAndCookieContent from '@/components/privacy-and-cookie/PrivacyAndCookie'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function PrivacyPolicy() {
  return (
    <Layout id='privacy-policy'>
      <PrivacyHeader />
      <PrivacyAndCookieContent />
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
