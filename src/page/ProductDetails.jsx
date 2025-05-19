import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import "../CSS/ProductDetails.css";

import conversebrands1 from "../images/conversebrands1.webp";
import abiye1 from "../images/abiye1.webp";
import abiye2 from "../images/abiye2.webp";
import ProfileHomeNav from '../component/ProfileHomeNav';

import ProductComments from '../component/ProductComments.jsx';

const productList = [
  {
    id: 1,
    name: 'Nike Court Borough Low 2',
    price: 1200,
    originalPrice: 1500,
    rating: 4.2,
    reviewCount: 439,
    favoriteCount: 120,
    description: 'Günlük Ayakkabısı Sneaker',
    image: conversebrands1,
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['black', 'beige', 'pink', 'yellow', 'red', 'blue', 'grey', 'white', 'green']
  },
  {
    id: 2,
    name: 'Nike Air Max',
    price: 1300,
    originalPrice: 1600,
    rating: 4.5,
    description: 'Koşu Ayakkabısı',
    image: abiye1,
    sizes: [38, 39, 40, 41, 42],
    colors: ['blue', 'green', 'white']
  },
  {
    id: 3,
    name: 'Adidas Superstar',
    price: 1400,
    originalPrice: 1700,
    rating: 4.7,
    description: 'Klasik Spor Ayakkabı',
    image: abiye2,
    sizes: [36, 38, 40, 42],
    colors: ['red', 'pink', 'grey']
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find(p => p.id === parseInt(id));
  const token = localStorage.getItem('token');

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Select size and color.");
      return;
    }

    console.log("Added to cart:", {
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    });

    // Burada cart'a ekleme işlemini yapabilirsin
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      {token ? <ProfileHomeNav /> : <TopNavbar />}
      <CategoryNav />
      <div className="product-detail-container">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-section">
          <h1 className="product-name">{product.name}</h1>

          <div className="price-info">
            <span className="current-price">{product.price} TL</span>
            <span className="original-price">{product.originalPrice} TL</span>
          </div>

          <div className="rating">
            <span>⭐ {product.rating}</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="size-selector">
            <h4>Size</h4>
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected-size' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="size-selector">
            <h4>Color</h4>
            <div className="color-options">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`color-button ${selectedColor === color ? 'selected-color' : ''}`}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color ? '2px solid black' : '1px solid #ddd'
                  }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h4>Quantity</h4>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>

          <ProductComments productId={product.id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
