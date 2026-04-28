package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.Donor;

public interface DonorRepository extends JpaRepository<Donor, Long> {
}