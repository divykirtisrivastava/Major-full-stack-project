import React, {  useState } from 'react'
import UserContext from './UserContext'

export default function CartContext({children}) {
    let [cartList, setCartList] = useState(false)
  return (
    <UserContext.Provider value={{cartList, setCartList}}>
        {children}
    </UserContext.Provider>
  )
}
