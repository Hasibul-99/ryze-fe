import Layout from '@/components/layout'
import AddOns from '@/components/TelcoPlans/add-ons'
import Booster from '@/components/TelcoPlans/booster'
import ComparePacks from '@/components/TelcoPlans/compare-packs'
import FreeOtt from '@/components/TelcoPlans/FreeOtt'
import OttSummaryComponent from '@/components/TelcoPlans/ott-summary-component'
import Roaming from '@/components/TelcoPlans/roaming'
import TelcoPackIncluded from '@/components/TelcoPlans/telco-pack-included'
import TelcoHero from '@/components/TelcoPlans/TelcoHero'

export default function TelcoPlans() {
  return (
    <Layout id='telco-plan'>
      <TelcoHero />
      <FreeOtt />
      <OttSummaryComponent />
      <ComparePacks />
      <TelcoPackIncluded />
      <Booster />
      <AddOns />
      <Roaming />
    </Layout>
  )
}
