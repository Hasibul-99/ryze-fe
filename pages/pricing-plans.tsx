import Layout from '@/components/layout'
import AddOns from '@/components/TelcoPlans/add-ons'
import Booster from '@/components/TelcoPlans/booster'
import ComparePacks from '@/components/TelcoPlans/compare-packs'
import FreeOtt from '@/components/TelcoPlans/FreeOtt'
import OttSummaryComponent from '@/components/TelcoPlans/ott-summary-component'
import Roaming from '@/components/TelcoPlans/roaming'
import TelcoPackIncluded from '@/components/TelcoPlans/telco-pack-included'
import TelcoHero from '@/components/TelcoPlans/TelcoHero'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getServerSideProps = (async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}) satisfies GetServerSideProps<{}>
