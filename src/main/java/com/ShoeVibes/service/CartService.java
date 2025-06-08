package com.ShoeVibes.service;

import com.ShoeVibes.dto.CartDto;
import com.ShoeVibes.dto.CartItemDto;
import com.ShoeVibes.entity.*;
import com.ShoeVibes.repository.CartRepository;
import com.ShoeVibes.repository.CouponRepository;
import com.ShoeVibes.repository.ProductRepository;
import com.ShoeVibes.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final CouponRepository couponRepository;

    public CartService(CartRepository cartRepository,
                       UserRepository userRepository,
                       ProductRepository productRepository,
                       CouponRepository couponRepository) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.couponRepository = couponRepository;
    }

    public CartDto addCart(String email, Long productId, int quantity) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    newCart.setItems(new HashSet<>());
                    return cartRepository.save(newCart);
                });

        CartItem item = cart.getItems().stream()
                .filter(ci -> ci.getProduct().equals(product))
                .findFirst()
                .orElse(null);

        if (item == null) {
            item = new CartItem();
            item.setProduct(product);
            item.setQuantity(quantity);
            item.setCart(cart);
            cart.getItems().add(item);
        } else {
            item.setQuantity(item.getQuantity() + quantity);
        }

        cartRepository.save(cart);
        return convertToDto(cart, null);
    }

    public CartDto listCart(String email, String couponCode) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    newCart.setItems(new HashSet<>());
                    return cartRepository.save(newCart);
                });

        return convertToDto(cart, couponCode);
    }

    public CartDto removeCart(String email, Long productId) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().removeIf(item -> item.getProduct().equals(product));

        cartRepository.save(cart);
        return convertToDto(cart, null);
    }

    private CartDto convertToDto(Cart cart, String couponCode) {
        Set<CartItemDto> itemDtos = cart.getItems() != null
                ? cart.getItems().stream()
                .map(this::convertCartItemToDto)
                .collect(Collectors.toSet())
                : new HashSet<>();

        BigDecimal total = itemDtos.stream()
                .map(i -> i.getPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal discountAmount = BigDecimal.ZERO;

        if (couponCode != null && !couponCode.isBlank()) {
            Optional<Coupon> couponOpt = couponRepository.findByCode(couponCode.trim().toUpperCase());
            if (couponOpt.isPresent() && couponOpt.get().isActive()) {
                double discountPercent = couponOpt.get().getDiscountPercentage();
                BigDecimal discountRate = BigDecimal.valueOf(discountPercent).divide(BigDecimal.valueOf(100));
                discountAmount = total.multiply(discountRate);
            }
        }

        BigDecimal finalPrice = total.subtract(discountAmount);

        return new CartDto(itemDtos, total, discountAmount, finalPrice);
    }

    private CartItemDto convertCartItemToDto(CartItem item) {
        Product product = item.getProduct();
        List<String> imageUrls = product.getImages().stream()
                .map(Image::getUrl)
                .collect(Collectors.toList());

        return new CartItemDto(
                item.getId(),
                item.getQuantity(),
                product.getId(),
                product.getName(),
                product.getPrice(), // BigDecimal tipinde olmalı
                imageUrls
        );
    }
}
