import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'; // özel stiller için
import stiletto from "../images/stiletto.webp";
import convers from "../images/conversebrands.webp";
import convers1 from "../images/conversebrands1.webp";
import cart from "../images/shopping-cart.png";
import bin from "../images/bin.png";
import "../CSS/Cart.css"
import UserHeader from '../component/UserHeader';


function Cart() {
    const [activeTab, setActiveTab] = useState('onceEklenenler');
    // const [cartItems, setCartItems] = useState([]);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Muggo",
            description: "MARY Garantili Kare Burunlu Kadın Ayakkabı",
            price: 624.95,
            oldPrice: 1249.90,
            size: 38,
            imageUrl: stiletto,
            inCart: false
        },
        {
            id: 2,
            name: "Freemax",
            description: "Kadın Yazlık Rahat Mavi Renk Konvers",
            price: 494.94,
            oldPrice: null,
            size: 38,
            imageUrl: convers,
            inCart: false
        },
        {
            id: 3,
            name: "Tonny Black",
            description: "Kadın Beyaz Konvers",
            price: 674.97,
            oldPrice: 1349.95,
            size: 38,
            imageUrl: convers1,
            inCart: false
        }
    ]);

    const addToCart = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item => item.id === id ? { ...item, inCart: true } : item)
        );
    };

    return (
        <>
            <UserHeader />
            <div className="container mt-4">

                {/* Eğer sepet boşsa */}
                {cartItems.length === 0 && (
                    <div>
                        <h2 className="text-center mb-4">Sepetim</h2>
                        <div className="empty-cart text-center">
                            <img src={cart} alt="Boş Sepet" style={{ width: "120px", height: "120px", marginBottom: "10px" }} />
                            <p >Sepetinizde ürün bulunmamaktadır.</p>
                            <p><span className="s-text">ShoeVibes</span>’ da binlerce ürün ve model seni bekliyor</p>
                            <div className="d-flex justify-content-center mt-2">
                                <Link to="/" className="btn mt-2 start-button">Alışverişe Başla</Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Eğer ürün varsa */}
                {cartItems.length > 0 && (
                    <>
                        {/* <div className="tabs d-flex justify-content-around my-4">
                            <button className={`btn1 ${activeTab === 'onceEklenenler' ? 'btn-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('onceEklenenler')}>Önceden Eklediklerim</button>
                            <button className={`btn1 ${activeTab === 'favoriler' ? 'btn-outline-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('favoriler')}>Favorilerim</button>
                            <button className={`btn1 ${activeTab === 'sonGezdiklerim' ? 'btn-outline-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('sonGezdiklerim')}>Son Gezdiklerim</button>
                        </div> */}

                        <h3 className="mb-5">Sepetim</h3>

                        <div className="item-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-4 card-img">
                                            <img src={item.imageUrl} className="img-fluid rounded-start" alt={item.name} />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text small">{item.description}</p>
                                                <p className="card-text small text-muted">Beden: {item.size}</p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        {item.oldPrice && <span className="text-muted text-decoration-line-through me-2">{item.oldPrice.toFixed(2)} ₺</span>}
                                                        <span className="fw-bold">{item.price.toFixed(2)} ₺</span>
                                                    </div>
                                                        <button className="btn2 " onClick={() => addToCart(item.id)}><img src={bin} className='trash'/>Sil</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
