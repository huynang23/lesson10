import React from 'react'
import { Link , Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <h1 >Home</h1>
    <Link to='/home/product'>product</Link>\
    <Link to='/home/invoices'>invoices</Link>\
    <Link to='/home/cart'>cart</Link>\
    <Link to='/home/profile'>profile</Link>\
    <Link to='/home/about'>about</Link>
    <Outlet />
</div>
  )
}

export default Home