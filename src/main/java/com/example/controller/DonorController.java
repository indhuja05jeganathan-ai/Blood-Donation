package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Donor;
import com.example.entity.User;
import com.example.repository.UserRepository;
import com.example.service.DonorService;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin("*")
public class DonorController {

    @Autowired
    private DonorService service;

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/{userId}")
    public Donor addDonor(@PathVariable Long userId,
                          @RequestBody Donor donor) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        donor.setUser(user);

        if (donor.getAvailable() == null) {
            donor.setAvailable(true);
        }

        return service.save(donor);
    }

    @GetMapping
    public List<Donor> getAllDonors() {
        return service.getAll();
    }
}