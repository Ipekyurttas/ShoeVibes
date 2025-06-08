import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Payment from '../component/Payment';
import Footer from '../component/Footer';
import axios from 'axios';

const PaymentPage = () => {
  return (
    <>
     <ProfileHomeNav/>
     <CategoryNav/>
     <Payment/>
     <Footer/>
    </>
  );
};

export default PaymentPage;
