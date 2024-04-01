"use strict";
//---------
// INTRO
//---------
const personOne = {
    id: 1,
    firstName: 'Naruto'
};
const personTwo = {
    id: '2',
    firstName: 'Sasuke',
    email: 'sasuke@konoha.com'
};
const personThree = {
    email: 'kakashi@gmail.com'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
//printUser(personOne)
printUser(personTwo);
//printUser(personThree)
