import React, { useEffect, useState } from 'react';
import favoriteService from '../services/favoriteService'; // oluşturduğun dosya yolu
import { Button } from 'react-bootstrap';
import { X, StarFill, Star } from 'react-bootstrap-icons';
import "../CSS/FavoriteDetails.css";

function FavoritesDetails() {
  const [favorites, setFavorites] = useState([]);
  const userId = 1; // Örnek kullanıcı ID'si, bunu auth ile değiştir

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await favoriteService.listFavorite(userId);
      // backend'den dönen product seti response.data.products içinde
      setFavorites(Array.from(response.data.products || []));
    } catch (error) {
      console.error('Favoriler alınırken hata:', error);
    }
  };

  const removeFavorite = async (productId) => {
    try {
      await favoriteService.removeFavorite(userId, productId);
      fetchFavorites(); // Listeyi güncelle
    } catch (error) {
      console.error('Favori kaldırılırken hata:', error);
    }
  };

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
      <h5 className="mb-4">Favorites</h5>
      {favorites.length > 0 ? (
        <div className="products-grid">
          {favorites.map((product) => (
            <div key={product.id} className="product-card position-relative">
              <div className="product-image">
                <img
                  src={product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : ''}
                  alt={product.name}
                  className="card-img-top"
                />
                <button
                  className="position-absolute top-0 end-0 m-2 p-0 border-0 bg-transparent text-dark"
                  onClick={() => removeFavorite(product.id)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <div className="rating-container d-flex align-items-center">{renderStars(product.rating || 0)}</div>
                <div className="price-container my-2">
                  <span className="current-price fw-bold">{product.price.toLocaleString()} TL</span>
                </div>
                <div className="mb-2 small text-muted">Size: {product.size || '-'}</div>
                <Button variant="primary" className="w-100" onClick={() => alert(`${product.name} added to cart!`)}>
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
            {/* Burada alışverişe yönlendirme */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesDetails;
