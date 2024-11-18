import { useMutation, useQueryClient } from '@tanstack/react-query'

// trigger invalidation of the cache
const useSaveLocation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async location => {
      const locations =
        JSON.parse(localStorage.getItem('skyguide-locations')) || []
      const newLocations = [...locations, location]
      localStorage.setItem('skyguide-locations', JSON.stringify(newLocations))
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['saved-locations'],
      })
    },
  })
}

export default useSaveLocation
