import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdressPage from '../Pages/AdressPage/AdressPage'
import Cart from '../Pages/Cart/Cart'
import Home from '../Pages/Home/Home'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Profile from '../Pages/Profile/Profile'
import Register from '../Pages/Register/Register'
import Restaurant from '../Pages/Restaurant/Restaurant'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/register/adressO' element={<AdressPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router