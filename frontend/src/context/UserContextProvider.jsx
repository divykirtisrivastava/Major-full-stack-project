import React, {  useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [cartList, setCartList] = useState(false)
    let [isAdminLogin, setIsAdminLogin] = useState(false)
    let [isClientLogin, setIsClientLogin] = useState(false)
  return (
    <UserContext.Provider value={{cartList, setCartList, isAdminLogin, setIsAdminLogin, isClientLogin, setIsClientLogin}}>
        {children}
    </UserContext.Provider>
  )
}
