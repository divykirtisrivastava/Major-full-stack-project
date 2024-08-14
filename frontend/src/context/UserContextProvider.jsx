import React, {  useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider({children}) {
    let [cartList, setCartList] = useState(false)
    let [isAdminLogin, setIsAdminLogin] = useState(false)
    let [isClientLogin, setIsClientLogin] = useState(false)

    let clientLogin = async (data)=>{
      let result = await axios.post('http://localhost:3000/api/clientLogin', data)
      console.log(result)
      if(result.data.isMatch == true){
        let token = result.data.token
        localStorage.setItem('token', token)
        return true
      }else{
        return false
      }
    }

  return (
    <UserContext.Provider value={{cartList, setCartList, isAdminLogin, setIsAdminLogin, isClientLogin, setIsClientLogin, clientLogin}}>
        {children}
    </UserContext.Provider>
  )
}
