package com.example.storeemployeetoolkit_backend.controllers;

import com.example.storeemployeetoolkit_backend.models.Order;
import com.example.storeemployeetoolkit_backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order){
        return orderService.saveOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
    }
}
