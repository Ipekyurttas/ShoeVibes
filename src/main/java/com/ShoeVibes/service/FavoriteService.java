package com.ShoeVibes.service;

import com.ShoeVibes.dto.FavoriteDto;
import com.ShoeVibes.dto.ProductDtoImg;
import com.ShoeVibes.entity.Favorite;
import com.ShoeVibes.entity.Product;
import com.ShoeVibes.entity.User;
import com.ShoeVibes.repository.FavoriteRepository;
import com.ShoeVibes.repository.ProductRepository;
import com.ShoeVibes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public FavoriteDto addFavorite(String email, Long productId) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Favorite favorite = favoriteRepository.findByUser(user)
                .orElseGet(() -> {
                    Favorite newFavorite = new Favorite();
                    newFavorite.setUser(user);
                    newFavorite.setProducts(new HashSet<>());
                    return favoriteRepository.save(newFavorite);
                });

        favorite.getProducts().add(product);
        favoriteRepository.save(favorite);
        return convertToDto(favorite);
    }

    public FavoriteDto listFavorite(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Favorite favorite = favoriteRepository.findByUser(user)
                .orElseGet(() -> {
                    Favorite newFavorite = new Favorite();
                    newFavorite.setUser(user);
                    newFavorite.setProducts(new HashSet<>());
                    return favoriteRepository.save(newFavorite);
                });

        return convertToDto(favorite);
    }

    public FavoriteDto removeFavorite(String email, Long productId) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Favorite favorite = favoriteRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Favorite list not found"));

        favorite.getProducts().remove(product);
        favoriteRepository.save(favorite);
        return convertToDto(favorite);
    }

    private FavoriteDto convertToDto(Favorite favorite) {
        Set<ProductDtoImg> productDtos = favorite.getProducts().stream()
                .map(this::convertProductToDtoImg)
                .collect(Collectors.toSet());

        return new FavoriteDto(productDtos);
    }

    private ProductDtoImg convertProductToDtoImg(Product product) {
        List<String> imageUrls = product.getImages() != null
                ? product.getImages().stream()
                .map(image -> image.getUrl())
                .collect(Collectors.toList())
                : List.of();

        return new ProductDtoImg(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getStock(),
                imageUrls
        );
    }

}
