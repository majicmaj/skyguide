import useGetWeather from '@/api/useGetWeather'
import WeatherIcon from '@/components/WeatherIcon'
import { useGetIcon } from '@/hooks/useGetIcon'
import { Skeleton } from '@mui/joy'

const CurrentWeatherIcon = () => {
  const icon = useGetIcon('currently')
  const { isLoading } = useGetWeather()

  if (isLoading) {
    return <Skeleton variant='circular' width={96} height={96} />
  }

  return <WeatherIcon icon={icon} className='h-24 w-24' />
}
export default CurrentWeatherIcon
