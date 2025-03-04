package org.example.service.Impl;

import jakarta.servlet.ServletContext;
import org.example.entity.CustomUserDetail;
import org.example.entity.Role;
import org.example.entity.User;
import org.example.repository.RoleRepository;
import org.example.repository.UserRepository;
import org.example.requests.user.UpdateProfileRequest;
import org.example.response.FileUploadResponse;
import org.example.response.MessageResponse;
import org.example.response.ResponseUser;
import org.example.response.ResponseUsers;
import org.example.service.EmailService;
import org.example.service.FileService;
import org.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Random;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ServletContext servletContext;

    @Autowired
    private FileService fileService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElse(null);
    }

    @Override
    public ResponseUser getCurrentUserByEmail(String email) {
        User user = findByEmail(email);
        if (user == null) {
            return null;
        }

        return new ResponseUser(user.getId(), user.getEmail());
    }

    private User getUserCurrentService() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        CustomUserDetail customUserDetail = (CustomUserDetail) authentication.getPrincipal();
        return customUserDetail.getUser();
    }

    @Override
    public ResponseUsers getUserCurrent() {
        User user = getUserCurrentService();
        if (user == null) {
            return null;
        }

        return new ResponseUsers(user);
    }

    @Override
    public MessageResponse updateStatus(boolean status) {
        User user = getUserCurrentService();

        if (user != null) {
            userRepository.save(user);
            return MessageResponse
                    .builder()
                    .message("Update status successfully")
                    .type(HttpStatus.OK)
                    .build();
        }
        return MessageResponse
                .builder()
                .message("User not found, please try again.")
                .type(HttpStatus.BAD_REQUEST)
                .build();
    }


    @Override
    public FileUploadResponse updateAvatar(MultipartFile file) {
        if (file.isEmpty()) {
            return FileUploadResponse.builder().message("Please select a file!").type(HttpStatus.BAD_REQUEST).build();
        }

        User user = getUserCurrentService();
        if (user == null) {
            return FileUploadResponse.builder()
                    .message("You are not authorized to upload file Avatar!")
                    .type(HttpStatus.UNAUTHORIZED)
                    .build();
        }

        String fileName = fileService.savaFileStatic(file, "avatar");
        if (fileName != null) {
            user.setAvatar(fileName);
            userRepository.save(user);
            return FileUploadResponse.builder()
                    .message("File uploaded successfully")
                    .name(fileName)
                    .type(HttpStatus.OK)
                    .build();
        } else {
            return FileUploadResponse.builder()
                    .message("Error Upload File Please Try Again")
                    .type(HttpStatus.BAD_REQUEST)
                    .build();
        }
    }

    @Override
    public MessageResponse updateProfile(UpdateProfileRequest request) {
        User user = getUserCurrentService();
        if (user == null) {
            return MessageResponse.builder()
                    .message("You are not authorized to upload file Avatar!")
                    .type(HttpStatus.UNAUTHORIZED)
                    .build();
        }

        user.setEmail(request.getEmail());
        userRepository.save(user);
        return MessageResponse.builder()
                .message("Upload Profile Successfully")
                .type(HttpStatus.OK)
                .build();
    }

    @Override
    public MessageResponse changePassword(String oldPassword, String newPassword) {
        User user = getUserCurrentService();
        if (user == null) {
            return MessageResponse.builder()
                    .message("You are not authorized to change password!")
                    .type(HttpStatus.UNAUTHORIZED)
                    .build();
        }

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            return MessageResponse.builder()
                    .message("Old password is incorrect")
                    .type(HttpStatus.BAD_REQUEST)
                    .build();
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        return MessageResponse.builder()
                .message("Password changed successfully")
                .type(HttpStatus.OK)
                .build();
    }



    @Override
    public ResponseUsers getUserById(String id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }

        return new ResponseUsers(user);
    }

    private MessageResponse saveUser(UpdateProfileRequest request, User user, boolean create) {
        boolean active = request.getActive() == null || request.getActive().isEmpty() || (request.getActive().equals("1"));

        user.setEmail(request.getEmail());
        user.setActive(active);
        if (request.getAvatar() != null) {
            String fileName = fileService.savaFileStatic(request.getAvatar(), "avatar");
            if (fileName != null) {
                user.setAvatar(fileName);
            } else {
                return MessageResponse.builder()
                        .message("Error Upload File Please Try Again")
                        .type(HttpStatus.BAD_REQUEST)
                        .build();
            }
        }

        if (create) {
            user.setEmail(request.getEmail());
            Role role = roleRepository.findById(1)
                    .orElse(roleRepository.findFirstByOrderByIdAsc());

            String password = "AVG_" + new Random().nextInt(1000) + "_HIFILM";

            String passwordEnc = passwordEncoder.encode(password);
            user.setPassword(passwordEnc);
            user.setRole(role);
            userRepository.save(user);

            try {
                System.out.println("Send mail : " + request.getEmail() + " ; full name : " + request.getFullName() + " ; password : " + password);
                emailService.sendEmailRegisterWithPassword(request.getEmail(), request.getFullName(), password);
            } catch (Exception e) {
                System.out.println("error send mail: " + e.getMessage());
            }
        } else {
            userRepository.save(user);
        }

        return MessageResponse.builder()
                .message("Upload Profile Successfully")
                .type(HttpStatus.OK)
                .build();
    }


    @Override
    public MessageResponse createUser(UpdateProfileRequest request) {
        if (request.getEmail() == null || request.getEmail().isEmpty()) {
            return MessageResponse.builder()
                    .message("Email is required")
                    .type(HttpStatus.BAD_REQUEST)
                    .build();
        }

        User userCheck = userRepository.findByEmail(request.getEmail()).orElse(null);
        if (userCheck != null) {
            return MessageResponse.builder()
                    .message("Email already exists")
                    .type(HttpStatus.BAD_REQUEST)
                    .build();
        }

        User user = new User();
        return saveUser(request, user, true);
    }

    @Override
    public MessageResponse saveUser(UpdateProfileRequest request, String id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return MessageResponse.builder()
                    .message("User not found")
                    .type(HttpStatus.UNAUTHORIZED)
                    .build();
        }

        return saveUser(request, user, false);
    }

    // làm soft delete sau
    @Override
    public MessageResponse deleteUser(String id) {
        try {
            userRepository.deleteById(id);

            return MessageResponse.builder()
                    .message("Delete user successfully")
                    .type(HttpStatus.OK)
                    .build();
        } catch (Exception e) {
            return MessageResponse.builder()
                    .message("Error deleting user: " + e.getMessage())
                    .type(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
}
