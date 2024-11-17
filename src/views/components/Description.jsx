import useGetWeather from '../../api/useGetWeather'
import { useGetPrimaryColor } from '../../hooks/useGetPrimaryColor'

const Description = () => {
  const { data } = useGetWeather()
  const { current } = data || {}
  const { weather } = current || {}
  const [first] = weather || []
  const { main } = first || {}

  const primaryColor = useGetPrimaryColor()
  const primaryColorClass = `text-${primaryColor}-500 dark:text-${primaryColor}-400`
  return <span className={primaryColorClass}>{main}</span>
}

export default Description
