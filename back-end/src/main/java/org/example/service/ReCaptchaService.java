package org.example.service;

import org.example.response.ReCaptchaResponse;

public interface ReCaptchaService {
    ReCaptchaResponse verify(String response);
}
