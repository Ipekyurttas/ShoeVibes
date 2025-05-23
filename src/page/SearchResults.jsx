import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../component/TopNav';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import CategorySidebar from '../component/CategorySideBar';
import "../CSS/Brands.css";

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!keyword) return;

        axios.get(`http://localhost:8080/products/search?keyword=${encodeURIComponent(keyword)}`)
            .then(res => {
                console.log("Arama sonucu:", res.data);
                setProducts(res.data);
            })
            .catch(err => console.error("Arama hatası:", err));
    }, [keyword]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const getImageUrl = (url) => `http://localhost:8080${url}`;

    return (
        <>
            {token ? <ProfileHomeNav /> : <TopNavbar />}
            <CategoryNav />
            <div className="ecommerce-container">
                <aside className="sidebar-container">
                    <CategorySidebar />
                </aside>
                <section className="product-listing">
                    {products.length === 0 ? (
                        <p className="no-products-message">Sonuç bulunamadı: "{keyword}"</p>
                    ) : (
                        products.map(p => (
                            <article key={p.id} className="product-card">
                                <div className="product-image">
                                    <Link to={`/product/${p.id}`}>
                                        {p.images?.[0]?.url ? (
                                            <img src={getImageUrl(p.images[0].url)} alt={p.name} />
                                        ) : (
                                            <div className="no-image">Resim Yok</div>
                                        )}
                                    </Link>
                                    <button
                                        className={`favorite-button ${favorites.includes(p.id) ? 'active' : ''}`}
                                        onClick={() => toggleFavorite(p.id)}
                                    >♥</button>
                                </div>
                                <div className="product-details">
                                    <h3 className="product-title">{p.name}</h3>
                                    <p className="product-description">{p.description}</p>
                                    <div className="price-container">
                                        <span className="current-price">{p.price.toFixed(2)} TL</span>
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
