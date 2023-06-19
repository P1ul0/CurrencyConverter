package com.gerenciadorGastos.MoneyTracker.services;

import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseRequest;
import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseResponse;

import java.util.List;

public interface ExpenseService {
    List<ExpenseResponse> getAllExpense();
    ExpenseResponse getByIdExpense(Long id);
    void createExpense(ExpenseRequest expenseRequest);
    void updatedExpense(Long id , ExpenseRequest expenseRequest);
    void deleteExpense(Long id );
}
