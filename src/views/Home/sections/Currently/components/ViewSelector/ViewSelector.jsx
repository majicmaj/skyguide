import { Tooltip } from '@mui/joy'
import { useSearchParams } from 'react-router-dom'
import { useGetPrimaryColor } from '../../../../../../hooks/useGetPrimaryColor'
import { VIEWS } from '../../constants'
import ViewIcon from './ViewIcon'

export const ViewSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedView = searchParams.get('view') || 'temperature'

  const setSelectedView = view => {
    setSearchParams({ view })
  }

  const primaryColor = useGetPrimaryColor()
  const primaryColorClass = `bg-${primaryColor}-500 dark:bg-${primaryColor}-400 text-white`
  const normalColorClass = `bg-white dark:bg-slate-800`
  const restClass =
    'p-1 px-2 font-medium rounded flex gap-1 min-w-[max-content] transition-colors'
  return (
    <div className='flex gap-2 overflow-auto px-2'>
      {Object.keys(VIEWS).map(view => (
        <div
          key={view}
          className={`${
            view === selectedView ? primaryColorClass : normalColorClass
          } ${restClass}`}
          onClick={() => setSelectedView(view)}
        >
          <Tooltip title={view} placement='top'>
            <ViewIcon view={view} />
          </Tooltip>

          {view === selectedView && (
            <span>{view.slice(0, 1).toUpperCase() + view.slice(1)}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ViewSelector
