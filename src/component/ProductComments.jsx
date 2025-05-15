import React, { useState } from 'react';
import "../CSS/ProductComments.css";

// ✅ Yorumların ilk hali burada tanımlanmalı
const initialComments = [
    {
        productId: 1,
        username: 'Ayşe',
        content: 'Ürün çok kaliteli, teşekkürler!',
        rating: 5
    },
    {
        productId: 2,
        username: 'Mehmet',
        content: 'Biraz geç geldi ama güzel.',
        rating: 4
    },
    {
        productId: 1,
        username: 'Zeynep',
        content: 'Ürün beklentimi karşıladı.',
        rating: 4
    },
];

const ProductComments = ({ productId }) => {
    const [commentList, setCommentList] = useState(initialComments);
    const [formData, setFormData] = useState({
        username: '',
        content: '',
        rating: 5
    });
    const [showForm, setShowForm] = useState(false); // 🔹 Form görünürlük durumu

    const filteredComments = commentList.filter(comment => comment.productId === productId);

    const renderStars = (rating) => {
        return '⭐'.repeat(rating) + ''.repeat(5 - rating);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'rating' ? parseInt(value) : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            productId,
            ...formData
        };
        setCommentList([...commentList, newComment]);
        setFormData({ username: '', content: '', rating: 5 });
        setShowForm(false);
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3>Ürün Yorumları</h3>
            {filteredComments.length > 0 ? (
                filteredComments.map((comment, index) => (
                    <div key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                        <strong>{comment.username}</strong>
                        <p style={{ margin: '5px 0' }}>{renderStars(comment.rating)}</p>
                        <p>{comment.content}</p>
                    </div>
                ))
            ) : (
                <p>Bu ürün için henüz yorum yok.</p>
            )}

            {/* 🔹 Yorum Yap butonu */}
            <button onClick={() => setShowForm(!showForm)} style={{ marginTop: '1rem', backgroundColor:"#834d19"}}>
                {showForm ? 'İptal Et' : 'Yorum Yap'}
            </button>

            {/* 🔹 Form görünürlüğü kontrolü */}
            {showForm && (
                <form onSubmit={handleSubmit} className="comment-form">
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Adınız"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="content"
                            placeholder="Yorumunuz"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            Puan:
                            <select
                                name="rating"
                                value={formData.rating}
                                onChange={handleInputChange}
                            >
                                {[5, 4, 3, 2, 1].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <button type="submit" style={{ backgroundColor:"#834d19"}}>Gönder</button>
                </form>
            )}
        </div>
    );
};

export default ProductComments;
