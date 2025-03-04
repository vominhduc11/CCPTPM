package org.example.repository;

import org.example.entity.Product;
import org.example.response.ResponseProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(" SELECT new avg.hijob.backend.responses.ResponseJob(j.id,j.title,j.description,j.responsibilities,j.requirements,j.benefits,j.requireOfYear,j.salary,j.company.id,j.company.name,j.user.id, j.user.fullName,j.createdAt,j.updatedAt,j.deletedAt) " +
            " FROM Job j " +
            "where j.deletedAt is null")
    Page<ResponseProduct> findAllJobs(Pageable pageable);


    @Query("SELECT new avg.hijob.backend.responses.ResponseJob(j.id,j.title,j.description,j.responsibilities,j.requirements,j.benefits,j.requireOfYear,j.salary,j.company.id,j.company.name,j.user.id, j.user.fullName,j.createdAt,j.updatedAt,j.deletedAt) " +
            "FROM Job j " +
            " WHERE j.id = ?1 and j.deletedAt is null")
    ResponseProduct getJobById(String id);
}
