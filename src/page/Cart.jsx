import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'; // özel stiller için

function Cart() {
    const [activeTab, setActiveTab] = useState('onceEklenenler');
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Muggo",
            description: "MARY Garantili Kare Burunlu Kadın Ayakkabı",
            price: 624.95,
            oldPrice: 1249.90,
            size: 38,
            imageUrl: "https://via.placeholder.com/100",
            inCart: false
        },
        {
            id: 2,
            name: "Freemax",
            description: "Kadın Yazlık Rahat Baretli Kolej Babet",
            price: 494.94,
            oldPrice: null,
            size: 38,
            imageUrl: "https://via.placeholder.com/100",
            inCart: false
        },
        {
            id: 3,
            name: "Tonny Black",
            description: "Kadın Siyah Yüksek Poli Taban Yanı Açık Ayakkabı",
            price: 674.97,
            oldPrice: 1349.95,
            size: 38,
            imageUrl: "https://via.placeholder.com/100",
            inCart: false
        }
    ]);

    const addToCart = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item => item.id === id ? { ...item, inCart: true } : item)
        );
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Sepetim</h2>

            {/* Eğer sepet boşsa */}
            {cartItems.filter(item => item.inCart).length === 0 && (
                <div className="empty-cart text-center">
                    <img src="/cart-empty.png" alt="Empty Cart" style={{ width: "80px", marginBottom: "10px" }} />
                    <p>Sepetinizde ürün bulunmamaktadır.</p>
                    <p><span className="text-warning">FLO</span>’da binlerce ürün ve model seni bekliyor</p>
                    <Link to="/" className="btn btn-warning mt-2">Alışverişe Başla</Link>
                </div>
            )}

            {/* Eğer ürün varsa */}
            {cartItems.length > 0 && (
                <>
                    <div className="tabs d-flex justify-content-around my-4">
                        <button className={`btn ${activeTab === 'onceEklenenler' ? 'btn-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('onceEklenenler')}>Önceden Eklediklerim</button>
                        <button className={`btn ${activeTab === 'favoriler' ? 'btn-outline-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('favoriler')}>Favorilerim</button>
                        <button className={`btn ${activeTab === 'sonGezdiklerim' ? 'btn-outline-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('sonGezdiklerim')}>Son Gezdiklerim</button>
                    </div>

                    <div className="item-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-4">
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
                                                {!item.inCart ? (
                                                    <button className="btn btn-outline-warning btn-sm" onClick={() => addToCart(item.id)}>Sepete Ekle</button>
                                                ) : (
                                                    <span className="badge bg-success">Sepette</span>
                                                )}
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
    );
}

export default Cart;
