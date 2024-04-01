"use strict";
//---------
// INTRO
//---------
const user = {
    id: 1,
    format() {
        return `This user has an id of: ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "Mario",
    format() {
        return `Bill with id ${this.id} has ${this.amount} euros to pay`;
    },
};
function printFormatted(value) {
    console.log(value.format());
}
printFormatted(user);
printFormatted(bill);
function printBill(bill) {
    console.log("server:", bill.server, "dad");
    console.log(bill.format());
}
printBill(bill);
//printBill(user)
