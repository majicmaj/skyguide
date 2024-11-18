import { Accordion, AccordionDetails, AccordionSummary } from '@mui/joy'
import useGetWeather from '../../api/useGetWeather'
import ThemeToggle from '../Settings/ThemeToggle'
import Currently from './sections/Currently/Currently'
import Hourly from './sections/Hourly/Hourly'

const Home = () => {
  const { data } = useGetWeather()
  return (
    <div className='flex flex-col gap-4'>
      <Currently />
      <Hourly />
      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary>Debugger</AccordionSummary>
        <AccordionDetails>
          <pre className='m-1 max-h-[400px] overflow-auto rounded border border-slate-500/50 p-1'>
            {JSON.stringify(data, null, 2)}
          </pre>
        </AccordionDetails>
      </Accordion>

      <div className='absolute bottom-4 pl-4'>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Home
