package com.ShoeVibes.controller;

import com.ShoeVibes.dto.NotificationDto;
import com.ShoeVibes.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;


    @PostMapping("/send")
    public ResponseEntity<String> sendNotificationToAll(@RequestParam String message) {
        notificationService.sendNotificationToAllUsers(message);
        return ResponseEntity.ok("Bildirim tüm kullanıcılara gönderildi.");
    }


    @PreAuthorize("isAuthenticated()")
    @GetMapping("/my")
    public ResponseEntity<List<NotificationDto>> getMyNotifications(Authentication authentication) {
        String email = authentication.getName();
        List<NotificationDto> notifications = notificationService.getUserNotifications(email);
        return ResponseEntity.ok(notifications);
    }
}
