import { useQuery } from '@tanstack/react-query'

export const useGetGeocode = (query, selected) => {
  return useQuery({
    queryKey: ['geocode', query, selected],
    queryFn: async () => {
      // if (import.meta.env.MODE === 'development') return { ...mockData }

      const response = await fetch(
        import.meta.env.VITE_API_URL + `/geocode?query=${query}`,
      )
      return response.json()
    },
    enabled: selected && !!query,
  })
}

export default useGetGeocode
