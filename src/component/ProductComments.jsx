import React, { useState } from 'react';

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
    const [comments, setComments] = useState(initialComments);
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5);
    const [showForm, setShowForm] = useState(false);

    const renderStars = (rating) => {
        return '⭐'.repeat(rating) + ''.repeat(5 - rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim() || !content.trim()) {
            alert('Lütfen kullanıcı adı ve yorum alanlarını doldurun.');
            return;
        }

        const newComment = {
            productId,
            username,
            content,
            rating: Number(rating),
        };

        setComments(prevComments => [...prevComments, newComment]);
        setUsername('');
        setContent('');
        setRating(5);
        setShowForm(false);
    };

    const filteredComments = comments.filter(comment => comment.productId === productId);

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

            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    style={{
                        marginTop: '1.5rem',
                        padding: '8px 16px',
                        backgroundColor: '#6a380a',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Yorum Yap
                </button>
            )}

            {showForm && (
                <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
                    <h4>Yorum Yaz</h4>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <label>
                            Kullanıcı Adı: <br />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    color: 'black',
                                }}
                                required
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <label>
                            Yorum: <br />
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={8}
                                style={{
                                    width: '500px',
                                    padding: '8px',
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    minHeight: '150px',
                                    color: 'black',
                                }}
                                required
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <label>
                            Puan: <br />
                            <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                style={{ padding: '8px', backgroundColor: "#6a380a" }}
                            >
                                {[5, 4, 3, 2, 1].map(star => (
                                    <option key={star} value={star}>{star}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#6a380a',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}
                    >
                        Gönder
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#ccc',
                            color: '#333',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        İptal
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductComments;
