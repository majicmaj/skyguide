import { useQuery } from '@tanstack/react-query'
import useGetLocation from './useGetLocation'

export const useGetReverseGeocode = () => {
  const { data } = useGetLocation()
  const { lat, lon } = data || {}

  return useQuery({
    queryKey: ['reverse-geocode', lat, lon],
    queryFn: async () => {
      if (import.meta.env.MODE === 'development') return { ...mockData }
      if (!lat || !lon) {
        return null
      }

      const response = await fetch(
        import.meta.env.VITE_API_URL + `/geocode?lat=${lat}&lon=${lon}`,
      )
      return response.json()
    },
  })
}

export default useGetReverseGeocode

const mockData = {
  plus_code: {
    compound_code: 'XZ5C+QH7 Greenville, TX, USA',
    global_code: '86F5XZ5C+QH7',
  },
  results: [
    {
      address_components: [
        {
          long_name: '1234',
          short_name: '1234',
          types: ['street_number'],
        },
        {
          long_name: 'Maple Avenue',
          short_name: 'Maple Ave',
          types: ['route'],
        },
        {
          long_name: 'Cedar Town',
          short_name: 'Cedar Town',
          types: ['locality', 'political'],
        },
        {
          long_name: 'Bexar County',
          short_name: 'Bexar County',
          types: ['administrative_area_level_2', 'political'],
        },
        {
          long_name: 'Texas',
          short_name: 'TX',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'United States',
          short_name: 'US',
          types: ['country', 'political'],
        },
        {
          long_name: '75001',
          short_name: '75001',
          types: ['postal_code'],
        },
      ],
      formatted_address: '1234 Maple Ave, Cedar Town, TX 75001, USA',
      geometry: {
        location: {
          lat: 32.9216547,
          lng: -96.871469,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 32.92300468029149,
            lng: -96.8701210197085,
          },
          southwest: {
            lat: 32.92030671970849,
            lng: -96.8728189802915,
          },
        },
      },
      place_id: 'ChIJ1234567AbcDEfGhIJklmnOp',
      types: ['premise'],
    },
  ],
  status: 'OK',
}
