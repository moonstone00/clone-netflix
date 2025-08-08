import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Landing/index.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

import Landing from './pages/Landing/index.jsx'
import Browse from './pages/Browse/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
