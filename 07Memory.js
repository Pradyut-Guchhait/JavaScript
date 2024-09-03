//Stack [Primitive]

let myname = "Pradyut"
let anothername = myname
anothername = "PradyutGuchhait"
console.log(anothername);
console.log(myname);

//Heap [Non-Primitive]
let userOne = {
    email: "userone@google.com",
    upi: "userone@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);
