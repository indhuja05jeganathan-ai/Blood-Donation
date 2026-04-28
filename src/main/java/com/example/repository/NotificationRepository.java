package com.example.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    // ✅ CORRECT mapping for user_id column
    List<Notification> findByUser_IdOrderBySentAtDesc(Long userId);
}