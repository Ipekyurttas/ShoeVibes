package com.ShoeVibes.repository;

import com.ShoeVibes.entity.Order;
import com.ShoeVibes.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findTop4ByOrderByDateTimeDesc();
    List<Order> findByUser(User user);

}