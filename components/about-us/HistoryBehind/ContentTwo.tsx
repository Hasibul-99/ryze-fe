export default function ContentTwo() {
  return (
    <div className='md:flex md:h-screen w-screen md:w-full px-10'>
      <div>
        <img
          src={'/images/about-us/Image2.jpg'}
          className='w-screen md:w-[700px] h-60 md:h-screen'
          alt='image2'
        />
      </div>

      <div className='flex flex-col md:flex-row items-center p-0 gap-[30px] md:gap-[80px] mx-auto mt-6 md:mt-0'>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              One App
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              Everything You Need in One Place
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              All Your Shows
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              One Subscription. All Platforms.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              Total Access
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              Work, Play & Stream – No Limits
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              Connected & Smart
            </h1>
            <p className='font-normal text-base leading-6 md:text-[18px] md:leading-[32px] text-white'>
              Internet, AI Tools & OTTs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
