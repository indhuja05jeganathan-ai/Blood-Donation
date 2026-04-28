package com.example.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.BloodRequest;
import com.example.entity.User;
import com.example.repository.BloodRequestRepository;
import com.example.repository.UserRepository;

@Service
public class RequestService {

    @Autowired
    private BloodRequestRepository repo;

    @Autowired
    private UserRepository userRepo;

    // ✅ FIXED METHOD
    public BloodRequest create(Long userId, BloodRequest req) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        req.setUser(user);
        req.setStatus("PENDING");
        req.setCreatedAt(LocalDateTime.now());

        return repo.save(req);
    }

    public List<BloodRequest> getAll() {
        return repo.findAll();
    }
}