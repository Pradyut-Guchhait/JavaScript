//Date is an Object in JavaScript

let myDate = new Date()

console.log(myDate.toString());//Fri Sep 13 2024 13:47:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Fri Sep 13 2024
console.log(myDate.toLocaleString());//13/9/2024, 1:47:16 pm
console.log(myDate.toISOString());//2024-09-13T08:17:16.603Z
console.log(myDate.toJSON());//2024-09-13T08:17:16.603Z
console.log(typeof myDate);//Object

//January == 00 in JS not 01 for DD-MM-YY its 01
let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")//Indian Standards

console.log(myCreatedDate.toDateString);
console.log(myCreatedDate2.toLocaleString);
console.log(myCreatedDate3.toLocaleString);
console.log(myCreatedDate4.toLocaleString);


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//CUSTOMISATION
newDate.toLocaleString('default', {
    weekday: "long"
})






