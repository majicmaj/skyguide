import { useGetIcon } from '@/hooks/useGetIcon'
import { Skeleton } from '@mui/joy'
import useGetWeather from '../../../../../api/useGetWeather'

const WeatherIcon = () => {
  const icon = useGetIcon()
  const { isLoading } = useGetWeather()

  if (isLoading) {
    return <Skeleton variant='circular' width={96} height={96} />
  }

  return <img src={icon} alt='icon' className='h-24 w-24 object-contain' />
}
export default WeatherIcon
