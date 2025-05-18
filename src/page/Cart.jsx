import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'; // özel stiller için
import stiletto from "../images/stiletto.webp";
import convers from "../images/conversebrands.webp";
import convers1 from "../images/conversebrands1.webp";
import cart from "../images/shopping-cart.png";
import bin from "../images/bin.png";
import "../CSS/Cart.css";
import ProfileHomeNav from '../component/ProfileHomeNav';
import Footer from '../component/Footer';
import CategoryNav from '../component/CategoryNav';



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
            <ProfileHomeNav/>
            <CategoryNav/>
            <div className="container mt-4">
                {/* Eğer sepet boşsa */}
                {cartItems.length === 0 && (
                    <div>
                        <h2 className="text-center mb-4">Cart</h2>
                        <div className="empty-cart text-center">
                            <img src={cart} alt="Boş Sepet" style={{ width: "120px", height: "120px", marginBottom: "10px" }} />
                            <p>You haven't added any products yet.</p>
                            <p className="s-text">Thousands of products and models are waiting for you at ShoeVibes</p>
                            <div className="d-flex justify-content-center mt-2">
                                <Link to="/" className="btn mt-2 start-button">Start Shopping </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Eğer ürün varsa */}
                {cartItems.length > 0 && (
                    <div className="row">
                        <div className="col-lg-9">
                            <h3 className="mb-5">Cart</h3>
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
                                                    <p className="card-text small text-muted">Size: {item.size}</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            {item.oldPrice && <span className="text-muted text-decoration-line-through me-2">{item.oldPrice.toFixed(2)} ₺</span>}
                                                            <span className="fw-bold">{item.price.toFixed(2)} ₺</span>
                                                        </div>
                                                        <button className="btn2 " onClick={() => addToCart(item.id)}><img src={bin} className='trash' />Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5">
                            <div className="card p-3 mb-3" style={{ position: "sticky", top: "30px" }}>
                                <p className="text-lg font-semibold">
                                   Order Summary<span className="text-sm font-normal text-gray-500">(3 items in the cart)</span>
                                </p>

                                <div className="mt-4 space-y-2">
                                    <div className="d-flex justify-content-between gap-3">
                                        <span>Products</span>
                                        <span>2.499,99 TL</span>
                                    </div>
                                    <div className="d-flex justify-content-between gap-3">
                                        <span>Deliveriy</span>
                                        <span>69,99 TL</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="d-flex justify-content-between gap-3 text-orange-600 font-bold text-lg">
                                        <span>Total</span>
                                        <span>2.569,98 TL</span>
                                    </div>
                                </div>

                                <button className="mt-4 w-full text-white font-semibold py-2 px-4 rounded card-onay">
                                    Confirm Your Cart
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default Cart;