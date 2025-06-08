import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import ProfileSideBar from '../component/ProfileSideBar';
import ProfileDetailContent from '../component/ProfileDetailContent';
import Footer from '../component/Footer';

function ProfileDetail() {
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
            <ProfileDetailContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileDetail;