import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { X, StarFill, Star } from 'react-bootstrap-icons';
import stiletto from "../images/stiletto.webp";
import "../CSS/FavoriteDetails.css"; 

function FavoritesDetails() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'MANGO Bileği strass taşlı topuklu ayakkabı',
      price: 2299,
      originalPrice: 2999,
      rating: 4.5,
      size: '39',
      image: stiletto,
    },
     {
      id: 2,
      name: 'MANGO Bileği strass taşlı topuklu ayakkabı',
      price: 2299,
      originalPrice: 2999,
      rating: 4.5,
      size: '39',
      image: stiletto,
    }

  ]);

  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/profile'); 
  };

  const removeFavorite = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId));
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) =>
      i < Math.floor(rating) ?
        <StarFill key={i} className="text-warning me-1" /> :
        <Star key={i} className="text-secondary me-1" />
    );
  };

  return (
    <div className="favorites-page product-list-container">
      <h5 className="mb-4">Favorites</h5>
      {favorites.length > 0 ? (
        <div className="products-grid">
          {favorites.map(product => (
            <div key={product.id} className="product-card position-relative">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <button 
                 className="position-absolute top-0 end-0 m-2 p-0 border-0 bg-transparent text-dark"
                 onClick={() => removeFavorite(product.id)}>
                 <X size={20} />
                 </button>
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <div className="rating-container d-flex align-items-center">
                  {renderStars(product.rating)}
                </div>
               <div className="price-container my-2">
                 <span className="current-price fw-bold">
                   {product.price.toLocaleString()} TL
                 </span>
               </div>              
                <div className="mb-2 small text-muted">Size: {product.size}</div>
                <Button variant="primary" className="w-100"
                  onClick={() => alert(`${product.name} added to cart!`)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites-card text-center">
          <div>
            <div style={{ fontSize: '2rem' }}>💔</div>
            <p className="mt-3 text-muted">You haven't added any products yet</p>
            <button onClick={handleStartShopping} className="btn btn-primary">
              Start Shopping 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesDetails;
