//================COMPARISION================//
//Standard Comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//Different datatypes
console.log("2" > 1); //true bcoz it converts string to number
console.log("02" > 1); //true bcoz it converts string to number

//null
console.log(null > 0); //false
console.log(null == 0); //false equality check works differently
console.log(null >= 0); //true

//undefined always gives false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//===
console.log("2" == 2); //true it converts string to number
console.log("2" === 2); //false it purely compares
