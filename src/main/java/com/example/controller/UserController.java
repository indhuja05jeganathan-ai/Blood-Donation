package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.User;
import com.example.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // ✅ for React connection
public class UserController {

    @Autowired
    private UserService service;

    // ✅ REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    // ✅ LOGIN FIXED (JSON input)
    @PostMapping("/login")
    public User login(@RequestBody User loginData) {
        return service.login(loginData.getEmail(), loginData.getPassword());
    }
}