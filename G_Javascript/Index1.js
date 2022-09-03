//1. console.log((123['toString'].length + 123)) // OUTPUT: 124

//2. function crazyFunction() {
//   var a = (b = 10);
// }
// crazyFunction();
// console.log("b", typeof b === "undefined"); // false
// console.log("a", typeof a === "undefined");  // true

// const numbers = [1, 2, 3];
// for (var index = 0; index < numbers.length; index++);{
//   const number = numbers[index];
//   console.log(number);
// }

//3.  let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }

//console.log(parseInt("0526"))
//console.log(parseInt("0001200"))
//console.log(parseInt("09"))

//console.log(parseInt(99999999999999999999999999)) // tell output with a valid reason?

// console.log(Math.floor(0.5));     
// console.log(Math.floor(0.05));    
// console.log(Math.floor(0.005));    
// console.log(Math.floor(0.0005));   
// console.log(Math.floor(0.00005)); 
// console.log(Math.floor(0.000005));
// console.log(Math.floor(0.0000005)); //output of the following code?


//console.log(['1', '7', '11'].map(parseInt))


// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };

//  myObject.func();

// The above code will output the following to the console:

// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
// In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

// In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.



// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();


// Write a sum method which will work properly when invoked 
// using either syntax below.

// function sum(x, y) {
//     if (y !== undefined) {
//       return x + y;
//     } else {
//       return function(y) { return x + y; };
//     }
//   }

//   function sum(x) {
//     if (arguments.length == 2) {
//       return arguments[0] + arguments[1];
//     } else {
//       return function(y) { return x + y; };
//     }
//   }


// console.log(sum(2,3));  
// console.log(sum(2)(3));


// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// The Promise.all method runs the passed promises in parallel. If one promise fails, the Promise.all method rejects with the value of the rejected promise. In this case, promise3 rejected with the value "Third". We’re catching the rejected value in the chained catch method on the runPromises invocation to catch any errors within the runPromises function. Only "Third" gets logged, since promise3 rejected with this value


// class Calc {
//     constructor() {
//         this.count = 0 
//     }

//     increase() {
//         this.count ++
//     }
// }

// const calc = new Calc()
// new Calc().increase()
// //calc.increase()
// console.log(calc.count)



// function getFruit(fruits) {
//     console.log(fruits?.[1]?.[1])
// }

// getFruit([['🍊', '🍌'], ['🍍']])
// getFruit()
// getFruit([['🍍'], ['🍊', '🍌']])


// let count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach(num => {
// 	if (num) count += 1
// })

// console.log(count)


const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */
emojis.push('🦌');
/* 2 */
emojis.splice(0, 2);
/* 3 */
emojis = [...emojis, '🥂'];
/* 4 */
emojis.length = 0;

console.log(emojis)