import NavBar from '@/views/components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
