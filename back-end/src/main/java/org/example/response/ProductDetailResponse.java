package org.example.response;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.example.entity.Episodes_URL;
import org.example.entity.Product;

import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailResponse {
    private Integer id;
    private String name;
    private String pathImage;
    private String description;
    private int rating;
    private int dubbedEpisodes;
    private int subtitledEpisodes;
    private int yearReleased;
    private Integer product_id;
    private Set<String> episodesUrls;
}
