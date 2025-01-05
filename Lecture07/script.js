console.log("Javascript Concepts");

/*
Variable and Function Hoisting :
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use variables and functions in your code even before they are declared. However, the way variables and functions are hoisted differs.
Variables declared using var, let, or const are hoisted differently.

1. var Hoisting -
The declaration (but not the initialization) of var variables is hoisted to the top of their function or global scope.
Before the actual declaration and initialization in the code, the variable is initialized to undefined.

2. let and const Hoisting -
Variables declared with let and const are also hoisted, but they are not initialized.
These variables are in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them before declaration results in a ReferenceError.
*/


/*
console.log(a); // undefined
var a = 5;
console.log(a); // 5

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
*/

/*
Function Hoisting
Functions are hoisted differently based on whether they are declared as function declarations or function expressions.

1. Function Declarations
Entire function declarations are hoisted, including their body.
This allows you to call the function even before its declaration in the code.

2. Function Expressions
Function expressions (whether anonymous or named) are not fully hoisted. Only the variable declaration is hoisted, not the function definition.
This means that before the assignment, the variable is treated as undefined.
*/

/*
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}

console.log(sum); // undefined
var sum = function (a, b) {
  return a + b;
};
sum(2, 3); // Works fine after the definition.

Using let or const with a function expression behaves like their variable hoisting behavior:
console.log(multiply); // ReferenceError
let multiply = function (a, b) {
  return a * b;
};
*/


/* Temporal Dead Zone (TDZ) : The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let, const, and class. It refers to the time period from the start of a block's scope until the variable is declared and initialized. During this time, the variable is in an uninitialized state, and accessing it results in a ReferenceError. */

// Common built-in object Math
console.log(Math.PI);
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));
console.log(Math.round(1.4)); //1
console.log(Math.ceil(1.4)); //2
console.log(Math.abs(-5)); //5
console.log(Math.random());
console.log(Math.floor(1.4)); //1
console.log(Math.floor(Math.random()*10)); //to get any integer number randomly from 1-10 
console.log(Math.sqrt(36));
console.log(Math.pow(4,2));

//Date class
let dateObj = new Date(); //creating date object
console.log(dateObj.getDate());
console.log(dateObj.getFullYear());

/* Math doesn’t require instances because it operates in a stateless, global way.
Date requires instances because it needs to represent specific dates and times, which are unique to each object. */

/*
Error Handling : 
try-catch block - 
try{
... normal code
}
catch(err){
... handling error
}
*/

let a = 5;
let b = 10;
// let c = 15;
console.log(a+b);
try {
    console.log(a+b+c);
} catch (error) {
    console.log("the error occured is :", error);
}
console.log(b-a);
console.log(a*b);
