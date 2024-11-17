import Description from './Description'
import Geolocation from './Geolocation'

const NavBar = () => {
  return (
    <nav className='p-4'>
      <div className='grid grid-cols-[1fr,auto,1fr] gap-2 rounded-full bg-white p-2 text-lg font-bold dark:bg-slate-800'>
        <Geolocation />
        <span className='text-gray-500 dark:text-gray-400'>·</span>
        <Description />
      </div>
    </nav>
  )
}

export default NavBar
