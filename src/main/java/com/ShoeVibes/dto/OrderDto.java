package com.ShoeVibes.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {
    private Long id;
    private String address;
    private BigDecimal totalPrice;
    private LocalDateTime dateTime;
    private Long userId;
    private List<Long> orderItemIds;
    private List<String> productNames;
    private List<String> productImages;
    private String userName;
    private String lastName;


    public OrderDto() {}

    public OrderDto(Long id, String address, BigDecimal totalPrice, LocalDateTime dateTime, Long userId, List<Long> orderItemIds, List<String> productNames, List<String> productImages, String userName, String lastName) {
        this.id = id;
        this.address = address;
        this.totalPrice = totalPrice;
        this.dateTime = dateTime;
        this.userId = userId;
        this.orderItemIds = orderItemIds;
        this.productNames = productNames;
        this.productImages = productImages;
        this.userName = userName;
        this.lastName = lastName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<String> getProductNames() {
        return productNames;
    }

    public void setProductNames(List<String> productNames) {
        this.productNames = productNames;
    }

    public List<String> getProductImages() {
        return productImages;
    }

    public void setProductImages(List<String> productImages) {
        this.productImages = productImages;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public BigDecimal getTotalPrice() { return totalPrice; }
    public void setTotalPrice(BigDecimal totalPrice) { this.totalPrice = totalPrice; }

    public LocalDateTime getDateTime() { return dateTime; }
    public void setDateTime(LocalDateTime dateTime) { this.dateTime = dateTime; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public List<Long> getOrderItemIds() { return orderItemIds; }
    public void setOrderItemIds(List<Long> orderItemIds) { this.orderItemIds = orderItemIds; }
}