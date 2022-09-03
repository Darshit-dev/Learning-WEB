//what is asynchronous operation in javascript? is javascript synchronous or asynchronous?
/*
JavaScript is a single-threaded, non-blocking, synchronous, concurrent programming language  with lots of 
flexibility.

*/

//===>Synchronous code<===
// function print1(){
//     console.log("1")
// }
// function print2(){
//     console.log("2")
// }
// function print3(){
//     console.log("3")
// }
// function print4(){
//     console.log("4")
// }

// print1()
// print2()
// print3()
// print4()

//=====================================================================
//===>Asynchronous code<===
//[Anonymous function]
function print1(){
    console.log("1")
}
function print2(){
    console.log("2")
}
function print3(){
    console.log("3")
}
function print4(){
    console.log("4")
}

print1()
setTimeout(print2,0)  //setTimeout function [Register a callback, start the timer with the duration, it's ready to execute(Event loop)]
print3()
print4()

// setTimeout() executes a function once the timer expires.

//Asynchronous activity
//1] Fetch - server url (fetch) data from server and display on page;
//2]Data call;
//3]Server call


//q] is javascript synchronous or asynchronous?
//-->js is a synchronous but we can achived a asynchronous nature as well.

//Js is a single-threaded : The execution of an entire task from beginning to end without interruption.
//Non-blocking : It means not wait any expensive operation (Db call, 3rd party server call) - js langauge is not wait for those actvity
//promises : used async - apis call
