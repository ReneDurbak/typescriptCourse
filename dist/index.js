"use strict";
//---------
// INTRO
//---------
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        //with get keyword the details function works as a property
        return `${this.title} - ${this.price}$`;
    }
    get format() {
        return `This menu is called ${this.title} and is ${this.price}$`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        // this.title = title;
        // this.price = price;
        super(title, price);
        // private title: string;
        // private price: number;
        this.base = "classic";
        this.toppings = [];
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
// function printMenuItem(item: MenuItem): void {
//   console.log(item.details);
// }
// printMenuItem(pizza);
function printFormatted(val) {
    console.log(val.format);
}
printFormatted(pizza);
const pizzaTwo = new Pizza("luigi special", 26);
// function addMushroomsToPizzas(pizzas: Pizza[]): void {
//   for (const p of pizzas) {
//     p.addTopping('mushrooms');
//   }
// }
// addMushroomsToPizzas([pizza, pizzaTwo])
// console.log(pizza, pizzaTwo)
