"use strict";
//--------------------
// CSV Writer Project
//--------------------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const writer = new CSVWriter(["from", "amount", "to", "notes"]);
writer.addRows([
    { from: "Mario", amount: 50, to: "yoshi", notes: "for design work" },
    { from: "Naruto", amount: 125, to: "Sasuke", notes: "come back" },
]);
writer.save('./data/payments.csv');
