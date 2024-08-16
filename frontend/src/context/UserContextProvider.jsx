import React, {  useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider({children}) {
    let [cartList, setCartList] = useState(false)
    let [isAdminLogin, setIsAdminLogin] = useState(false)
    let [isClientLogin, setIsClientLogin] = useState(false)
    let [auth, setAuth] = useState({
        token : localStorage.getItem('token') || null,
        isAuthorized: !!localStorage.getItem('token'),
        user:''
    })

    let clientLogin = async (data)=>{
      let result = await axios.post('http://localhost:3000/api/clientLogin', data)
      console.log(result)
      if(result.data.isMatch == true){
        let token = result.data.token
        localStorage.setItem('token', token)
        setAuth({token:token, isAuthorized: true, user:result.data.result[0]})
        return true
      }else{
        return false
      }
    }

    let profile = async (req, res)=>{
      let result = await axios.post('http://localhost:3000/api/verify')
      setAuth((prevAuth)=> ({...prevAuth, user: result.data}))
    }

    let logout = ()=>{
      localStorage.removeItem('token')
      setAuth({token: null, isAuthorized:false, user:''})
    }

    useEffect(()=>{
      let token = localStorage.getItem('token')
      if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        profile()
      }
    }, [])
console.log(auth)
 

  return (
    <UserContext.Provider value={{cartList, setCartList, isAdminLogin, setIsAdminLogin, isClientLogin, setIsClientLogin, clientLogin, auth, logout}}>
        {children}
    </UserContext.Provider>
  )
}
