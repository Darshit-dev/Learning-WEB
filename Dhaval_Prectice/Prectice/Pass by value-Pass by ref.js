/*
Pass by value : Pass by value creates a new space in memory and makes copy of a value.(Number.string,boolean,null,undefined...)
Pass by reference : Pass by reference reference a value stored in memory.(Object,Array,LL..)
*/

//Ex[Pass by value]
let x = 10;

function print(x){  //Argument ia pssed into function --> passed by value
    x=20;
}
console.log(x)


//Ex[Pass by reference]

let obj = {name : "Dhaval"}
let res = obj
res.name = "Raj"
console.log(obj)
