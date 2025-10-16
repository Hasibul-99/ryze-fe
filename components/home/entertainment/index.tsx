import ExploreMoreButton from '@/components/ui/explore-more-button'
import Marquee from '@/components/ui/marquee'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'
import ListenCard from './listen-card'
import MovieCard from './movie-card'

const watchList = [
  {
    name: 'The Office',
    img: '/images/entertainment/photo-0.png',
  },
  {
    name: 'One Day',
    img: '/images/entertainment/photo-1.png',
  },
  {
    name: 'FIFA world cup',
    img: '/images/entertainment/photo-2.png',
  },
  {
    name: 'Olympics',
    img: '/images/entertainment/photo-3.png',
  },
  {
    name: 'Kung Fu Panda',
    img: '/images/entertainment/photo-4.png',
  },
  {
    name: 'Avatar',
    img: '/images/entertainment/photo-5.png',
  },
  {
    name: 'NFL',
    img: '/images/entertainment/photo-6.png',
  },
  {
    name: 'Dune 2',
    img: '/images/entertainment/photo-7.png',
  },
  {
    name: 'NBA TV',
    img: '/images/entertainment/photo-8.png',
  },
  {
    name: 'Friends',
    img: '/images/entertainment/photo-9.png',
  },
]

const listenList = [
  {
    title: 'Ditto',
    singer: 'NEW JEANS',
    img: '/images/icons/listen-0.png',
  },
  {
    title: 'If we have each other',
    singer: 'alec bengjamin',
    img: '/images/icons/listen-1.png',
  },
  {
    title: 'pick up the phone',
    singer: 'HENRY MOODIE',
    img: '/images/icons/listen-2.png',
  },
  {
    title: 'Espresso',
    singer: 'SABRINA CARPENTER',
    img: '/images/icons/listen-3.png',
  },
  {
    title: 'Better Now',
    singer: 'POST MALONE',
    img: '/images/icons/listen-4.png',
  },
  {
    title: 'Photograph',
    singer: 'ED SHEERAN',
    img: '/images/icons/listen-5.png',
  },
  {
    title: 'Water',
    singer: 'TYLA',
    img: '/images/icons/listen-6.png',
  },
  {
    title: 'DDU - DU DDU-DU',
    singer: 'BLACKPINK',
    img: '/images/icons/listen-7.png',
  },
  {
    title: 'Anyone',
    singer: 'JUSTIN BIEBER',
    img: '/images/icons/listen-8.png',
  },
  {
    title: 'Strawberries & Cigarettes',
    singer: 'TROYE SIVAN',
    img: '/images/icons/listen-9.png',
  },
  {
    title: 'Light Switch',
    singer: 'CHARLIE PUTH',
    img: '/images/icons/listen-10.png',
  },
  {
    title: 'Better Now',
    singer: 'NEW JEANS',
    img: '/images/icons/listen-11.png',
  },
  {
    title: 'Hello World',
    singer: 'Javascript',
    img: '/images/icons/listen-12.png',
  },
]

const playList = [
  {
    name: 'PUBG',
    img: '/images/icons/play-pubg.png',
  },
  {
    name: 'Pokemon Go',
    img: '/images/icons/play-pokemon.png',
  },
  {
    name: 'Among Us!',
    img: '/images/icons/play-amongus.png',
  },
  {
    name: 'Roblox',
    img: '/images/icons/play-robolox.png',
  },
  {
    name: 'Doodle Jump',
    img: '/images/icons/play-doodle-jump.png',
  },
  {
    name: 'Monopoly',
    img: '/images/icons/play-monopoly.png',
  },
  {
    name: 'Free Fire',
    img: '/images/icons/play-free-fire.png',
  },
  {
    name: 'FIFA Mobile',
    img: '/images/icons/play-fifa.png',
  },
  {
    name: 'Pokemon Go',
    img: '/images/icons/play-pokemon.png',
  },
  {
    name: 'Among Us!',
    img: '/images/icons/play-amongus.png',
  },
]

const iconList = [
  {
    name: 'Hoichoi',
    img: '/images/icons/hoichoi.png',
  },
  {
    name: 'Toffee',
    img: '/images/icons/toffee.png',
  },
  {
    name: 'Spotify',
    img: '/images/icons/spotify.png',
  },
  {
    name: 'Chorki',
    img: '/images/icons/chorki.png',
  },
  {
    name: 'Netflix',
    img: '/images/icons/netflix.png',
  },
  {
    name: 'Disney+',
    img: '/images/icons/disney.png',
  },
  {
    name: 'YouTube',
    img: '/images/icons/youtube.png',
  },
  {
    name: 'Guiter',
    img: '/images/icons/guiter.png',
  },
  {
    name: 'Espn',
    img: '/images/icons/espn.png',
  },
  {
    name: 'Music',
    img: '/images/icons/music.png',
  },
]

const watchFirstRow = watchList.slice(0, watchList.length / 2)
const watchSecondRow = watchList.slice(watchList.length / 2)

const listenFirstRow = listenList.slice(0, listenList.length / 2)
const listenSecondRow = listenList.slice(listenList.length / 2)

const playFirstRow = playList.slice(0, playList.length / 2)
const playSecondRow = playList.slice(playList.length / 2)

export default function Entertainment() {
  const {t} = useTranslation('common')
  
  return (
    <section id='entertainment' className='relative py-[120px] text-center'>
      <div className='container flex flex-col items-center'>
        <h2 className='text-[20px] md:text-[48px]'>
          {t('entertainment.title')}
        </h2>
        <h3 className='w-2/3 text-center text-base text-[#D0D2D3] md:text-[24px]'>
          {t('entertainment.stream_content')}
        </h3>
      </div>

      <Tabs defaultValue='watch' className='w-full'>
        <TabsList className='relative mx-auto my-10 flex h-16 w-fit gap-5 rounded-full bg-[#30323399] px-4 md:my-16'>
          <TabsTrigger
            value='watch'
            className='rounded-full text-base font-semibold'
          >
            Watch
          </TabsTrigger>
          <TabsTrigger
            value='listen'
            className='rounded-full text-base font-semibold'
          >
            Listen
          </TabsTrigger>
          <TabsTrigger
            value='play'
            className='rounded-full text-base font-semibold'
          >
            Play
          </TabsTrigger>
        </TabsList>

        <TabsContent value='watch'>
          <div className='relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg'>
            <Marquee pauseOnHover>
              {watchFirstRow.map((movie, idx) => (
                <MovieCard key={idx} {...movie} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover>
              {watchSecondRow.map((movie, idx) => (
                <MovieCard key={idx} {...movie} />
              ))}
            </Marquee>
          </div>

          <div className='container mx-auto mt-[30px] flex flex-wrap justify-center gap-4'>
            {iconList.map((icon, idx) => (
              <div className='icon-box-shadow rounded-2xl p-4' key={idx}>
                <div className='relative flex size-[30px] items-center justify-center md:size-[60px] '>
                  <Image src={icon.img} alt={icon.name} fill />
                </div>
              </div>
            ))}
          </div>

          <ExploreMoreButton className='mx-auto' />
        </TabsContent>

        <TabsContent value='listen'>
          <div className='relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg'>
            <Marquee pauseOnHover>
              {listenFirstRow.map((movie, idx) => (
                <ListenCard key={idx} {...movie} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover>
              {listenSecondRow.map((movie, idx) => (
                <ListenCard key={idx} {...movie} />
              ))}
            </Marquee>
            <Marquee pauseOnHover>
              {listenFirstRow.map((movie, idx) => (
                <ListenCard key={idx} {...movie} />
              ))}
            </Marquee>
          </div>

          <div className='container mx-auto mt-[30px] flex flex-wrap justify-center gap-4'>
            {iconList.map((icon, idx) => (
              <div className='icon-box-shadow rounded-2xl p-4' key={idx}>
                <div className='relative flex size-[30px] items-center justify-center md:size-[60px] '>
                  <Image src={icon.img} alt={icon.name} fill quality={100} />
                </div>
              </div>
            ))}
          </div>

          <ExploreMoreButton className='mx-auto' />
        </TabsContent>

        <TabsContent value='play'>
          <div className='relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg'>
            <Marquee pauseOnHover>
              {playFirstRow.map((movie, idx) => (
                <MovieCard
                  key={idx}
                  headerClass='h-[150px] md:h-[200px]'
                  {...movie}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover>
              {playSecondRow.map((movie, idx) => (
                <MovieCard
                  key={idx}
                  headerClass='h-[150px] md:h-[200px]'
                  {...movie}
                />
              ))}
            </Marquee>
          </div>

          <div className='container mx-auto mt-[30px] flex flex-wrap justify-center gap-4'>
            {iconList.map((icon, idx) => (
              <div className='icon-box-shadow rounded-2xl p-4' key={idx}>
                <div className='relative flex size-[30px] items-center justify-center md:size-[60px] '>
                  <Image src={icon.img} alt={icon.name} fill quality={100} />
                </div>
              </div>
            ))}
          </div>

          <ExploreMoreButton className='mx-auto' />
        </TabsContent>
      </Tabs>
    </section>
  )
}
