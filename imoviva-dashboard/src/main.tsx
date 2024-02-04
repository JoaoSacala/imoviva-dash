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
import Login from './pages/login.tsx';
import { FormApartment } from './Components/PropertiesForm/Apartment.tsx';
import { FormHouse } from './Components/PropertiesForm/House.tsx';
import { FormCommercial } from './Components/PropertiesForm/Commercial.tsx';
import { FormGround } from './Components/PropertiesForm/Ground.tsx';
import { Listar } from './Components/PropertiesForm/List.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        element: <PropertiesPage />,
        children: [
          {
            path: "/dashboard/properties/apartment",
            element: <FormApartment />
          },
          {
            path: "/dashboard/properties/house",
            element: <FormHouse />
          },
          {
            path: "/dashboard/properties/commercial",
            element: <FormCommercial />
          },
          {
            path: "/dashboard/properties/ground",
            element: <FormGround />
          },
          {
            path: "/dashboard/properties/",
            element: <Listar />
          },
        ]
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
