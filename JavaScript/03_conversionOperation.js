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

// *******************OPERATIONS*******************

let value = 2
let negValue = -value // '-' operator is used before a value to make a positive value into negative value and vice versa
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); '**' is used for forming a power e.g. - 2 ** 3 = 8
// console.log(2 / 3);
// console.log(2 % 3);

//To join strings

let str1 = "Hello!"
let str2 = " Rob"

let str3 = str1 + str2
console.log(str3); //str3 = "Hello! Rob"

// console.log("2" + 6); Prints 26
// console.log(2 + "6"); Prints 26
// console.log("1" + 2 + 2); Prints 122
// console.log(1 + 2 + "2"); Prints 32

// console.log((2 * 6) + 5 / 6); Prints 12

let num1, num2, num3

num1 = num2 = num3 = 2 * 13 //num1, num2, num3 carries same value i.e. 2 * 13 = 26

let gameCounter = 99
gameCounter++ // Postfix (Increases after Operation)
++gameCounter // Prefix (Increases before Operation)
console.log(gameCounter);