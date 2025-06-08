package com.ShoeVibes.controller;

import com.ShoeVibes.dto.FavoriteDto;
import com.ShoeVibes.service.FavoriteService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/add")
    public ResponseEntity<FavoriteDto> addFavorite(
            @RequestParam Long productId,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(favoriteService.addFavorite(email, productId));
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/list")
    public ResponseEntity<FavoriteDto> listFavorite(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(favoriteService.listFavorite(email));
    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping("/remove")
    public ResponseEntity<FavoriteDto> removeFavorite(
            @RequestParam Long productId,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(favoriteService.removeFavorite(email, productId));
    }

}

