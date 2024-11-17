import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import useGetWeather from '../../../../../api/useGetWeather'
import { capitalize } from '../../../../../utils/capitalize'
import { VIEWS } from '../constants'

const MainText = ({ position = 0 }) => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'
  const { data } = useGetWeather()
  const { current } = data || {}

  const formatText = text => {
    switch (text) {
      case 'temp':
        return current?.temp?.toFixed(0)
      case 'feels_like':
        return current?.feels_like?.toFixed(0)
      case 'dew_point':
        return current?.dew_point?.toFixed(0)
      case 'uvi':
        return current?.uvi?.toFixed(0)
      case 'sunrise':
        return new Date(current?.sunrise * 1000)
          .toLocaleTimeString()
          .replace(/:\d+ /, ' ')
          .slice(0, -3)
      case 'sunset':
        return new Date(current?.sunset * 1000)
          .toLocaleTimeString()
          .replace(/:\d+ /, ' ')
          .slice(0, -3)
      case 'clouds':
        return current?.clouds
      case 'wind_speed':
        return current?.wind_speed?.toFixed(0)
      case 'wind_gust':
        return current?.wind_gust?.toFixed(0)
      case 'visibility':
        return (current?.visibility / 1000).toFixed(0)
      default:
        return current?.[text]
    }
  }

  const getTextUnit = text => {
    switch (text) {
      case 'temp':
        return 'º'
      case 'feels_like':
        return 'º'
      case 'wind_speed':
        return 'm/s'
      case 'wind_gust':
        return 'm/s'
      case 'clouds':
        return '%'
      case 'visibility':
        return 'km'
      case 'humidity':
        return '%'
      case 'pressure':
        return 'hPa'
      default:
        return ''
    }
  }

  const getTextFontsize = text => {
    switch (text) {
      // case 'temp':
      //   return 'text-xl'
      case 'feels_like':
        return 'text-6xl'
      case 'sunrise':
        return 'text-6xl'
      case 'sunset':
        return 'text-5xl'
      case 'wind_speed':
        return 'text-6xl'
      case 'wind_gust':
        return 'text-5xl'
      case 'pressure':
        return 'text-7xl'
      default:
        return 'text-8xl'
    }
  }

  const getUnitSize = text => {
    switch (text) {
      case 'temp':
        return 'text-8xl'
      case 'feels_like':
        return 'text-6xl'
      case 'sunrise':
        return 'text-4xl'
      case 'sunset':
        return 'text-4xl'
      case 'wind_speed':
        return 'text-3xl'
      case 'wind_gust':
        return 'text-2xl'
      default:
        return 'text-4xl'
    }
  }

  const text = VIEWS[selectedView][position]

  const formattedText = formatText(text)
  const unit = getTextUnit(text)

  return (
    <div className='flex flex-col items-center'>
      <div>
        <span
          className={`${getTextFontsize(text)} transition-all duration-300`}
        >
          {formattedText}
        </span>
        <span className={`${getUnitSize(text)}`}>{unit}</span>
      </div>
      <span className={`text-lg font-medium drop-shadow-md`}>
        {capitalize(text?.replace(/_/g, ' '))}
      </span>
    </div>
  )
}

export default MainText

MainText.propTypes = {
  position: PropTypes.number,
}
