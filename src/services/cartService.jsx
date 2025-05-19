import axios from 'axios';

const API_URL = 'http://localhost:8080/carts';

// Token'ı localStorage'dan al
const getToken = () => {
  return localStorage.getItem('token');
};

// Sepet listesi (opsiyonel kupon ile)
export const getCartByUser = async (couponCode = null) => {
  const token = getToken();
  try {
    const response = await axios.get(`${API_URL}/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: couponCode ? { coupon: couponCode } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Sepete ürün ekle
export const addToCart = async (productId, quantity) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${API_URL}/add`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          productId,
          quantity,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Sepetten ürün sil (cartItemId ile)
export const removeFromCart = async (productId) => {
  const token = getToken();
  try {
    const response = await axios.delete(`${API_URL}/remove`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        productId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};
