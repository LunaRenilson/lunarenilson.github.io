import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import ErrorPage from '@pages/ErrorPage.jsx'
import Contact from '@pages/Contact.jsx'
import Navigator from './components/Navigator.jsx'
import Projects from './pages/Projects.jsx'


const RootLayout = () => (
  <>
    <Navigator />
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
      },
      {
        path: '/portfolio/projects',
        element: <Projects />
      }
  ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
