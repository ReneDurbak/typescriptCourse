import { CSVWriter } from "./csvWriterRefactor";

interface Payment {
  from: string;
  amount: number;
  to: string;
  notes: string;
}



const paymentWriter = new CSVWriter<Payment>(["from", "amount", "to", "notes"]);

paymentWriter.addRows([
  { from: "Mario", amount: 50, to: "yoshi", notes: "for design work" },
  { from: "Naruto", amount: 125, to: "Sasuke", notes: "come back" },
  { from: "Richard", amount: 100, to: "Mike", notes: "plumbing job" },

]);

// paymentWriter.save('./data/payments.csv')
