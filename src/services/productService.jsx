// src/api/productService.js
import axios from '../api/axiosInstance';

export const getAllProducts = async () => {
  const response = await axios.get('/products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};
