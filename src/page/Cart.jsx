import React, { useState, useEffect } from 'react';
import { getCartByUserId } from '../services/cartService';
import CategoryNav from '../component/CategoryNav';
import ProfileHomeNav from '../component/ProfileHomeNav';
import Footer from '../component/Footer';

const Cart = () => {
  const token = localStorage.getItem('token'); // Token artık localStorage'dan alınıyor
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coupon, setCoupon] = useState(null);
  const [couponStatus, setCouponStatus] = useState({});

  const fakeCoupons = [
    { id: 1, code: 'WELCOME10', description: '10% discount' },
    { id: 2, code: 'SUMMER20', description: '20 TL discount' },
  ];

  const fetchCart = async (couponCode = null) => {
    setLoading(true);
    try {
      const cartData = await getCartByUserId(token, couponCode);
      setCart(cartData);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCouponClick = (couponCode, id) => {
    setCouponStatus(prev => ({ ...prev, [id]: true }));
    setCoupon(couponCode);
    fetchCart(couponCode);
  };

  if (loading) return <div>Loading...</div>;
  if (!cart || !cart.cartItems) return <div>No cart found.</div>;

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-9">
            <h3 className="mb-4">Cart</h3>
            {cart.cartItems.length === 0 ? (
              <p>No items in your cart.</p>
            ) : (
              cart.cartItems.map(item => (
                <div key={item.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-4">
                      <img src={item.imageUrls[0]} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price} TL</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-lg-3">
            <div className="card p-3 mb-3">
              <h5>Coupons</h5>
              {fakeCoupons.map(c => (
                <div key={c.id} className="d-flex justify-content-between align-items-center mt-2">
                  <div>
                    <p className="m-0 fw-bold">{c.code}</p>
                    <small>{c.description}</small>
                  </div>
                  <button
                    className={`btn ${couponStatus[c.id] ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={() => handleCouponClick(c.code, c.id)}
                    disabled={couponStatus[c.id]}
                  >
                    {couponStatus[c.id] ? "Applied" : "Apply"}
                  </button>
                </div>
              ))}
            </div>
            <div className="card p-3">
              <p><strong>Total:</strong> {cart.totalPrice.toFixed(2)} TL</p>
              <p><small className="text-muted">Discount: {cart.discount.toFixed(2)} TL</small></p>
              <button className="btn btn-primary w-100">Proceed to Payment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;