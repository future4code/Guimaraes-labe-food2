import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdressPage from '../pages/AdressPage/AdressPage'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import LoginPage from '../pages/LoginPage/LoginPage'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import Restaurant from '../pages/Restaurant/Restaurant'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/register/adress' element={<AdressPage />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/restaurant/:id' element={<Restaurant />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router