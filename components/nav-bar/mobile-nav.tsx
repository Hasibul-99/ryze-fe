import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {cn} from '@/lib/utils'
import GlobeBack from '@/public/svgs/globe-shape-back.svg'
import GlobeFront from '@/public/svgs/globe-shape-front.svg'
import * as animationData from '@/public/svgs/ryze-lottie.json'
import {Menu, X} from 'lucide-react'
// import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

// const Lottie = dynamic(() => import('react-lottie'), {ssr: false})

export default function MobileNav({
  links,
}: {
  links: {title: string; link: string}[]
}) {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Drawer direction='top'>
      <DrawerTrigger asChild>
        <div className='rounded-xl border border-[#333] p-2.5 lg:hidden'>
          <Menu size='24' />
        </div>
      </DrawerTrigger>

      <DrawerContent className='size-full overflow-y-auto rounded-none border-none bg-black text-white outline-none scrollbar-hide'>
        <div>
          <DrawerHeader className='flex justify-end'>
            <DrawerClose asChild>
              <div className='rounded-xl border border-[#333] p-2.5'>
                <X size='24' />
              </div>
            </DrawerClose>
          </DrawerHeader>

          <NavigationMenu className='p-4 pt-0'>
            <NavigationMenuList className='block space-x-0'>
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {/* legacyBehavior passHref */}
                  <a href={link.link}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent text-2xl'
                      )}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <DrawerFooter className='flex w-full flex-col items-center p-0'>
          <div className='mt-10'>
            {/* <Lottie
              // @ts-ignore
              options={defaultOptions}
              height={220}
              width={220}
            /> */}
          </div>

          <div className='relative h-[400px] w-full'>
            <Image
              src={GlobeBack}
              alt='globe shape back'
              style={{
                width: '100%',
                top: '-10px',
              }}
              fill
            />
            <Image
              src={GlobeFront}
              alt='globe shape front'
              style={{width: '100%', top: '-130px'}}
              fill
            />

            <div className='absolute top-[140px] flex h-[calc(100%-150px)] w-full flex-col items-center gap-8 bg-black'>
              <h2 className='text-2xl'>Join Ryze</h2>

              <div className='mt-4 flex gap-4'>
                <Link href={'/'} target='_blank'>
                  <Image
                    src='/images/Google-Play-Store.png'
                    alt='Google Play Store'
                    width={218}
                    height={80}
                    quality={100}
                  />
                </Link>
                <Link href={'/'} target='_blank'>
                  <Image
                    src='/images/App-Store.png'
                    alt='App Store'
                    width={218}
                    height={80}
                    quality={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
