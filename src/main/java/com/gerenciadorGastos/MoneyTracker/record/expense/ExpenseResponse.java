package com.gerenciadorGastos.MoneyTracker.record.expense;

import com.gerenciadorGastos.MoneyTracker.entity.Expense;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public record ExpenseResponse(
        Long id,
        String description,
        String tag,
        String paymentMethod,
        Integer value,
        String coin,
        String exchangeUsed,
        String convertedValue,
        String conversionCurrency

) {

    public  ExpenseResponse (Expense expense){
        this(
                expense.getId(),
                expense.getDescription(),
                expense.getTag(),
                expense.getPaymentMethod(),
                expense.getValue(),
                expense.getCoin(),
                expense.getExchangeUsed(),
                expense.getConvertedValue(),
                expense.getConversionCurrency()
        );
    }
}
