import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import CartScreen from '../components/cart/CartScreen'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Home from '../modules/home/Home'
import Login from '../modules/login/Login'
export default function Routing() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/login' element={<Login />} />
         <Route exact path='/cart' element={<CartScreen />} />
         </Routes>
        
         </BrowserRouter>
    </div>
  )
}
