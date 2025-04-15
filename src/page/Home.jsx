import React from 'react';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import Home1 from '../component/Home1';

function Home() {
    return (
        <>
            <TopNavbar />
            <CategoryNav />
            <main className="main-content">
                <Home1 /> 
            </main>
            <Footer />
        </>
    );
};
export default Home;