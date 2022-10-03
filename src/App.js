import React,{ useState} from 'react'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import Login from './layout/login/Login'
import Register from './layout/login/Register'
import Auth from './layout/detail/Auth'
import Product from './layout/detail/Product'
import Invoices from './layout/detail/Invoices'
import Cart from './layout/detail/Cart'
import Profile from './layout/detail/Profile'
import About from './layout/detail/About'
import Home from './layout/detail/Home'
import ProductDetais from './layout/detail/ProductDetails'


const App = () => {
  
  const [myLogin, setMyLogin] = useState(true)
  
  const dangnhap = ()=> {
  
    localStorage.setItem("myLogin", JSON.stringify(myLogin))
  
  }
 
  
	return (
    <div>
      <Routes>
        <Route path='/' element={<Index></Index>}>
          <Route path='auth' element={<Auth></Auth>}>
           
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='register' element={<Register></Register>}></Route>
        
          </Route>
          <Route path='home' element={<Home></Home>}>
          <Route path='product' element={<Product></Product>}>
            <Route path=':id' element={<ProductDetais></ProductDetais>}> </Route>
          </Route>

              <Route path='invoices' element={<Invoices></Invoices>}></Route>
              <Route path='cart' element={<Cart></Cart>}></Route>
              <Route path='profile' element={<Profile></Profile>}></Route>
              <Route path='about' element={<About></About>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

const Index = () => {
  const [checkLogin,setCheckLogin] = useState( JSON.parse(localStorage.getItem('myLogin'))) 
	return (
    <div>
        <h1>Home</h1>
        <Link to='auth'>Auth</Link>\
        {checkLogin ? ('') : (<Link to='home'>Home</Link>)}
        <Outlet/>
    </div>

  )
}
export default App