//Promise.all() :
//The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that 
// resolves to an array of the results of the input promises.
//All promises are in resolved, if any one is reject then o/p is Rejected(error).
//Promise.all will reject as soon as one of the Promises in the array rejects.

//---------------------------------------------------------------------------------------------------
//Resolved
// let promise1 = Promise.resolve(3);
// let promise2 = 34;
// let promise3 = new Promise(resolve=> setTimeout(resolve,100,"foo"));

// let allPromises = [promise1,promise2,promise3]

// Promise.all(allPromises).then(res => console.log(res)).catch(()=>console.log("Error occur."));
//---------------------------------------------------------------------------------------------------
//Rejected
// let promise1 = Promise.reject(3);
// let promise2 = 34;
// let promise3 = new Promise(resolve=> setTimeout(resolve,100,"foo"));

// let allPromises = [promise1,promise2,promise3]

// Promise.all(allPromises).then(res => console.log(res)).catch(()=>console.log("Error occur."));


//======================================================================================================
//======================================================================================================

//Promise.allSettled() : 
//It returns a promise that always resolves after all of the given promises have either fulfilled or rejected,
// with an array of objects that each describes the outcome of each promise.
//Promise.allSettled will never reject, it will resolve once all Promises in the array have either rejected or resolved.

//---------------------------------------------------------------------------------------------------
let pro1 = Promise.resolve(22);
let pro2 = Promise.reject(new Error("An error"));
let pro3 = new Promise(resolve => setTimeout(resolve,100,"foo"));

let allPromise = [pro1,pro2,pro3];

Promise.allSettled(allPromise)
.then(value=> console.log(value));