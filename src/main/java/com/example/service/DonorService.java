package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Donor;
import com.example.repository.DonorRepository;

@Service
public class DonorService {

    @Autowired
    private DonorRepository repo;

    public Donor save(Donor donor) {

        if (donor.getAvailable() == null) {
            donor.setAvailable(true);
        }

        return repo.save(donor);
    }

    public List<Donor> getAll() {
        return repo.findAll();
    }
}