import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Trash, Pencil } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../CSS/Review.css";

const ReviewDetail = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reviews/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setComments(response.data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setError("An error occurred while fetching your comments.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchMyReviews();
    } else {
      setError("User session not found.");
      setLoading(false);
    }
  }, [token]);

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/reviews/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(prev => prev.filter(comment => comment.id !== commentId));
    } catch (err) {
      alert("Failed to delete the comment.");
      console.error(err);
    }
  };

  const handleEditComment = (commentId) => {
    navigate(`/edit-comment/${commentId}`);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-4 text-center">{error}</Alert>;

  return (
    <Container className="profile-content">
      <h2 className="profile-section-title">My Comments</h2>

      {comments.length === 0 ? (
        <div className="empty-comments text-center mt-4">
          <p>You haven't written any comments yet.</p>
          <Button variant="primary" onClick={() => navigate('/profile')}>
            Browse Products
          </Button>
        </div>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <Card key={comment.id} className="comment-item mb-3 shadow-sm">
              <Card.Body>
                <div className="comment-main-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-1">{formatDate(comment.createdAt)}</h5>
                    <div className="comment-actions">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditComment(comment.id)}
                      >
                        <Pencil size={14} />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <Trash size={14} />
                      </Button>
                    </div>
                  </div>

                  <div className="comment-meta d-flex align-items-center mt-1 mb-2">
                    <div className="rating-stars me-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < comment.rating ? "star-filled" : "star-empty"}>★</span>
                      ))}
                    </div>
                  </div>

                  <p className="comment-body">{comment.comment}</p>
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
