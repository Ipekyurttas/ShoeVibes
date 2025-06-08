package com.ShoeVibes.controller;

import com.ShoeVibes.dto.CategoryDto;
import com.ShoeVibes.entity.Category;
import com.ShoeVibes.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/list")
    public ResponseEntity<List<Category>> listCategories() {
        return ResponseEntity.ok(categoryService.listCategory());
    }

    @PostMapping(path = "/add")
    public ResponseEntity<Category> addCategory(@RequestBody CategoryDto categoryDto) {
        return ResponseEntity.ok(categoryService.addCategory(categoryDto));
    }

    @PostMapping("/create")
    public ResponseEntity<Category> createCategoryWithSubcategories(@RequestBody CategoryDto dto) {
        Category createdCategory = categoryService.addCategoryWithSubcategories(dto);
        return ResponseEntity.ok(createdCategory);
    }

    @PutMapping(path = "/update/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id,@RequestBody CategoryDto categoryDto) {
        return ResponseEntity.ok(categoryService.updateCategory(id, categoryDto));
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category deleted successfully");
    }
}
