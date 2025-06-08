import { useState, useEffect } from 'react';
import { getCartByUserId } from '../services/cartService';
import axios from 'axios';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cartData = await getCartByUserId(userId);
                setCart(cartData);
            } catch (error) {
                console.error('Error fetching cart:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!cart) {
        return <div>No cart found for user {userId}</div>;
    }

    return (
        <div>
            <h2>Cart for User {userId}</h2>
            <p>Cart ID: {cart.id}</p>
            <p>Items: {cart.item}</p>
            <ul>
                {cart.cartItems && cart.cartItems.length > 0 ? (
                    cart.cartItems.map((item, index) => (
                        <li key={index}>{`CartItem ID: ${item.id}, Quantity: ${item.quantity}`}</li>
                    ))
                ) : (
                    <li>No items in cart.</li>
                )}
            </ul>
        </div>
    );
};

export default Cart;