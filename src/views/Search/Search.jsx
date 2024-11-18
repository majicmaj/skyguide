import { ArrowBackRounded } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/joy'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGetAutocomplete from '../../api/useGetAutocomplete'
import useGetSavedLocations from '../../api/useGetSavedLocations'
import Location from './Location'

const Search = () => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const { data } = useGetAutocomplete(query)
  const { predictions } = data || {}
  const options = predictions?.map(({ description }) => description)

  const {
    data: savedLocations = [],
    isLoading,
    isRefetching,
  } = useGetSavedLocations()

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex min-h-screen flex-col gap-2'>
      <nav className='relative p-4'>
        <input
          className='w-full rounded-full bg-white p-2 px-4 font-medium dark:bg-slate-800'
          placeholder='Search for a location'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className='absolute right-6 top-1/2 -translate-y-1/2 opacity-80'>
          <IconButton size='sm' variant='plain' onClick={handleBack}>
            <ArrowBackRounded />
          </IconButton>
        </div>
      </nav>

      <Divider />
      <div className='flex flex-col gap-2 p-2'>
        <Location
          name='Your Current Location'
          selected={false}
          handleSelect={() => navigate('/')}
          isSaveable={false}
        />
        {!!options.length && (
          <div className='flex flex-col gap-1'>
            <p>Results</p>
            <Divider />
          </div>
        )}
        {options?.map((location, index) => (
          <Location
            key={location}
            name={location}
            selected={index === selectedIndex}
            handleSelect={() => setSelectedIndex(index)}
          />
        ))}

        {!!savedLocations.length && (
          <div className='flex flex-col gap-1'>
            <p>Saved Locations</p>
            <Divider />
          </div>
        )}
        {savedLocations.map(({ name, selected }) => (
          <Location
            key={name}
            name={name}
            selected={selected}
            handleSelect={() => navigate('/')}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
