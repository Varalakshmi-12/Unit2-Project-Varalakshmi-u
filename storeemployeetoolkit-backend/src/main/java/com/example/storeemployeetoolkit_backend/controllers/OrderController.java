package com.example.storeemployeetoolkit_backend.controllers;

import com.example.storeemployeetoolkit_backend.dto.OrderRequestDTO;
import com.example.storeemployeetoolkit_backend.models.Order;
import com.example.storeemployeetoolkit_backend.services.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins="http://localhost:5173")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public Order createOrder(@RequestBody OrderRequestDTO dto) {
        return service.createOrder(dto);
    }

    @GetMapping
    public List<Order> getOrders() {
        return service.getAllOrders();
    }
}