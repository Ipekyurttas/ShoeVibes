// src/services/cartService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/carts'; // Backend URL

// Token ile kullanıcıya ait sepeti getir (opsiyonel kupon kodu ile)
export const getCartByUserId = async (token, couponCode = null) => {
    try {
        const response = await axios.get(`${API_URL}/list`, {
            headers: { Authorization: `Bearer ${token}` },
            params: couponCode ? { coupon: couponCode } : {},
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

// UserId ile sepet getir (JWT kullanmayan endpoint için)
export const getCartByUserIdPlain = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart by userId:", error);
        throw error;
    }
};

// Yeni bir sepet oluştur
export const createCart = async (cartDTO) => {
    try {
        const response = await axios.post(`${API_URL}/create`, cartDTO);
        return response.data;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
};

// Sepeti güncelle
export const updateCart = async (cartId, cartDTO) => {
    try {
        const response = await axios.put(`${API_URL}/${cartId}`, cartDTO);
        return response.data;
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
