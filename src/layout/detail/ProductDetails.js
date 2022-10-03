import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetai = () => {

    const param = useParams()
  return (
    
    <div>
        <h1> ProductDetail</h1>
        <h1>ID : {param.id}</h1>
    </div>
  )
}

export default ProductDetai