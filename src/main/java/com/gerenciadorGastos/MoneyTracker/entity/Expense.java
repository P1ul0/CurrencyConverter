package com.gerenciadorGastos.MoneyTracker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@RequiredArgsConstructor
@SuperBuilder
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private String tag;

    private String paymentMethod;

    private Integer value;

    private String coin;

    private String exchangeUsed;

    private String convertedValue;

    private String conversionCurrency;
}
