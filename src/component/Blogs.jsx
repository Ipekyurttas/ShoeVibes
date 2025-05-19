import React from 'react';
import Footer from "../component/Footer.jsx";
import ProfileHomeNav from '../component/ProfileHomeNav.jsx';
import CategoryNav from './CategoryNav.jsx';
import ksiyah from "../images/kızsiyah.webp";
import order1 from "../images/abiye2.webp";
import order4 from "../images/stiletto.webp";



const Blogs = () => {
    return (
        <div style={{ marginLeft: "7px" }}>
            <ProfileHomeNav />
            <CategoryNav />
            <br /><br /><br />
            <div style={{ display: 'flex', gap: '2rem' }}>
                <img src={ksiyah} alt="Blog 1" style={{ width: '500px', height: '400px', objectFit: 'contain', borderRadius: '10px', marginLeft: "5px", marginTop: "2px", backgroundColor: '#f0f0f0' }} />
                <img src={order1} alt="Blog 2" style={{ width: '500px', height: '400px', objectFit: 'contain', borderRadius: '10px', marginLeft: "5px", marginTop: "2px", backgroundColor: '#f0f0f0' }} />
                <img src={order4} alt="Blog 3" style={{ width: '500px', height: '400px', objectFit: 'contain', borderRadius: '10px', marginLeft: "5px", marginTop: "2px", backgroundColor: '#f0f0f0' }} />
            </div>




            <h2
                style={{
                    marginTop: '2rem',
                    fontWeight: '700',
                    fontSize: '2rem',
                    color: '#6a380a',
                    fontFamily: "'Georgia', serif",
                    size: "30px",
                }}
            >
                ShoeVibes
            </h2>
            <p>
                <strong>ShoeVibes</strong>, ayakkabı modasını ve alışveriş deneyimini tamamen yenilikçi bir bakış açısıyla ele alan, Zeynep İnce, İpek Nur Yurttaş ve Yeşim Kaya tarafından kurulan dinamik ve müşteri odaklı bir platformdur. Üç kurucunun moda tutkusundan ve sektör deneyiminden ilham alan ShoeVibes, kullanıcılarına sadece şık ve kaliteli ayakkabılar sunmakla kalmayıp, aynı zamanda alışverişi kolay, güvenilir ve keyifli bir sürece dönüştürmeyi amaçlamaktadır.
            </p>
            <p>
                Geniş ürün yelpazesiyle her tarza ve ihtiyaca hitap eden ShoeVibes, spor ayakkabılardan klasik modellere, günlük kullanımdan özel tasarım parçalara kadar zengin seçenekler sunar. Kurucuların vizyonu, ayakkabı alışverişinde herkesin kendi tarzını özgürce ifade edebileceği ve kaliteli ürünlere kolayca ulaşabileceği bir dijital platform yaratmaktır.
            </p>
            <p>
                Müşteri memnuniyeti ShoeVibes için her zaman önceliklidir. Bu nedenle platform, kullanıcı dostu arayüzü, hızlı ve güvenli ödeme sistemleri, sorunsuz iade süreçleri ve profesyonel müşteri hizmetleri ile alışveriş deneyimini kusursuzlaştırır. Siparişin verilmesinden teslimat anına kadar geçen süreç, kullanıcıların güvenle ve memnuniyetle tamamlayabileceği şekilde tasarlanmıştır.
            </p>
            <p>
                ShoeVibes, sadece bir alışveriş sitesi değil, aynı zamanda ayakkabı modasının trendlerini takip eden, moda ve stil konusunda ilham veren bir topluluk olmayı hedefler. Bloglar, stil önerileri ve kullanıcı yorumları ile ziyaretçilerine yol gösterir, modanın nabzını tutar.
            </p>
            <p>
                Zeynep İnce, İpek Nur Yurttaş ve Yeşim Kaya'nın ortak vizyonu, modayı herkes için ulaşılabilir kılmak, kalite ve estetiği buluşturmak ve ayakkabı alışverişini bir keyif haline getirmektir. Bu amaçla ShoeVibes, sürekli yenilik yaparak, müşterilerinin beklentilerini aşmayı ve ayakkabı tutkunlarının vazgeçilmez adresi olmayı sürdürmektedir.
            </p>
            <br /><br /><br />
            <Footer />
        </div>
    );
};

export default Blogs;
