import { useQuery } from '@tanstack/react-query'

export const useGetGeocode = query => {
  return useQuery({
    queryKey: ['geocode', query],
    queryFn: async () => {
      // if (import.meta.env.MODE === 'development') return { ...mockData }

      const response = await fetch(
        import.meta.env.VITE_API_URL + `/geocode?query=${query}`,
      )
      return response.json()
    },
    enabled: !!query,
  })
}

export default useGetGeocode
