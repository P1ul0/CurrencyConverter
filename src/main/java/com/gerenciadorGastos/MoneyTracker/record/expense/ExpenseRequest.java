package com.gerenciadorGastos.MoneyTracker.record.expense;

import com.gerenciadorGastos.MoneyTracker.entity.Expense;
import jakarta.validation.constraints.NotNull;

public record ExpenseRequest(
        @NotNull(message = "campo obrigatorio")
        String description,
        @NotNull(message = "campo obrigatorio")
        String tag,
        @NotNull(message = "campo obrigatorio")
        String paymentMethod,
        @NotNull(message = "campo obrigatorio")
        Integer value,
        @NotNull(message = "campo obrigatorio")
        String coin,
        @NotNull(message = "campo obrigatorio")
        String exchangeUsed,
        @NotNull(message = "campo obrigatorio")
        String convertedValue,
        @NotNull(message = "campo obrigatorio")
        String conversionCurrency
) {

    public Expense toExpense(){
        return Expense.builder()
                .description(this.description)
                .tag(this.tag)
                .paymentMethod(this.paymentMethod)
                .value(this.value)
                .coin(this.coin)
                .exchangeUsed(this.exchangeUsed)
                .convertedValue(this.convertedValue)
                .conversionCurrency(this.conversionCurrency)
                .build();
    }
}
