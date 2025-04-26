import React from 'react';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import ProfileSideBar from '../component/ProfileSideBar';
import Footer from '../component/Footer';

function ProfileDetail() {
    return (
        <>
            <ProfileHomeNav />
            <CategoryNav />
            <ProfileSideBar/>
            <Footer />
        </>
    );
}
export default ProfileDetail;