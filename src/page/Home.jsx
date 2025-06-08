import React from 'react';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import Home1 from '../component/Home1';
import ProfileHomeNav from '../component/ProfileHomeNav';

function Home() {
    const token = localStorage.getItem('token');

    return (
        <>
            {token ? <ProfileHomeNav /> : <TopNavbar />}
            <CategoryNav />
            <Home1 />
            <Footer />
        </>
    );
}

export default Home;
