import FAQ from '@/components/common/faq'
import EnquiryForm from '@/components/contact-us/EnquiryForm'
import ConTactUsHero from '@/components/contact-us/Hero'
import OurHeadQuarter from '@/components/contact-us/OurHeadQuarter'
import Layout from '@/components/layout'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function ContactUs() {
  return (
    <Layout id='contact-us'>
      <ConTactUsHero />
      <EnquiryForm />
      <OurHeadQuarter />
      <FAQ />
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
