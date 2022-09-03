//1]var - Global And Functional scope
//===>1st ex
// var x = 10;

// function hello() {
//     console.log(x);
// }
// hello();
// console.log(x);

//===>2nd ex
// function fun() {
//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     console.log(a)
// }
// fun();
// // A cannot be accessible
// // outside of function
// console.log(a);

//===>2nd ex
// console.log(x)
// var x = 10;

//===========================================================================================================
//2]Let - Block scope

//===>1st ex
// let a = 10;
// function f() {
// let b = 9
// console.log(b);
// console.log(a);
// } 
// f();

//===>2nd ex
// let a = 10;
// function f() {
// if (true) {
// let b = 9
// // It prints 9
// console.log(b);
// }
// // It gives error as it
// // defined in if block
// console.log(b);
// } 
// f();

//===========================================================================================================
//3]Const - Block scope

//===>1st ex
// const a = 10;
// function f() {
// a = 9
// console.log(a)
// } f();

//===>2nd ex
// const a = {
//     prop1: 10,
//     prop2: 9
//     }
//     // It is allowed
//     a.prop1 = 3
//     // It is not allowed
//     a = {
//     prop1: 10,
//     prop2: 9
//     }

