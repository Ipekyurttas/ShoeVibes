import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { X, StarFill, Star } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import "../CSS/FavoriteDetails.css";

function FavoritesDetails() {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchFavorites();
    }
  }, [token]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:8080/favorites/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(response.data.products || []);
    } catch (error) {
      console.error('Favoriler alınırken hata:', error);
    }
  };

  const removeFavorite = async (productId) => {
    try {
      await axios.delete("http://localhost:8080/favorites/remove", {
        params: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchFavorites();
    } catch (error) {
      console.error('Favori kaldırılırken hata:', error);
    }
  };

  const getImageUrl = (url) => `http://localhost:8080${url}`;

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < Math.floor(rating) ? (
          <StarFill key={i} className="text-warning me-1" />
        ) : (
          <Star key={i} className="text-secondary me-1" />
        )
      );
  };

  return (
    <div className="favorites-page product-list-container">
      <h5 className="mb-4">Favori Ürünler</h5>
      {favorites.length > 0 ? (
        <div className="products-grid">
          {favorites.map((product) => (
            <div key={product.id} className="product-card">
              <div className="remove-icon-wrapper">
                <button
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(product.id)}
                >
                  <X size={20} />
                </button>
              </div>
              <img
                src={product.imageUrls?.[0] ? getImageUrl(product.imageUrls[0]) : ''}
                alt={product.name}
                className="card-img-top"
              />
              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <div className="rating-container d-flex align-items-center">
                  {renderStars(product.rating || 0)}
                </div>
                <div className="price-container my-2">
                  <span className="current-price fw-bold">
                    {product.price.toLocaleString()} TL
                  </span>
                </div>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Sepete Ekle
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites-card text-center">
          <div>
            <div style={{ fontSize: '2rem' }}>💔</div>
            <p className="mt-3 text-muted">Henüz favori ürün eklemediniz.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesDetails;
