import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdressPage from '../pages/AdressPage/AdressPage'
import Home from '../pages/Home/Home'
import LoginPage from '../pages/LoginPage/LoginPage'
import Register from '../pages/Register/Register'
import Profile from '../pages/Profile/Profile'
import Restaurant from '../pages/Restaurant/Restaurant'
import Cart from '../pages/Cart/Cart'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/register/adress' element={<AdressPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router