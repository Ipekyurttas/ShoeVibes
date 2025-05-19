// src/api/cartService.js
import axios from '../api/axiosInstance';

export const getCartItems = async () => {
  const response = await axios.get('/cart');
  return response.data;
};

export const addToCart = async (productId, quantity) => {
  await axios.post('/cart', { productId, quantity });
};

export const removeFromCart = async (productId) => {
  await axios.delete(`/cart/${productId}`);
};

export const updateCartItemQuantity = async (productId, quantity) => {
  await axios.put(`/cart/${productId}`, { quantity });
};
