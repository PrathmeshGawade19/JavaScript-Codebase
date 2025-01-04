console.log("Operators & Conditional Statements");

//operators
let a = 100;
let b = 50;

//arithmetic operators
console.log(a+b); //addition
console.log(a-b); //subtraction
console.log(a/b); //division
console.log(a%b); //modulo
console.log(a*b); //multiplication
console.log(2**3) //exponentiation
console.log(++a); //unary increment
console.log(--a); //unary decrement

//assignment operators
console.log(a = 5);
console.log(a += 5);
console.log(a -= 5);
console.log(a *= 5);
console.log(a /= 5);
console.log(a %= 5);
console.log(b**=2);

//comparison operators
console.log(5 == 5); //equal to 
console.log('5' == 5); 
console.log(5 === 5); //equal to & type
console.log('5' === 5);
console.log(4 != 5); //not equal to
console.log('5' !== 5); //not equal to & type
console.log(10 > 5); //greater than  
console.log(5 < 10); //less than
console.log(10 >= 10); //greater than equal to
console.log(10 <= 10); //less than equal to

//logical operators
console.log(1 && 1); //and 
console.log(1 || 0); //or
console.log(0 || 1);
console.log(!0); //not

//Conditional Statements
let mode = "light-mode";
let color;
if(mode === "dark-mode"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);

let age = 23;
if(age >=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}

let num = 23;
if(num%2 === 0){
    console.log(num,"given number is even");
}
else{
    console.log(num,"given number is odd");
}

let marks = 95;
if(marks >= 90){
    console.log("excellent");
}
else if(marks >= 80){
    console.log("good");
}
else{
    console.log("fair");
}

//ternary operator
//condition ? true output : false output;
let percentage = 90;
percentage >= 40 ? console.log("pass") : console.log("fail");

// alert("this is an alert message on browser window");
let pvalue = prompt("enter a number : ");
console.log(pvalue, "is the prompt value which user has input in prompt message");
if(pvalue%5 === 0){
    console.log("entered number is multiple of 5");
}
else{
    console.log("entered number is not multiple of 5");
}
