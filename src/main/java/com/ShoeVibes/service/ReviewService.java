package com.ShoeVibes.service;

import com.ShoeVibes.dto.ReviewRequestDto;
import com.ShoeVibes.dto.ReviewResponseDto;
import com.ShoeVibes.entity.Product;
import com.ShoeVibes.entity.Review;
import com.ShoeVibes.entity.User;
import com.ShoeVibes.repository.ProductRepository;
import com.ShoeVibes.repository.ReviewRepository;
import com.ShoeVibes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public ReviewResponseDto addReview(String username, ReviewRequestDto dto) {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = productRepository.findById(dto.getProductId()).orElseThrow(() -> new RuntimeException("Product not found"));

        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReviewerName(user.getFirstName() + " " + user.getLastName());
        review.setComment(dto.getComment());
        review.setRating(dto.getRating());
        review.setCreatedAt(LocalDateTime.now());

        Review saved = reviewRepository.save(review);
        return convertToDto(saved);
    }

    public void deleteReview(String username, Long reviewId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new RuntimeException("Review not found"));

        if (!review.getUser().getEmail().equals(username)) {
            throw new RuntimeException("Sadece kendi yorumunuzu silebilirsiniz.");
        }

        reviewRepository.delete(review);
    }

    public List<ReviewResponseDto> getReviews(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        return reviewRepository.findByProduct(product)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<ReviewResponseDto> getUserReviews(String username) {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not found"));

        return reviewRepository.findByUser(user)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private ReviewResponseDto convertToDto(Review review) {
        ReviewResponseDto dto = new ReviewResponseDto();
        dto.setId(review.getId());
        dto.setComment(review.getComment());
        dto.setRating(review.getRating());
        dto.setReviewerName(review.getReviewerName());
        dto.setCreatedAt(review.getCreatedAt());
        return dto;
    }
}
