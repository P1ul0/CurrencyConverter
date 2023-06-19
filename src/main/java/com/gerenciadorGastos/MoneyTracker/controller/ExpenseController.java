package com.gerenciadorGastos.MoneyTracker.controller;

import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseRequest;
import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseResponse;
import com.gerenciadorGastos.MoneyTracker.services.implemantions.ExpenseServiceImp;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/expenses", produces = {"application/json"})
@RequiredArgsConstructor
public class ExpenseController {

    private final ExpenseServiceImp expenseService;

    @GetMapping
    public ResponseEntity<List<ExpenseResponse>> getAllExpense () {
        try{
            var expenses = this.expenseService.getAllExpense();
            return ResponseEntity.ok(expenses);
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExpenseResponse> getById(@PathVariable("id") Long id){
        try{
            var expense = this.expenseService.getByIdExpense(id);
            return ResponseEntity.ok(expense);
        }catch(Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping
    public  ResponseEntity<String> createExpense(ExpenseRequest expenseRequest){
        try{
            this.expenseService.createExpense(expenseRequest);
            return ResponseEntity.ok("{\"message\": \"Despesa criada\"}");
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updatedExpense(@PathVariable("id") Long id, ExpenseRequest expenseRequest){
        try{
            this.expenseService.updatedExpense(id,expenseRequest);
            return ResponseEntity.ok("{\"message\": \"Despesa criada\"}");
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> deleteExpense(@PathVariable("id") Long id){
        try{
            this.expenseService.deleteExpense(id);
            return ResponseEntity.ok("{\"message\": \"Despesa criada\"}");
        }catch (Exception error){
            log.error("ERROR: {}", error.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }
}
