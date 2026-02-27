package com.example.storeemployeetoolkit_backend.repositories;

import com.example.storeemployeetoolkit_backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Long> {


    Optional<Product> findByProductNumber(String productNumber);
    boolean existsByProductNumber(String productNumber);
}
