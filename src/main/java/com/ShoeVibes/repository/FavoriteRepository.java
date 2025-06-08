package com.ShoeVibes.repository;

import com.ShoeVibes.entity.Favorite;
import com.ShoeVibes.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Optional<Favorite> findByUser(User user);
}
