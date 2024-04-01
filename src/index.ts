//---------
// INTRO
//---------

/* let age: number = 30
let firstName: string = 'Mario'
let isFictional: boolean

age = 32
firstName = 'Luigi'
//isFictional = 'false'
isFictional = true



let planet = 'Earth'
let moons = 1
let isLarge = false

planet = 'Saturn'
//moons = '145'
moons = 145
//isLarge = 'yes'
isLarge = true




let something: null
let anotherThing: undefined

//something = 10
something = null
//anotherThing = 'hello'
anotherThing = undefined */

//---------
// arrays
//---------

// let names: string[] = ["Mario", "Luigi", "Peach"];
// let ages: number[] = [25, 35, 40];

// names.push("bowser");
// ages.push(44);

//------------------------------
// type interference with arrays
//------------------------------

// let fruits: string[] = ["apples", "pears", "bananas", "mangos"];

// fruits.push("peaches");

// const fruit = fruits[3];

// let things = [1, true, "hello"];

// const t = things[0];

//---------------------------------------------------------
// object literals & type interference with object literals
//---------------------------------------------------------

// let user: { firstName: string; age: number; id: number } = {
//   firstName: "mario",
//   age: 28,
//   id: 1,
//   //isFictional: true
// };

// user.firstName = "luigi";
// // user.firstName = false
// //user.email = 'peach@gmail.com'
// user.id = 2;

// const age = user.age;

//------------
// functions
//------------

// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
//   //return true
// }

// const subtractTwoNumbers = (a: number, b: number): number => {
//   return a - b;
// };

// addTwoNumbers(10, 10);
// subtractTwoNumbers(28, 12);

// function addAllNumbers(items: number[]): void {
//   const total = items.reduce((a, b) => a + b, 0); //starting point is 0
//   console.log(total);
// }

// addAllNumbers([5, 5, 8]);

//-------------------------
// return type interference
//-------------------------

// function formatGreeting(name: string, greeting: string): string {
//   return `${greeting}, ${name}`;
// }

// const result = formatGreeting("mario", "hello");

//----------
// any type
//----------

// let age: any;
// let title;

// age = 30;
// age = false;

// title = 25;
// title = "dada";
// title = {
//   name: "title",
// };

//-------------------
// any type in arrays
//-------------------

// //let fruits = []
// let things: any[] = ["hello", true, 25, null];

// things.push({ id: 2 });

//-------------------------
// functions & any
//-------------------------

// function addTogether(value: any): any {
//   return value + value;
// }

// const resultOne = addTogether(0.1);
// const resultTwo = addTogether("hello");
// //console.log(resultOne, resultTwo)

// //useful when migrating project from js to ts
// // bcs using any won't cause errors initially

//-----------------
// tuples
//-----------------

// let person: [string, number, boolean] = ['Michael', 24, true]

// person[0] = 'John'
// //person[0] = 14

//-----------------
// tuples examples
//-----------------

// let hsla: [number, string, string, number];
// hsla = [268, "100%", "64%", 0.8];

// let xy: [number, number];
// xy = [64.7, 20.1];

// function useCoords(): [number, number] {
//   //get coords

//   const lat = 100;
//   const long = 50;

//   return [lat, long];
// }

// const [lat, long] = useCoords();

//-----------------
// named tuples
//-----------------

// let user: [name: string, age: number]

// user = ['peach', 26]
// console.log(user[0])

//-----------------
// interfaces
//-----------------

// interface Author {
//   name: string;
//   avatar: string;
// }

// const authorOne: Author = { name: "Mario", avatar: "img/mario.png" };

// interface Post {
//   title: string;
//   body: string;
//   tags: string[];
//   created_at: Date;
//   author: Author;
// }

// const newPost: Post = { //the :Post type does not have to be here if we have every property that Post interface has
//   title: "first post",
//   body: "something...",
//   tags: ["gaming", "tech"],
//   created_at: new Date(),
//   author: authorOne,
// };

//--------------------------------------
// interfaces as function argument types
//--------------------------------------

// function createPost(post: Post): void {
//   console.log(`Created post: ${post.title} by ${post.author.name}`);
// }

// createPost(newPost);

//------------------------
// interfaces with arrays
//------------------------

// let posts: Post[] = []

// posts.push(newPost)

//------------------------
// type aliases
//------------------------

//example 1 - tuple

// type Rgb = [number, number, number];

// function getRandomColor(): Rgb {
//   const r = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const c = Math.floor(Math.random() * 255);

//   return [r, b, c];
// }

// const colorOne = getRandomColor();
// const colorTwo = getRandomColor();
// //console.log(colorOne, colorTwo);

//example 2 - object literal

// type User = {
//   name: string;
//   score: number;
// };

// const userOne: User = { name: "Mario", score: 75 };

// function formatUser(user: User): void {
//     console.log(`${user.name} has a score of: ${user.score}`)
// }

// formatUser(userOne)
// formatUser({name: 'Yoshi', score:175})

//--------------
// union types
//--------------

// let someId: number | string;

// someId = 1;
// someId = "2";

// let email: string | null = null;

// email = "mario@gmail.com";
// email = null;

// type Id = number | string;
// let anotherId: Id;

// anotherId = "dadafsdf";
// anotherId = 4;

//---------------------
// union type pitfall
//---------------------

// function swapIdType(id: Id): Id {
//   //can only use props and methods that are common to both number and string types
//   //parseInt(id)-> not allowed (due to id also having the type number)
//   parseInt(id);

//   return id;
// }

// swapIdType("5");

//---------------------
// type guards
//---------------------

// type Id = number | string;

// function swapIdType(id: Id) {
//   if (typeof id === "string") {
//     //can use string methods
//     return parseInt(id);
//   } else {
//     //can use number methods

//     return id.toString();
//   }
// }

// const idOne = swapIdType(1);
// const idTwo = swapIdType("6");

// console.log(typeof idOne);
// console.log(idOne);
// console.log(typeof idTwo);
// console.log(idTwo);

//---------------------
// tagged interfaces
//---------------------

// interface User {
//   type: "user";
//   username: string;
//   email: string;
//   id: Id;
// }

// interface Person {
//   type: "person";
//   firstName: string;
//   age: number;
//   id: Id;
// }

// function logDetails(value: User | Person): void {
//   if (value.type === "user") {
//     console.log(value.email, value.username);
//   } else {
//     console.log(value.firstName, value.age);
//   }
// }

// const personOne: Person = {type:'person',firstName: "mikhail", age: 25, id: 6 };
// const userOne: User = {type:'user', username: "idk45", email: 'idk@gmail.com', id: 7};

// logDetails(personOne);

//---------------------
// reusable interfaces
//---------------------

// interface hasQuantity {
//   quantity: number;
// }

// const something: hasQuantity = {
//   quantity: 28,
// };

// function printQuantity(item: hasQuantity): void {
//   console.log(`the quantity of the item is:${item.quantity}`);
//   console.log(`${item}`)
// }

// const fruit = {
//   name: "mango",
//   quantity: 50,
// };

// const vehicle = {
//   type: "car",
//   quantity: 3,
// };

// const person = {
//   name: "Mario",
//   age: 30,
// };

// printQuantity(fruit);
// printQuantity(vehicle);
// //printQuantity(person);

// //printQuantity({ quantity: 50, name: 'John'})

//---------------------
// function signatures
//---------------------

type Calculator = (numOne: number, numTwo: number) => number;

function addTwoNumbers(a: number, b: number) {
  return a + b;
}

function multiplyTwoNumbers(first: number, second: number) {
  return first + second;
}

function squareNumber(number: number) {
  return number * number;
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

let calcs: Calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumber);
//calcs.push(joinTwoNumbers)

//-----------------------------------
// function signatures on interfaces
//-----------------------------------

interface HasArea {
  name: string;
  calcArea(a:number): number
  //calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};
//console.log(shapeOne.calcArea(2))

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(r: number) {
    return (Math.PI * r) ^ 2;
  },
};

//console.log(shapeTwo.calcArea(5))
