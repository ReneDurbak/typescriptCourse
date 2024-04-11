//--------------------
// CSV Writer Project
//--------------------

import { appendFileSync } from "fs";

interface Payment {
  from: string;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ("from" | "amount" | "to" | "notes")[];

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv)
    this.csv = '\n'

    console.log('file saved to', filename)
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v));

    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}


const writer = new CSVWriter(["from", "amount", "to", "notes"]);

writer.addRows([
  { from: "Mario", amount: 50, to: "yoshi", notes: "for design work" },
  { from: "Naruto", amount: 125, to: "Sasuke", notes: "come back" },
]);

writer.save('./data/payments.csv')

