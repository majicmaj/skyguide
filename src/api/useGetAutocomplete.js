import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useGetAutocomplete = query => {
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  // Debounce effect to delay query execution
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500) // 500ms delay

    return () => clearTimeout(handler)
  }, [query])

  return useQuery({
    queryKey: ['geocode', debouncedQuery],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/autocomplete?query=${debouncedQuery}`,
      )
      return response.json()
    },
    enabled: !!debouncedQuery,
  })
}

export default useGetAutocomplete
