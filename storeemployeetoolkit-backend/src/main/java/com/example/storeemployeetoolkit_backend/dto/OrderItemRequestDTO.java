package com.example.storeemployeetoolkit_backend.dto;

public class OrderItemRequestDTO {
    private String productNumber;
    private int quantity;

    public String getProductNumber() {
        return productNumber;
    }

    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
