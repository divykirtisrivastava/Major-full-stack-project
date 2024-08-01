import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import AdminTable from './adminPannel/AdminTable'
import ViewProduct from './adminPannel/ViewProduct'
import AddProduct from './adminPannel/AddProduct'
import UpdateProduct from './adminPannel/UpdateProduct'
import ClientLayout from './ClientLayout'
import Home from './clientPannel/Home'


let router  = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path='/' element={<ClientLayout/>} >
    <Route path='' element={<Home/>}/>
   </Route>

    <Route path='/admin' element={<AdminLayout/>}>
      <Route path='' element={<AdminTable/>} />
      <Route path='/admin/view/:id' element={<ViewProduct/>} />
      <Route path='/admin/update/:id' element={<UpdateProduct/>} />
      <Route path='/admin/addProduct' element={<AddProduct/>} />
    </Route>
   </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
