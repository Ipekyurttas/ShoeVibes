import axios from 'axios';

export const getProductById = async (id) => {
  const res = await axios.get(`http://localhost:8080/products/list/${id}`);
  return res.data;
};
