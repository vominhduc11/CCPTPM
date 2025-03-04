package org.example.response;

import lombok.*;
import java.security.Timestamp;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUser {
    private Integer id;
    private String email;
    private String avatar;
    private String fullName;
    private boolean isActive;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private Timestamp deletedAt;
    private ResponseRole role;

    public ResponseUser(Integer id, String email) {
        this.id = id;
        this.email = email;
    }

}