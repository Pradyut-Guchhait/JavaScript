/*
*Primitive:These are basic, predefined data types
    7 types : String , Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100
const scoreValue = 100.3
const  bigInt = 10000000000n //n is used to denote BigInt in JavaScript

const isLoggedIn = false
const outsideTemp = null

let userEmail; //Undefined

const id = Symbol('123')
const anotherId = Symbol('123') //not same as id although value is same


/*
*Reference [Non-Primitive]:They are more complex and can be created by programmers
    Array, Objects, Functions
*/
//Array
const heros = ["Ironman","Hulk","CaptainAmerica","Spiderman"]

//Object
let myObj = {
    name: "Pradyut",
    age: 19
}

//Function
const myFunction = function(){
    console.log("Hello World");
}

//typeof
console.log(typeof bigInt); //bigint
console.log(typeof outsideTemp); //object because null is a special case in javascript and it assigns all the 8 bits of it as 0 , 
                                //therefore while the javascript interprets it , it reads the first three values so it gives back the value  as Object.
console.log(typeof isLoggedIn); //boolean
console.log(typeof heros); //object
console.log(typeof myFunction); //function


