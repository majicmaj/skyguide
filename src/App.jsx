import NavBar from '@/views/components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  // useSkyGradientBackground()
  return (
    <div className='flex min-h-screen flex-col gap-4'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
