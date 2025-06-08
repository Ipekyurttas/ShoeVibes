import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import ProfileHomeNav from '../component/ProfileHomeNav';
import Footer from '../component/Footer';
import CategorySidebar from '../component/CategorySideBar';
import "../CSS/Brands.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Brands = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const query = useQuery();
    const category = query.get("category") || "Brands";
    const subCategory = query.get("subCategory");
    const token = localStorage.getItem('token');

    useEffect(() => {
        const endpoint = subCategory ? "/products/filter" : "/products/filter/category";
        const payload = subCategory ? { category, subCategory } : { category };

        axios.post(`http://localhost:8080${endpoint}`, payload)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Ürün çekme hatası:", err);
                setError("Ürünler yüklenemedi.");
                setLoading(false);
            });
    }, [category, subCategory]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = async (productId) => {
        if (!token) {
            alert("Favorilere eklemek için giriş yapmalısınız.");
            return;
        }

        const isFavorite = favorites.includes(productId);
        if (isFavorite) {
            setFavorites(prev => prev.filter(id => id !== productId));
            return;
        }

        try {
            await axios.post(
                "http://localhost:8080/favorites/add",
                null,
                {
                    params: { productId },
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setFavorites(prev => [...prev, productId]);
        } catch (err) {
            console.error("Favori ekleme hatası:", err);
            alert("Favori eklenirken bir hata oluştu.");
        }
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
                    {loading ? (
                        <div>Yükleniyor...</div>
                    ) : error ? (
                        <div>{error}</div>
                    ) : (
                        products.map(product => (
                            <article key={product.id} className="product-card">
                                <div className="product-image">
                                    {product.badge && (
                                        <div className="price-badge">{product.badge}</div>
                                    )}
                                    <Link to={`/product/${product.id}`} onClick={() => setSelectedProductId(product.id)}>
                                        {product.images?.[0]?.url ? (
                                            <img src={getImageUrl(product.images[0].url)} alt={product.name} />
                                        ) : (
                                            <div className="no-image">Resim Yok</div>
                                        )}
                                    </Link>
                                    <button
                                        className={`favorite-button ${favorites.includes(product.id) ? 'active' : ''}`}
                                        onClick={() => toggleFavorite(product.id)}
                                        title={favorites.includes(product.id) ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                                    >
                                        ♥
                                    </button>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="product-details">
                                    <h3 className="product-title">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <p className="favorite-count">{product.favoriteCount || 0} kişi favoriledi!!</p>
                                    <div className="rating-container">
                                        <span className="rating-stars">★</span>
                                        <span className="rating-value">{product.rating?.toFixed(1) || "4.5"}</span>
                                        <span className="review-count">({product.reviewCount || 0})</span>
                                    </div>
                                    <div className="price-container">
                                        <span className="current-price">
                                            {product.discountedPrice?.toFixed(2) || product.price.toFixed(2)} TL
                                        </span>
                                        {product.originalPrice && (
                                            <span className="original-price">{product.originalPrice.toFixed(2)} TL</span>
                                        )}
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

export default Brands;
