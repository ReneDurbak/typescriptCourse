"use strict";
//---------
// INTRO
//---------
const something = {
    quantity: 28,
};
function printQuantity(item) {
    console.log(`the quantity of the item is:${item.quantity}`);
    console.log(`${item}`);
}
const fruit = {
    name: "mango",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 3,
};
const person = {
    name: "Mario",
    age: 30,
};
printQuantity(fruit);
printQuantity(vehicle);
//printQuantity(person);
//printQuantity({ quantity: 50, name: 'John'})
