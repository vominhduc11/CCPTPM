package org.example.service;

import org.example.entity.Product;
import org.example.response.ResponseProduct;
import org.springframework.data.domain.Page;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    ResponseProduct getProductById(String id);
    public Page<ResponseProduct> getAllJobs(Optional<Integer> pageSize, Optional<Integer> pageNo);
}
