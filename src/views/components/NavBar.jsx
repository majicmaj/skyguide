import useGetWeather from '../../api/useGetWeather'
import { useGetPrimaryColor } from '../../hooks/useGetPrimaryColor'
import Geolocation from './Geolocation'

const NavBar = () => {
  // const [search, setsSearch] = useState('New York, NY')
  const { data } = useGetWeather()
  const { current } = data || {}
  const { weather } = current || {}
  const [first] = weather || []
  const { main } = first || {}

  const primaryColor = useGetPrimaryColor()
  const primaryColorClass = `text-${primaryColor}-500 dark:text-${primaryColor}-400`
  return (
    <nav className='p-4'>
      <div className='grid grid-cols-[1fr,auto,1fr] gap-2 rounded-full bg-white p-2 text-lg font-bold dark:bg-slate-800'>
        <Geolocation />
        <span className='text-gray-500 dark:text-gray-400'>·</span>
        <span className={primaryColorClass}>{main}</span>
      </div>
    </nav>
  )
}

export default NavBar
