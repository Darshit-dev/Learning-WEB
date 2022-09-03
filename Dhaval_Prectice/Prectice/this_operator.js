/*1]What is the "this" operator?

-Used for object calling - this operator can access it's variable values.

-Arrow function - Strict mode of javascript this operator will be undefined. 

-Also use in a cll(), apply(), and bind() method to access a varibal.

*/

//========================================================================================
//ex 1
// let obj = {
//     fName : 'Dhaval',
//     lName : 'Patel',
//     name : function(){
//         // console.log(this)
//         return "First name : " + this.fName + this.lName;
//     }
// }

// console.log(obj.name());

// let obj2 = {
//     fName : 'Rahul',
//     lName : 'Kumar',
// }

// obj2.fullName = obj.name
// console.log(obj2.fullName())

//-------------------------------------------------------------------------------
// 'use strict'
//ex
// function name(){
//     console.log(this)
// }
// name() 


// console.log(this)
// const name1 = function(num){
//     console.log(200-num)
//     console.log(this)
// }
// name1(100)

// const name2 = nums =>{
//     console.log(2000-nums)
//     console.log(this)
// }
// name2(500)

//-------------------------------------------------------------------------------
// let obj = {
//     name : "Ramesh",
//     city : "Rajkot",
//     bio : function(age){
//         console.log(`my name is ${this.name}.i am from ${this.city}. i am ${age} yers old.`)
//     }
// }
// obj.bio(22)

// 'use strict' 

//-------------------------------------------------------------------------------
let variable = {
    a: 100,
    b: function(){
        console.log(this.a)
    } 
}
variable.b()

let variable1 = {
    a: 100,
    b: () => { console.log(this.a) }
    
}
variable1.b()