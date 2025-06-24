import Layout from '@/components/layout'
import PrivacyHeader from '@/components/privacy-and-cookie/Header'
import PrivacyAndCookieContent from '@/components/privacy-and-cookie/PrivacyAndCookie'

export default function PrivacyPolicy() {
  return (
    <Layout id='privacy-policy'>
      <PrivacyHeader />
      <PrivacyAndCookieContent />
    </Layout>
  )
}
