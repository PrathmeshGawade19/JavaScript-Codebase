console.log("Callbacks, Promises & Aysnc Await");

//async await >> promise chains >> callback hell

/* 
Sync in JS :
Syntchronous - 
Syntchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution. 

Asynchronous -
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/
 
// Asynchronous Programming
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("namaste");
// }, 5000);

// console.log("three");
// console.log("four");

/* 
Callbacks 
A callback is a function passed as an argument to another functin 
*/

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(5, 10, sum);

/*
Callback Hell :
Callback Hell - Nested callbacks stacked below one another forming a pyramid structure.
This style of programming becomes difficult to understand and manage.
*/

/* 
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//Callback Hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    })
}) 
*/

/*
Promises :
Promises if for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.
Syntax -
let promise =  new Promise((resolve, reject) => {... });
--> here resolve and reject are callbacks provided by JS

A javascript promise object can be
Pending - the result is undefined
Resolved - the result is a value (fulfilled) --> resolve(result)
Rejected - the result is an error object --> reject(error)
--> Promise has state (pending, fulfilled) and some result (result for resolve and error for reject).
*/

/* function getData(dataId, getNextData){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}

let promise = getData(1);
console.log(promise); */

/* 
.then() and .catch()
Promise.then((res) => {...})
Promise.catch((res) => {...}) 
*/

/* 
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("successful");
        reject("network error");
    });
};

let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

promise.catch((err) => {
    console.log("promise rejected", err);
}); 
*/

//Promise chaining
/* function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("successfully fetched");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("successfully fetched");
        },4000);
    });
}

console.log("fetching data1... ");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2... ");
    
    let p2 = asyncFunc2();  
        p2.then((res) => {
        console.log(res);
    });
}); */

/* 
Async Await : 
async function always returns a promise .
async function myFunc() {... }

await pauses the execution of its surrounding async function until the promise is settled.
*/

/* Example 1 -
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}

getWeatherData(); //function call  
*/

//Example 2 -
function getData(dataId){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

async function getInfo() {
    console.log("getting data1... ");
    await getData(1);
    console.log("getting data2... ");
    await getData(2);
    console.log("getting data3... ");
    await getData(3);
    console.log("getting data4... ");
    await getData(4);
};

getInfo();

/* 
IIFE - Immediately Invoked Function Expression
IIFE is a function that is called immediately as soon as it if defined
Syntax -
(function)();
*/