"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvWriterRefactor_1 = require("./csvWriterRefactor");
const employeeWriter = new csvWriterRefactor_1.CSVWriter([
    "id",
    "name",
    "role",
    "salary",
]);
employeeWriter.addRows([
    { id: 1, name: "John", salary: 3150, role: "web developer" },
    { id: 2, name: "Christian", salary: 5000, role: "UI/UX designer" },
    { id: 3, name: "Joe", salary: 2800, role: "QA automation engineer" },
]);
employeeWriter.save('data/employees.csv');
