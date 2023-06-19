package com.gerenciadorGastos.MoneyTracker.services.implemantions;

import com.gerenciadorGastos.MoneyTracker.entity.User;
import com.gerenciadorGastos.MoneyTracker.record.Authentication;
import com.gerenciadorGastos.MoneyTracker.record.user.UserRequest;
import com.gerenciadorGastos.MoneyTracker.record.user.UserResponse;
import com.gerenciadorGastos.MoneyTracker.repositories.UserRepository;
import com.gerenciadorGastos.MoneyTracker.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RequiredArgsConstructor
public class UserServiceImp  implements UserService {
    private final UserRepository userRepository;
    @Override
    public List<UserResponse> getAllUser() {
        return this.userRepository.findAll()
                .stream()
                .map(UserResponse::new)
                .toList();
    }

    @Override
    public UserResponse getById(Long id) {
        return this.userRepository.findById(id)
                .map(UserResponse::new)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "{\"message\": \"Usuário não encontrada\"}"));
    }

    @Override
    public String loginUser(Authentication authentication) {

        return null;
    }

    @Override
    public void createUser(UserRequest userRequest) {
        this.userRepository.findByUsername(userRequest.userName())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.CONFLICT, "{\"message\": \"Usuário ja existe\"}"));

        User newUser = userRequest.toUser();

        this.userRepository.save(newUser);

    }
}
