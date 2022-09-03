//1]call() : 
//The call() method is a predefined JavaScript method.


// It can be used to invoke (call) a method with an owner object as an argument (parameter). or
//Ak object dusre object ki method ko use kar sakta he with the help of Call() method.  

let info1 = {
    name :"Dhaval",
    city : "surat",
    bio : function (age){
        console.log(`my name is ${this.name}, i am from ${this.city}. my age is ${age}.`)
    }
}
info1.bio(21);

let info2 = {
    name :"Rahul",
    age : 24,
    city : "goa"
};

info1.bio.call(info2,21); //The call() method takes arguments separately.

//==================================================================================================
//2]apply() :
//The apply() method is similar to the call() method.
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

// let info1 = {
//     name :"Dhaval",
//     city : "surat",
//     bio : function (age){
//         console.log(`my self ${this.name}, i am from ${this.city}. my age is ${age}.`)
//     }
// }
// info1.bio(21);

// let info2 = {
//     name :"Rahul",
//     age : 24,
//     city : "goa"
// };

// info1.bio.apply(info2,[21]); //The apply() method takes arguments as an array.

//==================================================================================================
//bind() :
//With the bind() method, an object can borrow a method from another object.
// 
{
let info1 = {
    name :"Dhaval",
    city : "surat"
}
let info2 = {
    name :"Raj",
    city : "Ahmd"
}
let info3 = {
    name :"Dev",
    city : "Rajkot"
}


function bio(age){
    console.log(`my self ${this.name}, i am from ${this.city}. my age is ${age}.`)
}
let info = bio.bind(info2);
info(21)

//=======================================================================================================



