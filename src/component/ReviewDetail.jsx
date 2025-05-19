import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Image, Spinner, Alert } from 'react-bootstrap';
import { Trash, Pencil } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../CSS/Review.css";

const ReviewDetail = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/reviews")
      .then(response => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Yorumlar alınırken hata oluştu.");
        setLoading(false);
      });
  }, []);

  const handleDeleteComment = (commentId) => {
    axios.delete(`http://localhost:8080/reviews/${commentId}`)
      .then(() => {
        setComments(prev => prev.filter(comment => comment.id !== commentId));
      })
      .catch(() => alert("Silme işlemi başarısız oldu."));
  };

  const handleEditComment = (commentId) => {
    navigate(`/edit-comment/${commentId}`);
  };

  const handleGoToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-4 text-center">{error}</Alert>;

  return (
    <Container className="profile-content">
      <h2 className="profile-section-title">Comments</h2>

      {comments.length === 0 ? (
        <div className="empty-comments">
          <p>Henüz bir yorum yapmadınız.</p>
          <Button variant="primary" onClick={() => navigate('/profile')}>Ürünlere Göz At</Button>
        </div>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <Card key={comment.id} className="comment-item">
              <Card.Body>
                <div className="comment-header">
                  <div className="product-image-container">
                    <Image
                      src={"/images/stiletto.webp"} // default görsel
                      alt="Ürün"
                      className="product-thumbnail"
                      onClick={() => handleGoToProduct(comment.productId)}
                    />
                  </div>
                  <div className="comment-main-content">
                    <div className="comment-title-row">
                      <h5 className="product-title" onClick={() => handleGoToProduct(comment.productId)}>
                        Ürün ID: {comment.productId}
                      </h5>
                      <div className="comment-actions">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="edit-btn"
                          onClick={() => handleEditComment(comment.id)}
                        >
                          <Pencil size={14} />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="delete-btn"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          <Trash size={14} />
                        </Button>
                      </div>
                    </div>

                    <div className="comment-meta">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < comment.rating ? "star-filled" : "star-empty"}>★</span>
                        ))}
                      </div>
                      <span className="comment-date">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="comment-body">{comment.comment}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ReviewDetail;
