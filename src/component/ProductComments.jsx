import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductComments = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/reviews/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.error("Yorumlar yüklenemedi:", error);
      }
    };

    if (token) {
      fetchComments();
    }
  }, [productId, token]);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('Lütfen yorum yazınız.');
      return;
    }

    const dto = {
      productId: productId,
      comment: content,
      rating: rating,
    };

    try {
      const response = await axios.post("http://localhost:8080/reviews/add", dto, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(prev => [...prev, response.data]);
      setContent('');
      setRating(5);
      setShowForm(false);
    } catch (error) {
      console.error("Yorum eklenemedi:", error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Ürün Yorumları</h3>

      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <strong>{comment.username}</strong>
            <p style={{ margin: '5px 0' }}>{renderStars(comment.rating)}</p>
            <p>{comment.comment}</p>
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
              Yorum: <br />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                style={{
                  width: '100%',
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  minHeight: '100px',
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
                onChange={(e) => setRating(Number(e.target.value))}
                style={{ padding: '8px', backgroundColor: "#6a380a", color: "white", border: "none" }}
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
