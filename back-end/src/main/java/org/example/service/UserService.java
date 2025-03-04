package org.example.service;

import org.example.entity.User;
import org.example.requests.user.UpdateProfileRequest;
import org.example.response.FileUploadResponse;
import org.example.response.MessageResponse;
import org.example.response.ResponseUser;
import org.example.response.ResponseUsers;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {
    User findByEmail(String email);
    ResponseUser getCurrentUserByEmail(String email);
    ResponseUsers getUserCurrent();
    MessageResponse updateStatus(boolean status);
    FileUploadResponse updateAvatar(MultipartFile file);
    MessageResponse updateProfile(UpdateProfileRequest request);
    MessageResponse changePassword(String oldPassword, String newPassword);

    // Service for admin
//    List<UserResponse> getAllUsers();
    ResponseUsers getUserById(String id);
    MessageResponse createUser(UpdateProfileRequest request);
    MessageResponse saveUser(UpdateProfileRequest request, String id);
    MessageResponse deleteUser(String id);
}