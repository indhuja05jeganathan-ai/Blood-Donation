package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.BloodRequest;
import com.example.entity.Notification;
import com.example.entity.User;
import com.example.repository.UserRepository;
import com.example.service.RequestService;
import com.example.service.NotificationService;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin("*")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private UserRepository userRepo;

    // 🔥 CREATE REQUEST + NOTIFICATION
    @PostMapping("/{userId}")
    public BloodRequest create(@PathVariable Long userId,
                               @RequestBody BloodRequest req) {

        // 1. create request
        BloodRequest saved = requestService.create(userId, req);

        // 2. fetch user
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 3. create notification
        Notification n = new Notification();
        n.setUser(user);
        n.setMessage(
            "New Blood Request: " + req.getBloodGroup() +
            " | Location: " + req.getLocation() +
            " | Contact: " + req.getContactNumber()
        );
        n.setStatus("UNREAD");

        notificationService.send(n);

        return saved;
    }

    // 🔥 GET ALL REQUESTS
    @GetMapping
    public List<BloodRequest> getAll() {
        return requestService.getAll();
    }
}