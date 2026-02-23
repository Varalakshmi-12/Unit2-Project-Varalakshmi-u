package com.example.storeemployeetoolkit_backend.models;
import jakarta.persistence.*;

@Entity
@Table (name="Products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;

    @Column(nullable = false)
    private String name;
    private String description;
    private double price;

    public Product(){}

    public Product(String name, String description, double price){
        this.name=name;
        this.description=description;
        this.price=price;
    }

    public Long getId() {
        return product_id;
    }

    public void setId(Long id) {
        this.product_id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}