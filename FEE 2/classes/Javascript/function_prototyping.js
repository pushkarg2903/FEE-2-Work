// OOPS

// 4 fundamental pillars

// 1. Encapsulation // grouping related variables and functions that operate on them into objects
// 2. Abstraction   // hiding the complexity and showing only the essentials   
// 3. Polymorphism  // many forms
// 4. Inheritance   // eliminating redundant code

// js mein hume sirf inheritance se matllab hai 
// inheritance nahi hoti, prototype based inheritance hoti hai

// Prototypes are the mechanism by which JavaScript objects inherit features from one another

// js is object based, object plays crucial role in the working of js
// every object in js has a prototype property, which makes inheritance possible in js
// prototype property of an object is where we put methods and properties that we want other objects to inherit
// the constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it
// when a certain method or property is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain


var person1 = {
    name: 'Pushkar',
    Id: '2310992185',
    subject: 'FEE',
};

console.log(person1);

const person2 = Object.create(person1);
console.log(person2); // empty object because it returns a prototypal object of person1 
console.log(person2.name); // Pushkar

person2.name = "Raahat";
console.log(person2);
console.log(person2.name); // Raahat

console.log(person2.__proto__ == person1); // { name: 'Pushkar', Id: '2310992185', subject: 'FEE' }

const person3 = Object.create(person2);

console.log(person3.__proto__ == person1); // false
console.log(person3.__proto__ == person2); // true
console.log(Object.prototype.__proto__); // null


// __proto__
// Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards
// Warning: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, currently a very slow operation in every browser and JavaScript engine.

// Object.create() method creates a new object, using an existing object as the prototype of the newly created object