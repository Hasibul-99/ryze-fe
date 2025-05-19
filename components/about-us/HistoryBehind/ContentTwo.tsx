export default function ContentTwo() {
  return (
    <div className='md:flex md:h-screen w-screen md:w-full px-10'>
      <div>
        <img
          src={'/images/about-us/Image2.png'}
          className='w-screen md:w-[650px] h-60 md:h-screen'
          alt='image2'
        />
      </div>

      <div className='flex flex-col md:flex-row items-center p-0 gap-[30px] md:gap-[80px] mx-auto mt-6 md:mt-0'>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              Unlimited
            </h1>
            <p className='font-normal text-base leading-6 md:text-[24px] md:leading-[32px] text-white'>
              4G Internet
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              AI Tools
            </h1>
            <p className='font-normal text-base leading-6 md:text-[24px] md:leading-[32px] text-white'>
              for Productivity
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end p-0 gap-[30px] md:gap-[80px]'>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              Exclusive OTTs
            </h1>
            <p className='font-normal text-base leading-6 md:text-[24px] md:leading-[32px] text-white'>
              for unlimited entertainment
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end p-0 gap-[8px]'>
            <h1 className='font-normal text-[32px] leading-10 md:text-[40px] md:leading-[56px] text-white'>
              AI
            </h1>
            <p className='font-normal text-base leading-6 md:text-[24px] md:leading-[32px] text-white'>
              Powered App
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
