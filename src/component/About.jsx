import React from 'react';
import TopNavbar from '../component/TopNav';
import "../CSS/About.css";
import video from "../images/ShoeVibes.mp4";
import ProfileHomeNav from '../component/ProfileHomeNav.jsx';
import Footer from "../component/Footer.jsx";
import CategoryNav from './CategoryNav.jsx';

const About = () => {
    React.useEffect(() => {
        console.log('About page mounted');
    }, []);

    return (
        <div className="about-page" style={{ borderColor: "brown" }}>
            <ProfileHomeNav />
            <CategoryNav />

            <div className="video-wrapper">
                <video
                    className="full-video"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="container py-5">
                <h1 className="text-center mb-4" style={{ color: "#6a380a" }}>About ShoeVibes</h1>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <p className="lead">
                            <strong>ShoeVibes</strong>, kullanıcılara geniş bir ayakkabı seçkisi sunarak, her tarza ve ihtiyaca uygun kaliteli modelleri kolayca bulmalarını sağlar. Kullanıcı dostu arayüzü sayesinde alışveriş süreci hızlı ve pratiktir. Güvenli ödeme seçenekleri ve sorunsuz iade politikalarıyla kullanıcıların alışverişte kendilerini güvende hissetmelerini destekler. Ayrıca, stil önerileri ve kullanıcı yorumlarıyla alışveriş deneyimini zenginleştirerek, modayı takip eden herkes için ilham kaynağı olur. ShoeVibes, ayakkabı tutkunlarının keyifli ve sorunsuz bir şekilde alışveriş yapabilecekleri güvenilir bir platformdur.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
