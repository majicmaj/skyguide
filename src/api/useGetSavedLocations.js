import { useQuery } from '@tanstack/react-query'

const useGetSavedLocations = () => {
  return useQuery({
    queryKey: ['saved-locations'],
    queryFn: async () => {
      const locations =
        JSON.parse(localStorage.getItem('skyguide-locations')) || []
      return locations
    },
  })
}

export default useGetSavedLocations
