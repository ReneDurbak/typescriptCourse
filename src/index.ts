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

let person: [string, number, boolean] = ['Michael', 24, true]

person[0] = 'John'
//person[0] = 14

//-----------------
// tuples examples
//-----------------

let hsla: [number, string, string, number];
hsla = [268, "100%", "64%", 0.8];

let xy: [number, number];
xy = [64.7, 20.1];

function useCoords(): [number, number] {
  //get coords

  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

//-----------------
// named tuples
//-----------------

let user: [name: string, age: number]

user = ['peach', 26]
console.log(user[0])