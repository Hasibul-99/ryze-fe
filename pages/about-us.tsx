import AboutHero from '@/components/about-us/hero'
import HistoryBehind from '@/components/about-us/HistoryBehind'
import Layout from '@/components/layout'

export default function AboutUs() {
  return (
    <Layout id='about-us'>
      <AboutHero />
      <HistoryBehind />
    </Layout>
  )
}
