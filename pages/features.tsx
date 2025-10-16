import AppBundle4g from '@/components/Feature/app-bundle-4g'
import FeatureOtts from '@/components/Feature/FeatureOtts'
import FeaturesEntertainment from '@/components/Feature/FeaturesEntertainment'
import FeaturesHero from '@/components/Feature/FeaturesHero'
import GamificationPrivileges from '@/components/Feature/gamification-privileges'
import Layout from '@/components/layout'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Features() {
  return (
    <Layout id='feature'>
      <FeaturesHero />
      <FeatureOtts />
      <FeaturesEntertainment />
      <AppBundle4g />
      <GamificationPrivileges />
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
