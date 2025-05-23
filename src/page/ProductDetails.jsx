import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNavbar from '../component/TopNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import "../CSS/ProductDetails.css";
import ProfileHomeNav from '../component/ProfileHomeNav';
import ProductComments from '../component/ProductComments.jsx';
import { addToCart } from '../services/cartService';
import { getProductById } from '../services/productService';

const ProductDetail = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Product fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color.");
      return;
    }

    try {
      await addToCart(product.id, quantity);
      navigate("/cart");
    } catch (error) {
      alert("Error adding product to cart.");
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const getImageUrl = (url) => `http://localhost:8080${url}`;

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      {token ? <ProfileHomeNav /> : <TopNavbar />}
      <CategoryNav />
      <div className="product-detail-container">
        <div className="image-section">
          {product.images?.[0]?.url ? (
            <img src={getImageUrl(product.images[0].url)} alt={product.name} />
          ) : (
            <div className="no-image">Resim Yok</div>
          )}
        </div>

        <div className="detail-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="price-info">
            <span className="current-price">{product.price} TL</span>
          </div>
          <div className="rating">
            <span>⭐ {product.rating || "4.5"}</span>
          </div>
          <p className="description">{product.description}</p>

          <div className="size-selector">
            <h4>Size</h4>
            {product.size?.map(size => (
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
              {product.color?.map(color => (
                <button
                  key={color}
                  className={`color-button ${selectedColor === color ? 'selected-color' : ''}`}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color ? '2px solid black' : '1px solid #ddd'
                  }}
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

          <div className="category-info">
            <p><strong>Category:</strong> {product.category?.name}</p>
            <p><strong>Subcategory:</strong> {product.subCategory?.name}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>

          <ProductComments productId={product.id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
