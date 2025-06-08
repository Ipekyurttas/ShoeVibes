package com.ShoeVibes.entity;

import jakarta.persistence.*;

@Entity
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String code;

    private double discountPercentage;

    private boolean active;

    public Coupon() {}

    public Coupon(String code, double discountPercentage, boolean active) {
        this.code = code;
        this.discountPercentage = discountPercentage;
        this.active = active;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getCode() { return code; }

    public void setCode(String code) { this.code = code; }

    public double getDiscountPercentage() { return discountPercentage; }

    public void setDiscountPercentage(double discountPercentage) { this.discountPercentage = discountPercentage; }

    public boolean isActive() { return active; }

    public void setActive(boolean active) { this.active = active; }
}
