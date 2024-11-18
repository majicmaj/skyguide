import {
  DeleteRounded,
  LocationOnRounded,
  SaveRounded,
} from '@mui/icons-material'
import { Box, IconButton } from '@mui/joy'
import PropTypes from 'prop-types'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useDeleteLocation from '../../api/useDeleteLocation'
import useGetGeocode from '../../api/useGetGeocode'
import useGetSavedLocations from '../../api/useGetSavedLocations'
import useSaveLocation from '../../api/useSaveLocation'

const Location = ({ name, selected, isSaveable = true }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const setLocation = location => {
    const { lat, lng: lon } = location || {}

    if (!lat || !lon) return null

    setSearchParams({ lat: lat.toFixed(4), lon: lon.toFixed(4) })

    searchParams.set('lat', lat.toFixed(4))
    searchParams.set('lon', lon.toFixed(4))
    navigate(
      {
        pathname: '/',
        search: searchParams.toString(),
      },
      { replace: false },
    )
  }

  const { data, isSuccess } = useGetGeocode(name, selected)
  const { results } = data || {}
  const [first] = results || []
  const { geometry } = first || {}
  const { location: selectedLocation } = geometry || {}

  const { data: savedLocations } = useGetSavedLocations()
  const { mutate: save } = useSaveLocation()
  const { mutate: remove } = useDeleteLocation()

  const selectedBorder = selected ? 'border-2 border-blue-500' : ''

  const saveLocationToLocalStorage = e => {
    e.stopPropagation()

    const location = { name, ...selectedLocation }
    save(location)
  }

  const removeLocationFromLocalStorage = e => {
    e.stopPropagation()

    // const locations = JSON.parse(localStorage.getItem(LOCATIONS_KEY)) || []
    // const newLocations = locations.filter(location => location.name !== name)
    // localStorage.setItem(LOCATIONS_KEY, JSON.stringify(newLocations))
    // const queryClient = new QueryClient()
    // queryClient.invalidateQueries('saved-locations')

    const location = { name }
    remove(location)
  }

  const isInLocalStorage = savedLocations?.some(
    location => location.name === name,
  )

  return (
    <Box
      onClick={() => setLocation(selectedLocation)}
      className={`flex items-center gap-2 rounded bg-white p-4 dark:bg-slate-800 ${selectedBorder}`}
    >
      <LocationOnRounded />
      <span>{name}</span>
      {selected && <span>(selected)</span>}
      {isSaveable && (
        <div className='flex grow justify-end'>
          {isInLocalStorage ? (
            <IconButton onClick={removeLocationFromLocalStorage}>
              <DeleteRounded />
            </IconButton>
          ) : (
            <IconButton onClick={saveLocationToLocalStorage}>
              <SaveRounded />
            </IconButton>
          )}
        </div>
      )}
    </Box>
  )
}

export default Location

Location.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  isSaveable: PropTypes.bool,
}
