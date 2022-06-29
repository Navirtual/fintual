const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

/**
 * Clase base de la cartera, almacena un listado de acciones y mantiene métodos para añadir nuevas (addStock) y
 * obtener ganancias en un rango de fechas (getProfit).
 */
class Portfolio {
  constructor() {
    this.stocks = [];
  }

  /**
   * Método que añade una acción al listado de acciones de la cartera.
   * @param {*} stock acción que se agrega al listado.
   */
  addStock(stock) {
    logger.info("[addStock] Inicio");
    logger.debug("[addStock]", { stock });
    this.stocks.push(stock);
    logger.info("[addStock] Fin");
  }

  /**
   * Método que retorna la rentabilidad la cartera según las fechas dadas.
   * @param {*} fromDate fecha de inicio para obtener rentabilidad.
   * @param {*} toDate fecha de fin para obtener rentabilidad.
   * @param {*} asPercent indicador para determinar si devolver la rentabilidad en porcentaje o no.
   * @returns rentabilidad de la cartera.
   */
  getProfit(fromDate, toDate, asPercent) {
    logger.info("[getProfit] Inicio");
    let profit = 0;
    this.stocks.forEach((stock) => {
      let fromDatePrice = stock.price(fromDate);
      let toDatePrice = stock.price(toDate);

      if (asPercent) {
        profit += ((toDatePrice - fromDatePrice) / fromDatePrice) * 100;
      } else {
        profit += toDatePrice - fromDatePrice;
      }
    });

    const returnValue = asPercent ? profit.toFixed(2) + "%" : profit.toFixed(2);
    logger.debug("[getProfit]", { returnValue });
    logger.info("[getProfit] Fin");
    return returnValue;
  }
}

/**
 * Clase base de una acción, tiene un método que retorna el valor según una fecha dada.
 */
class Stock {
  constructor() {}

  /**
   * Método que retorna el valor de la acción en una fecha en particular.
   * @param {*} date fecha de la cuál se quiere obtener el valor de la acción.
   * @returns valor de la acción.
   */
  price(date) {
    logger.info("[price] Inicio");
    /**
     * Aquí debe ir la lógica de obtener valor por fecha.
     * Se omite lógica para este efecto, se creó una clase StockExample que permite revisar mejor el ejercicio.
     */
    logger.info("[price] Fin");
    return 1;
  }
}

/**
 * Clase de una acción con lógica de ejemplo, el objetivo es poder revisar de mejor forma el ejercicio.
 */
class StockExample extends Stock {
  constructor(symbol, value) {
    super();
    this.symbol = symbol;
    this.value = value;
  }

  /**
   * Método de ejemplo, que genera un margen de aumento de capital de 10% ó 20% según un número random.
   * @param {*} value valor original de la stock a calcular.
   * @returns retorna el valor sumando la diferencia del margen.
   */
  randomExample(value) {
    logger.info("[randomExample] Inicio");
    logger.debug("[randomExample]", { value });
    const returnValue = Number(
      Math.random() > 0.5 ? value * 1.1 : value * 0.9
    ).toFixed(2);
    logger.debug("[randomExample]", { returnValue });
    logger.info("[randomExample] Fin");
    return returnValue;
  }

  /**
   * Método que retorna el valor de la acción en una fecha en particular, sumando un margen de ejemplo para
   * hacer el ejercicio un poco más dinámico.
   * @param {*} date fecha de la cuál se quiere obtener el valor de la acción (se omite su uso para el ejercicio).
   * @returns valor de la acción (más el margen de ejemplo).
   */
  price(date) {
    logger.info("[price] Inicio");
    const returnValue = this.randomExample(this.value);
    logger.debug("[price]", { returnValue });
    logger.info("[price] Fin");
    return returnValue;
  }
}

const portfolio = new Portfolio();
portfolio.addStock(new StockExample("GOOG", 2370));
portfolio.addStock(new StockExample("MSFT", 267));
console.log(portfolio.getProfit(new Date(), new Date(), true));
