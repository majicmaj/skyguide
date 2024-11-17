import { useGetIcon } from '@/hooks/useGetIcon'

const WeatherIcon = () => {
  const icon = useGetIcon()

  return <img src={icon} alt='icon' className='h-16 w-16 object-contain' />
}
export default WeatherIcon
