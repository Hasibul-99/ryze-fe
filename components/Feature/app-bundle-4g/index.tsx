import {cn} from '@/lib/utils'
import Image from 'next/image'
import Card from './card'

export default function AppBundle4g() {
  return (
    <section className='container mt-8 flex flex-col gap-8 sm:flex-row'>
      <div
        style={{
          backgroundImage: `url(${'/images/feature/GlkYfYV8ccwcPfsLfXgzQqY2DsjozDvzmJRkxbro.jpg'})`,
        }}
        className='group/curated w-full rounded-3xl bg-cover bg-center bg-no-repeat sm:w-1/2'
      >
        <div className='curated-gradient flex h-28 flex-col justify-center gap-2 rounded-t-3xl bg-green-500 p-6 pt-16'>
          <h2 className='origin-left text-left text-xl font-semibold transition-all duration-300 sm:text-[40px] sm:group-hover/curated:scale-75'>
            Curated app bundles
          </h2>
          <p className='text-base opacity-100 transition-opacity duration-300 group-hover/curated:opacity-100 sm:opacity-0'>
            Curated app bundles
          </p>
        </div>

        <div className='flex justify-center px-12 py-[80px]'>
          <div className='group/card relative mx-auto h-[255px] w-[265px]'>
            {[1, 2, 3].map((item, idx) => (
              <Card
                key={idx}
                className={cn(
                  'absolute h-full',
                  idx === 0 &&
                    'origin-bottom-right rotate-[-10deg] bg-purple-500 group-hover/card:rotate-[-15deg]',
                  idx === 1 && 'bottom-0 left-[30px] bg-green-500',
                  idx === 2 &&
                    'bottom-[-45px] left-[60px] z-40 origin-bottom-right rotate-[10deg] bg-pink-500 group-hover/card:rotate-[15deg]'
                )}
                title={'Starter Package'}
                description={'Your streaming journey starts here'}
                icons={[
                  '/images/feature/chorki.webp',
                  '/images/feature/chorki.webp',
                  '/images/feature/chorki.webp',
                ]}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/images/feature/8rXK0DEytRPoP16eopO4z13WyxBMWWrvAgjx1Qtq.jpg')`,
        }}
        className='group/4g min-h-[390px] w-full rounded-3xl bg-cover bg-center bg-no-repeat sm:w-1/2'
      >
        <div className='fastest-gradient rounded-t-3xl p-6 pb-24'>
          <div className='flex items-center justify-between'>
            <div className='flex origin-left flex-col transition-all duration-300 sm:group-hover/4g:scale-75'>
              <span className='gradient-text bg-clip-text text-[32px] font-bold leading-none sm:text-[64px]'>
                4G
              </span>
              <span className='text-[28px] sm:text-[40px]'>Network</span>
            </div>
            <div className='button-bg-gradient SkyLo-sim-shadow flex size-[80px] items-center justify-center rounded-full sm:size-[110px]'>
              <Image
                className='size-1/2 sm:size-2/3'
                src={
                  '/images/feature/I29KvadJM4L05rPlM0UVG7bSLEW4FCiTYgtMUZRx.webp'
                }
                alt='telco'
                width={61}
                height={70}
                quality={100}
              />
            </div>
          </div>

          <p className='text-xl opacity-100 transition-all duration-300 group-hover/4g:opacity-100 sm:mt-[-20px] sm:opacity-0'>
            The fastest and the most reliable 4G network
          </p>
        </div>
      </div>
    </section>
  )
}
