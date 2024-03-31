"use strict";
//---------
// INTRO
//---------
const authorOne = { name: "Mario", avatar: "img/mario.png" };
const newPost = {
    title: "first post",
    body: "something...",
    tags: ["gaming", "tech"],
    created_at: new Date(),
    author: authorOne,
};
//--------------------------------------
// interfaces as function argument types
//--------------------------------------
function createPost(post) {
    console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//------------------------
// interfaces with arrays
//------------------------
let posts = [];
posts.push(newPost);
