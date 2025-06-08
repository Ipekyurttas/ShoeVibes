package com.ShoeVibes.dto;

import com.ShoeVibes.entity.Category;
import com.ShoeVibes.entity.SubCategory;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

public class ProductDto {

    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private String categoryName;
    private String brand;
    private String material;
    private List<String> color;
    private List<String> size;
    private List<MultipartFile> images;
    private String subCategories;

    public ProductDto() {
    }

    public ProductDto(String name, String description, BigDecimal price, Integer stock, String categoryName, String brand, String material, List<String> color, List<String> size, List<MultipartFile> images, String subCategories) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.categoryName = categoryName;
        this.brand = brand;
        this.material = material;
        this.color = color;
        this.size = size;
        this.images = images;
        this.subCategories = subCategories;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(String subCategories) {
        this.subCategories = subCategories;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public List<String> getColor() {
        return color;
    }

    public void setColor(List<String> color) {
        this.color = color;
    }

    public List<String> getSize() {
        return size;
    }

    public void setSize(List<String> size) {
        this.size = size;
    }

    public List<MultipartFile> getImages() {
        return images;
    }

    public void setImages(List<MultipartFile> images) {
        this.images = images;
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}