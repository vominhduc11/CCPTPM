package org.example.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.entity.User;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUsers {
    private Integer id;
    private String email;
    private String avatar;
    private boolean isActive;
    private String role;

    public ResponseUsers(User user) {
        this.email = defaultIfNull(user.getEmail());
        this.avatar = defaultIfNull(user.getAvatar());
        this.isActive = user.isActive();
        this.role = user.getRole() == null ? "" : user.getRole().getName();
        this.id = user.getId();
    }

    private String defaultIfNull(String value) {
        return value == null ? "" : value;
    }
}
