import React from 'react'
import AdminNavbar from './adminPannel/AdminNavbar'
import {Outlet} from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
    </div>
  )
}
