package org.example.service;

import org.example.requests.auth.AuthenticationRequest;
import org.example.requests.auth.RegisterRequest;
import org.example.response.AuthenticationResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.response.GetCurrentUserByAccessTokenResponse;
import org.example.response.MessageResponse;

import java.io.IOException;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);
    AuthenticationResponse authenticate(AuthenticationRequest request);
    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
    MessageResponse confirm(String token);
    GetCurrentUserByAccessTokenResponse getCurrentUserByAccessToken(String token);
    MessageResponse forgotPassword(String email);
    MessageResponse changePassword(String token, String password);
}
