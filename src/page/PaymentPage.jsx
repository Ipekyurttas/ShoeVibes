import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Payment from '../component/Payment';
import Footer from '../component/Footer';

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
