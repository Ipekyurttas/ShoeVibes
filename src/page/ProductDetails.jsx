import React from 'react';
import { useParams } from 'react-router-dom';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import "../CSS/ProductDetails.css";
import conversebrands1 from "../images/conversebrands1.webp"; 
import sandalet from "../images/sandalet.webp";
import abiye1 from "../images/abiye1.webp";
import abiye2 from "../images/abiye2.webp";

const productList = [
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
    image: conversebrands1,
    sizes: [36, 37, 38, 39, 40, 41]
  },
  { 
        id: 2, 
        name: 'Nike Court Borough Low 2',
        code: 'DV5456-106',
        price: 1200,
        originalPrice: 1500,
        rating: 4.2,
        reviewCount: 439,
        favoriteCount: 120,
        description: 'Günlük Ayakkabısı Sneaker',
        image: abiye1,
        sizes: [36, 37, 38, 39, 40, 41]
      },
      { 
        id: 3, 
        name: 'Nike Court Borough Low 2',
        code: 'DV5456-106',
        price: 1200,
        originalPrice: 1500,
        rating: 4.2,
        reviewCount: 439,
        favoriteCount: 120,
        description: 'Günlük Ayakkabısı Sneaker',
        image: abiye2,
        sizes: [36, 37, 38, 39, 40, 41]
      },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find(p => p.id === parseInt(id));

  if (!product) return <div>Product Is Not Found</div>;

  return (
    <>
      <TopNavbar />
      <CategoryNav />
      <div className="product-detail-container">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-code">Kod: {product.code}</p>
          <div className="price-info">
            <span className="current-price">{product.price} TL</span>
            <span className="original-price">{product.originalPrice} TL</span>
          </div>
          <div className="rating">
            <span>⭐ {product.rating} ({product.reviewCount} review)</span>
          </div>
          <p className="description">{product.description}</p>

          <div className="size-selector">
            <h4>Select Size:</h4>
            {product.sizes.map(size => (
              <button key={size} className="size-button">{size}</button>
            ))}
          </div>

          <div className="coupon">
            <input type="text" placeholder="Enter Coupon"  />
            <button className="apply-coupon">Apply Coupon</button>
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
