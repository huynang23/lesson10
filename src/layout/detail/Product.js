import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
    <ul>
    <li> <Link to = "1">  Product 1</Link></li>
    <li> <Link to = "2">  Product 2</Link></li>
    <li> <Link to = "3">  Product 3</Link></li>
    </ul>
    <Outlet />
</div>
  )
}

export default Product