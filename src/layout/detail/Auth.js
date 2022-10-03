import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
        <h1 >Auth</h1>
        <Link to='/auth/login'>Login</Link>\
        <Link to='/auth/register'>Register</Link>
        <Outlet />
    </div>
  )
}

export default Auth