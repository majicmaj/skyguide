import { useMutation, useQueryClient } from '@tanstack/react-query'

const useDeleteLocation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async location => {
      const locations =
        JSON.parse(localStorage.getItem('skyguide-locations')) || []
      const newLocations = locations.filter(loc => loc.name !== location.name)
      localStorage.setItem('skyguide-locations', JSON.stringify(newLocations))
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['saved-locations'],
      })
    },
  })
}

export default useDeleteLocation
