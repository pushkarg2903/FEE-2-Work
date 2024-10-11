// Higher Order Functions
// print name 20 times

// function printName(func, num) { // func is a function
//     for(let i = 1; i <= num; i++) { // loop will run 20 times and print name 20 times 
//         func(); // function call
//     } // function is passed as an argument
// }

// let myName = function() { // function is defined inside an expression
//     console.log("Pushkar"); // name is printed
// };
// printName(myName, 20);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(func, arr) {

    let num = arr.size;

    for(let i = 0; i < num; i++) {
        func(arr[i]);
    }
}

const even = function(num) {
    if(arr[i] % 2 == 0) {
        console.log(num + "is even");
    }
    else{
        console.log(num + "is odd");
    }
}

isEven(even, array);
