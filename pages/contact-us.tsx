import FAQ from '@/components/common/faq'
import EnquiryForm from '@/components/contact-us/EnquiryForm'
import ConTactUsHero from '@/components/contact-us/Hero'
import OurHeadQuarter from '@/components/contact-us/OurHeadQuarter'
import Layout from '@/components/layout'

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
