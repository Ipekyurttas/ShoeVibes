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

function App() {
  return (
    <div className="app-root">
       <ToastContainer position="top-center" autoClose={1000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<User />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/profile" element={<ProfileHome/>} />
        <Route path="/profile/account" element={<ProfileDetail/>} />
        <Route path="/profile/favorites" element={<ProfileDetail/>} />
        <Route path="/profile/cart" element={<ProfileDetail/>} />
        <Route path="/profile/orders" element={<ProfileDetail/>} />
        <Route path="/profile/settings" element={<ProfileDetail/>} />
      </Routes>
    </div>
  );
}

export default App;