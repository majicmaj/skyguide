import useGetWeather from '@/api/useGetWeather'

const DateDisplay = () => {
  const { data } = useGetWeather()
  const { current } = data || {}
  const { dt } = current || {}
  const time = new Date(dt * 1000)

  const date = time.toLocaleDateString('en-US', {
    // weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
  return <div className='px-2 pt-2 font-semibold opacity-80'>{date}</div>
}

export default DateDisplay
