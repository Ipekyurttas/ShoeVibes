package com.ShoeVibes.service;

import com.ShoeVibes.dto.CategoryDto;
import com.ShoeVibes.entity.SubCategory;
import com.ShoeVibes.repository.CategoryRepository;
import com.ShoeVibes.entity.Category;
import com.ShoeVibes.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private  final SubCategoryRepository subCategoryRepository;

    public CategoryService(CategoryRepository categoryRepository, SubCategoryRepository subCategoryRepository) {
        this.categoryRepository = categoryRepository;
        this.subCategoryRepository = subCategoryRepository;
    }

    public List<Category> listCategory(){
        return categoryRepository.findAll();
    }

    public Category addCategory(CategoryDto categoryDto) {
        Category category= new Category();
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
        return categoryRepository.save(category);
    }

    public Category addCategoryWithSubcategories(CategoryDto dto) {
        Category category = new Category();
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());

        Category savedCategory = categoryRepository.save(category);

        List<SubCategory> subCategories = new ArrayList<>();
        for (String subName : dto.getSubCategoryNames()) {
            SubCategory subCategory = new SubCategory();
            subCategory.setName(subName);
            subCategory.setCategory(savedCategory);
            subCategories.add(subCategory);
        }

        subCategoryRepository.saveAll(subCategories);
        return savedCategory;
    }


    public Category updateCategory(Long id,CategoryDto categoryDto) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
        return categoryRepository.save(category);
    }

    public void deleteCategory(Long id){
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent())
            categoryRepository.deleteById(id);
        else
            throw new RuntimeException("Category not found");
    }
}
