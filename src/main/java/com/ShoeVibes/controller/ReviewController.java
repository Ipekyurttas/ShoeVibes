package com.ShoeVibes.controller;

import com.ShoeVibes.dto.ReviewRequestDto;
import com.ShoeVibes.dto.ReviewResponseDto;
import com.ShoeVibes.service.ReviewService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/add")
    public ReviewResponseDto addReview(@RequestBody ReviewRequestDto dto, Principal principal) {
        return reviewService.addReview(principal.getName(), dto);
    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId, Principal principal) {
        reviewService.deleteReview(principal.getName(), reviewId);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/product/{productId}")
    public List<ReviewResponseDto> getReviews(@PathVariable Long productId) {
        return reviewService.getReviews(productId);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/my")
    public List<ReviewResponseDto> getMyReviews(Principal principal) {
        return reviewService.getUserReviews(principal.getName());
    }
}
