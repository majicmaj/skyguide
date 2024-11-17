import { ArrowUpwardRounded } from '@mui/icons-material'
import { Tooltip } from '@mui/joy'
import { useSearchParams } from 'react-router-dom'
import useGetWeather from '../../../../../api/useGetWeather'

const WindDirection = () => {
  const [searchParams] = useSearchParams()
  const selectedView = searchParams.get('view') || 'temperature'
  const { data } = useGetWeather()
  const { current } = data || {}
  const { wind_deg } = current || {}

  const isSelectedViewWind = selectedView === 'wind'

  if (!isSelectedViewWind) return null
  return (
    <div className='transition-all duration-300'>
      <Tooltip title={`${wind_deg}º`} placement='top'>
        <ArrowUpwardRounded
          sx={{
            transform: `rotate(${wind_deg}deg)`,
            fontSize: '3rem',
            transition: 'transform 0.5s',
            color: 'inherit',
            // opacity: isSelectedViewWind ? 1 : 0.5,
          }}
        />
      </Tooltip>
    </div>
  )
}

export default WindDirection
