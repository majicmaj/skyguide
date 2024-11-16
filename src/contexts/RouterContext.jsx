import App from '@/App'
import Error from '@/views/Error'
import Home from '@/views/Home'
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
])

const RouterContext = ({ children }) => {
  return <RouterProvider router={Router} />
}

export default RouterContext
