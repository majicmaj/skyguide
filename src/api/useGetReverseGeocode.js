import { useQuery } from '@tanstack/react-query'
import useGetLocation from './useGetLocation'

const MAX_CACHE_SIZE = 10
const CACHE_KEY = 'reverseGeocodeCache'

// Helper to get the cache from localStorage
const getCachedData = (lat, lon) => {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]')
  return cache.find(item => item.lat === lat && item.lon === lon)?.data
}

// Helper to set cache in localStorage
const setCacheData = (lat, lon, data) => {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]')

  // Check if the entry already exists
  const existingIndex = cache.findIndex(
    item => item.lat === lat && item.lon === lon,
  )
  if (existingIndex !== -1) {
    cache[existingIndex].data = data
  } else {
    // Add new entry to the cache
    cache.push({ lat, lon, data })

    // Ensure cache size does not exceed MAX_CACHE_SIZE
    if (cache.length > MAX_CACHE_SIZE) {
      cache.shift() // Remove the oldest entry
    }
  }

  // Save updated cache to localStorage
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
}

export const useGetReverseGeocode = () => {
  const { data } = useGetLocation()
  const { lat, lon } = data || {}

  return useQuery({
    queryKey: ['reverse-geocode', lat, lon],
    queryFn: async () => {
      if (!lat || !lon) {
        return null
      }

      // Check if the result is already cached
      const cachedData = getCachedData(lat, lon)
      if (cachedData) {
        return cachedData
      }

      // Fetch from the API if not cached
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/reverse-geocode?lat=${lat}&lon=${lon}`,
      )
      const result = await response.json()

      // Cache the new result
      setCacheData(lat, lon, result)

      return result
    },
    enabled: !!lat && !!lon,
  })
}

export default useGetReverseGeocode
