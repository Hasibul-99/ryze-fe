export default function ContentOne() {
  return (
    <div className='h-full w-screen gap-8 px-10 py-20 md:flex md:w-full md:px-10 md:pt-40'>
      <div>
        <img src={'/images/about-us/Image.png'} alt='demo' />
      </div>

      <div className='flex w-full flex-col items-start p-0 md:gap-2 lg:w-1/2'>
        <h1 className='mb-3 mt-6 text-xl font-semibold leading-8 sm:text-3xl md:my-0 md:text-[47px] md:leading-[56px]'>
          The Spark Behind SkyLo
        </h1>
        <p className='text-base font-normal leading-6 md:text-[24px] md:leading-[32px]'>
          SkyLo was born from a simple truth: today’s generation lives with
          purpose, passion, and no limits. What if a telco pack could keep up
          with that? The answer is SkyLo, powered by DailyLume. More than just
          data and calls, it’s designed for those who seize every moment and
          chase opportunities. People want to live boundlessly—not just staying
          connected but enjoying unlimited internet, entertainment, and endless
          possibilities. For those who never settle, SkyLo offers the freedom to
          connect, explore, and thrive.
        </p>
      </div>
    </div>
  )
}
