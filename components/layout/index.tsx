import ScrollDown from '@/components/common/scroll-down/scroll-down' //'~/components/common/scroll-down/scroll-down'
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import {cn} from '@/lib/utils'
import React from 'react'

type Props = {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function Layout({children, id, className}: Props) {
  return (
    <section
      id={id ?? 'layout'}
      className={cn(
        'min-h-[1000px] overflow-hidden font-proximanova',
        className && className
      )}
    >
      <NavBar />
      {children}
      <ScrollDown />
      <Footer />
    </section>
  )
}
