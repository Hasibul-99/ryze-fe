import FeatureOtts from '@/components/Feature/FeatureOtts'
import FeaturesEntertainment from '@/components/Feature/FeaturesEntertainment'
import FeaturesHero from '@/components/Feature/FeaturesHero'
import Layout from '@/components/layout'

export default function Features() {
  return (
    <Layout id='feature'>
      <FeaturesHero />
      <FeatureOtts />
      <FeaturesEntertainment />
    </Layout>
  )
}
