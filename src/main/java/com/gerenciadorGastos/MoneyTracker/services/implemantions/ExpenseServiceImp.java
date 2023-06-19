package com.gerenciadorGastos.MoneyTracker.services.implemantions;

import com.gerenciadorGastos.MoneyTracker.entity.Expense;
import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseRequest;
import com.gerenciadorGastos.MoneyTracker.record.expense.ExpenseResponse;
import com.gerenciadorGastos.MoneyTracker.repositories.ExpenseRepository;
import com.gerenciadorGastos.MoneyTracker.services.ExpenseService;
import com.gerenciadorGastos.MoneyTracker.util.UpdatePartial;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
public class ExpenseServiceImp implements ExpenseService {

    private final ExpenseRepository expenseRepository;
    @Override
    public List<ExpenseResponse> getAllExpense() {
        return this.expenseRepository.findAll()
                .stream()
                .map(ExpenseResponse::new)
                .toList();
    }

    @Override
    public ExpenseResponse getByIdExpense(Long id) {
        return this.expenseRepository.findById(id)
                .map(ExpenseResponse::new)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "{\"message\": \"Despesa não encontrada\"}"));
    }

    @Override
    public void createExpense(ExpenseRequest expenseRequest) {
        Expense expense = expenseRequest.toExpense();
        this.expenseRepository.save(expense);
    }

    @Override
    public void updatedExpense(Long id, ExpenseRequest expenseRequest) {
        Expense expense = this.expenseRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "{\"message\": \"Despesa não encontrada\"}"));
        this.validatePropertyExpense(expense,expenseRequest);
        this.expenseRepository.save(expense);
    }

    @Override
    public void deleteExpense(Long id) {
        this.expenseRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "{\"message\": \"Despesa não encontrada\"}" ));
        this.expenseRepository.deleteById(id);
    }

    protected void validatePropertyExpense(Expense expense , ExpenseRequest expenseRequest){
        UpdatePartial.updatePropererIfNotNull(expense::setDescription, expenseRequest.description());
        UpdatePartial.updatePropererIfNotNull(expense::setTag, expenseRequest.tag());
        UpdatePartial.updatePropererIfNotNull(expense::setPaymentMethod, expenseRequest.paymentMethod());
        UpdatePartial.updatePropererIfNotNull(expense::setValue, expenseRequest.value());
        UpdatePartial.updatePropererIfNotNull(expense::setCoin, expenseRequest.coin());
        UpdatePartial.updatePropererIfNotNull(expense::setExchangeUsed, expenseRequest.exchangeUsed());
        UpdatePartial.updatePropererIfNotNull(expense::setConvertedValue, expenseRequest.convertedValue());
        UpdatePartial.updatePropererIfNotNull(expense::setConversionCurrency, expenseRequest.conversionCurrency());
    }
}
