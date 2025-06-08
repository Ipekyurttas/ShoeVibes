import axios from 'axios';

export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem('token');

  const params = new URLSearchParams();
  params.append('productId', productId);
  params.append('quantity', quantity);

  const response = await axios.post(
    'http://localhost:8080/carts/add',
    params, // Veriler burada form-urlencoded formatında
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      }
    }
  );

  return response.data;
};
