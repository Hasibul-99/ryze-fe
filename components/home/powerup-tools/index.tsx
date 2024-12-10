import ExploreMoreButton from '@/components/ui/explore-more-button'
import Image from 'next/image'

export default function PowerupTools() {
  return (
    <section
      id='powerup-tools'
      className='container relative flex flex-col items-center px-4 pb-[120px] text-center'
    >
      <div>
        <h2 className='text-[20px] md:text-[48px]'>
          Power up your work with the best tools
        </h2>

        <h3 className='text-base text-[#D0D2D3] md:text-[24px]'>
          Work never becomes easier with the help of our productivity tools
        </h3>
      </div>

      <div className='mt-[54px] flex flex-wrap justify-center gap-4 md:mb-10 md:mt-20'>
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 4, 11,
          4, 1, 1, 1, 11, 11, 1, 1, 1,
        ].map((item, index) => (
          <div
            key={index}
            className='explore-item-shadow flex h-[132px] w-[110px] flex-col items-center justify-center gap-4 rounded-xl bg-[#18191A] p-4'
          >
            <Image
              src={'/images/icons/bongo.png'}
              alt='icon'
              className='size-16'
              width={64}
              height={64}
              quality={100}
            />
            <p className='text-[#D0D2D3]'>Click Up</p>
          </div>
        ))}
      </div>

      <div className='black-bg-gradient absolute bottom-[200px] h-[150px] w-full' />

      <ExploreMoreButton
        label={'Explore more'}
        link={'/'}
        className='mx-auto'
      />
    </section>
  )
}
