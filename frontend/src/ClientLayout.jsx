import React from 'react'
import ClientNavbar from './clientPannel/ClientNavbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

export default function ClientLayout() {
  return (
    <UserContextProvider>
      <ClientNavbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
