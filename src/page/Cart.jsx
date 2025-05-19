import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartItemQuantity } from '../services/cartService';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    await removeFromCart(productId);
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const handleQuantityChange = async (productId, quantity) => {
    await updateCartItemQuantity(productId, quantity);
    setCartItems(cartItems.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="cart-container">
        <h2>Sepet</h2>
        {cartItems.length === 0 ? (
          <p>Sepetiniz boş.</p>
        ) : (
          <ul>
            {cartItems.map(({ product, quantity }) => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>{product.price} TL</span>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                />
                <button onClick={() => handleRemove(product.id)}>Kaldır</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Toplam: {totalPrice} TL</h3>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
