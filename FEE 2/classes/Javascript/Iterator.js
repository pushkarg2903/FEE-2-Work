// Iterator is a predefuned object in javascript that can be used to iterate over an array or a string.
// Iterators(prototype of object) are objects that implement the next() method.
// The next() method returns an object with two properties: value and done.

// var str = "Hello";
// Create an iterator object
// The iterator object has a next() method that returns an object with two properties: value and done.
// value: the next value in the iteration
// done: a boolean that indicates if the iteration is done
// var iterator = str[Symbol.iterator]();
// console.log(iterator.next()); // { value: 'H', done: false }
// console.log(iterator.next()); // { value: 'e', done: false }
// console.log(iterator.next()); // { value: 'l', done: false }
// console.log(iterator.next()); // { value: 'l', done: false }
// console.log(iterator.next()); // { value: 'o', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }


// 1. Iterators in js 

// [symbol.iterator] tells us that the object is iterable or not.
// let arr = [1,2,3,4,5];
// console.log(arr[Symbol.iterator]); // [Function: values]


// for of loop
// for (i of arr) {
//     console.log(i);
// }

// for in loop
// let  obj = {name: 'Pushkar'};

// for(i in obj){
//     console.log(arr[Symbol.iterator])
//     console.log(i);
// }



// 2. Functions in js

const a = 10;
const b = 20;
// var c = a + b;
// console.log(c);

// rather we can use functions to do the same thing
// here a and are parameters
function add(a,b){
    return a + b;
}

console.log(add(a,b)); // here a and b are arguments assigned to the parameters a and b respectively.



// Default arguments in functions

//default argumets (b=3)
function multiply(a,b=3){
    var c=a*b;
    console.log(c);
}
//console.log(5); it will print 5

//multiply(2) print Nan(Not a number) cause b is not defined if predefined value is not given
multiply(7);
multiply(7,4);// it will print 28 because the value assigned overules the default value