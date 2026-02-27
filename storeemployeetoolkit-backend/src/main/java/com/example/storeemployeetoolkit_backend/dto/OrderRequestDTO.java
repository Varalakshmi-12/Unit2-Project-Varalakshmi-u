package com.example.storeemployeetoolkit_backend.dto;

import java.util.List;

public class OrderRequestDTO {
    private String customerName;
    private String phoneNumber;
    private List<OrderItemRequestDTO> items;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhone(String phone) {
        this.phoneNumber = phone;
    }

    public List<OrderItemRequestDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemRequestDTO> items) {
        this.items = items;
    }
}
