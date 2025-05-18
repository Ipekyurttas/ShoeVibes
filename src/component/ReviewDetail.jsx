import React from 'react';
import { Container, Card, Button, Row, Col, Image } from 'react-bootstrap';
import { Trash, Pencil } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import stiletto from "../images/stiletto.webp";
import "../CSS/Review.css";

const ReviewDetail = () => {
  const navigate = useNavigate();
  
  const comments = [
    {
      id: 1,
      productId: 101,
      productName: "Klasik Deri Cüzdan",
      productImage: stiletto,
      comment: "Çok kaliteli bir ürün, kesinlikle tavsiye ederim.",
      rating: 5,
      date: "15.05.2023",
      isDeleted: false
    },
    {
      id: 2,
      productId: 205,
      productName: "Bluetooth Kulaklık",
      productImage: stiletto,
      comment: "Ses kalitesi iyi ancak batarya ömrü beklediğim kadar uzun değil.",
      rating: 3,
      date: "22.04.2023",
      isDeleted: true
    },
    {
      id: 3,
      productId: 178,
      productName: "Spor Ayakkabı",
      productImage: stiletto,
      comment: "Rahattı ve dayanıklı görünüyor. Koşu için ideal.",
      rating: 4,
      date: "10.03.2023",
      isDeleted: false
    }
  ];

  const handleDeleteComment = (commentId) => {
    console.log("Silinecek yorum ID:", commentId);
    alert("Yorum silindi!");
  };

  const handleEditComment = (commentId) => {
    navigate(`/edit-comment/${commentId}`);
  };

  const handleGoToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container className="profile-content">
      <h2 className="profile-section-title">Comments</h2>
      
      {comments.length === 0 ? (
        <div className="empty-comments">
          <p>You haven't made any comments yet.</p>
          <Button variant="primary" onClick={() => navigate('/profile')}>
           Browse Products
          </Button>
        </div>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <Card key={comment.id} className="comment-item">
              <Card.Body>
                <div className="comment-header">
                  <div className="product-image-container">
                    <Image 
                      src={comment.productImage} 
                      alt={comment.productName}
                      className="product-thumbnail"
                      onClick={() => handleGoToProduct(comment.productId)}
                    />
                  </div>
                  <div className="comment-main-content">
                    <div className="comment-title-row">
                      <h5 
                        className="product-title"
                        onClick={() => handleGoToProduct(comment.productId)}
                      >
                        {comment.productName}
                      </h5>
                      {!comment.isDeleted && (
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
                      )}
                    </div>
                    
                    {comment.isDeleted ? (
                      <p className="deleted-comment-text">Bu yorum silindi</p>
                    ) : (
                      <>
                        <div className="comment-meta">
                          <div className="rating-stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < comment.rating ? "star-filled" : "star-empty"}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="comment-date">{comment.date}</span>
                        </div>
                        <p className="comment-body">{comment.comment}</p>
                      </>
                    )}
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