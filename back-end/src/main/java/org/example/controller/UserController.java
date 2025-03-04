package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.requests.user.UpdateProfileRequest;
import org.example.response.FileUploadResponse;
import org.example.response.MessageResponse;
import org.example.response.ResponseHandler;
import org.example.response.ResponseUsers;
import org.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;

    @GetMapping("/getUser/{email}")
    public ResponseEntity<?> getUser(@PathVariable String email) {
        return ResponseHandler.responseOk("Get User", userService.getCurrentUserByEmail(email));
    }

    @GetMapping("/profile")
    public ResponseEntity<?> profile() {
        ResponseUsers profile = userService.getUserCurrent();
        if (profile != null) {
            return ResponseHandler.responseOk("Get Profile",profile);
        }
        return ResponseHandler.responseBadRequest("User not found, please try again.");
    }

    @PostMapping("/update-status")
    public ResponseEntity<?> updateStatus(@RequestBody Map<String, Boolean> request) {
        System.out.println(request);
        Boolean jobStatus = request.get("jobStatus");
        System.out.println("jobStatus: " + jobStatus);
        MessageResponse response = userService.updateStatus(jobStatus);
        return ResponseHandler.responseBuilder(response.getMessage(), response.getType());
    }

    @PostMapping("/update-avatar")
    public ResponseEntity<?> updateAvatar(@RequestParam MultipartFile avatar) {
        System.out.println("request: " + avatar);
        System.out.println("file: " + avatar.getOriginalFilename());
        FileUploadResponse response = userService.updateAvatar(avatar);
        return ResponseHandler.responseBuilder(response.getMessage(), response.getType(), response.getName());
    }

    @PostMapping("/update-profile")
    public ResponseEntity<?> updateProfile(@ModelAttribute UpdateProfileRequest request) {
        MessageResponse response = userService.updateProfile(request);
        return ResponseHandler.responseBuilder(response.getMessage(), response.getType());
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> request) {
        String oldPassword = request.get("oldPassword");
        String newPassword = request.get("newPassword");
        MessageResponse response = userService.changePassword(oldPassword, newPassword);
        return ResponseHandler.responseBuilder(response.getMessage(), response.getType());
    }
}