package com.ShoeVibes.service;

import com.ShoeVibes.dto.NotificationDto;
import com.ShoeVibes.entity.Notification;
import com.ShoeVibes.entity.User;
import com.ShoeVibes.repository.NotificationRepository;
import com.ShoeVibes.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private UserRepository userRepository;


    @Transactional
    public void sendNotificationToAllUsers(String message) {
        List<User> allUsers = userRepository.findAll();

        for (User user : allUsers) {
            Notification notification = new Notification();
            notification.setUser(user);
            notification.setMessage(message);
            notification.setCreatedAt(LocalDateTime.now());

            notificationRepository.save(notification);
        }
    }


    public List<NotificationDto> getUserNotifications(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı: " + email));

        List<Notification> notifications = notificationRepository.findByUser(user);

        return notifications.stream()
                .map(n -> new NotificationDto(n.getId(), n.getMessage(), n.getCreatedAt()))
                .collect(Collectors.toList());
    }
}
