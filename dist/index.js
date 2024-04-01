"use strict";
//---------
// INTRO
//---------
function addTwoNumbers(a, b) {
    return a + b;
}
function multiplyTwoNumbers(first, second) {
    return first + second;
}
function squareNumber(number) {
    return number * number;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumber);
const shapeOne = {
    name: "square",
    calcArea(l) {
        return l * l;
    },
};
//console.log(shapeOne.calcArea(2))
const shapeTwo = {
    name: "circle",
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
//console.log(shapeTwo.calcArea(5))
