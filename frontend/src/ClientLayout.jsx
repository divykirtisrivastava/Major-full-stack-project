import React from 'react'
import ClientNavbar from './clientPannel/ClientNavbar'
import { Outlet } from 'react-router-dom'

export default function ClientLayout() {
  return (
    <div>
      <ClientNavbar/>
      <Outlet/>
    </div>
  )
}
