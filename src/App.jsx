// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Home from './page/Home';
import User from './page/User';
import ProfileHome from './page/ProfileHome';
import ProfileDetail from './page/ProfileDetail';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './page/ForgotPassword';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SuccessEmail from './page/SuccessEmail';
import Failure from './page/Failure';
import NewPassword from './page/NewPassword';
import Brands from './page/Brands';
import Women from './page/Women';
import Men from './page/Men';
import Kids from './page/Kids';
import Sneakers from './page/Sneakers';
import ProductDetail from './page/ProductDetails';


function App() {
  return (
    <div className="app-root">
      <ToastContainer position="top-center" autoClose={1000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<User />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/profile/account" element={<ProfileDetail />} />
        <Route path="/profile/favorites" element={<ProfileDetail />} />
        <Route path="/profile/cart" element={<ProfileDetail />} />
        <Route path="/profile/orders" element={<ProfileDetail />} />
        <Route path="/profile/settings" element={<ProfileDetail />} />
        <Route path='/success' element={<SuccessEmail />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/set-password' element={<NewPassword />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/men' element={<Men />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </div>
  );
};
export default App;