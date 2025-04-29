import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Home from './page/Home';
import User from './page/User';
import ForgotPassword from './page/ForgotPassword';
import SuccessEmail from './page/SuccessEmail';
import Failure from './page/Failure';
import NewPassword from './page/NewPassword';
import Cart from './page/Cart'; // Burayı ekledik

import { Routes, Route } from 'react-router-dom';
<Route path='/cart' element={<Cart />} />


function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<User />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/success' element={<SuccessEmail />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/set-password' element={<NewPassword />} />
        <Route path='/cart' element={<Cart />} /> {/* Burayı ekledik */}
      </Routes>
    </div>
  );
}

export default App;
