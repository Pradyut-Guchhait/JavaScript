const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);


// Array Methods
myArr.push(6)//It adds a new element at the end of the array
myArr.pop()//It will remove the last element from the array
myArr.unshift(9)//It adds the element at the beginning of the array
myArr.shift() //It removes the first element of the array
myArr.includes(9)//It checks if the element is present in the array or not
myArr.index(9)//It returns the index of the element in the array (-1)

const newArr = myArr.join()//It converts the array into a string

console.log(myArr);


//Slice, Splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)//It returns a new array with the elements from the index 1 to 3
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)//It removes the elements from the index 1 to 3 and returns the removed elements
console.log("C", myArr);
console.log(myn2);

//Array 2.0

const marvel_heroes =  ["Thor", "Ironman", "Spiderman"]
const dc_heroes =  ["Superman", "Batman", "Flash"]

marvel_heroes.push(dc_heroes)//[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ] 
                            //it will add the array as a single element.

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);//Batman

marvel_heroes.concat(dc_heroes);//same as push but it does not change the original array it returns a new array
console.log(marvel_heroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes]//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
                                                      //It is called spread operator it creates a new array with all 
                                                     //the elements from the two arrays.
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//This will remove all the nested arrays from the array

console.log(real_another_array);

console.log(Array.isArray("Pradyut"));//This will return false because it is a string not an array
console.log(Array.isArray([1,2,3]));//This will return true because it is an array
console.log(Array.from("Pradyut"));//This will return an array with all the characters of the string
console.log(Array.from({name: "Pradyut"}));//This will return an array with the keys of the object as the elements of the array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//This will return an array with the three scores








