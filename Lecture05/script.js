console.log("Functions & Methods");
//functions - block of code perform specific task

function printNum(n){
    console.log("num is :",n);
}
printNum(50);

//function with multiple parameters
function getAvg(num1, num2){
    console.log("avg of two numbers is :",(num1+num2)/2);
}
getAvg(25,75);

//function with return value
function getSum(num1, num2){
    return num1 + num2;
}
let ans = getSum(30,40);
console.log("sum of two numbers is :",ans);

//other ways to write a funciton in js
//expression function
let squareNumber = function (num){
    let ans = num**2;
    return ans;
}
let sqOfNum = squareNumber(5);
console.log("square of the number is :",sqOfNum);

//arrow function
let getExp = (base, power) => {
    let ans = base**power;
    return ans;
}
let resExp = getExp(6,2);
console.log("power for given base is :",resExp);
