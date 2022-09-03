//Hoisting - Hoisting means that you can define a variable before its declaration.

//Two types of Hoisting...
//1]Variable hoisting

//ex
// console.log(x);
// var x = 10;

//Internally after hoisting...
//ex
// var x;
// var y;
// console.log(x);
// console.log(y);
// x=10;
// y=20;


//2]function hoisting

//ex
// console.log(printName());
// function printName(){
//     console.log("Dhaval");
// }
// // console.log(printName());


//ex
// console.log(result);
// function add(a, b){
//     return a + b;
//     }
//     let x = 20,
//     y = 10;
//     let result = add(x,y);
//     // console.log(result);

//ex
// print()
// var print = function(){
//       console.log("Dhaval U")
// }



console.log(print(x));
// let x=10;

function print(x){
    let x=10;
}