package org.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Product_BookMark extends JpaRepository<Product_BookMark, Integer> {
}
