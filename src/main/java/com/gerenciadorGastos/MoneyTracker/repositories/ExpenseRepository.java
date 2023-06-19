package com.gerenciadorGastos.MoneyTracker.repositories;

import com.gerenciadorGastos.MoneyTracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense,Long> {
}
