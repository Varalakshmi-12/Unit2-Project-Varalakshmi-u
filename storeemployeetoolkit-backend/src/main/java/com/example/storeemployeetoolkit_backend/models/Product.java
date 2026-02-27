package com.example.storeemployeetoolkit_backend.models;
import jakarta.persistence.*;

@Entity
@Table (name="Products" ,uniqueConstraints = @UniqueConstraint(columnNames = "productNumber"))
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String productNumber;   // MUST be unique

    @Column(nullable = false)
    private String productName;

    private double price;

    public Product() {}

    public Product(String productNumber, String productName, double price) {
        this.productNumber = productNumber;
        this.productName = productName;
        this.price = price;
    }

    // getters & setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductNumber() {
        return productNumber;
    }

    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }

    public String getName() {
        return productName;
    }

    public void setName(String name) {
        this.productName = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
