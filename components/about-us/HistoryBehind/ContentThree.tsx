export default function ContentThree() {
  return (
    <div className='inline-block md:block'>
      <div className='mx-auto flex w-screen flex-col items-center gap-6 p-0 pb-10 pt-20 md:mb-16 md:h-[184px] md:w-10/12 md:gap-8 md:py-40 '>
        <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
          <span className='text-center text-lg font-normal leading-[24px] text-[#FFFFFF] md:text-[16px]'>
            OUR VISION
          </span>
        </div>

        <div className='text-center text-2xl font-semibold leading-8 text-[#FFFFFF] md:text-[32px] md:font-normal md:leading-[48px]'>
          To empower a generation to live boundlessly on their terms through
          limitless connectivity, AI powered app and unlimited internet and
          entertainment.
        </div>
      </div>

      <div className='text-center md:h-[550px]'>
        <img
          src={'/images/about-us/Image3.png'}
          alt='image3'
          className='mx-auto w-screen rounded-2xl object-cover md:w-10/12'
        />
      </div>
    </div>
  )
}
