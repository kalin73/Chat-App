package org.example.api.model.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginForm {
    private String username;
    private String password;
}
