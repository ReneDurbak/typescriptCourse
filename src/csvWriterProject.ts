//--------------------
// CSV Writer Project
//--------------------

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
