console.log("Array");

//array - collection of items. It can be of different datatype items also in javascript.

//array literal
let arr1 = ['a', 'b', 'z', 1, 2, 3, "pratham", true, false, null];
console.log(arr1);
console.log(arr1.length);
console.log(typeof arr1);

//array constructor
let arr2 = new Array ('a', 'b', 'z', 1, 2, 3, "pratham", true, false, null);
console.log(arr2);
console.log(arr2.length);
console.log(typeof arr2);

//to access array elements we use index
console.log(arr1[1]);
console.log(arr2[5]);

//build in methods 
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3);

arr3.push(6); //inserts at end
console.log(arr3);

arr3.pop(); //removes at end
console.log(arr3);

arr3.shift(); //removes at start
console.log(arr3);

arr3.unshift(1); //inserts at start
console.log(arr3);

let arr4 = arr3.slice(2,5); //slicing part from array It will be shallow copy
console.log(arr4);

arr3.splice(1,2,'pratham');
console.log(arr3);

//map - when we have existing values in function and we want to run a function/do processing on those values then we use map
let arr5 = [10, 20, 30];
let ansArray = arr5.map((i) =>{
    return i*i;
});
console.log(ansArray);

//filter - returns the elements of an array that meet the condition specified in a callback function.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = arr6.filter((i) => {
    if(i%2===0){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenArray);

//reduce
let arr7 = [10, 20, 30, 40];
let ansReduce = arr7.reduce((acc,curr) => {
    return acc + curr;
}, 0);
console.log(ansReduce);

//sorting
let arr8 = [9, 1, 7, 4, 2, 8];
arr8.sort();
console.log(arr8);

//indexOf()
console.log(arr8.indexOf(9));
console.log(arr8.indexOf(1));

//length
console.log(arr8.length);

//find
let arr9 = [1, 45, 8, 98, 7];

function isEven(element) {
    return element % 2 == 0;
}
let firstEven = arr9.find(isEven);
console.log(firstEven); // 8

//OR
// syntax : arr.find(callback(element, index, arr),thisArg)

let firstOdd = arr9.find((element) => element % 2 == 1);
console.log(firstOdd); // 1

//arrays in functions
let arr10 = [10, 20, 30, 40, 50];

function getSum(arr){
    let sum = 0
    // for(let i=0; i<arr.length; i++){
    //     sum = sum + arr[i];
    // }
    // OR
    arr.forEach((ele) => {
        sum = sum + ele;
    });

    return sum;
}

let ansSum = getSum(arr10);
console.log(ansSum);
