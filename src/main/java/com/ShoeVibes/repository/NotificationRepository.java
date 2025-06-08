package com.ShoeVibes.repository;

import com.ShoeVibes.entity.Notification;
import com.ShoeVibes.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUser(User user);
}
