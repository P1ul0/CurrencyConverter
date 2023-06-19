package com.gerenciadorGastos.MoneyTracker.util;
import java.util.function.Consumer;
public class UpdatePartial {
        public static <E> void updatePropererIfNotNull(Consumer<E> setter, E updatedValue ) {
            if (updatedValue != null) setter.accept(updatedValue);
        }
}
