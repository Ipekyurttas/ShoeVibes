import React from 'react';

const comments = [
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
    const filteredComments = comments.filter(comment => comment.productId === productId);

    // ⭐ puanı yıldız olarak göstermek için yardımcı fonksiyon
    const renderStars = (rating) => {
        return '⭐'.repeat(rating) + '☆'.repeat(5 - rating); // örn: ⭐⭐⭐⭐☆
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
        </div>
    );
};

export default ProductComments;
