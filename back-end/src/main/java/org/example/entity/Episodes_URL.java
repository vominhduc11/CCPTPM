package org.example.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Episodes_URL extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "episode")
    private int episode;

    @ManyToOne
    @JoinColumn(name = "id", nullable = false)
    private ProductDetail productDetail;
}
