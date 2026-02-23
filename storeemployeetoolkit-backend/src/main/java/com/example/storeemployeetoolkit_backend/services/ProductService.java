package com.example.storeemployeetoolkit_backend.services;

import com.example.storeemployeetoolkit_backend.models.Product;
import com.example.storeemployeetoolkit_backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).orElseThrow();
    }

    public Product getProductByName(String name){
        return productRepository.findAll().stream()
                .filter(product -> product.getName().equalsIgnoreCase(name))
                .findFirst()
                .orElseThrow();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Product existingProduct = productRepository.findById(id).orElseThrow();
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setPrice(updatedProduct.getPrice());
        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }
}
