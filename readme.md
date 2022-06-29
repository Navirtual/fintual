# Tarea de Postulación

Se realizó una clase con el objetivo de postular a Fintual y comenzar su proceso de selección.
El ejercicio se basa en la siguiente solicitud:

> Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price. Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates.

# Descripción

Se generó una clase de nombre `Portfolio` la cual contiene un listado de acciones con el nombre `stocks`, tiene también un método `addStock()` para poder agregar nuevas acciones al listado y por último un método `getPorfit` que obtiene la rentabilidad de la cartera según unas fechas dadas.

> Cabe mencionar que se extendió la clase `Stocks` en `StockExample` para poder dar un poco de dinámica al ejercicio.
> Incluye un método `randomExample` para generar valores "aleatorio" a un valor dado para poder evaluar una rentabilidad sin tantos datos de prueba.

# Cómo utilizar

## Pre-requisitos 📋

Se utilizó versión 16.0.0 de NodeJS para el ejercicio, bastaría instalar la misma versión o una superior para su ejecución.

## Instalación 🔧

- npm install
- node prueba01.js

## Flujo altenativo

En la línea 119 de código.

> `console.log(portfolio.getProfit(new Date(), new Date(), true));`

Se puede cambiar el valor `false` por `true` para obtener el valor de rentabilidad en porcentaje.

# Autor

- Iván Araya R.
