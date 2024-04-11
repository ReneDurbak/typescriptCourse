"use strict";
//---------
// INTRO
//---------
Object.defineProperty(exports, "__esModule", { value: true });
function addIDtoValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIDtoValue({ title: 'New article', thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
