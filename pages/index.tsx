import Hero from '@/components/home/hero'
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
}) satisfies GetServerSideProps<{homeData: any; slug: string}>
