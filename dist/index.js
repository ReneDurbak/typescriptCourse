"use strict";
//---------
// INTRO
//---------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // private title: string;
        // private price: number;
        this.base = "classic";
        this.toppings = [];
        // this.title = title;
        // this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza("mario special", 15);
// console.log(pizza.title);
// pizza.addTopping("mushrooms");
// pizza.addTopping("olives");
//console.log(pizza.toppings);
// pizza.selectBase("thick");
//console.log(pizza.base)
// console.log(pizza);
const pizzaTwo = new Pizza("luigi special", 26);
// console.log(pizzaTwo.title);
// console.log(pizzaTwo.price);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
addMushroomsToPizzas([pizza, pizzaTwo]);
console.log(pizza, pizzaTwo);
