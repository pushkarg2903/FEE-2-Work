// console.log("Execution Started...");

// for(let i = 0; i < 1000; i++) {
//     console.log("For loop function");
// }
// // js is a synchronous language - means it will execute line by line

// console.log("Execution Ended");


// SetTimeout function - this function is used to delay the execution of the code

// Three ways to delay
// 1. function SetTimeout() {

// }

// 2. var set = function setTimeout() {

// }


// we will us third one
// console.log("Execution Started...");

// setTimeout(() => {
//     console.log("SetTimeoout function");
// }
// , 2000);

// for(let i = 0; i < 1000; i++) {
//     console.log("loop running...");
// }

// console.log("Execution Ended...");

// Global Execution Environment

// 1. Main stack [JS] - Execution context
// it will print execution started...
// it will print loop running 1000 times
// it will print execution ended...
// it will print settimeout function after 2 seconds


// 2. Call stack [API] - Web API
// it will print settimeout function after 2 seconds






// console.log("start");

// var a = setTimeout(() => (
//     console.log("timeout")
// ), 1000);

// clearTimeout(a);

// console.log("end");


let count = 0;
const interval = setInterval(() => {
    count++;
    console.log(`message: ${count}`);

    if(count === 3) {
        clearInterval(interval);
        console.log("Execution ends here...")
    }
});
