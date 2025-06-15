import ArrowDownload from '@/public/svgs/icons/arrow-down-to-line.svg'
import Image from 'next/image'
import Link from 'next/link'
import {cn} from '../../lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import Language from './language'
import MobileNav from './mobile-nav'

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Features',
    link: '/features',
  },
  {
    title: 'Telco plans',
    link: '/telco-plans',
  },
  {
    title: 'About us',
    link: '/about-us',
  },
  {
    title: 'Contact us',
    link: '/contact-us',
  },
]

export default function NavBar() {
  return (
    <>
      <section
        id='navbar'
        className={cn(
          'fixed left-0 right-0  w-full z-50 justify-between lg:linear-border mx-auto mt-2 lg:mt-8 flex lg:w-fit items-center rounded-full lg:border lg:bg-[#303233]/50 px-4 lg:px-8 py-4 backdrop-blur-[10px]'
        )}
      >
        <div className='flex w-full items-center justify-between lg:gap-[100px]'>
          <Link href='/'>
            <Image
              src={'/images/white-logo.png'}
              width={100}
              height={20}
              alt='Ryze logo'
            />
          </Link>

          <NavigationMenu className='hidden lg:block'>
            <NavigationMenuList className='gap-4'>
              {links.map((link) => (
                <NavigationMenuItem
                  key={link.title}
                  className='btn btn-navbar rounded-full bg-transparent hover:rounded-full'
                >
                  <Link href={link.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent rounded-full hover:rounded-full'
                      )}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className='flex items-center gap-2'>
            <Language />
            <Link href={'/'} target='_blank'>
              <div className='btn primary-gradient btn-shadow flex h-11 cursor-pointer items-center gap-3 rounded-full p-4 md:h-[52px] md:p-6'>
                <Image src={ArrowDownload} alt='download icon' />
                <span className='join-ryze-text'>Join SkyLo</span>
              </div>
            </Link>
            <MobileNav links={links} />
          </div>
        </div>
      </section>
    </>
  )
}
