import React from 'react';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import Home1 from '../component/Home1';
import CategorySidebar from '../component/CategorySideBar';

function Home() {
    return (
        <>
            <TopNavbar/>
            <CategoryNav/>
            <CategorySidebar/>
            <Home1/>
            <Footer/>
        </>
    );
};
export default Home;