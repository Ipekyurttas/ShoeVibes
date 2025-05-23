import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Home from './page/Home';
import User from './page/User';
import ForgotPassword from './page/ForgotPassword.jsx';
import ProfileHome from './page/ProfileHome.jsx';
import ProfileDetail from './page/ProfileDetail.jsx';
import SuccessEmail from './page/SuccessEmail.jsx';
import Failure from './page/Failure.jsx';
import NewPassword from './page/NewPassword.jsx';
import Cart from './page/Cart.jsx';
import Brands from './page/Brands.jsx';
import ProductDetails from './page/ProductDetails.jsx';
import Favorites from './page/Favorites.jsx';
import OrdersPage from './page/OrdersPage.jsx';
import Review from './page/Review.jsx';
import Edit from './page/Edit.jsx';
import AddressPage from './page/AddressPage.jsx';
import PaymentPage from './page/PaymentPage.jsx';
import About from './component/About.jsx';
import SettingsPage from './component/Settings.jsx';
import Blogs from './component/Blogs.jsx';
import New from './component/New.jsx';
import NotificationUserPage from './page/NotificatonUserPage.jsx';
import AdminDetail from './page/AdminDetail.jsx';
import AdminProduct from './page/AdminProduct.jsx';
import NotificationAdminPage from './page/NotificationAdminPage.jsx';
import AdminOrderPage from './page/AdminOrderPage.jsx';
import SearchResults from './page/SearchResults.jsx';

import Contact from './page/Contact.jsx';


function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<User />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/profile/account" element={<ProfileDetail />} />
        <Route path="/profile/cart" element={<Cart />} />
        <Route path="/profile/orders" element={<OrdersPage />} />
        <Route path="/profile/settings" element={<SettingsPage />} />
        <Route path='/success' element={<SuccessEmail />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/set-password' element={<NewPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/profile/favorites" element={<Favorites />} />
        <Route path="/profile/review" element={<Review />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/add" element={<AddressPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path='/about' element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile/notifications" element={<NotificationUserPage />} />
        <Route path="/admin" element={<AdminDetail />} />
        <Route path="/admin/account" element={<AdminDetail />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/notification" element={<NotificationAdminPage />} />
        <Route path="/admin/order" element={<AdminOrderPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;