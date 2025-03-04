package org.example.service;

import org.example.entity.User;

public interface TokenService {
    void revokedAllUserTokens(User user);
    void saveUserToken(User user, String jwtToken);
    User getUserByToken(String token);
}
