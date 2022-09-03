/*
Clouser: A clouser is an ineer function that has access to the outer functions variabal.

Global Execution Context:
 -A region in which we write the code is called Global Execution Context.

NOTE : Here the varibale of a inner fun dose not execute in to the outer function.it means Lexical scoping
    (It means varible can be executed within a scope)
    -A lexical scope in JavaScript means that a variable defined outside a function can be accessible 
    inside another function defined after the variable declaration.
*/
//=====================================================================================================

//1]
// let i=10;
// function print (){
//     let j = 20;
//     console.log(j);
//     console.log(i);
// };
// print()
//-----------------------------------------------------------------------------
// //2]
// function outerFun(){
//     let i = "i a local variable of a outer function"
//     console.log(i);
//     // console.log(j);  //dose not executed 
    

//     function ineerFun(){
//         let j = "j a local variable of a ineer function"
//     console.log(j);
//     console.log(i); //here the i variable of outer Function access in a ineer function , and get a o/p so that calls a colsure
//     }
//     ineerFun();
//     //console.log(j)  //dose not executed 
// }
// outerFun()






//-----------------------------------------------------------------------------
//3]
// function first (){
//     let a=10
//     function second(){
//         let b=20
//         console.log(a,b)
//     }
//     second()
// }
// first()

// function fisrt() {
//     let a=10
//     function second() {
//         let b=20
//         console.log(a,b);
//     }
//     second()
// }
// console.log();
