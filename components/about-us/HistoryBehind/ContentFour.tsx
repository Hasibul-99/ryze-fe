export default function ContentFour() {
  return (
    <div className='inline-block md:block'>
      <div className='mb-10 flex w-screen flex-col items-center gap-6 pt-20 md:mx-auto md:mb-48 md:h-[184px] md:w-10/12 md:gap-8 md:pt-40 '>
        <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
          <span className='text-center text-lg font-normal leading-[24px] text-[#FFFFFF] md:text-[16px]'>
            OUR MISSION
          </span>
        </div>

        <div className='px-5 text-center text-xl text-[#FFFFFF] md:text-3xl'>
          We believe telecommunications goes beyond data plans; it elevates
          life’s finest experiences. SkyLo brings this vision to life with
          unlimited internet, boundless entertainment, and the tools needed to
          live, explore, and connect without boundaries.
        </div>
      </div>

      <div className='flex w-screen flex-col items-center justify-between gap-[40px] p-0 px-6  md:flex-row'>
        <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/b6cb828eed69c8f2283713899611088b.jpeg'}
              alt='img1'
              // className='w-screen'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-xl font-semibold leading-8 text-white'>
              Digital lifestyle
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              Elevate the people digital lifestyle and experiences
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/b6cb828eed69c8f2283713899611088b.jpeg'}
              alt='img1'
              // className='w-screen'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-xl font-semibold leading-8 text-white'>
              Digital lifestyle
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              Elevate the people digital lifestyle and experiences
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-[28px] p-0 md:mx-auto '>
          <div>
            <img
              src={'/images/about-us/b6cb828eed69c8f2283713899611088b.jpeg'}
              alt='img1'
              // className='w-screen'
            />
          </div>
          <div className='flex flex-col items-start justify-between gap-4 p-0 md:flex-row md:gap-[49px]'>
            <h1 className='text-2xl font-semibold leading-8 text-white'>
              Digital lifestyle
            </h1>
            <p className='text-lg font-normal leading-7 text-white'>
              Elevate the people digital lifestyle and experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
