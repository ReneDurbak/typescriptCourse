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


let names: string[] = ['Mario', 'Luigi', 'Peach']
let ages: number[] = [25, 35, 40]

names.push('bowser')
ages.push(44)



//------------------------------
// type interference with arrays
//------------------------------

let fruits: string[] = ['apples', 'pears', 'bananas', 'mangos']

fruits.push('peaches')

const fruit = fruits[3]


let things = [1, true, 'hello']

const t = things[0]


//------------------
// object literals & type interference with object literals
//------------------


let user: {firstName: string, age: number, id: number} = {
    firstName: 'mario',
    age: 28,
    id: 1,
    //isFictional: true
}


user.firstName = 'luigi'
// user.firstName = false
//user.email = 'peach@gmail.com'
user.id = 2

const age = user.age



