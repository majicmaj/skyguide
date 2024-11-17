import useGetGeocoding from '../../api/useGetGeocoding'

const Geolocation = () => {
  const { data } = useGetGeocoding()
  const { results } = data || {}
  const [first] = results || []
  const { address_components } = first || {}
  const city = address_components?.find(({ types }) =>
    types.includes('locality'),
  )?.long_name
  const stateCode = address_components?.find(({ types }) =>
    types.includes('administrative_area_level_1'),
  )?.short_name

  const location = city || stateCode ? `${city}, ${stateCode}` : null
  return (
    <span className='flex justify-end text-gray-500 dark:text-gray-400'>
      {location}
    </span>
  )
}

export default Geolocation
