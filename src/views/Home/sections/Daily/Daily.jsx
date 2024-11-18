import { useSearchParams } from 'react-router-dom'
import useGetWeather from '../../../../api/useGetWeather'
import Day from './components/Day'

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

const Daily = () => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'
  const { data, isLoading } = useGetWeather()
  const { daily } = data || {}
  return (
    <div className='flex flex-col gap-2 overflow-auto p-2'>
      {daily?.map((hour, index) => (
        <Day key={index} hour={hour} index={index} />
      ))}
    </div>
  )
}

export default Daily
