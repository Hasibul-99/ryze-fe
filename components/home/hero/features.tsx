import {Bell, Music4, Phone, Play, Smartphone} from 'lucide-react'

export default function Features() {
  return (
    <div className='hidden lg:block'>
      {/* --- watch --- */}
      <div className='feature absolute right-[350px] top-[140px] flex items-center justify-between gap-5 rounded-3xl px-3 py-2.5'>
        <p className='w-[180px] text-center text-lg font-semibold opacity-0'>
          Jump back to your recent watch
        </p>

        <div className='feature-icon-box icon-box-shadow rounded-full border border-[#969A9C] p-3 opacity-0'>
          <div className='primary-gradient flex size-[55px] items-center justify-center rounded-full'>
            <Play size={28} color='#ffffff' />
          </div>
        </div>
      </div>

      {/* --- real time --- */}
      <div className='feature absolute left-[350px] top-[140px] flex items-center gap-5 rounded-3xl px-3 py-2.5'>
        <div className='feature-icon-box icon-box-shadow rounded-full border border-[#969A9C] p-3 opacity-0'>
          <div className='primary-gradient flex size-[55px] items-center justify-center rounded-full'>
            <Phone size={28} color='#ffffff' />
          </div>
        </div>
        <p className='w-[180px] text-center text-lg font-semibold opacity-0'>
          Real-time phone and data usage
        </p>
      </div>

      {/* --- ott --- */}
      <div className='feature absolute right-[350px] top-[250px] flex items-center gap-5 rounded-3xl px-3 py-2.5'>
        <p className='w-[180px] text-center text-lg font-semibold opacity-0'>
          Quick access to your favorite OTTs
        </p>

        <div className='feature-icon-box icon-box-shadow rounded-full border border-[#969A9C] p-3 opacity-0'>
          <div className='primary-gradient flex size-[55px] items-center justify-center rounded-full'>
            <Smartphone size={28} color='#ffffff' />
          </div>
        </div>
      </div>

      {/* --- netflix --- */}
      <div className='feature absolute left-[350px] top-[320px] flex items-center gap-5 rounded-3xl px-3 py-2.5'>
        <div className='feature-icon-box icon-box-shadow rounded-full border border-[#969A9C] p-3 opacity-0'>
          <div className='primary-gradient flex size-[55px] items-center justify-center rounded-full'>
            <Bell size={28} color='#ffffff' />
          </div>
        </div>
        <p className='w-[180px] text-center text-lg font-semibold opacity-0'>
          Never miss an upcoming release
        </p>
      </div>

      {/* --- music --- */}
      <div className='feature absolute right-[350px] top-[390px] flex items-center gap-5 rounded-3xl px-3 py-2.5'>
        <p className='w-[180px] text-center text-lg font-semibold opacity-0'>
          Play your favorite music &amp; playlist
        </p>

        <div className='feature-icon-box icon-box-shadow rounded-full border border-[#969A9C] p-3 opacity-0'>
          <div className='primary-gradient flex size-[55px] items-center justify-center rounded-full'>
            <Music4 size={28} color='#ffffff' />
          </div>
        </div>
      </div>
    </div>
  )
}
