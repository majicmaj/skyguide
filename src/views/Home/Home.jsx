import useGetWeather from '@/api/useGetWeather'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/joy'
import ThemeToggle from '../Settings/ThemeToggle'
import Currently from './sections/Currently/Currently'
import Daily from './sections/Daily/Daily'
import DateDisplay from './sections/Date/DateDisplay'
import Hourly from './sections/Hourly/Hourly'

const Home = () => {
  const { data } = useGetWeather()
  return (
    <div className='flex flex-col gap-1'>
      <Currently />
      <DateDisplay />
      <Hourly />
      <Daily />
      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary>Debugger</AccordionSummary>
        <AccordionDetails>
          <ThemeToggle />
          <pre className='m-1 max-h-[400px] overflow-auto rounded border border-slate-500/50 p-1'>
            {JSON.stringify(data, null, 2)}
          </pre>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Home
