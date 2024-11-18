// {
//   "dt": 1731780000,
//   "temp": 14.68,
//   "feels_like": 13.48,
//   "pressure": 1016,
//   "humidity": 49,
//   "dew_point": 4.09,
//   "uvi": 2.63,
//   "clouds": 6,
//   "visibility": 10000,
//   "wind_speed": 6.86,
//   "wind_deg": 324,
//   "wind_gust": 10.26,
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "pop": 0
// }

import { useSearchParams } from 'react-router-dom'
import { getTextUnit } from '../../Currently/components/utils'
import { VIEWS } from '../../Currently/constants'
import DayText from './DayText'

const Day = ({ hour, index }) => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'

  const { weather, dt } = hour || {}
  const [first] = weather || {}
  const { icon } = first || {}

  const isViewSun = selectedView === 'sun'
  const [left, right] = VIEWS[selectedView]
  const formattedLeft = JSON.stringify(left)
  const formattedRight = JSON.stringify(right)

  const time = new Date(dt * 1000)
  // short weekday
  const day = time.toLocaleDateString('en-US', {
    weekday: 'short',
  })
  // .slice(0, 3)

  const leftUnit = getTextUnit(left)
  const rightUnit = getTextUnit(right)

  // console.log('hour', { hour, value, selectedView })
  return (
    <div className='flex items-center gap-1'>
      <p className='w-12'>{day}</p>
      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-white p-4 dark:bg-slate-900'>
        {/* <WeatherIcon icon={ICONS[icon]} className='h-8 w-8' />
        <div className='flex items-center justify-center gap-4'>
          <div className='text-xl font-bold'>
            {capitalize(formattedLeft) || '_'}
            {leftUnit}
          </div>
          <div className=''>
            {capitalize(formattedRight)}
            {rightUnit}
          </div>
        </div> */}
        <DayText day={hour} />
      </div>
    </div>
  )
}

export default Day
