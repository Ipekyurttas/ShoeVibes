package com.ShoeVibes.dto;

import java.util.Set;

public class FavoriteDto {

    private Set<ProductDtoImg> products;

    public FavoriteDto() { }

    public FavoriteDto(Set<ProductDtoImg> products) {
        this.products = products;
    }

    public Set<ProductDtoImg> getProducts() {
        return products;
    }

    public void setProducts(Set<ProductDtoImg> products) {
        this.products = products;
    }
}
