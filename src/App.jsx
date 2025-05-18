import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Home from './page/Home';
import User from './page/User';
import ForgotPassword from './page/ForgotPassword';
import ProfileHome from './page/ProfileHome';
import ProfileDetail from './page/ProfileDetail';
import SuccessEmail from './page/SuccessEmail';
import Failure from './page/Failure';
import NewPassword from './page/NewPassword';
import Cart from './page/Cart';
import Brands from './page/Brands';
import Women from './page/Women';
import Men from './page/Men';
import Kids from './page/Kids';
import Sneakers from './page/Sneakers';
import ProductDetails from './page/ProductDetails';
import FavoritesPage from './page/Favorites';
import Orders from './page/OrdersPage.jsx';
import Review from './page/Review.jsx';
import Edit from './page/Edit.jsx';

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
        <Route path="/profile/cart" element={<Cart />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/settings" element={<ProfileDetail />} />
        <Route path='/success' element={<SuccessEmail />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/set-password' element={<NewPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/profile/favorites" element={<FavoritesPage />} />
        <Route path="/orders" element={<Orders />} />
         <Route path="/profile/review" element={<Review />} />
         <Route path="/profile/edit" element={<Edit />} />
      </Routes>

    </div>
  );
}

export default App;
