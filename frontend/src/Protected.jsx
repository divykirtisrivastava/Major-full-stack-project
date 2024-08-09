import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({children}) {
    
  let flag =  false

  if(flag){
    return children
  }else{
    return <Navigate to='/admin/adminLogin'/>
  }
}
