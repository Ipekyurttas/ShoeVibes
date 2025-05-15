import React, { useEffect, useState } from "react";
import { getAllReviews, createReview, deleteReview } from "../services/reviewService";

const ReviewComponent = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ reviewerName: "", comment: "", rating: "" });

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        const data = await getAllReviews();
        setReviews(data);
    };

    const handleCreateReview = async () => {
        await createReview(newReview);
        setNewReview({ reviewerName: "", comment: "", rating: "" });
        fetchReviews();
    };

    const handleDeleteReview = async (id) => {
        await deleteReview(id);
        fetchReviews();
    };

    return (
        <div>
            <h2>Yorumlar</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.reviewerName}:</strong> {review.comment} ({review.rating}/5)
                        <button onClick={() => handleDeleteReview(review.id)}>Sil</button>
                    </li>
                ))}
            </ul>

            <h3>Yeni Yorum Ekle</h3>
            <input
                type="text"
                placeholder="İsminiz"
                value={newReview.reviewerName}
                onChange={(e) => setNewReview({ ...newReview, reviewerName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Yorumunuz"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            />
            <input
                type="number"
                placeholder="Puan (1-5)"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
            />
            <button onClick={handleCreateReview}>Ekle</button>
        </div>
    );
};

export default ReviewComponent;