package com.ShoeVibes.dto;

import java.time.LocalDateTime;

public class ReviewDTO {
    private Long id;
    private String reviewerName;
    private String comment;
    private Integer rating;
    private LocalDateTime createdAt;
    private Long userId;
    private Long productId;

    // Constructors, Getters, and Setters
    public ReviewDTO() {
    }

    public ReviewDTO(Long id, String reviewerName, String comment, Integer rating, LocalDateTime createdAt, Long userId, Long productId) {
        this.id = id;
        this.reviewerName = reviewerName;
        this.comment = comment;
        this.rating = rating;
        this.createdAt = createdAt;
        this.userId = userId;
        this.productId = productId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}