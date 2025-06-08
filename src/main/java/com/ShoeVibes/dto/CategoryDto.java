package com.ShoeVibes.dto;

import java.util.List;

public class CategoryDto {
    private String name;
    private String description;
    private List<String> subCategoryNames;

    public CategoryDto() {
    }

    public CategoryDto(String name, String description, List<String> subCategoryNames) {
        this.name = name;
        this.description = description;
        this.subCategoryNames = subCategoryNames;
    }

    public List<String> getSubCategoryNames() {
        return subCategoryNames;
    }

    public void setSubCategoryNames(List<String> subCategoryNames) {
        this.subCategoryNames = subCategoryNames;
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
}
