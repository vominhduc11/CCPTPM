package org.example.config.env;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;

import java.util.Map;

/**
 * @author :khainacs
 */
@Configuration
@PropertySource(value = ".env")
public class DotenvConfig implements EnvironmentPostProcessor {


    /**
     * @param environment
     * @param application
     * @Return tự động tải các có sẵn trong toàn bộ ứng dụng biến môi trường từ file .env. Đảm ảo cá biến môi trường từ .env sẽ
     */
    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        Dotenv dotenv = Dotenv.configure().load();
        dotenv.entries().forEach(entry ->{environment.getPropertySources()
                .addLast(new MapPropertySource("dotenv", Map.of(entry.getKey(), entry.getValue())));});
    }
}
