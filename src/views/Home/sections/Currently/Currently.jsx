import { BG_HERO_SRC } from '@/constants/home'
import CurrentWeatherIcon from './components/CurrentWeatherIcon'
import MainText from './components/MainText'
import ViewSelector from './components/ViewSelector/ViewSelector'
import WindDirection from './components/WindDirection'

const Currently = () => {
  return (
    <div className='relative'>
      <img
        src={BG_HERO_SRC}
        alt='hero'
        className='max-h-48 w-full object-cover object-top pt-12 transition-all md:pt-4 lg:pt-0 dark:opacity-90'
      />

      <div className='absolute left-0 top-0 flex items-end gap-1 overflow-hidden p-2 px-3  text-black md:top-1/2 md:-translate-y-1/2 md:gap-4 dark:text-white dark:drop-shadow-lg'>
        <h1 className='font-semibold'>
          <MainText />
        </h1>
        <h2 className='font-semibold opacity-70 dark:opacity-90'>
          <MainText position={1} />
        </h2>
        <WindDirection />
      </div>
      <div className='absolute right-8 top-1/3 -translate-y-1/2 drop-shadow-lg'>
        <CurrentWeatherIcon />
      </div>
      <div className='absolute bottom-0 w-full'>
        <ViewSelector />
      </div>
    </div>
  )
}

export default Currently
