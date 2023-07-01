/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const pizzaPrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };

  const optionPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2
  };
  //check the name pizaa is valid
  if(!pizzaPrices.hasOwnProperty(pizza)) {
    return 0;
  }

  let totalPrices = pizzaPrices[pizza];
  //check the extra is valid
  if (extras.length == 0) {
    return totalPrices; // base case
  }
  
  const calculateOption = function (index) {
    //check base case 
    if(index >= extras.length) {
      return 0; 
    }

    const optionValues = optionPrices[extras[index]] || 0;
    return optionValues + calculateOption(index + 1);
  };

  totalPrices += calculateOption(0);

  return totalPrices;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const pizzaPrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };

  const optionPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2
  };

  const totalPrice = pizzaOrders.reduce((sum, order) => {
    //calculate the pizza price   
    const pizzaPrice = pizzaPrices[order.pizza];
    //calculate the options price
    const extrasPrice = order.extras.reduce((extraSum, extra) => {
      const optionPrice = optionPrices[extra] || 0;
      return extraSum + optionPrice;
    }, 0);

    return sum + pizzaPrice + extrasPrice;
  }, 0);

  return totalPrice;
}


class PizzaOrder {
  constructor(pizza, ...extras) {
    this.pizza = pizza;
    this.extras = extras;
  }
}