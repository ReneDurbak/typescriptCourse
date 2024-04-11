"use strict";
//---------
// INTRO
//---------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { id: 1, name: "Robert", score: 90 },
    { id: 2, name: "John", score: 14 },
    { id: 3, name: "Michael", score: 67 },
]);
users.add({ id: 4, name: "Richard", score: 50 });
users.deleteOne(3);
const user = users.loadOne();
const AllUsers = users.loadAll();
console.log("load one - ", user);
console.log("load all - ", AllUsers);
