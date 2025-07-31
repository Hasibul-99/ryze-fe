import {BigPlayButton, Player} from 'video-react'

export default function AboutHero() {
  return (
    <section>
      <div
        className={` bg-[url('/images/about-us/hero_bg.jpg')] !bg-cover !bg-center !bg-no-repeat overflow-hidden pt-28`}
        // style={{
        //   background: `url(${imageUrlMapper(
        //     translate(componentData.bg_image, locale)
        //   )})`,
        // }}
      >
        <div className='flex flex-col items-center lg:w-9/12 pt-8 md:pt-16 mb-16 md:mb-28 gap-10 w-full md:h-[184px] mx-auto'>
          <div className='py-6 md:py-3 px-12 md:px-6 bg-[rgba(109,105,113,0.3)] border border-[#FFFFFF] backdrop-blur-[10px] rounded-full'>
            <span className='font-normal text-3xl md:text-[16px] leading-6 md:leading-[24px] text-center text-[#FFFFFF]'>
              About Us
            </span>
          </div>

          <div className='w-64 md:w-auto text-xl leading-8 font-normal md:text-[40px] md:leading-[48px] text-center text-[#FFFFFF]'>
            What began as a simple thought became a powerful super app
          </div>
        </div>

        <div className='w-[250] h-[200] md:w-[600px] md:h-[400px] mx-auto mt-10 rounded-3xl'>
          <Player
            className='about-us-player'
            playsInline
            // poster='/images/about-us/b6cb828eed69c8f2283713899611088b.jpeg'
            src={'/images/about-us/18069166-uhd_3840_2160_24fps.mp4'}
          >
            <BigPlayButton position='center' />
          </Player>
        </div>

        <div className='h-20 lg:h-40'></div>
      </div>
    </section>
  )
}
