package com.ShoeVibes.dto;

import java.math.BigDecimal;
import java.util.List;

public class CartItemDto {
    private Long id;
    private int quantity;
    private Long productId;
    private String productName;
    private BigDecimal price;
    private List<String> imageUrls;

    public CartItemDto() {}

    public CartItemDto(Long id, int quantity, Long productId, String productName, BigDecimal price, List<String> imageUrls) {
        this.id = id;
        this.quantity = quantity;
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.imageUrls = imageUrls;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public int getQuantity() { return quantity; }

    public void setQuantity(int quantity) { this.quantity = quantity; }

    public Long getProductId() { return productId; }

    public void setProductId(Long productId) { this.productId = productId; }

    public String getProductName() { return productName; }

    public void setProductName(String productName) { this.productName = productName; }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public List<String> getImageUrls() { return imageUrls; }

    public void setImageUrls(List<String> imageUrls) { this.imageUrls = imageUrls; }
}
