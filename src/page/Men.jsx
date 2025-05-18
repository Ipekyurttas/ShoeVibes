import React, { useState } from 'react';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import CategorySidebar from '../component/CategorySideBar';
import pembespor from "../images/pembespor.webp";
import ProfileHomeNav from '../component/ProfileHomeNav';
import "../CSS/Brands.css";

const Men= () => {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem('token');

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
        id: 5, 
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
        id: 6, 
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
        id: 7, 
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
        id: 8, 
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
        id: 9, 
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
        id: 10, 
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
        id: 11, 
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
        id: 12, 
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
      
  ];

  const toggleFavorite = id => setFavorites(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );

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

export default Men;
