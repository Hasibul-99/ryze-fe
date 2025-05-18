import Layout from '@/components/layout'
import ComparePacks from '@/components/TelcoPlans/compare-packs'
import FreeOtt from '@/components/TelcoPlans/FreeOtt'
import OttSummaryComponent from '@/components/TelcoPlans/ott-summary-component'
import TelcoHero from '@/components/TelcoPlans/TelcoHero'

export default function TelcoPlans() {
  return (
    <Layout id='telco-plan'>
      <TelcoHero />
      <FreeOtt />
      <OttSummaryComponent />
      <ComparePacks />
    </Layout>
  )
}
