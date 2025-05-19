import Image from 'next/image'

const HeroItem = ({
  imgSrc,
  alt,
  title,
}: {
  imgSrc: string
  alt: string
  title: string
}) => {
  return (
    <div className='flex w-full flex-row items-center gap-[24px] rounded-[16px] bg-[rgba(143,143,143,0.5)] p-6 backdrop-blur-[0.5px] md:min-w-72 md:flex-col md:justify-center md:py-14'>
      <Image
        src={imgSrc}
        alt={alt}
        className='size-10 md:size-[100px]'
        width={100}
        height={100}
        quality={100}
      />
      <p className='text-center text-base font-semibold leading-6 text-white md:text-[28px] md:leading-[36px]'>
        {title}
      </p>
    </div>
  )
}

export default function ConTactUsHero() {
  return (
    <section>
      <div className='secondary-gradient overflow-hidden pt-28'>
        <div className='mx-auto mb-16 flex w-full flex-col items-center gap-10 pt-8 md:mb-28 md:h-[184px] md:pt-16 lg:w-9/12 '>
          <div className='rounded-full border border-[#FFFFFF] bg-[rgba(109,105,113,0.3)] px-12 py-6 backdrop-blur-[10px] md:px-6 md:py-3'>
            <span className='text-center text-[16px] font-normal leading-[24px] text-[#FFFFFF]'>
              CONTACT US
            </span>
          </div>

          <div className='w-64 text-center text-2xl font-semibold leading-8 text-[#FFFFFF] md:w-auto md:text-[40px] md:font-normal md:leading-[48px]'>
            Have a question? We got you.
          </div>
        </div>

        <div className='md:auto mx-auto flex w-72 flex-col items-start justify-center gap-6 p-0 pb-28 md:flex-row md:gap-10'>
          <HeroItem
            imgSrc={'/images/contact-us/map-pin.png'}
            alt='map-pin'
            title={'Our headquarter'}
          />

          <HeroItem
            imgSrc={'/images/contact-us/faq-icon.png'}
            alt='copy-front'
            title={'FAQ'}
          />

          <HeroItem
            imgSrc={'/images/icons/copy-front.svg'}
            alt='chat-bubble'
            title={'Contact Us'}
          />
        </div>
      </div>
    </section>
  )
}
