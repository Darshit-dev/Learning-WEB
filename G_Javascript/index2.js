//////////////////////////////💥EXAMPLE-1💥/////////////////////////////////////
/*null is falsy. !null returns true. !true returns false.

"" is falsy. !"" returns true. !true returns false.

1 is truthy. !1 returns false. !false returns true.
*/

!!null;
!!'';
!!1;

console.log(!!null); //False
console.log(!!''); //False
console.log(!!1); //True


//////////////////////////////💥EXAMPLE-2💥/////////////////////////////////////

const numbers = [1, 2, 3];
numbers[10] = 11; //this means we are inserting element at a specific index             
console.log(numbers);

// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, 7 x empty, 11]
// D: SyntaxError


//////////////////////////////💥EXAMPLE-3💥/////////////////////////////////////

/*The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.

Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.

Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.
*/

(() => {
    let x, y;
    try {
        throw new Error(); //execution
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

// A: 1 undefined 2 -Correct answer
// B: undefined undefined undefined
// C: 1 1 2
// D: 1 undefined undefined

//////////////////////////////💥EXAMPLE-4💥/////////////////////////////////////

function reduce() {
    [
        [0, 1],
        [2, 3]
    ].reduce((acc, cur) => { return acc.concat(cur); }, [1, 2], );
}
console.log(reduce());

/*
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3] //1,2,0,1,2,3
D: [1, 2, 6]
*/

//////////////////////////////💥EXAMPLE-5💥/////////////////////////////////////

[...
    'Lydia'
];

// A: ["L", "y", "d", "i", "a"]  -this is the answer
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]
// A string is an iterable. The spread operator maps every character of an iterable to one element.


//////////////////////////////💥EXAMPLE-6💥/////////////////////////////////////

let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]

//////////////////////////////💥EXAMPLE-7💥/////////////////////////////////////
const person1 = {
    name: 'Lydia',
    age: 21,
};

for (const item in person1) {
    console.log(person1[item]); //null 
}

//////////////////////////////💥EXAMPLE-8💥/////////////////////////////////////

console.log(3 + 4 + + +'5'); //75

//////////////////////////////💥EXAMPLE-9💥/////////////////////////////////////

/* Only the first numbers in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.* is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.
 */

const num = parseInt('7*6', 2); //if 2 will come then it will give NaN
console.log(num);

// A: 42
// B: "42"
// C: 7 -This is the answer
// D: NaN

//////////////////////////////💥EXAMPLE-10💥/////////////////////////////////////

[1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
});

// A: []
// B: [null, null, null]
// C: [undefined, undefined, undefined]-This is the answer
// D: [ 3 x empty ]

//////////////////////////////💥EXAMPLE-11💥/////////////////////////////////////

function greeting() {
    throw 'Hello world!';
}

function sayHi() {
    try {
        const data = greeting();
        console.log('It worked!', data);
    } catch (e) {
        console.log('Oh no an error:', e);
    }
}

sayHi();

// A: It worked! Hello world! 
// B: Oh no an error: undefined 
// C: SyntaxError: can only throw Error objects
// D: Oh no an error: Hello world!

//////////////////////////////💥EXAMPLE-12💥/////////////////////////////////////

/* When you return a property, the value of the property is equal to the returned value, not the value set in the constructor function. We return the string "Maserati", so myCar.make is equal to "Maserati".
 */

function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);

// A: "Lamborghini"  
// B: "Maserati" -This is the answer
// C: ReferenceError
// D: TypeError


//////////////////////////////💥EXAMPLE-13💥/////////////////////////////////////

(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);

// A: "undefined", "number"
// B: "number", "number"
// C: "object", "number"
// D: "number", "undefined"

//////////////////////////////💥EXAMPLE-14💥/////////////////////////////////////

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Dog.prototype.bark = function() {
//     console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog('Mara');

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();

//   A: "Woof I am Mara", TypeError -This is the answer
//   B: "Woof I am Mara", "Woof I am Mara"
//   C: "Woof I am Mara", undefined
//   D: TypeError, TypeError

//////////////////////////////💥EXAMPLE-15💥/////////////////////////////////////

var b = 1;

function outer() {
    var b = 2

    function inner() {
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer(); // 3


//////////////////////////////💥EXAMPLE-16💥/////////////////////////////////////

console.log(typeof typeof 1); //string

//////////////////////////////💥EXAMPLE-17💥/////////////////////////////////////

// Imagine you have this code:

var a = [1, 2, 3];
// a) Will this result in a crash ?

a[10] = 99;
// b) What will this output ?

console.log(a[6]); // undefined 


//////////////////////////////💥EXAMPLE-18💥/////////////////////////////////////

const set = new Set([1, 1, 2, 3, 4]);

console.log(set);

// A: [1, 1, 2, 3, 4]  
// B: [1, 2, 3, 4]  
// C: { 1, 1, 2, 3, 4 }
// D: { 1, 2, 3, 4 }   -This is the answer


//////////////////////////////💥EXAMPLE-19💥/////////////////////////////////////

for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i); // 1,2,4
}

//////////////////////////////💥EXAMPLE-20💥/////////////////////////////////////


function f(a, b, c) {
    m = ["1", "2", "3"];
    a = 3;
    b[0] = "X";
    c.first = false;
}

var x = 4;
var y = ["A", "B", "C"];
var z = { first: true };

f(x, y, z);
console.log(x, y, z);

function g(a) {
    a = { first: true };
    console.log(a);
}

g(z);
console.log(z);

//4 ["X", "B", "C"] {first:false} {first:true} {first:false} -This is the answer
//4 ["B", "B", "A"] {first:true} {first:true} {first:false}
//Undefined
//null

//////////////////////////////💥EXAMPLE-21💥/////////////////////////////////////
//Make this work?

//duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
    return [...arr, ...arr]
}

console.log(duplicate([1, 2, 3, 4, 5]));

//////////////////////////////💥EXAMPLE-21💥/////////////////////////////////////


//Implement enqueue and dequeue using only two stacks?

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
    // Reverse the stack such that the first element of the output stack is the
    // last element of the input stack. After that, pop the top of the output to
    // get the first element that was ever pushed into the input stack
    if (stackOutput.length <= 0) {
        while (stackInput.length > 0) {
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }

    return stackOutput.pop();
}

//////////////////////////////💥EXAMPLE-22💥/////////////////////////////////////

//Write a "mul" function which will properly when invoked as below syntax

function mul(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}

console.log(mul(2)(3)(4)); // output : 9
console.log(mul(4)(3)(4)); // output : 11


//////////////////////////////💥EXAMPLE-23💥/////////////////////////////////////

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

// A: { admin: true, user: { name: "Lydia", age: 21 } }
// B: { admin: true, name: "Lydia", age: 21 } -This is the answer
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }

//////////////////////////////💥EXAMPLE-24💥/////////////////////////////////////

const person2 = { name: 'Lydia' };

Object.defineProperty(person2, 'age', { value: 21 });

console.log(person2);
console.log(Object.keys(person2));

/*A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names from an object, in this case only "name".

Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties you're adding to an object. */