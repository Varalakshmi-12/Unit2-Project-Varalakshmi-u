package com.example.storeemployeetoolkit_backend.repositories;

import com.example.storeemployeetoolkit_backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByPhoneNumber(String phoneNumber);
}
