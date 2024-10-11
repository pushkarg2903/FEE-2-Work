// Array Methods: [map, reduce, filter and sort];


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cube = function (num) {
    return num **3;
};

console.log(cube(4));

let newArray = num.map(cube);
console.log(newArray);
