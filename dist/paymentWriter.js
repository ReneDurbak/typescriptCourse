"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvWriterRefactor_1 = require("./csvWriterRefactor");
const paymentWriter = new csvWriterRefactor_1.CSVWriter(["from", "amount", "to", "notes"]);
paymentWriter.addRows([
    { from: "Mario", amount: 50, to: "yoshi", notes: "for design work" },
    { from: "Naruto", amount: 125, to: "Sasuke", notes: "come back" },
    { from: "Richard", amount: 100, to: "Mike", notes: "plumbing job" },
]);
// paymentWriter.save('./data/payments.csv')
