/*
Promise
--------
- A promise use for a aschronous acticity or 
-Promises are used to handle asynchronous operations in JavaScript.
- A promise is an object which can be returned synchronously from an asynchronous function.

It will be in one of 3 possible states:
Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
Rejected: onRejected() will be called (e.g., reject() was called)
Pending: not yet fulfilled or rejected

Benefits of Promises
● Improves Code Readability
● Better handling of asynchronous operations
● Better flow of control definition in asynchronous logic
● Better Error Handling
*/
//-------------------------------------------------------------------------------------------------
// // callbacks (old way)
// let data = [
//     {name:'dhaval'},
//     {name:'xyz'}
// ];

const { rejects } = require("assert");
const { json } = require("body-parser");
const { resolve } = require("path");

// function adddata(newData) {

//     return new Promise ((resolve , reject)=>{
//     setTimeout(() => {
//         data.push(newData)
//         let err = false;

//         if(!err){
//             resolve('Promise resolved')
//         }else{
//             reject('error occures')
//         }

//     },2000)
// })

// };

// function getdata(){
//     data.forEach(ele => console.log(ele));
// };

// // adddata({name:'abc'}).then(getdata).catch((err)=> console.log(err));



// //async/await (most easy ways)

// async function start (adddata,getdata){
// try{
//     await adddata({name:"pqr"})
//     getdata()
// }catch(err){
//     console.log(err)
// }
// };

// start(adddata,getdata)

//ex
// function print(no){
//     return new Promise((resolve,rejected)=>{
//         resolve(no+200)
//     })
// }

// console.log('first')

// print(20).then((res)=>{
//     console.log('Promise is:', res)
// }).catch((err)=>{
//     console.log('Error is', err)
// })

// console.log('Third')

//ex [use async-await]
// async function print(no){
//     return no+10
// }

// async function res(){
//     let result = await print(200)
//     console.log(result)
// }
// res()

// console.log('first')

// console.log('Third')

// function addition(no){
//     return no+10
// }

//--->To resolve This type of a problem we can use a concept of a async-await.





