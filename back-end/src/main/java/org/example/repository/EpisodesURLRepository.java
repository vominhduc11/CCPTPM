package org.example.repository;

import org.example.entity.Episodes_URL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EpisodesURLRepository extends JpaRepository<Episodes_URL, Integer> {
}
