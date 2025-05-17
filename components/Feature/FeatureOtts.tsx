import Image from 'next/image'
import ExploreMoreButton from '../ui/explore-more-button'
import Marquee from '../ui/marquee'

export default function FeatureOtts() {
  return (
    <section className='py-[120px]'>
      <h2 className='text-center text-xl font-bold sm:text-5xl'>
        Over 100+ OTTs
      </h2>
      <p className='mx-auto mt-6 max-w-[490px] text-center text-base text-[#D0D2D3] sm:text-2xl'>
        Ryze offers the best OTTs for you to choose from, there’s something for
        everyone!
      </p>

      <div className='relative mt-[50px] flex min-h-[500px] flex-col items-center justify-center sm:mt-[104px] sm:min-h-[656px]'>
        <>
          {
            <Marquee pauseOnHover>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((icon, idx) => (
                <div
                  className='icon-box-shadow rounded-2xl p-4 md:rounded-3xl'
                  key={idx}
                >
                  <div className='relative flex size-[30px] items-center justify-center md:size-[88px] '>
                    <Image
                      src={'/images/feature/chorki.webp'}
                      alt={'chorki'}
                      fill
                      quality={100}
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          }
        </>

        <Image
          src={'/images/feature/ott-app.webp'}
          className='absolute left-1/2 top-0 h-[500px] w-[290px] -translate-x-1/2 sm:h-[656px]  sm:w-[379px]'
          width={379}
          height={656}
          alt='ott mobile image'
        />
      </div>

      <ExploreMoreButton
        className='mx-auto mt-24'
        label={'Explore more'}
        link={'/'}
      />
    </section>
  )
}
