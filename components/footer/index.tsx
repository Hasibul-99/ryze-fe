// import * as animationData from '@/public/svgs/skylo-lottie.json'
// import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'

// const Lottie = dynamic(() => import('react-lottie'), {ssr: false})

export default function Footer() {
  const {t} = useTranslation('common')
  // const defaultOptions = {
  //   loop: true,
  //   autoPlay: true,
  //   animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // }

  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     trigger: '#footer',
  //     start: '250 bottom',
  //     onEnter: () => {
  //       console.log('------onEnter-------', isStopped)
  //       setIsStopped(false)
  //     },
  //     scrub: 0.5,
  //   })
  // })

  // useEffect(() => {
  //   setIsStopped(true)
  // }, [router])

  return (
    <section id='footer' className='mt-[140px]'>
      <div className='relative w-screen'>
        <div className='flex w-full justify-center'>
          {/* <Lottie
            // @ts-ignore
            options={defaultOptions}
            height={400}
            width={400}
            // isStopped={isStopped}
          /> */}
        </div>

        <div className='container flex flex-col items-center justify-center text-white'>
          <h2 className='text-3xl md:text-6xl'>{t('footer.join_us')}</h2>

          <div className='mt-4 flex gap-4'>
            <Link href={'/'} target='_blank'>
              <Image
                src='/images/Google-Play-Store.png'
                alt='Google Play Store'
                width={218}
                height={80}
                quality={100}
              />
            </Link>
            <Link href={'/'} target='_blank'>
              <Image
                src='/images/App-Store.png'
                alt='App Store'
                width={218}
                height={80}
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>

      <footer className='container mt-[120px] flex justify-center gap-16 text-xs md:text-base'>
        <Link href='/privacy-policy'>{t('footer.terms_privacy')}</Link>
        <p>{t('footer.copyright')}</p>
        <Link href='https://www.dailylume.com/' target='_blank'>
          {t('footer.powered_by')}
        </Link>
      </footer>
    </section>
  )
}
