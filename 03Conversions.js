let score = 33; //Declaring a variable

//prints the datatype of score
console.log(typeof score);
//can be also written as:
console.log(typeof(score));

//Conversion [X datatype to Number]
let valueInNumber = Number(score);
console.log(typeof score);
console.log(valueInNumber);
/*
 Working:
 "33" => 33
 "33abc" => NaN
 true => 1 , false =>0
*/

//Conversion [X datatype to Boolean]
let isLoggedIn = 0
let booleanIsLoggedIn  = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn);
/*
 Working:
 0 => false
 1=> true
 "abcd" => true
 "" => false
*/

//Conversion [X datatype to String]
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);


