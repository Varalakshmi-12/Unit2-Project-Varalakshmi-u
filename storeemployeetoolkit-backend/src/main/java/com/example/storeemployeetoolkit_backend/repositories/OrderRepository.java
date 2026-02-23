package com.example.storeemployeetoolkit_backend.repositories;

import com.example.storeemployeetoolkit_backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
