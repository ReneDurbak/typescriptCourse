"use strict";
//---------
// INTRO
//---------
Object.defineProperty(exports, "__esModule", { value: true });
const collectionOne = {
    name: "Game collection",
    data: ["Gta 5", "CS:GO", "Mafia 2"],
};
const collectionTwo = {
    name: "Winning lottery numbers",
    data: [10, 25, 40],
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne);
console.log(resultTwo);
