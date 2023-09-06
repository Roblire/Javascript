let score = "26"

// There are two ways to find values

console.log(typeof score); // First way to find type
console.log(typeof(score)); // Second way to find type

let typeOfValue = Number(score)
console.log(typeof typeOfValue);

// "26" => 26
// "26a" => NaN(Not a Number)
// true => 1 ; false => 0

let isLoggedIn =  "Roblire"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Roblire" => true

let someNumber = 66

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);

// "66" => 66