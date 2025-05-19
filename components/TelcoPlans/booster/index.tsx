import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {BoosterSlider} from '@/components/ui/booster-slider'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {BellDot} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

export default function Booster() {
  const [dataBooster, setDataBooster] = useState(15)
  const [voiceBooster, setVoiceBooster] = useState(60)

  return (
    <div className='container flex flex-col items-center py-[60px] sm:py-[120px]'>
      <h2 className='text-center text-xl font-bold sm:text-5xl'>Booster</h2>
      <p className='mx-auto mt-6 max-w-[500px] text-center text-base text-[#D0D2D3] sm:text-2xl'>
        Running low on data or minute in your main Ryze package? Booster is the
        solution.
      </p>

      <div className='relative mx-auto mt-16 w-[312px] rounded-[60px] border-4 border-[#B4B2A7] sm:w-[366px]'>
        <div className='absolute -right-2 top-[30%] h-20 w-2 rounded-r-sm border-r border-r-[#c7c2c2] bg-[#B4B2A7]' />

        <div className='absolute -left-2 top-[20%] h-20 w-2 rounded-l-sm border-l border-l-[#c7c2c2] bg-[#B4B2A7]' />
        <div className='absolute -left-2 top-[35%] h-20 w-2 rounded-l-sm border-l border-l-[#c7c2c2] bg-[#B4B2A7]' />

        <Image
          src='/images/booster/status-bar.png'
          width={342}
          height={50}
          alt='status bar'
        />

        <div className='px-4 pb-8 pt-2'>
          {/* --- start profile --- */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Avatar className='bg-[#8028C8] p-1'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  className='rounded-full blur-sm'
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span>XXX</span>
                <span className='text-xs sm:text-base'>01XXXXXXXXX</span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center gap-2 rounded-full bg-white p-2.5'>
                <span className='text-sm font-bold text-black'>100</span>
                <Image
                  src='/images/booster/point.png'
                  width={24}
                  height={24}
                  alt='poiint'
                />
              </div>
              <div className='flex size-10 items-center justify-center rounded-full bg-white'>
                <BellDot color='black' />
              </div>
            </div>
          </div>
          {/* --- end profile --- */}

          <div className='mt-8 rounded-2xl bg-[#F2F2F7] p-6 text-black'>
            {/* --- data add on --- */}
            <div>
              <h3 className='mb-2 font-bold'>Data Add on</h3>
              <div className='flex gap-1.5'>
                {[5, 10, 15, 20, 25].map((data, index) => (
                  <div
                    key={data + index}
                    className={cn(
                      'rounded-3xl bg-white p-2 text-[9px] sm:text-xs font-bold cursor-pointer',
                      data === dataBooster && 'bg-black text-white'
                    )}
                    onClick={() => setDataBooster(data)}
                  >
                    {data} GB
                  </div>
                ))}
              </div>
              <BoosterSlider
                name='data-booster'
                className='my-5'
                min={5}
                max={25}
                step={5}
                defaultValue={[dataBooster]}
                value={[dataBooster]}
                onValueChange={(value) => {
                  setDataBooster(value[0])
                }}
              />
              <div className='rounded-lg bg-white px-4 py-2 font-bold shadow-sm'>
                {dataBooster} GB
              </div>
            </div>

            {/* --- voice add on --- */}
            <div className='mt-8'>
              <h3 className='mb-2 font-bold'>Voice Add on</h3>
              <div className='flex gap-1.5'>
                {[20, 40, 60, 80].map((data, index) => (
                  <div
                    key={data + index}
                    className={cn(
                      'rounded-3xl bg-white p-2 text-[9px] sm:text-xs font-bold cursor-pointer',
                      data === voiceBooster && 'bg-black text-white'
                    )}
                    onClick={() => setVoiceBooster(data)}
                  >
                    {data} Min
                  </div>
                ))}
              </div>
              <BoosterSlider
                name='voice-booster'
                className='my-5'
                min={20}
                max={80}
                step={20}
                value={[voiceBooster]}
                defaultValue={[voiceBooster]}
                onValueChange={(value) => {
                  setVoiceBooster(value[0])
                }}
              />
              <div className='rounded-lg bg-white px-4 py-2 font-bold shadow-sm'>
                {voiceBooster} Min
              </div>
            </div>
          </div>

          <Button className='btn btn-explore-more mt-6 h-12 w-full rounded-full bg-[#9413F1] font-bold hover:bg-[#9c24f1]'>
            Buy
          </Button>

          <div className='mx-auto mt-10 h-1.5 w-40 rounded-full bg-white' />
        </div>
      </div>
    </div>
  )
}
