console.log("Loops and Strings");

//loops - used to execute a piece of code again and again
//for loop
for(let i=0; i<5; i++){
    console.log("hello js");
}

//calculate sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum of 1 to 5 is : ",sum);

//while loop
let mul = 1, j = 1;
while(j <= 5){
    mul = mul * j;
    j++;
}
console.log("mult of 1 to 5 is : ",mul);

//do while loop
let k = 1;
do{
    console.log("this do-while loop");
    k++;
}while(k <= 3);

//for-of loop - used for array, string
let word = "javascript";
let size = 0;
for(let val of word){
    console.log(val);
    size++;
}
console.log(size);

//for-in loop - used for objects
let car = {
    modelName : "mercedes-benz",
    modelNum : 10,
    color : "black",
};

for(let key in car){
    console.log(key, " : ", car[key]);
}

//number guess game
/*let toguess = 40 ;

let usernum = 0;
while(usernum != toguess ){
    usernum = prompt("enter the number greater than 0 till you guess correct one");
}

console.log("congrats you guessed the number",toguess,"correctly!!!");
*/

//break -  used to break of loop iterations
//continue - used to skip a particular iteration of loop

//string - sequence of character
let str = "html css javascript";
//template literals - used for string interpolation i.e string text $(expression) string text
let para = `hello
lets learn js    and font-end development`; // ` ` used to print text as it is with enter and space 
console.log(str);
console.log(para);

console.log(str.length); //string length
console.log(str[1]); //string indices
console.log(str.toUpperCase());