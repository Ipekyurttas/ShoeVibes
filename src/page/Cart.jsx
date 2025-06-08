import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import '../CSS/Cart.css';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:8080/carts/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        setItems(data.items || []);
        setTotalPrice(data.totalPrice);
        setDiscount(data.discount);
        setDiscountedPrice(data.discountedPrice);
      } catch (err) {
        console.error("Sepet verisi alınamadı:", err);
      }
    };

    fetchCart();
  }, [token]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete("http://localhost:8080/carts/remove", {
        params: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(items.filter(item => item.productId !== productId));
    } catch (err) {
      console.error("Ürün silinemedi:", err);
    }
  };

  const handleCheckout = () => {
    navigate("/payment", {
      state: {
        totalPrice,
        discount,
        discountedPrice,
        appliedCoupon,
        itemCount: items.length
      }
    });
  };

  const getImageUrl = (url) => `http://localhost:8080${url}`;

  const applyCoupon = (code) => {
    let discountAmount = 0;
    if (code === "WELCOME10") {
      discountAmount = totalPrice * 0.10;
    } else if (code === "SUMMER20") {
      discountAmount = 20;
    }
    const newDiscountedPrice = totalPrice - discountAmount;
    setDiscount(discountAmount);
    setDiscountedPrice(newDiscountedPrice);
    setAppliedCoupon(code);
  };

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="cart-page">
        <div className="cart-left">
          <h2 className="cart-title">Cart</h2>
          {items.length === 0 ? (
            <p className="empty-cart">Sepetiniz boş.</p>
          ) : (
            items.map(({ id, productId, productName, price, quantity, imageUrls }) => (
              <div key={id} className="cart-card">
                <div className="cart-card-image">
                  <img src={getImageUrl(imageUrls?.[0])} alt={productName} />
                </div>
                <div className="cart-card-info">
                  <h4>{productName}</h4>
                  <p className="product-sub">Ürün açıklaması burada olabilir.</p>
                  <p><strong>Size:</strong> 38</p>
                  <p><strong>Color:</strong> Black</p>
                  <p><strong>Quantity:</strong> {quantity}</p>
                  <p>
                    <span className="old-price">1249.90 ₺</span>
                    <span className="price-text">{price.toFixed(2)} ₺</span>
                  </p>
                  <button className="btn-remove" onClick={() => handleRemove(productId)}>
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-right">
          <div className="coupon-section">
            <h4>Coupons</h4>
            <div className="coupon-card">
              <p><strong>WELCOME10</strong></p>
              <p>10% discount</p>
              <button className="btn-coupon" onClick={() => applyCoupon("WELCOME10")}>win</button>
            </div>
            <div className="coupon-card">
              <p><strong>SUMMER20</strong></p>
              <p>Summer - 20 TL</p>
              <button className="btn-coupon" onClick={() => applyCoupon("SUMMER20")}>win</button>
            </div>
          </div>

          <div className="summary-section">
            <h4>Order Summary ({items.length} items in the cart)</h4>
            <p><strong>Products:</strong> {totalPrice.toLocaleString('tr-TR')} TL</p>
            {appliedCoupon && (
              <p><strong>Coupon ({appliedCoupon}):</strong> -{discount.toFixed(2)} TL</p>
            )}
            <p><strong>Delivery:</strong> 69,99 TL</p>
            <p><strong>Total:</strong> {(discountedPrice + 69.99).toLocaleString('tr-TR')} TL</p>
            <button className="btn-checkout" onClick={handleCheckout}>
              Confirm Your Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
