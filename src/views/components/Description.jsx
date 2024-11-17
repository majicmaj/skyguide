import { Skeleton } from '@mui/joy'
import useGetWeather from '../../api/useGetWeather'
import { useGetPrimaryColor } from '../../hooks/useGetPrimaryColor'

const Description = () => {
  const { data, isLoading } = useGetWeather()
  const { current } = data || {}
  const { weather } = current || {}
  const [first] = weather || []
  const { main } = first || {}

  const primaryColor = useGetPrimaryColor()
  const primaryColorClass = `text-${primaryColor}-500 dark:text-${primaryColor}-400`

  if (isLoading) {
    return (
      <span>
        <Skeleton variant='text' width={100} />
      </span>
    )
  }

  return <span className={primaryColorClass}>{main}</span>
}

export default Description
