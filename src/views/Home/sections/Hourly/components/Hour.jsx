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

import WeatherIcon from '@/components/WeatherIcon'
import { ICONS } from '@/constants/icons'
import { capitalize } from '@/utils/capitalize'
import { PropTypes } from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import { getFormattedText, getTextUnit } from '../../Currently/components/utils'
import { VIEWS } from '../../Currently/constants'

const Hour = ({ hour, index }) => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'

  const { weather, dt } = hour || {}
  const [first] = weather || {}
  const { icon } = first || {}

  const isViewSun = selectedView === 'sun'
  const [left, right] = VIEWS[selectedView]
  const formattedLeft = isViewSun ? '' : getFormattedText(left, hour)
  const formattedRight = isViewSun ? '' : getFormattedText(right, hour)

  const time = new Date(dt * 1000)
  const hr = time.toLocaleTimeString('en-US', { hour: 'numeric' })

  const leftUnit = getTextUnit(left)
  const rightUnit = getTextUnit(right)

  // console.log('hour', { hour, value, selectedView })
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex h-28 w-20 flex-col items-center justify-between rounded-xl bg-white py-2 pb-3 dark:bg-slate-900'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl font-bold'>
            {capitalize(formattedLeft) || '_'}
            {leftUnit}
          </p>
          <p>
            {capitalize(formattedRight)}
            {rightUnit}
          </p>
        </div>
        <WeatherIcon icon={ICONS[icon]} className='h-8 w-8' />
      </div>
      <p>{hr}</p>
    </div>
  )
}

export default Hour

Hour.propTypes = {
  hour: PropTypes.object,
  index: PropTypes.number,
}
