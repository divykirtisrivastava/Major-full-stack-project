import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import AdminTable from './adminPannel/AdminTable'
import ViewProduct from './adminPannel/ViewProduct'
import AddProduct from './adminPannel/AddProduct'
import UpdateProduct from './adminPannel/UpdateProduct'


let router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AdminLayout/>}>
      <Route path='' element={<AdminTable/>} />
      <Route path='/view/:id' element={<ViewProduct/>} />
      <Route path='/update/:id' element={<UpdateProduct/>} />
      <Route path='/addProduct' element={<AddProduct/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
