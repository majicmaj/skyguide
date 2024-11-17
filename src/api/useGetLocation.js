import { useQuery } from '@tanstack/react-query'

const useGetLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: async () => {
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
