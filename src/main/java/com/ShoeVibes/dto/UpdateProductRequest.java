package com.ShoeVibes.dto;

import java.math.BigDecimal;

public class UpdateProductRequest {
    private BigDecimal price;
    private Integer stock;

    public UpdateProductRequest() {
    }

    public UpdateProductRequest(BigDecimal price, Integer stock) {
        this.price = price;
        this.stock = stock;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
