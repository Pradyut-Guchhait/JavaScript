const Name = "Pradyut"
const repoCount = 4

console.log(Name + repoCount + "Value") //Not Preferable

console.log(`Hello my name is ${Name} and my repo ount is ${repoCount}`);//String Interpolation

const gameName =  new  String("Black Myth");

console.log(gameName[0]);
console.log(gameName.__proto__);

//Methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString); //Output:blac

const anotherString =  gameName.slice(-8,4);
console.log(anotherString); //Output:ac

const newStringOne = "    Pradyut      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url =  "https://www.go%20ogle.com";
console.log(url.replace('%20','-'));
console.log(url.includes("google"));








