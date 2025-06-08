package com.ShoeVibes.repository;

import com.ShoeVibes.entity.Cart;
import com.ShoeVibes.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(User user);
    boolean existsByUser(User user);
}