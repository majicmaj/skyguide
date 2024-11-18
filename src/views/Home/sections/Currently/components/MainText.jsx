import { Skeleton } from '@mui/joy'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import useGetWeather from '../../../../../api/useGetWeather'
import { capitalize } from '../../../../../utils/capitalize'
import { VIEWS } from '../constants'
import {
  getFormattedText,
  getTextFontsize,
  getTextUnit,
  getUnitSize,
} from './utils'

const MainText = ({ position = 0 }) => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'
  const { data, isLoading } = useGetWeather()
  const { current } = data || {}

  const text = VIEWS[selectedView][position]
  const formattedText = getFormattedText(text, current)
  const unit = getTextUnit(text)

  if (isLoading) {
    return (
      <div className='flex h-36 flex-col items-center justify-end'>
        <Skeleton variant='text' width={100} />
      </div>
    )
  }

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
