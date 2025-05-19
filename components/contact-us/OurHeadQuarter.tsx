import Link from 'next/link'

export default function OurHeadQuarter() {
  return (
    <div className="bg-[url('/images/contact-us/image1.jpeg')] bg-cover bg-center bg-no-repeat overflow-hidden my-20">
      <div className='mx-auto md:w-[516px] flex flex-col justify-center items-center p-16 gap-10 bg-black border border-[#303233]'>
        {/* <img src={'/images/contact-us/image1.jpeg'} alt='Image' /> */}

        <div className='flex flex-col items-center gap-5'>
          <img
            src='/images/contact-us/map-pin.png'
            alt='map-pin'
            width={80}
            height={80}
          />
          <h1 className='font-semibold text-2xl leading-[40px] text-center text-white'>
            RYZE HQ
          </h1>
        </div>

        <div className='flex flex-col items-start p-0 gap-6 '>
          <div className='grid grid-cols-3 p-0 gap-6 '>
            <div>
              <h2 className='font-normal text-[16px] leading-6 text-white'>
                LOCATION
              </h2>
            </div>
            <div className='col-span-2'>
              <p className='font-normal text-base leading-6 text-white'>
                House 4, Tiger's Den, SW Bir Uttam Mir Shawkat Sarak, Dhaka
                1212, Bangladesh
              </p>
            </div>
            <div className='col-span-3 w-full border border-[#969A9C]'></div>

            <div>
              <h2 className='font-normal text-[16px] leading-6 text-white'>
                EMAIL
              </h2>
            </div>
            <div className='col-span-2'>
              <p className='font-normal text-base leading-6 text-white'>
                info@ryze.net
              </p>
            </div>

            <div className='col-span-3 w-full border border-[#969A9C]'></div>

            <div>
              <h2 className='font-normal text-[16px] leading-6 text-white'>
                PHONE
              </h2>
            </div>
            <div className='col-span-2'>
              <p className='font-normal text-base leading-6 text-white'>
                +88 01911304121
              </p>
            </div>

            <div className='col-span-3 w-full border border-[#969A9C]'></div>

            <div>
              <h2 className='font-normal text-[16px] leading-6 text-white'>
                SOCIAL MEDIA
              </h2>
            </div>
            <div className='col-span-2'>
              <div className='flex flex-row items-start p-0 gap-6'>
                <Link href={'/'} target='_blank'>
                  <img src='/svgs/facebook.svg' alt='facebook' />
                </Link>
                <Link href={'/'} target='_blank'>
                  <img src='/svgs/instagram.svg' alt='instagram' />
                </Link>
                <Link href={'/'} target='_blank'>
                  <img src='/svgs/x_logo.svg' alt='x' />
                </Link>
                <Link href={'/'} target='_blank'>
                  <img src='/svgs/linkedin.svg' alt='linkedin' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
