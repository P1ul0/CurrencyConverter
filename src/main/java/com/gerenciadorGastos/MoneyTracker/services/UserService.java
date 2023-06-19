package com.gerenciadorGastos.MoneyTracker.services;

import com.gerenciadorGastos.MoneyTracker.record.Authentication;
import com.gerenciadorGastos.MoneyTracker.record.user.UserRequest;
import com.gerenciadorGastos.MoneyTracker.record.user.UserResponse;

import java.util.List;

public interface UserService {
    List<UserResponse> getAllUser();
    UserResponse getById(Long id);
    String loginUser (Authentication authentication);
    void  createUser(UserRequest userRequest);
}
