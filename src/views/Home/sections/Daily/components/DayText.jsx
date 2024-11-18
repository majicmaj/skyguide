import WeatherIcon from '@/components/WeatherIcon'
import { ICONS } from '@/constants/icons'
import { capitalize } from '@/utils/capitalize'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import { getTextUnit } from '../../Currently/components/utils'

const getHexColorBasedOnCelsius = celsius => {
  // Clamp temperatures to be within the range of 0°C to 44°C
  const clampedCelsius = Math.max(-10, Math.min(54, celsius))

  // Calculate the hue based on temperature
  const hue = 220 - (clampedCelsius / 44) * 220 // 0°C is blue (220°), 44°C is red (0°)

  return `hsl(${hue}, 100%, 42%)`
}

const getFields = (day, view) => {
  if (view === 'temperature') {
    return {
      left: day.temp.max?.toFixed(0),
      right: day.temp.min?.toFixed(0),
    }
  }

  if (view === 'sun') {
    return {
      left: new Date(day.sunrise * 1000)
        .toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        })
        .slice(0, -2),
      right: new Date(day.sunset * 1000)
        .toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        })
        .slice(0, -2),
    }
  }

  if (view === 'wind') {
    return {
      left: day.wind_speed?.toFixed(0),
      right: day.wind_gust?.toFixed(0),
    }
  }

  if (view === 'clouds') {
    return {
      left: day.clouds?.toFixed(0),
    }
  }

  if (view === 'uv index') {
    return {
      left: day.uvi?.toFixed(0),
    }
  }

  if (view === 'humidity') {
    return {
      left: day.humidity?.toFixed(0),
    }
  }

  if (view === 'visibility') {
    return {
      left: (day.visibility / 1000).toFixed(1),
    }
  }

  if (view === 'pressure') {
    return {
      left: (day.pressure / 1000).toFixed(1),
    }
  }

  if (view === 'dew point') {
    return {
      left: day.dew_point?.toFixed(0),
    }
  }

  if (view === 'rain') {
    return {
      left: (day.pop * 100).toFixed(0),
    }
  }

  return {}
}

const getKey = view => {
  if (view === 'temperature') return 'temp'
  if (view === 'sun') return 'sun'
  if (view === 'wind') return 'wind'
  if (view === 'clouds') return 'clouds'
  if (view === 'uv index') return 'uvi'
  if (view === 'humidity') return 'humidity'
  if (view === 'visibility') return 'visibility'
  if (view === 'pressure') return 'pressure'
  if (view === 'dew point') return 'dew_point'
  if (view === 'rain') return 'pop'
  return ''
}

const weatherMainKeyColors = {
  Clear: 'text-yellow-500 dark:text-yellow-400',
  Clouds: 'text-gray-700 dark:text-gray-400',
  Rain: 'text-blue-500 dark:text-blue-600',
  Snow: 'text-sky-400 dark:text-white',
  Drizzle: 'text-blue-200 dark:text-blue-500',
  Thunderstorm: 'text-amber-500 dark:text-amber-300',
  Mist: 'text-blue-200 dark:text-blue-500',
}

const DayText = ({ day }) => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'

  const { weather } = day || {}

  const [first] = weather || {}
  const { icon, main } = first || {}

  const { left, right } = getFields(day, selectedView) || {}
  const key = getKey(selectedView)
  const unit = getTextUnit(key)

  const color = weatherMainKeyColors[main]

  const isTemp = selectedView === 'temperature'

  return (
    <div className='flex w-full items-center gap-2'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-center gap-4'>
          <WeatherIcon icon={ICONS[icon]} className='h-8 w-8' />
          <p className={`${color} font-bold`}>{capitalize(main)}</p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          {!isTemp && (
            <div className='text-xl font-bold'>
              {capitalize(left) || '_'}
              {unit}
            </div>
          )}
          {isTemp && (
            <div className='flex items-center gap-1'>
              <div
                className='text-xl font-bold'
                style={{
                  color: getHexColorBasedOnCelsius(left),
                }}
              >
                {capitalize(left) || '_'}
                {unit}
              </div>
            </div>
          )}
          {right && (
            <div>
              {capitalize(right)}
              {unit}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DayText

DayText.propTypes = {
  day: PropTypes.object,
}
