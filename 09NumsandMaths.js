const score = 400
console.log(score); //400

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length);//Conversion
console.log(balance.toFixed(1));//Decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//Round off

const hundreds =  10000000
console.log(hundreds.toLocaleString('en-IN'));//

//++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//removes negative
console.log(Math.round(4.6));//round off
console.log(Math.ceil(4.2));//round offs to higher
console.log(Math.floor(4.9)); //round offs to lower
console.log(Math.min(1,3,4,5,6));
console.log(Math.max(1,3,4,5,6));

console.log(Math.random());//value between 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//max - min + 1 is used to get the range of numbers between min and max
// + min is used to get the min value in the range
//Math.floor is  used to get the integer value of the random number



















