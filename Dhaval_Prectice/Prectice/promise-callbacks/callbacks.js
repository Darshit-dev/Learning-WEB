/* 
callbacks: 
---------
-callbacks is basiclly is a function which will run after a exucation of a function.
-Functions that are used as an argument to another function are called callback functions. 

Drawbacks of callback:
---------------------
The biggest problem with callbacks is that they do not scale well for even moderetly complex asynchronous code.
The resulting code often becoms hard to read, easy to break, and hard to debug.
*/


//1]Ex
// function print(num,callback){
//     callback(null,num+10)
// }

// print(20, (error,result)=>{
//     console.log(result)
// })

//2]EX (Asynchronous Bhaviour)
// console.log('First')

// setTimeout(()=>{
//     console.log('Second')
// },3000)

// console.log('Third')


//3]EX
// let data = [
//     { name: 'dhaval' },
//     { name: 'xyz' }
// ];

// function adddata(newData) {
//     setTimeout(() => {
//         data.push(newData)
//         // console.log(data)   
//     }, 4000)
// };

// function getdata() {
//     data.forEach(ele => console.log(ele));
// };

// adddata({ name: 'abc' })

//=====================================================================================================
//Callback Hell - when their is multiple functions as a callback it will actully create a callback hell.

// a(function (data1) {
//     b(function (data2) {
//         c(function (data3) {
//             d(function (data4) {
//                 e(function (data5) {
//                     f(function (data6) {
//                         // some code
//                     })
//                 })
//            })
//         })
//     })
// })

//--->To resolve This type of a problem we can use a concept of a promise.  




