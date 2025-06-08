
package com.ShoeVibes.repository;

import com.ShoeVibes.entity.Category;
import com.ShoeVibes.entity.Product;
import com.ShoeVibes.entity.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByNameContainingIgnoreCase(String keyword);
    List<Product> findByCategoryAndSubCategory(Category category, SubCategory subCategory);
    List<Product> findByCategory(Category category);


}
