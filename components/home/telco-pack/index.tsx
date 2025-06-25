import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import ExploreMoreButton from '../../ui/explore-more-button'

export default function TelcoPack() {
  return (
    <section
      id='telcoPack'
      className='section-bg-gradient relative overflow-hidden py-[120px]'
    >
      {/* --- start rounded corner --- */}
      <div className='primary-gradient absolute right-[-270px] top-[-270px] size-[400px] rounded-full p-2.5 md:right-[-300px] md:top-[-300px] md:size-[500px] lg:size-[600px]'>
        <div className='border-gradient-bg size-full rounded-full'></div>
      </div>
      <div className='primary-gradient absolute bottom-[-270px] left-[-270px] size-[400px] rounded-full p-2.5 md:bottom-[-300px] md:left-[-300px] md:size-[500px] lg:size-[600px]'>
        <div className='border-gradient-bg-2 size-full rounded-full'></div>
      </div>
      {/* --- end rounded corner --- */}

      <div className='container flex flex-col items-center'>
        {/* --- heading --- */}
        <div className='max-w-[630px] text-center'>
          <h2 className='text-xl md:text-5xl'>
            Enjoy the best 4G network and telco pack with SkyLo
          </h2>
          <p className='mt-6 text-lg text-[#D0D2D3] md:text-2xl'>
            Starting at just TK 299 per month
          </p>
        </div>

        <Carousel className='mt-10 md:container'>
          <CarouselContent className='st-carousel-content mx-auto max-w-[280px] bg-transparent md:max-w-full'>
            {[1, 1, 1].map((item, i) => (
              <CarouselItem key={i} className='mx-auto pl-0 md:pt-[100px]'>
                <div className='relative mx-auto h-[500px] w-[250px] md:h-[600px] md:w-[300px]'>
                  <Image
                    src={'/images/home/telco/telco-1.png'}
                    alt='telco'
                    className='w-full rounded-3xl'
                    fill
                    quality={100}
                  />
                  <Image
                    src={'/images/home/telco/telco-1-up.png'}
                    alt='telco'
                    className='absolute -left-1/2 top-[-50px] hidden md:block'
                    width={250}
                    height={180}
                    quality={100}
                  />
                  <div className='button-bg-gradient SkyLo-sim-shadow absolute right-[-30%] top-1/3 hidden size-[130px] translate-x-[-30%] items-center justify-center rounded-full opacity-95 md:flex'>
                    <Image
                      src={'/images/home/telco/ryze-sim.gif'}
                      alt='telco'
                      width={344}
                      height={432}
                      quality={100}
                      className='m-auto max-w-[100px]'
                    />
                  </div>
                </div>
                <ExploreMoreButton
                  label={'Explore more'}
                  link={'/'}
                  className='telco-pack mx-auto'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className='border-gradient size-10 border hover:bg-[#2C0548] md:!left-20 md:size-16'
            iconSize='size-5 md:size-6'
          />
          <CarouselNext
            className='border-gradient size-10 border hover:bg-[#2C0548] md:!right-20 md:size-16'
            iconSize='size-5 md:size-6'
          />
        </Carousel>
      </div>
    </section>
  )
}
