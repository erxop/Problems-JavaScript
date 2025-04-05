//const variable
const color="pink";
const age="19";
const sad="false";
const name="Daniella";

console.log(color);
console.log(age)
console.log(sad);
console.log(name);

//let variable
let myVariable;
myVariable = "Ahh!";
console.log(myVariable);

const anotherVariable="Grahh!";
console.log(anotherVariable);

const anotherMyVariable="ohh!";
console.log(anotherMyVariable);

//working with operators
let a=10;
let b=5;

let sum = a+b;
let difference = a-b;
let product = a*b;
let quotient = a/b;
let remainder = a%b;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

//comparison operators
let num1 = 10;
let num2 = 20;

let isEqual = num1 == num2; //Equality: false (checks if num1 and num2 are equal)
let isNotEqual = num1 != num2; //Inequality: true(checks if num1 and num2 are not equal)
let isGreater = num1>num2; //Greater than: false
let isLess = num1<num2; //Less than: true
let isGreaterOrEqual = num1>=num2; //Greater than or equal: false
let isLessOrEqual = num1<=num2; //Less than or equal: true

console.log(isEqual);
console.log(isNotEqual);
console.log(isGreater);
console.log(isLess);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);

//You can use either == or === when comparing values. These two operators look similar but work diferently. while == compares values and ignores their type, === compares values and types, making it a stricter comparison.
// For Example, 5 == '5' is true because JavaScript changes the string '5' into a number before checking.

let num = 5;
let str = '5';
console.log(num == str); //Output:True

//=== checks if the values and types are equal. there's no conversion. For example, 5==='5' is false because one is a number and the other is a string, so they aren't the same

let number = 5;
let string = '5';
console.log(num === str); //output: False

let number1 = 5;
let number2 = 3;

let addition = number1+number2;
console.log(addition);