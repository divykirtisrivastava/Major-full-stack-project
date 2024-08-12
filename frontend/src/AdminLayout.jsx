import React from 'react'
import AdminNavbar from './adminPannel/AdminNavbar'
import {Outlet} from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

export default function AdminLayout() {
  return (
    <UserContextProvider>
      <AdminNavbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
