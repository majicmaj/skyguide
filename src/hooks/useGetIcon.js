import useGetWeather from '../api/useGetWeather'
import { ICONS } from '../constants/icons'

export const useGetIcon = () => {
  const { data } = useGetWeather()
  const { current } = data || {}
  const { weather } = current || {}
  const [first] = weather || []
  const { icon } = first || {}

  return ICONS[icon]
}
