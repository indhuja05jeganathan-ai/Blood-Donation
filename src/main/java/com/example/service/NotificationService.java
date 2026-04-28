package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Notification;
import com.example.repository.NotificationRepository;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository repo;

    // 🔥 CREATE NOTIFICATION
    public Notification send(Notification notification) {

        notification.setSentAt(LocalDateTime.now());

        if (notification.getStatus() == null) {
            notification.setStatus("UNREAD");
        }

        return repo.save(notification);
    }

    // 🔥 GET USER NOTIFICATIONS (FIXED)
    public List<Notification> getUserNotifications(Long userId) {
        return repo.findByUser_IdOrderBySentAtDesc(userId);
    }
}