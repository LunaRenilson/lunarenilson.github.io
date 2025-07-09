import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import ErrorPage from '@pages/ErrorPage.jsx'
import Contact from '@pages/Contact.jsx'


const RootLayout = () => (
  <>
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/portfolio',
        element: <App />
      },
      {
        path: '/portfolio/Contact',
        element: <Contact />
      }
  ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
