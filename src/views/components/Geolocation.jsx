import useGetReverseGeocode from '@/api/useGetReverseGeocode'
import { Box, Skeleton } from '@mui/joy'

const Geolocation = () => {
  const { data, isLoading } = useGetReverseGeocode()
  const { results } = data || {}
  const [first] = results || []
  const { address_components } = first || {}
  const city = address_components?.find(({ types }) =>
    types.includes('locality'),
  )?.long_name

  const stateCode = address_components?.find(({ types }) =>
    types.includes('administrative_area_level_1'),
  )?.short_name

  const countryCode = address_components?.find(({ types }) =>
    types.includes('country'),
  )?.short_name

  const isNotUs = countryCode !== 'US'

  const usLocation = city || stateCode ? `${city}, ${stateCode}` : null
  const nonUsLocation = city || stateCode ? `${city}, ${countryCode}` : null

  const location = isNotUs ? nonUsLocation : usLocation

  return (
    <Box component='a' href='/search'>
      {isLoading && (
        <span className='flex justify-end'>
          <Skeleton variant='text' width={100} />
        </span>
      )}
      {!isLoading && (
        <span className='flex justify-end text-gray-500 dark:text-gray-400'>
          {location}
        </span>
      )}
    </Box>
  )
}

export default Geolocation
