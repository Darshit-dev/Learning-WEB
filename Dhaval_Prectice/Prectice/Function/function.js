// //           |------------->a,b are parameter   
// function sum(a,b){ 
//     return  a+b
// };

// // sum(2,3)      //-----------------------> call function [2,3 argument]
// console.log(sum(2,4))

//==============================================
//Difference between Function and Arrow function.
//-----------------------------------------------


//1]1st difference is syntexes

// //1]Normal function (Introduced in ES5 version)
// function print(a,b){
//     console.log("ES5 Function",a,b)
// };

// print(2,4)

// //2]Arrow function (Introduced in ES6 version)
// let print2 = (a,b) =>{
//     console.log("ES6 Function",a,b)
// };

// print2(4,6)

//=====================================

//2]If a one parameter in a arrow function, no need to writen a console in a {}.
//   but normal function not write.

// let print2 = (a) => console.log("ES6 Function",a)

// print2(4)

//=====================================
//3]If a one parameter in a arrow function, no need to writen a return  in a {} and simply wirte a direct logic.
// and also no need to write a parameter in () , but normal function not write.

// let print2 = a => a

// console.log(print2("ES6 Function"))

//=====================================
//4]If no argument or more then one argument

// //1]Normal function (Introduced in ES5 version)
// function print(){
//     console.log("ES5 Function")
// };

// print()

// //2]Arrow function (Introduced in ES6 version)
// let print2 = _ => console.log("ES6 Function")

// print2()

//=====================================
//5] A normal function can call globally (means any where any time), but can not call a arrow function before it's initialization.

// //1]Normal function (Introduced in ES5 version) [Global scope]
// print()
// function print(){
//     console.log("ES5 Function")
// };


// //2]Arrow function (Introduced in ES6 version) [Blocked scope]
// print2()
// let print2 = _ => console.log("ES6 Function")

// // print2()


