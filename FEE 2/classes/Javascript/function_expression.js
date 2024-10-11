const val = function sum(a, b) { // function is dfined inside an expression
    return a + b;
}

console.log(val);
console.log(val(5, 1));
// console.log(sum(5, 2)); // error because sum is not defined in global scope but in val scope so it is not accessible in global scope but in val scope only
console.log(val.sum(5, 3));

