package com.example.storeemployeetoolkit_backend.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;

    private String customerName;
    private String phoneNumber;
    private double total;

    public Order() {
    }
    public Order(String customer_name, String phone_number, double total){
        this.customerName=customer_name;
        this.phoneNumber=phone_number;
        this.total=total;
    }

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items ;

    public long getId() {
        return order_id;
    }

    public String getCustomer_name() {
        return customerName;
    }

    public void setCustomer_name(String customer_name) {
        this.customerName = customer_name;
    }

    public String getPhone_number() {
        return phoneNumber;
    }

    public void setPhone_number(String phone_number) {
        this.phoneNumber = phone_number;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}