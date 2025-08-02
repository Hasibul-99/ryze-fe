export default function ContentFive() {
  return (
    <div
      className={`bg-[url("/images/about-us/image5/png")] inline-block overflow-hidden !bg-cover  !bg-center !bg-no-repeat md:block`}
    >
      <div className='mb-20 flex w-screen flex-col items-center gap-6 pt-20 md:mx-auto md:mb-40 md:h-[184px] md:w-10/12 md:gap-8 md:pt-40 '>
        <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
          <span className='text-center text-lg font-normal leading-[24px] text-[#FFFFFF] md:text-[16px]'>
            Our Executive Team
          </span>
        </div>

        <div className='text-center text-2xl font-normal leading-8 text-[#FFFFFF] md:text-[32px] md:font-normal md:leading-[48px]'>
          The values that drive us
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-10 p-0 pb-20 md:flex-row'>
        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-01.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              Mark Zellers
            </div>
            <span className='opacity-70'>Founder &amp; CEO</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-02.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              John Zellers
            </div>
            <span className='opacity-70'>Co-Founder</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-03.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              Kim Yun Son
            </div>
            <span className='opacity-70'>Engineering Manager</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 bg-[rgba(109,105,113,0.3)] p-3 pb-6 backdrop-blur-[10px]'>
          <img src={'/images/about-us/team-04.jpg'} alt='img' />

          <div className='text-center '>
            <div className='text-[28px] font-semibold leading-[36px]'>
              André Garcia
            </div>
            <span className='opacity-70'>Product Manager</span>
          </div>
        </div>
      </div>
    </div>
  )
}
