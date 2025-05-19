import React, { useState, useEffect } from 'react';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import CategorySidebar from '../component/CategorySideBar';
import ProfileHomeNav from '../component/ProfileHomeNav';
import pembespor from "../images/pembespor.webp";
import favoriteService from '../services/favoriteService';
import "../CSS/Brands.css";

const Sneakers = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('userId');  // Backend ile ilişkilendirilen userId
  const token = localStorage.getItem('token');

  // Sabit ürün listesi
  const products = [
    {
      id: 1,
      name: 'Nike Court Borough Low 2',
      code: 'DV5456-106',
      price: 1200,
      originalPrice: 1500,
      rating: 4.2,
      reviewCount: 439,
      favoriteCount: 120,
      description: 'Günlük Ayakkabısı Sneaker',
      image: pembespor,
      freeShipping: true,
      installment: 3,
      lowestPrice: false
    },
    {
      id: 2,
      name: 'Nike Court Borough Low 2 (GS)',
      code: 'DV5457-100',
      price: 899,
      originalPrice: 1200,
      rating: 5.0,
      reviewCount: 3,
      favoriteCount: 9372,
      description: 'Günlük Çocuk Ayakkabısı Sneaker',
      image: pembespor,
      freeShipping: true,
      installment: 3,
      lowestPrice: true
    },
    {
      id: 3,
      name: 'Nike FQ6873-101 INITIATOR',
      code: 'FQ6873-101',
      price: 1299,
      originalPrice: 1600,
      rating: 4.6,
      reviewCount: 77,
      favoriteCount: 15400,
      description: 'UNISEX YÜRÜYÜŞ KOŞU AYAKKABISI',
      image: pembespor,
      freeShipping: true,
      installment: 3,
      lowestPrice: false
    },
    {
      id: 4,
      name: 'Nike Air Max 270',
      code: 'AM270-101',
      price: 1500,
      originalPrice: 1800,
      rating: 4.8,
      reviewCount: 112,
      favoriteCount: 8900,
      description: 'Günlük rahatlık için tasarlandı',
      image: pembespor,
      freeShipping: false,
      installment: 4,
      lowestPrice: false
    },
    {
      id: 5,
      name: 'Nike React Infinity Run',
      code: 'RIR-2021',
      price: 1400,
      originalPrice: 1700,
      rating: 4.5,
      reviewCount: 65,
      favoriteCount: 7300,
      description: 'Koşu performansını artırır',
      image: pembespor,
      freeShipping: true,
      installment: 3,
      lowestPrice: false
    },
    {
      id: 6,
      name: 'Nike Air Zoom Pegasus',
      code: 'AZP-37',
      price: 1300,
      originalPrice: 1550,
      rating: 4.3,
      reviewCount: 48,
      favoriteCount: 5400,
      description: 'Yüksek performanslı koşu ayakkabısı',
      image: pembespor,
      freeShipping: true,
      installment: 3,
      lowestPrice: true
    },
    {
      id: 7,
      name: 'Nike Blazer Mid 77',
      code: 'BM77-2021',
      price: 1100,
      originalPrice: 1350,
      rating: 4.0,
      reviewCount: 82,
      favoriteCount: 4300,
      description: 'Retro tasarım sneaker',
      image: pembespor,
      freeShipping: false,
      installment: 2,
      lowestPrice: false
    },
    {
      id: 8,
      name: 'Nike Air Force 1',
      code: 'AF1-07',
      price: 1600,
      originalPrice: 1850,
      rating: 4.7,
      reviewCount: 120,
      favoriteCount: 15200,
      description: 'Klasik ve zamansız',
      image: pembespor,
      freeShipping: true,
      installment: 4,
      lowestPrice: false
    },
    {
      id: 9,
      name: 'Nike ZoomX Vaporfly',
      code: 'ZVX-2021',
      price: 2000,
      originalPrice: 2200,
      rating: 4.9,
      reviewCount: 30,
      favoriteCount: 6500,
      description: 'Profesyonel koşu ayakkabısı',
      image: pembespor,
      freeShipping: true,
      installment: 5,
      lowestPrice: true
    },
    {
      id: 10,
      name: 'Nike Free RN',
      code: 'FRN-2021',
      price: 1200,
      originalPrice: 1400,
      rating: 4.4,
      reviewCount: 55,
      favoriteCount: 4700,
      description: 'Hafif ve esnek',
      image: pembespor,
      freeShipping: false,
      installment: 3,
      lowestPrice: false
    },
    {
      id: 11,
      name: 'Nike Air Max 90',
      code: 'AM90-2021',
      price: 1550,
      originalPrice: 1800,
      rating: 4.6,
      reviewCount: 90,
      favoriteCount: 9300,
      description: 'Klasik hava yastıklı sneaker',
      image: pembespor,
      freeShipping: true,
      installment: 4,
      lowestPrice: false
    },
    {
      id: 12,
      name: 'Nike Zoom Pegasus Turbo',
      code: 'ZPT-2021',
      price: 1700,
      originalPrice: 1900,
      rating: 4.7,
      reviewCount: 40,
      favoriteCount: 5200,
      description: 'Yarış performansı için tasarlandı',
      image: pembespor,
      freeShipping: true,
      installment: 4,
      lowestPrice: false
    },
  ];

  // Component mount olunca backend’den favori ürünleri çek
  useEffect(() => {
    if (userId) {
      favoriteService.listFavorite(userId)
        .then(res => {
          // Backend'den gelen data örn: [{productId: 1}, {productId: 3}, ...]
          const favIds = res.data.map(fav => fav.productId);
          setFavorites(favIds);
        })
        .catch(err => console.error('Favoriler alınamadı:', err));
    }
  }, [userId]);

  const toggleFavorite = (productId) => {
    if (!userId) {
      alert('Lütfen giriş yapınız.');
      return;
    }

    const isFavorited = favorites.includes(productId);

    if (isFavorited) {
      favoriteService.removeFavorite(userId, productId)
        .then(() => {
          setFavorites(prev => prev.filter(id => id !== productId));
        })
        .catch(err => console.error('Favoriden çıkarılamadı:', err));
    } else {
      favoriteService.addFavorite(userId, productId)
        .then(() => {
          setFavorites(prev => [...prev, productId]);
        })
        .catch(err => console.error('Favoriye eklenemedi:', err));
    }
  };

  return (
    <>
      {token ? <ProfileHomeNav /> : <TopNavbar />}
      <CategoryNav />
      <div className="ecommerce-container">
        <aside className="sidebar-container">
          <CategorySidebar />
        </aside>
        <section className="product-listing">
          {products.map(p => (
            <article key={p.id} className="product-card">
              <div className="product-image">
                <img src={p.image} alt={p.name} />
                {p.lowestPrice && <div className="price-badge">Son 14 Günün En Düşük Fiyatı!</div>}
                <button
                  className={`favorite-button ${favorites.includes(p.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(p.id)}
                >
                  ♥
                </button>
              </div>
              <div className="product-details">
                <h3 className="product-title">{p.name}</h3>
                <p className="product-code">{p.code}</p>
                <p className="product-description">{p.description}</p>
                <p className="favorite-count">{p.favoriteCount.toLocaleString()} kişi favoriledi!!</p>
                <div className="rating-container">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(p.rating) ? 'filled' : ''}`}>★</span>
                  ))}
                  <span className="rating-value">{p.rating.toFixed(1)}</span>
                  <span className="review-count">({p.reviewCount})</span>
                </div>
                <div className="price-container">
                  <span className="current-price">{p.price.toFixed(2)} TL</span>
                  {p.originalPrice && <span className="original-price">{p.originalPrice.toFixed(2)} TL</span>}
                </div>
                <p className="payment-info">Peşin Fiyatına {p.installment} TAKSİT</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Sneakers;
