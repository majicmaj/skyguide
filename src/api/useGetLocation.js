import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

const useGetLocation = () => {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  return useQuery({
    queryKey: ['location', lat, lon],
    queryFn: async () => {
      if (lat && lon) {
        return { lat, lon }
      }

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      return {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    },
  })
}

export default useGetLocation
