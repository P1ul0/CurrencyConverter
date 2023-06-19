package com.gerenciadorGastos.MoneyTracker.record.user;

import com.gerenciadorGastos.MoneyTracker.entity.User;

import jakarta.validation.constraints.NotNull;
public record UserRequest(
        @NotNull(message = "campo obrigatorio")
        String userName,
        @NotNull(message = "campo obrigatorio")
        String email,
        @NotNull(message = "campo obrigatorio")
        String password,
        @NotNull(message = "campo obrigatorio")
        String confirmPassword
) {

    public User toUser(){
        return  User.builder()
                .userName(this.userName)
                .email(this.email)
                .password(this.password)
                .build();
    }
}
