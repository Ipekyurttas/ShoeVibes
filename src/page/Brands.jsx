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
  const [selectedProductId, setSelectedProductId] = useState(null); // 👈 Tıklanan ürünün ID'sini tutar

  const query = useQuery();
  const category = query.get("category") || "Brands";
  const subCategory = query.get("subCategory");

  useEffect(() => {
    const endpoint = subCategory ? "/products/filter" : "/products/filter/category";
    const payload = subCategory ? { category, subCategory } : { category };

    axios.post(`http://localhost:8080${endpoint}`, payload)
      .then(res => {
        setProducts(res.data);
        console.log("Filtrelenmiş ürünler:", res.data);
      })
      .catch(err => {
        console.error("Ürün çekme hatası:", err);
      });
  }, [category, subCategory]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = id => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getImageUrl = url => `http://localhost:8080${url}`;

  return (
    <>
      {localStorage.getItem('token') ? <ProfileHomeNav /> : <TopNavbar />}
      <CategoryNav />
      <div className="ecommerce-container">
        <aside className="sidebar-container">
          <CategorySidebar />
        </aside>
        <section className="product-listing">
          {products.map(p => (
            <article key={p.id} className="product-card">
              <div className="product-image">
                <Link
                  to={`/product/${p.id}`}
                  onClick={() => setSelectedProductId(p.id)} // 👈 ID'yi state'e ata
                >
                  {p.images?.[0]?.url ? (
                    <img src={getImageUrl(p.images[0].url)} alt={p.name} />
                  ) : (
                    <div className="no-image">Resim Yok</div>
                  )}
                </Link>
                <button
                  className={`favorite-button ${favorites.includes(p.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(p.id)}
                >
                  ♥
                </button>
              </div>
              <div className="product-details">
                <h3 className="product-title">{p.name}</h3>
                <p className="product-description">{p.description}</p>
                <div className="price-container">
                  <span className="current-price">{p.price.toFixed(2)} TL</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Brands;
