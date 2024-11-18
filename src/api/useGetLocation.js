import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

const useGetLocation = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat') || ''
  const lon = searchParams.get('lon') || ''

  return useQuery({
    queryKey: ['location', lat, lon],
    queryFn: async () => {
      console.log({ lat, lon })
      if (lat && lon) {
        return { lat, lon }
      }

      console.log('here')

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      searchParams.set('lat', position.coords.latitude)
      searchParams.set('lon', position.coords.longitude)

      setSearchParams(searchParams)

      return {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    },
  })
}

export default useGetLocation
