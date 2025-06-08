package com.ShoeVibes.controller;

import com.ShoeVibes.dto.ProductCategory;
import com.ShoeVibes.dto.ProductDto;
import com.ShoeVibes.dto.ProductList;
import com.ShoeVibes.dto.UpdateProductRequest;
import com.ShoeVibes.entity.Product;
import com.ShoeVibes.service.ProductService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProduct(@ModelAttribute ProductDto productDto) {
        productService.createProductWithImages(productDto);
        return ResponseEntity.ok("Product created successfully");
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody UpdateProductRequest updateProductRequest) {
        return ResponseEntity.ok(productService.updateProduct(id, updateProductRequest));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    }

    @GetMapping(path = "/list")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping("/filter")
    public List<Product> getFilteredProducts(@RequestBody ProductList productList) {
        return productService.getProductsByCategoryAndSubCategory(productList);
    }

    @PostMapping("/filter/category")
    public List<Product> getCategoryProduct(@RequestBody ProductCategory category) {
        return productService.getProductsByCategory(category);
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }


}
