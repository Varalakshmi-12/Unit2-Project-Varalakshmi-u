package com.example.storeemployeetoolkit_backend.services;

import com.example.storeemployeetoolkit_backend.models.Order;
import com.example.storeemployeetoolkit_backend.dto.*;
import com.example.storeemployeetoolkit_backend.models.*;
import com.example.storeemployeetoolkit_backend.repositories.*;
import com.example.storeemployeetoolkit_backend.dto.OrderItemRequestDTO;
import com.example.storeemployeetoolkit_backend.dto.OrderRequestDTO;
import com.example.storeemployeetoolkit_backend.models.OrderItem;
import com.example.storeemployeetoolkit_backend.models.Product;
import com.example.storeemployeetoolkit_backend.repositories.OrderRepository;
import com.example.storeemployeetoolkit_backend.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepo;
    private final ProductRepository productRepo;

    public OrderService(OrderRepository orderRepo, ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }

    public Order createOrder(OrderRequestDTO dto) {

        List<OrderItem> items = new ArrayList<>();
        double total = 0;

        for (OrderItemRequestDTO i : dto.getItems()) {

            Product p = productRepo.findByProductNumber(i.getProductNumber())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            OrderItem item = new OrderItem();
            item.setProductNumber(p.getProductNumber());
            item.setProductName(p.getName());
            item.setPrice(p.getPrice());
            item.setQuantity(i.getQuantity());

            items.add(item);
            total += p.getPrice() * i.getQuantity();
        }

        Order order = new Order();
        order.setCustomerName(dto.getCustomerName());
        order.setPhone(dto.getPhone());
        order.setTotal(total);
        order.setItems(items);

        return orderRepo.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}
