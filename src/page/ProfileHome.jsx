import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import Home1 from '../component/Home1';

function ProfileHome() {
  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <Home1 />
      <Footer />
    </>
  );
}

export default ProfileHome;
