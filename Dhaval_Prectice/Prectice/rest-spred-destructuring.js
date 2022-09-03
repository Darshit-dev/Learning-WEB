//1]Rest operator  [ES6 Fetures]
//-values converted in to array



// function value(...a){
//      console.log(a)
// }

// value(1,2,3,4)


//======================================================================================
//2]Spred operator         [ES6 Fetures]
//-copy or merge one array into other


//-copy
// let arr1 = [4,5,6]
// let arr2 = [1,2,3, ...arr1]
// console.log(arr2)

//-copy
// let arr1 = [4,5,6]
// let arr2 = [...arr1]
// console.log(arr2)

//-merge
// let arr1 = [4,5,6]
// let arr2 = [1,2,3]
// let merge = [...arr2, ...arr1]
// console.log(merge)

//---------------------------------------------------
//Now Spred operator used in a object also   [ES6 Fetures]

let info1 = {
    name :"Dhaval",
    city : "surat"
}

let info2 = {...info1 , "email": "abc@gmail.com"}
console.log(info2)

//======================================================================================
//3]Destructuring 

//-array destructuring
// let number = [1,2,3,4,5];

// let [a,b,c] = number

// console.log(a,b,c)

//-object destructuring
// let info1 = {
//     fname :"Dhaval",
//     lname : "Umaretiya",
//     city : "surat"
// }

// let {fname,city} = info1
// console.log(fname,city)

