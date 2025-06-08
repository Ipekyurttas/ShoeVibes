
package com.ShoeVibes.service;

import com.ShoeVibes.dto.ProductCategory;
import com.ShoeVibes.dto.ProductDto;
import com.ShoeVibes.dto.ProductList;
import com.ShoeVibes.dto.UpdateProductRequest;
import com.ShoeVibes.entity.Category;
import com.ShoeVibes.entity.Image;
import com.ShoeVibes.entity.Product;
import com.ShoeVibes.entity.SubCategory;
import com.ShoeVibes.repository.CategoryRepository;
import com.ShoeVibes.repository.ImageRepository;
import com.ShoeVibes.repository.ProductRepository;
import com.ShoeVibes.repository.SubCategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    private final ImageRepository imageRepository;

    private final CategoryRepository categoryRepository;

    private final SubCategoryRepository subCategoryRepository;

    public ProductService(ProductRepository productRepository, ImageRepository imageRepository, CategoryRepository categoryRepository, SubCategoryRepository subCategoryRepository) {
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
        this.categoryRepository = categoryRepository;
        this.subCategoryRepository = subCategoryRepository;
    }

    public void createProductWithImages(ProductDto dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setStock(dto.getStock());

        Category category = categoryRepository.findByNameIgnoreCase(dto.getCategoryName())
                .orElseThrow(() -> new RuntimeException("Kategori bulunamadı: " + dto.getCategoryName()));
        product.setCategory(category);

        List<SubCategory> subCategories = subCategoryRepository.findByNameIgnoreCase(dto.getSubCategories());
        if (subCategories.isEmpty()) {
            throw new RuntimeException("Alt kategori bulunamadı: " + dto.getSubCategories());
        }
        SubCategory subCategory = subCategories.get(0);
        product.setSubCategory(subCategory);


        product.setBrand(dto.getBrand());
        product.setMaterial(dto.getMaterial());
        product.setColor(dto.getColor());
        product.setSize(dto.getSize());

        productRepository.save(product);

        List<Image> imageList = new ArrayList<>();
        List<MultipartFile> images = dto.getImages();

        if (images != null && !images.isEmpty()) {
            for (MultipartFile file : images) {
                try {
                    String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                    Path uploadDir = Paths.get("uploads");
                    Files.createDirectories(uploadDir);

                    Path filePath = uploadDir.resolve(fileName);
                    Files.write(filePath, file.getBytes());

                    Image image = new Image();
                    image.setUrl("/uploads/" + fileName);
                    image.setProduct(product);
                    imageList.add(image);
                } catch (IOException e) {
                    throw new RuntimeException("Dosya yüklenemedi: " + file.getOriginalFilename(), e);
                }
            }
        }

        imageRepository.saveAll(imageList);
        product.setImages(imageList);
        productRepository.save(product);
    }



    public Product updateProduct(Long id, UpdateProductRequest updateProductRequest) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setPrice(updateProductRequest.getPrice());
        product.setStock(updateProductRequest.getStock());
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public List<Product> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCase(keyword);
    }


    public List<Product> getProductsByCategoryAndSubCategory(ProductList productList) {
        Category category = categoryRepository.findByNameIgnoreCase(productList.getCategory())
                .orElseThrow(() -> new RuntimeException("Category not found: " + productList.getCategory()));
        List<SubCategory> subCategories = subCategoryRepository.findByNameIgnoreCase(productList.getSubCategory());
        if (subCategories.isEmpty()) {
            throw new RuntimeException("Subcategory not found: " + productList.getSubCategory());
        }
        SubCategory subCategory = subCategories.get(0);
        return productRepository.findByCategoryAndSubCategory(
               category,subCategory
        );
    }

    public List<Product> getProductsByCategory(ProductCategory categoryName) {
        Category category = categoryRepository.findByNameIgnoreCase(categoryName.getCategory())
                .orElseThrow(() -> new RuntimeException("Category not found: " + categoryName));

        return productRepository.findByCategory(category);
    }
}