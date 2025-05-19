import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import {cn} from '@/lib/utils'

const BoosterSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, name, ...props}, ref) => {
  let gradientClassName = 'data-booster-gradient'
  if (name === 'voice-booster') gradientClassName = 'voice-booster-gradient'

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-8 w-full grow overflow-hidden rounded-full bg-[#D8D8DE] dark:bg-slate-800'>
        <SliderPrimitive.Range
          className={cn('absolute h-full dark:bg-slate-50', gradientClassName)}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'border-1 relative flex size-12 items-center justify-center rounded-full border-white bg-white opacity-65 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
          gradientClassName
        )}
      >
        <div className='absolute flex flex-col items-center justify-center gap-1'>
          <div className='size-1 rounded-full bg-white' />
          <div className='size-1 rounded-full bg-white' />
          <div className='size-1 rounded-full bg-white' />
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  )
})
BoosterSlider.displayName = SliderPrimitive.Root.displayName

export {BoosterSlider}
