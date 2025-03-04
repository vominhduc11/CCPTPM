package org.example.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ProductDetail extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "pathImage", nullable = false)
    private String pathImage;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private int rating;

    @Column(name = "dubbedEpisodes")
    private int dubbedEpisodes;

    @Column(name = "subtitledEpisodes")
    private int subtitledEpisodes;

    @Column(name = "yearReleased")
    @Size(min = 1970, max = 2025, message = "Năm phải nằm trong khoảng từ 1970 tới 2025")
    private int yearReleased;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Product product;

    @OneToMany(mappedBy = "product")
    private Set<Episodes_URL> episodesUrls;
}
