import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import ProfileSideBar from '../component/ProfileSideBar';
import FavoritesDetails from '../component/FavoritesDetails';
import Footer from '../component/Footer';

function FavoritesPage() {
  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="container-fluid mt-4 bg-white">
        <div className="row">
          <div className="col-md-3">
            <ProfileSideBar />
          </div>
          <div className="col-md-9">
            <FavoritesDetails />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
