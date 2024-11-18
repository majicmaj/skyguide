import { HomeRounded, SettingsRounded } from '@mui/icons-material'
import { IconButton } from '@mui/joy'
import { useLocation } from 'react-router-dom'
import Description from './Description'
import Geolocation from './Geolocation'

const NavBar = () => {
  const location = useLocation()
  const isSettings = location.pathname === '/settings'
  const link = isSettings ? '/' : '/settings'
  const color = isSettings ? 'primary' : 'neutral'

  return (
    <nav className='p-4'>
      <div className='relative grid grid-cols-[1fr,auto,1fr] gap-2 rounded-full bg-white p-2 text-lg font-bold dark:bg-slate-800'>
        <Geolocation />
        <span className='text-gray-500 dark:text-gray-400'>·</span>
        <Description />
        <div className='absolute right-2 top-1/2 -translate-y-1/2 opacity-80'>
          <IconButton
            size='sm'
            variant='plain'
            color={color}
            href={link}
            component='a'
          >
            {isSettings ? <HomeRounded /> : <SettingsRounded />}
          </IconButton>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
