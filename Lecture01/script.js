// alert("Basics - Variables & Datatypes"); //works in browser

console.log("pratham gawade");
console.log("pursing btech in computer science");

// variables - containers for data
let fullName = "javascript";
age = 20;
price = 100.25;
x = null;
y = undefined;
follow = true;

console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(follow);

//js is dynamically typed language
//var - variable can be re-declared & updated. A global scope variable
//let - variable cannot be re-declared but can be updated. A block scope variable
//const - variable cannot be re-declared or updated. A block scope variable

var num1 = 10;
let num2 = 20;
const num3 = 30

console.log(num1);
console.log(num2);
console.log(num3);

//data types in js - primitive --> number, string, boolean, undefined, null, bigint, symbol
let n = 25;
console.log(n);
console.log(typeof n);

let bint = BigInt("123");
console.log(bint);
console.log(typeof bint);

let sy = Symbol("123");
console.log(sy);
console.log(typeof sy);

// non-primitive --> objects (collection of data in key : value pair)
let student = {
    studentName : "Virat Kholi",
    studentAge : 30,
    studentCgpa : 9.9,
    isStudentPass : true,
};

console.log(student);
console.log(typeof student);

console.log(student.studentName);
console.log(student["studentName"]); //alternate syntax

console.log(student.studentAge);
console.log(student.studentCgpa);
