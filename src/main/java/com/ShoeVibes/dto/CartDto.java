package com.ShoeVibes.dto;

import java.math.BigDecimal;
import java.util.Set;

public class CartDto {

    private Set<CartItemDto> items;
    private BigDecimal totalPrice;
    private BigDecimal discount;
    private BigDecimal discountedPrice;

    public CartDto() {}

    public CartDto(Set<CartItemDto> items, BigDecimal totalPrice, BigDecimal discount, BigDecimal discountedPrice) {
        this.items = items;
        this.totalPrice = totalPrice;
        this.discount = discount;
        this.discountedPrice = discountedPrice;
    }

    public Set<CartItemDto> getItems() {
        return items;
    }

    public void setItems(Set<CartItemDto> items) {
        this.items = items;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(BigDecimal discountedPrice) {
        this.discountedPrice = discountedPrice;
    }
}
