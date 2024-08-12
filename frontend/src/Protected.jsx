import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './context/UserContext'

export default function Protected({children}) {
    
  let {isAdminLogin} =  useContext(UserContext)

  if(isAdminLogin){
    return children
  }else{
    return <Navigate to='/admin/adminLogin'/>
  }
}
