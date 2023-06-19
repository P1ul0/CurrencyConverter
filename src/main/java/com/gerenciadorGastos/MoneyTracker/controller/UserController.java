package com.gerenciadorGastos.MoneyTracker.controller;

import com.gerenciadorGastos.MoneyTracker.record.Authentication;
import com.gerenciadorGastos.MoneyTracker.record.user.UserRequest;
import com.gerenciadorGastos.MoneyTracker.record.user.UserResponse;
import com.gerenciadorGastos.MoneyTracker.services.implemantions.UserServiceImp;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/users", produces = {"application/json"})
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImp userService;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUser () {
        try{
            List<UserResponse> userResponseList = this.userService.getAllUser();
            return  ResponseEntity.ok(userResponseList);
        }catch (Exception error) {
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getByIdUser(@PathVariable("id") Long id) {
        try{
            UserResponse userResponse = this.userService.getById(id);
            return ResponseEntity.ok(userResponse);
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping
    public ResponseEntity<String> createUser(UserRequest userRequest){
        if (!userRequest.password().equals(userRequest.confirmPassword())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "{\"message\": \"As senhas estão diferentes\"}");
        }
        try {
            this.userService.createUser(userRequest);
            return ResponseEntity.ok("{\"message\": \"Usuário criado com sucesso\"}");
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage() );
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/Auth")
    public ResponseEntity<String> loginUser(Authentication authentication){
        //if para verificar as senhas
        try{
            String token = this.userService.loginUser(authentication);
            return ResponseEntity.ok(token);
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }


}
