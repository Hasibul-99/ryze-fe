export default function ContentOne() {
  return (
    <div className='h-full w-screen gap-8 px-10 py-20 md:flex md:w-full md:px-10 md:pt-40'>
      <div>
        <img src={'/images/about-us/Image.png'} alt='demo' />
      </div>

      <div className='flex w-full flex-col items-start p-0 md:gap-2 lg:w-1/2'>
        <h1 className='mb-3 mt-6 text-xl font-semibold leading-8 sm:text-3xl md:my-0 md:text-[47px] md:leading-[56px]'>
          Enjoy sports, movies, TV shows & more with SkyLo
        </h1>
        <p className='text-base font-normal leading-6 md:text-[24px] md:leading-[32px]'>
          SkyLo began with a belief: the future belongs to those who live
          without hesitation. In a world that moves fast, we asked—what if your
          telco experience moved even faster? SkyLo isn’t just about staying
          connected; it’s about empowering bold lifestyles. Whether it’s
          streaming, gaming, or creating, SkyLo is built for limitless ambition.
          Because today’s generation doesn’t just go online — they take off.
        </p>
      </div>
    </div>
  )
}
