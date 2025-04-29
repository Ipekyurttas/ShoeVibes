import axios from 'axios';

const API_URL = 'http://localhost:8080/api/carts'; // Backend URL'nizi buraya yazın

// Kullanıcıya ait sepeti getir
export const getCartByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data; // API'den dönen CartDTO
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

// Yeni bir sepet oluştur
export const createCart = async (cartDTO) => {
    try {
        const response = await axios.post(`${API_URL}/create`, cartDTO);
        return response.data; // API'den dönen CartDTO
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
};

// Sepeti güncelle
export const updateCart = async (cartId, cartDTO) => {
    try {
        const response = await axios.put(`${API_URL}/${cartId}`, cartDTO);
        return response.data; // API'den dönen güncellenmiş CartDTO
    } catch (error) {
        console.error("Error updating cart:", error);
        throw error;
    }
};

// Sepeti sil
export const deleteCart = async (cartId) => {
    try {
        await axios.delete(`${API_URL}/${cartId}`);
    } catch (error) {
        console.error("Error deleting cart:", error);
        throw error;
    }
};
