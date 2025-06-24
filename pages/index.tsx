import FAQ from '@/components/common/faq'
import Entertainment from '@/components/home/entertainment'
import FriendsAndCommunity from '@/components/home/friends-and-community'
import Hero from '@/components/home/hero'
import Onboarding from '@/components/home/onboarding'
import Platforms from '@/components/home/platforms'
import PowerupTools from '@/components/home/powerup-tools'
import Privileges from '@/components/home/privileges'
import TelcoPack from '@/components/home/telco-pack'
import Layout from '@/components/layout'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {GetServerSideProps} from 'next'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return (
    <Layout id='home'>
      <Hero />
      <Platforms />
      <Onboarding />
      <Entertainment />
      <PowerupTools />
      <TelcoPack />
      <FriendsAndCommunity />
      <Privileges />
      <FAQ />
    </Layout>
  )
}

export const getServerSideProps = (async () => {
  return {
    props: {
      homeData: null,
      slug: 'home',
    },
  }
}) satisfies GetServerSideProps<{homeData: null; slug: string}>
