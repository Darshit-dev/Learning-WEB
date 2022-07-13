// function Person(first,last,a) {
//     this.firstName = first
//     this.Lastname = last
//     this.age=a
//     this.changeAge = function(newAge){
//         this.age =newAge
//         return this.age
//     }
// }

//let person1 = new Person("darshit",'kheni',21)
// console.log(person1)
// console.log(person1.changeAge(23))
// console.log(person1)

//prototype and inheritance

// let person2 = {}
// console.log(person2);
//? jab bhi hum obj craete karte he ,proto uske sath attach ho hi jata he

// //!after ES6
// class Person {
//   constructor(n, a) {
//     this.name = n
//     this.age = a
//   }

//   sayHi() {//it  will autometically  store into proto
//     console.log("hi");
//   }

//   static hello() {  //it will not go to proto , bcz wo object ko nai milta he
//     //direct class ko assign hota he
//     console.log("hello");
//   }
// }

// let person1 = new Person('darshit', 21);
// console.log(person1);
// Person.hello()  //static method can only be call by classname

//!empoyee  -- private and public concept
//by using # we can assign private 
// class emp {
//   #name = ''
//   constructor(n) {
//     this.#name = n
//   }

//   getName() {
//     console.log(this.#name);
//   }
// }

// let Emp1  = new emp("Darshit")
// console.log(Emp1.getName());

//!MIXING
let usefulMethd = {
  sayHi(){
    console.log("Hi...");
  },
  sayBye(){
    console.log("Bye...");
  }
}

class user{
  constructor(){
    this.name = "darshit"
  }
}

//how to add obj in the user class
Object.assign(user.prototype,usefulMethd)

let user1 = new user()
console.log(user1.sayHi()) 
console.log(usefulMethd);