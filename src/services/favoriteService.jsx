import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/favorites'; // Backend adresin

const favoriteService = {
  // Kullanıcının favori ürünlerini listele
  listFavorite: (userId) => axios.get(`${API_BASE_URL}/list/${userId}`),

  // Favori ürün ekle
  addFavorite: (userId, productId) =>
    axios.post(`${API_BASE_URL}/add`, null, { params: { userId, productId } }),

  // Favori ürün çıkar
  removeFavorite: (userId, productId) =>
    axios.delete(`${API_BASE_URL}/remove`, { params: { userId, productId } }),
};

export default favoriteService;
