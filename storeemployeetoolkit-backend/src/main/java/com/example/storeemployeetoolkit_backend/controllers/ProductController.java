package com.example.storeemployeetoolkit_backend.controllers;



import com.example.storeemployeetoolkit_backend.dto.ProductDTO;
import com.example.storeemployeetoolkit_backend.models.Product;
import com.example.storeemployeetoolkit_backend.repositories.ProductRepository;
import com.example.storeemployeetoolkit_backend.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/Products")
@CrossOrigin(origins="http://localhost:5173")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAllProducts();
    }

    /*@PostMapping
    //public Product create(@RequestBody ProductDTO dto) {
        //return service.createProduct(dto);
    }*/
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody ProductDTO dto){

        try{
            Product product = service.createProduct(dto);
            return ResponseEntity.ok(product);

        }catch(RuntimeException e){

            return ResponseEntity
                    .badRequest()
                    .body(Map.of("e.message",e.getMessage()));
        }
    }

    /*@PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody ProductDTO dto) {
        dto.setId(id);
        return service.updateProduct(id , dto);
    }*/
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id,
                                           @RequestBody ProductDTO dto) {

        try {

            Product updatedProduct = service.updateProduct(id, dto);
            return ResponseEntity.ok(updatedProduct);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteProduct(id);
    }
}