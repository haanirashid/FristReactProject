import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    let login_status = localStorage.getItem("loginStatus")
  return (
    <>
    {login_status? <Outlet/> : <Navigate to="/"/>}
    </>
  )
}

export default Private