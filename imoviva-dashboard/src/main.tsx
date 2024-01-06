import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard.tsx'
import { PropertiesPage } from './pages/properties.tsx'
import { ComponentRadio } from './Components/Context/CreateContext.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        path: "/dashboard/properties",
        element: <PropertiesPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentRadio>
      <RouterProvider router={router} />
      <ToastContainer />
    </ComponentRadio>
    
  </React.StrictMode>,
)
