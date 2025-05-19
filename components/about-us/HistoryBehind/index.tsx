import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ContentFive from './ContentFive'
import ContentFour from './ContentFour'
import ContentOne from './ContentOne'
import ContentThree from './ContentThree'
import ContentTwo from './ContentTwo'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function HistoryBehind() {
  useGSAP(() => {
    // if (!isMobileScreen().matches) {
    const sections = gsap.utils.toArray('.slide')
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-sliders',
        pin: '.main',
        pinSpacing: true,
        scrub: 1,
        end: '+=3000',
        // markers: true,
      },
    })
    // }
  }, [])

  return (
    <div className='main overflow-x-hidden'>
      <div className='horizontal-sliders md:flex w-[500%] overflow-x-hidden'>
        <div className='slide w-full '>
          <ContentOne />
        </div>
        <div className='slide w-full '>
          <ContentTwo />
        </div>
        <div className='slide w-full '>
          <ContentThree />
        </div>
        <div className='slide w-full '>
          <ContentFour />
        </div>
        <div className='slide w-full '>
          <ContentFive />
        </div>
      </div>
    </div>
  )
}
