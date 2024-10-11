// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.


// Example 1
// x = 5; // Assign 5 to x
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x; // Display x in the element
// var x; // Declare x 


// Example 2
// var x; // Declare x
// x = 5; // Assign 5 to x
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x; // Display x in the element

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


// JavaScript Declarations are Hoisted  (moved to the top)
// JavaScript only hoists declarations, not initializations.

// Example 1
// var x = 5; // Initialize x
// var y = 7; // Initialize y
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// // Example 2
// var x = 5; // Initialize x
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y
// var y = 7; // Initialize y


// let x = 10;
// const y = 20;
// let and const get in temporary dead zone, means if they are used before declaration, they will throw an error
// inko upar ke code ka pata nahi chalta, so they are not hoisted
// they only see code after them, not before them

// in short let and const: not hoisted: temporary dead zone: reference error if used before declaration
// var: hoisted: undefined if used before declaration


// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
// If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.


// myfun(); //function call
console.log(myfun());
console.log(a);
var a = 10;


function myfun() {
    var b = 20;
    console.log(b);
}

// function myfun1() {}

// Execute content:

// Call Stack: global execution contect
// has two phase

// 1. Memory creation phase
// all the functions and variables are hoisted(extracted)
// the values are not assigned so the variables are undefined


// 2. Code execution phase
// the code is executed line by line
// all the variables and the functions are assigned the values