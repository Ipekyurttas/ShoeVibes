package com.ShoeVibes.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="cart")
public class Cart {

    // Bu cart entity sınıfıdır.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String item;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "cart")
    private List<CartItem> cartItems;

    public Cart() {
    }

    public Cart(Long id, String item, User user, List<CartItem> cartItems) {
        this.id = id;
        this.item = item;
        this.user = user;
        this.cartItems = cartItems;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getItem() {
        return item;
    }
    public void setItem(String item) {
        this.item = item;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }
}

