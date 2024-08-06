import React from 'react'
import ClientNavbar from './clientPannel/ClientNavbar'
import { Outlet } from 'react-router-dom'
import CartContext from './context/CartContext'

export default function ClientLayout() {
  return (
    <CartContext>
      <ClientNavbar/>
      <Outlet/>
    </CartContext>
  )
}
