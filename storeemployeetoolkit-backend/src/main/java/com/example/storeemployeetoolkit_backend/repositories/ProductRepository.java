package com.example.storeemployeetoolkit_backend.repositories;

import com.example.storeemployeetoolkit_backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
