import { useGetIcon } from '@/hooks/useGetIcon'

const WeatherIcon = () => {
  const icon = useGetIcon()

  return <img src={icon} alt='icon' className='h-24 w-24 object-contain' />
}
export default WeatherIcon
