import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Fragment} from 'react'

interface Option {
  value: string
  label: string
}

interface SelectCustomProps {
  options: Option[]
  setSelectedTab: (tab: string) => void
  value: string | undefined
}

export default function SelectCustom({
  options,
  setSelectedTab,
  value,
}: SelectCustomProps) {
  return (
    <Fragment>
      <Select value={value} onValueChange={(val) => setSelectedTab(val)}>
        <SelectTrigger className='w-full border-0 border-inherit focus:border-inherit focus:border-0 focus:ring-offset-0 bg-[#18191A] shadow-[inset_0px_4px_4px_rgba(255,255,255,0.05)] rounded-full py-6 px-5 select-custom'>
          <SelectValue placeholder='Select a Item' />
        </SelectTrigger>
        <SelectContent className='bg-[#18191A] text-white'>
          {options?.length ? (
            <>
              {options.map((item) => (
                <SelectItem value={item.value} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </>
          ) : null}
        </SelectContent>
      </Select>
    </Fragment>
  )
}
