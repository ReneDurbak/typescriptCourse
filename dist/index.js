"use strict";
//---------
// INTRO
//---------
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const c = Math.floor(Math.random() * 255);
    return [r, b, c];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
const userOne = { name: "Mario", score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of: ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'Yoshi', score: 175 });
