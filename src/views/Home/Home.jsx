import useGetWeather from '../../api/useGetWeather'
import ThemeToggle from '../Settings/ThemeToggle'
import Currently from './sections/Currently/Currently'

const Home = () => {
  const { data } = useGetWeather()
  return (
    <div>
      <Currently />
      <div className='m-2 max-h-[400px] overflow-auto rounded bg-slate-500/10 p-2'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className='absolute bottom-4 pl-4'>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Home
