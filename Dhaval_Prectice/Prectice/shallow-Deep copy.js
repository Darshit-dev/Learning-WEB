//problem : if try to copy obj, obj point a memory location(reference) thats why using shallow/deep copy.
//NOTE : simple copy of a object copy a memory location

// let obj = {
//     fname: "Nimesh",
//     lName: "patel",
//     age: 22
// }

// let user = obj;   //reference
// user.fname = "Rahul"
// user.pincode = 234567;    //add a new key:value pairs

// console.log(obj);        //original object
// console.log(user);       //copyied object


//==============================================================================
//1]Shallow copy : copy main object
//-In a shallow copy, copy a value not a memory location
//-shallow copy is not work for a nested object

//2 methods  :- Object.assign({}, obj_name)
//           :- Destructuring

// let obj = {
//     fname: "Nimesh",
//     lName: "patel",
//     age: 22
// }

// let user = {...obj}  //destructuring
// // let user1 = Object.assign({},obj)  //destructuring
// user.fname = "Rahul"

// console.log(obj);
// console.log(user);


//--------------------------------------------
//Problem occur in a Shallow copy...
// let obj = {
//     fname: "Nimesh",
//     lName: "patel",
//     age: 22,
//     add : {
//         city:"surat",
//         pincode:234567
//     }
// }

// let user = {...obj}  //destructuring
// user.fname = "Rahul"
// user.add.city ="Ahemd"   //if in a object use a nested object then not work a shellow copy, use a deep copy

// console.log(obj);
// console.log(user);

//==============================================================================
//1]Deep copy : copy main object as well as copy a nested object
//-In a deep copy, copy a value not a memory location

// let obj = {
//     fname: "Nimesh",
//     lName: "patel",
//     age: 22,
//     add : {
//         city:"surat",
//         pincode:234567
//     }
// }

// let user = JSON.parse(JSON.stringify(obj)); //JSON.parse() to convert text(string) into a JavaScript object
//             //JSON.stringify() method converts a JavaScript object or value to a JSON string
// user.fname = "Rahul"
// user.add.city = "Ahmd"
// user.add.date =23/4/22   


// console.log(obj); 
// console.log(user);

//Limitaion :
//-Deep copy is not a proper work for a Function and dates. this type of peoblem solve to use a Lodash NPM.


