import {cn} from '@/lib/utils'
import React from 'react'

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}) {
  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 size-full'
        >
          <circle
            className='stroke-white/20 stroke-[.5px] dark:stroke-white/10'
            cx='50%'
            cy='50%'
            r={radius}
            fill='none'
            strokeDasharray={'4 4'}
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': duration,
            '--radius': radius,
            '--delay': -delay,
          } as React.CSSProperties
        }
        className={cn(
          'z-10 absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10',
          {'[animation-direction:reverse]': reverse},
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
