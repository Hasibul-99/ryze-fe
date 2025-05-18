import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Button} from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'
import styles from './compare-packs.module.scss'

const packages = [
  {
    name: 'PRO',
    regular_price: 577,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: '300',
    loyalty_discount: 41600,
    sms: '500',
    tag: 'Value Pack',
    otts: 2,
    ott_icons: [],
  },
  {
    name: 'FLY',
    regular_price: 977,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 500,
    loyalty_discount: 70300,
    sms: '500',
    tag: 'Recommended',
    ott_icons: [],
  },
  {
    name: 'ELEVATE',
    regular_price: 777,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 400,
    loyalty_discount: 55900,
    sms: null,
    tag: 'Recommended',
    ott_icons: [],
  },
  {
    name: 'BLAZE',
    regular_price: 227,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '0',
    loyalty_discount: 16400,
    sms: null,
    tag: 'True Endless',
    ott_icons: [],
  },
  {
    name: 'LIFT',
    regular_price: 677,
    data_volume: 999999,
    validity: '30 Days',
    voice_volume: 0,
    loyalty_discount: 48800,
    sms: null,
    tag: 'True Endless',
    ott_icons: [],
  },
  {
    name: 'STARTER',
    regular_price: 377,
    data_volume: '999999',
    validity: '30 Days',
    voice_volume: '200',
    loyalty_discount: 27200,
    sms: null,
    tag: 'Popular',
    ott_icons: [],
  },
  {
    name: 'PULSE',
    regular_price: 177,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '50',
    loyalty_discount: 12800,
    sms: null,
    tag: 'Value Pack',
    ott_icons: [],
  },
  {
    name: 'VIBE',
    regular_price: 277,
    data_volume: '999999',
    validity: '7 Days',
    voice_volume: '50',
    loyalty_discount: '20000',
    sms: null,
    tag: 'Recommended',
    ott_icons: [],
  },
]

export default function ComparePacks() {
  const [selectedPack, setSelectedPack] = useState({
    0: '0',
    1: '1',
    2: '2',
  })

  return (
    <div className='container pt-[120px] text-center'>
      <h2 className='text-xl sm:text-5xl'>Compare Ryze telco packs</h2>
      <p className='mt-3 text-base sm:mt-6 sm:text-2xl'>
        Starting at only TK 377 per month
      </p>

      <div className='mt-10 flex justify-center gap-4 sm:mt-20 md:gap-10 lg:justify-between'>
        {Array.from({length: 3}).map((_, i) => {
          const selectedPackage = packages[selectedPack[i] * 1]

          return (
            <div
              key={i}
              className={cn('w-1/2 lg:w-1/3', i === 2 && 'hidden lg:block')}
            >
              <Select
                onValueChange={(val) =>
                  setSelectedPack({...selectedPack, [i]: val})
                }
                value={selectedPack[i]}
              >
                <SelectTrigger
                  className={cn(
                    styles.selectGradient,
                    'bg-[#18191A] border-none focus:border-none rounded-2xl py-3 px-6 font-bold'
                  )}
                >
                  <SelectValue placeholder='Choose a pack' />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pack, idx) => (
                    <SelectItem key={idx} value={idx.toString()}>
                      {pack.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className='mt-5 rounded-2xl border border-[#303233] bg-[#111213] p-2'>
                {/* --- gradient card --- */}
                <div className='primary-gradient h-[150px] w-full rounded-2xl p-6 lg:h-[200px]'>
                  <div className='flex h-full flex-col justify-between'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-2xl font-bold'>
                        {selectedPackage?.name}
                      </h3>
                      <div className='hidden items-center gap-1 rounded-full border px-2 py-1 lg:flex'>
                        <Image
                          src='/images/telco-plans/popular.png'
                          height={22}
                          width={22}
                          alt='icon'
                        />
                        <p className='text-sm'>{selectedPackage?.tag}</p>
                      </div>
                    </div>

                    <div className='flex h-fit items-center gap-1'>
                      <span className='text-lg font-semibold lg:text-[28px]'>
                        TK {selectedPackage?.regular_price}{' '}
                      </span>
                      <span className='hidden text-sm lg:inline-block lg:text-base'>
                        / {selectedPackage?.validity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* --- internet --- */}
                <div className='my-2 flex flex-col items-center justify-between rounded-2xl bg-[#18191A] px-8 py-6 lg:flex-row'>
                  <div className='flex flex-col items-center gap-2 lg:flex-row'>
                    <Image
                      src='/images/telco-plans/internet.png'
                      width={32}
                      height={32}
                      alt='internet'
                    />
                    <span className='text-base font-bold lg:text-xl'>
                      Internet
                    </span>
                  </div>
                  <span className='flex items-center gap-1'>
                    {Number(selectedPackage?.data_volume) >= 999999 ? (
                      <span>Endless</span>
                    ) : (
                      selectedPackage?.data_volume + ' GB'
                    )}
                  </span>
                </div>

                {/* --- call --- */}
                <div className='flex flex-col items-center justify-between rounded-2xl bg-[#18191A] px-8 py-6 lg:flex-row'>
                  <div className='flex flex-col items-center gap-2 lg:flex-row'>
                    <Image
                      src='/images/telco-plans/phone.png'
                      width={32}
                      height={32}
                      alt='phone'
                    />
                    <span className='text-base font-bold lg:text-xl'>Call</span>
                  </div>
                  <span>{selectedPackage?.voice_volume} Min</span>
                </div>

                {/* --- ott --- */}
                <div className='my-2 flex items-center justify-between rounded-2xl bg-[#18191A] px-8 py-6'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1' className='border-none'>
                      <AccordionTrigger chevronIcon>
                        <div className='flex items-center gap-2'>
                          <Image
                            src='/images/telco-plans/ott.png'
                            width={32}
                            height={32}
                            alt='ott'
                          />
                          <span className='hidden text-base font-bold lg:inline lg:text-xl'>
                            Included OTTs
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='flex flex-wrap gap-2 lg:gap-4'>
                        {/* <span className='text-base font-bold lg:text-xl'>
                          Included OTTs
                        </span> */}
                        {selectedPackage?.ott_icons.map((icon, i) => (
                          <Image
                            className='size-10 rounded-[18px] lg:size-16'
                            key={i}
                            src={icon.image}
                            width={64}
                            height={64}
                            alt='icon'
                          />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* --- layalty --- */}
                <div className='flex flex-col items-center justify-between rounded-2xl bg-[#18191A] px-8 py-6 lg:flex-row'>
                  <div className='flex flex-col items-center gap-2 lg:flex-row'>
                    <Image
                      src='/images/telco-plans/medal.png'
                      width={32}
                      height={32}
                      alt='medal'
                    />
                    <span className='text-xl font-bold'>Loyalty Coin</span>
                  </div>
                  <span>{selectedPackage?.loyalty_discount}</span>
                </div>

                {/* --- buy pack --- */}
                <div className='flex flex-col px-2 py-6 md:px-4'>
                  <Button className='button-bg-gradient btn-shadow h-12 rounded-full py-6 font-bold md:h-16'>
                    Buy pack
                  </Button>
                  <ul className='list-disc pl-4 pt-4 text-start text-sm md:pl-6'>
                    <li>The listed prices are inclusive of VAT/TAX</li>
                    <li>Find the updated product price & offers in RYZE app</li>
                    <li>To experience RYZE full on, download RYZE app</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
