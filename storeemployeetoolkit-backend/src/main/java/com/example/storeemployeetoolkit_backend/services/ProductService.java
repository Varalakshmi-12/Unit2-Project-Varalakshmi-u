package com.example.storeemployeetoolkit_backend.services;

import com.example.storeemployeetoolkit_backend.dto.ProductDTO;
import com.example.storeemployeetoolkit_backend.models.Product;
import com.example.storeemployeetoolkit_backend.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // CREATE
    public Product createProduct(ProductDTO dto) {

        if (repo.existsByProductNumber(dto.getProductNumber())) {
            throw new RuntimeException("Product number already exists");
        }

        Product product = new Product();
        product.setProductNumber(dto.getProductNumber());
        product.setName(dto.getProductName());
        product.setPrice(dto.getPrice());


        return repo.save(product);
    }

    // READ ALL
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // READ ONE
    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // UPDATE
    public Product updateProduct(Long id, ProductDTO dto) {

        Product product = getProductById(id);

        product.setName(dto.getProductName());
        product.setPrice(dto.getPrice());
        product.setProductNumber(dto.getProductNumber());


        return repo.save(product);
    }

    // DELETE
    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}