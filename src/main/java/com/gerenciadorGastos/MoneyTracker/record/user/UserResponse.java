package com.gerenciadorGastos.MoneyTracker.record.user;

import com.gerenciadorGastos.MoneyTracker.entity.User;

public record UserResponse(
        Long id,
        String userName,

        String email
) {

    public UserResponse (User user){
        this(user.getId(), user.getUserName(), user.getEmail());
    }
}
