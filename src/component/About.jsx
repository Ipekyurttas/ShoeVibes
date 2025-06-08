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
                            <strong>ShoeVibes</strong>, 2019 yılında Yeşim KAYA, İpek Nur YURTTAŞ ve Zeynep İNCE’nin öncülüğünde kurulan SohoVibes, modern yaşamın dinamiklerine uyum sağlayan özgün bir alışveriş deneyimi sunmak amacıyla yola çıktı. Moda tutkusunu teknolojiyle harmanlayan bu girişim, kullanıcıların tarzlarını özgürce ifade edebileceği bir dijital platform haline geldi. Kapsayıcı ürün çeşitliliği, kullanıcı dostu arayüzü ve yenilikçi filtreleme sistemleri ile SohoVibes, her yaştan ve tarzdan kullanıcıya hitap eden sade ama güçlü bir alışveriş deneyimi sunar.

                            SohoVibes, yalnızca bir e-ticaret sitesi değil; aynı zamanda stilin, yaratıcılığın ve kişisel ifadenin ön planda tutulduğu bir yaşam alanıdır. Kurucularının vizyonuyla şekillenen bu platform, müşteri memnuniyetini merkeze alarak sürekli gelişen ürün koleksiyonları ve kişiselleştirilmiş alışveriş çözümleri ile fark yaratmayı hedefler. Kaliteli ürünlere erişimi kolaylaştıran yapısıyla kısa sürede sadık bir kullanıcı kitlesi oluşturmuş ve dijital moda dünyasında kendine özel bir yer edinmiştir.

                            Her detayında özenle düşünülmüş bir deneyim vadeden SohoVibes, geçmişin ilhamı ile geleceğin modasını bugüne taşıyor.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
