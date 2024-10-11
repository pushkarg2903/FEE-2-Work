// objects are used to store complex data

// Object can be declared in two ways constructor/Literals

// 1. Constructor
var obj = Object();

obj.name = "Pushkar";
// console.log(obj);


// 2. Object Literal (also known as Object Initializers)

// created by using curly braces
// it has two properties - key andd value (key value pairs or name value pairs) 

var user;
user = {
    name: 'Pushkar',
    class: 'FEE',
    Roll_No: '2310992185',
}

// console.log(user.name);
// console.log(user);


const obj1 = new Object();

obj1.name = "Pushkar";
// console.log(typeof obj1);










// new keyword -> constructor function call krne ke liye use hota h

// function Car() {}
// const car1 = new Car();
// const car2 = new Car();

// console.log(car1.color); // undefined

// Car.prototype.color = "original color";
// console.log(car1.color); // 'original color'

// car1.color = "black";
// console.log(car1.color); // 'black'

// console.log(Object.getPrototypeOf(car1).color); // 'original color'
// console.log(Object.getPrototypeOf(car2).color); // 'original color'
// console.log(car1.color); // 'black'
// console.log(car2.color); // 'original color'










const users = {
    name: 'Pushkar',
    'Full Name': 'Pushkar Garg',
    age: '19',
    Subject: 'FEE',
    CGPA: '9.0',
}

// console.log(typeof users);

// console.log(users['Full Name']);

// console.log(users.Full Name); // error
// agar two word ka key hai toh usko access krne ke liye [] use krna padega 
// . se access krege toh space ki wajah se error aayega


// update the value of key

users.age = '20';
// console.log(users.age);



// object inside an object (nested object)

const users1 = {
    user1: {
        name: 'Pushkar',
        age: '19',
    },

    user2: {
        name: 'Garg',
        age: '20',
    },

    user3: {
        name: 'Pushkar Garg',
        age: '21',
        subuser: {
            name: 'abcd',
            age: '21',
        },
    },
}

// console.log(users1.user3.subuser.name);


// Object inside an array

let arr = [

    object= {

        obj1: {
            name: 'A',
            age: '1',
        },
        obj2: {
            name: 'B',
            age: '2',

            subobj: {
                name: 'D',
                age: '4',
            }
        },
        obj3: {
            name: 'C',
            age: '3',
        }

    }
    
];

// console.log(arr[0].obj2.subobj.name);



// Merge two objects

let obj4 = {
    name: 'Pushkar',
    age: '19',
}

let obj5 = {
    class: 'FEE',
    Roll_No: '2310992185',
}

// litera way
// let obj6 = {...obj4, ...obj5}; // spread operator
// console.log(obj6);

// constructor way
// let obj6 = Object.assign(obj4, obj5);
// console.log(obj6);


let obj7 = {
    name1: 'Pushkar',
    age: '19', 
}

let obj8 = {
    name2: 'Pushkar',
    age: '20'
}

// Literals way
// let obj9 = {...obj7, ...obj8}; // spread operator
// console.log(obj9);
// hierarchy mein jo phle hoti hai value wohi print hogi

// Consructor way
// let obj9 = Object.assign(obj7, obj8);    
// console.log(obj9);