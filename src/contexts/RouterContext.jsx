import App from '@/App'
import Error from '@/views/Error'
import Home from '@/views/Home/Home'
import Search from '@/views/Search/Search'
import Settings from '@/views/Settings/Settings'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/search',
    element: <Search />,
  },
])

const RouterContext = ({ children }) => {
  return <RouterProvider router={Router} />
}

export default RouterContext
