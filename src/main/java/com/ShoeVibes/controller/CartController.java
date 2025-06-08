package com.ShoeVibes.controller;

import com.ShoeVibes.dto.CartDto;
import com.ShoeVibes.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/carts")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/add")
    public ResponseEntity<CartDto> addCart(
            @RequestParam Long productId,
            @RequestParam int quantity,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(cartService.addCart(email, productId, quantity));
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/list")
    public ResponseEntity<CartDto> listCart(
            @RequestParam(required = false) String coupon,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(cartService.listCart(email, coupon));
    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping("/remove")
    public ResponseEntity<CartDto> removeCart(
            @RequestParam Long productId,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(cartService.removeCart(email, productId));
    }
}
