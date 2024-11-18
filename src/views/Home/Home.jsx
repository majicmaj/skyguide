import Currently from './sections/Currently/Currently'
import Daily from './sections/Daily/Daily'
import DateDisplay from './sections/Date/DateDisplay'
import Hourly from './sections/Hourly/Hourly'

const Home = () => {
  return (
    <div className='flex flex-col gap-1'>
      <Currently />
      <DateDisplay />
      <Hourly />
      <Daily />
    </div>
  )
}

export default Home
