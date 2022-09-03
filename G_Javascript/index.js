//////////////////////////////💥EXAMPLE-1💥/////////////////////////////////////

// var name = "Saloni";

// const guessName = () => {
//     console.log(name);
//     var name = "Shraddha"
// }

// guessName();
//////////////////////////////💥EXAMPLE-2💥/////////////////////////////////////

// Consider the two functions below. Will they both return the same thing? Why or why not?
// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(foo1());
// console.log(foo2());

//////////////////////////////💥EXAMPLE-3💥/////////////////////////////////////
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);// output

//////////////////////////////💥EXAMPLE-4💥/////////////////////////////////////

// In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
//IIFE -> Immediately invoked function expression.

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

//////////////////////////////💥EXAMPLE-5💥/////////////////////////////////////
// Write a simple function (less than 160 characters) that returns a boolean
// indicating whether or not a string is a palindrome ?

// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     console.log(str)
//     return (str == str.split('').reverse().join(''));
//   }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("levels"));
// console.log(isPalindrome("A car, a man, a maraca"));

//////////////////////////////💥EXAMPLE-6💥/////////////////////////////////////
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
// };
// example(0, 1, 2);

//////////////////////////////💥EXAMPLE-7💥/////////////////////////////////////
// When an object is passed with duplicate keys, the value of the key will be replaced by
//  the last value of that key used in the declaration.

// const obj1 = {first: 20, second: 30, first: 50};
// console.log(obj1);

//////////////////////////////💥EXAMPLE-8💥/////////////////////////////////////
// The strict equality operator compares objects by their references
//  so even though the contents of both objects are the same, their
//  references don’t match resulting in false.

// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};
// console.log(obj1 === obj2);

// let arr1 = [2];
// let arr2 = [2];
// console.log(arr1 === arr2)

//////////////////////////////💥EXAMPLE-9💥/////////////////////////////////////
// What will the code below output to the console and why?

// The logged output will be:

// "array 1: length=5 last=j,o,n,e,s"
// "array 2: length=5 last=j,o,n,e,s"
// arr1 and arr2 are the same (i.e. ['n','h','o','j', ['j','o','n','e','s'] ]) after the above code is executed for the following reasons:

// Calling an array object’s reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1).

// The reverse() method returns a reference to the array itself (i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are simply references to the same object.

// And a couple of side points here that can sometimes trip someone up in answering this question:

// Passing an array to the push() method of another array pushes that entire array as a single element onto the end of the array. As a result, the statement arr2.push(arr3); adds arr3 in its entirety as a single element to the end of arr2 (i.e., it does not concatenate the two arrays, that’s what the concat() method is for).

// Like Python, JavaScript honors negative subscripts in calls to array methods like slice() as a way of referencing elements at the end of the array; e.g., a subscript of -1 indicates the last element in the array, and so on.
var arr1 = "john".split("");
var arr2 = arr1.reverse(); //["n","h","o","j"]
var arr3 = "jones".split(""); //["j","o","n","e","s"]
arr2.push(arr3); //["n","h","o","j",["j","o","n","e","s"]]
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));  // 4, "n"
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));  // 5, "j","o","n","e","s"

//////////////////////////////💥EXAMPLE-10💥/////////////////////////////////////
// -->Due to closure concept...
// (function(a){
//     return (function(){
//       console.log(a);
//       a = 6;
//     })()
//    })(21);

//////////////////////////////💥EXAMPLE-11💥/////////////////////////////////////
// The slice() function in Javascript slices an array within the given start and end indexes and
//  then returns the values lying in those ranges. The indexing done is 0-based indexing.

a = [1, 2, 3, 4, 5];
// console.log(a.slice(2, 4));

//////////////////////////////💥EXAMPLE-12💥////////////////////////////////////
// The parseInt() method converts a string to an integer if it is possible. If the
// string starts with a number, it will convert that numeric part and return it. Else, it will return NaN.

// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));

//////////////////////////////💥EXAMPLE-13💥////////////////////////////////////
// What will the code below output to the console and why ?

/**
  "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example,
   "A" - "B" yields NaN. But any operator applied to NaN with any other numeric 
 operand will still yield NaN.

//  */

// console.log(1 +  "2" + "2");  // 122
// console.log(1 +  +"2" + "2");  // 32
// console.log(1 +  -"1" + "2");  // 02
// console.log(+"1" +  "1" + "2"); //  112
// console.log( "A" - "B" + "2");  // NAN2
// console.log( "A" - "B" + 2);   // NAN

//////////////////////////////💥EXAMPLE-14💥////////////////////////////////////

// console.log(NaN === NaN);

//////////////////////////////💥EXAMPLE-15💥////////////////////////////////////

// Nothing happens in the above code, and it is totally valid because functions
// in Javascript are treated as objects.

// function dog() {
//   console.log("I am a dog.");
// }
// dog.sound = "Bark";

//////////////////////////////💥EXAMPLE-16💥////////////////////////////////////

// console.log("0 || 1 = " + (0 || 1));
// console.log("1 || 2 = " + (1 || 2));
// console.log("0 && 1 = " + (0 && 1));
// console.log("1 && 2 = " + (1 && 2));

//////////////////////////////💥EXAMPLE-17💥////////////////////////////////////
// The …args parameter allows us to collect all remaining arguments into an array,
// and in Javascript typeof an array is an object.

// function test(...args) {
//   console.log(typeof args);
// }
// test(12);

//////////////////////////////💥EXAMPLE-18💥////////////////////////////////////
// What is the output out of the following code? Explain your answer.

// The reason for this is as follows: When setting an object property, JavaScript will 
// implicitly stringify the parameter value. In this case, since b and c are both objects, 
// they will both be converted to "[object Object]". As a result, a[b] anda[c] are both 
// equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting
//  or referencing a[c] is precisely the same as setting or referencing a[b].


var a = {},
    b = { key: "b" },
    c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//////////////////////////////💥EXAMPLE-19💥////////////////////////////////////
// In Javascript, the a[i] - ‘a’ is not typecasted to an integer type and hence the 
// result is NaN.

{
var a = "hello";
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum += (a[i] - 'a');
}
 console.log(sum)
}

//////////////////////////////💥EXAMPLE-20💥////////////////////////////////////
// In Javascript, true is considered as the number 1 when used in any arithmetic
//  expression, hence the expression evaluates to 5.

var a = true + true + true * 3;
console.log(a)

//////////////////////////////💥EXAMPLE-21💥////////////////////////////////////
console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));

//////////////////////////////💥EXAMPLE-22💥////////////////////////////////////

// Testing your this knowledge in JavaScript: What is the output of the following code?

// n the first place, as fn is passed as a parameter to the function method, the scope (this) 
// of the function fn is window. var length = 10; is declared at the window level. It also can
//  be accessed as window.length or length or this.length (when this === window.)

// method is bound to Object obj, and obj.method is called with parameters fn and 1.
//  Though method is accepting only one parameter, while invoking it has passed two 
//  parameters; the first is a function callback and other is just a number.

// When fn() is called inside method, which was passed the function as a parameter 
// at the global level, this.length will have access to var length = 10 (declared globally)
//  not length = 5 as defined in Object obj.

// Now, we know that we can access any number of arguments in a JavaScript
//  function using the arguments[] array.

// Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of
//  this function becomes the arguments array, and logging the length of arguments[] will return 2.


var length = 10;

function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);